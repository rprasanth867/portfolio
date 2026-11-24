

### Fetching data in server components

* Using fetch API
* Using ORM or database

```typescript
// app/blog/page.tsx

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

```typescript
// app/blog/page.tsx

import { db, posts } from '@/lib/db'
 
export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

### Streaming while fetch data

To improve the initial load time and user experience, you can break the page into smaller chunks and progressively send those chunks from the server to the client

There are two ways you can use streaming in your application:

* Wrapping a page with a loading.js file
* Wrapping a component with `<Suspense>`


### Fetching data in client components

* Using use API
* Using community library like SWR or React Query

```typescript
// app/ui/posts.tsx

'use client'
import { use } from 'react'
 
export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string }[]>
}) {
  const allPosts = use(posts)
 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

```typescript
// app/blog/page.tsx

'use client'
import useSWR from 'swr'
 
const fetcher = (url) => fetch(url).then((r) => r.json())
 
export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
 
  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

### Sharing data with context and `React.cache`

* Share fetched data across both server and client components

```typescript
// app/lib/user.ts

import { cache } from 'react'
 
export const getUser = cache(async () => {
  const res = await fetch('https://api.example.com/user')
  return res.json()
})
```

```typescript
// app/user-provider.tsx

'use client'
 
import { createContext } from 'react'
 
type User = {
  id: string
  name: string
}
 
export const UserContext = createContext<Promise<User> | null>(null)
 
export default function UserProvider({
  children,
  userPromise,
}: {
  children: React.ReactNode
  userPromise: Promise<User>
}) {
  return <UserContext value={userPromise}>{children}</UserContext>
}
```

```typescript
// app/layout.tsx

import UserProvider from './user-provider'
import { getUser } from './lib/user'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userPromise = getUser()
  // Don't await
  // Let client component handle the promise by using use API
 
  return (
    <html>
      <body>
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  )
}
```


## Mutating Data




## Caching

Caching is a technique for storing the result of data fetching and other computations so that future requests for the same data can be served faster, without doing the work again.

**To enable**

```typescript
// next.config.ts

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
}
 
export default nextConfig
```

The `use cache` directive caches the return value of async functions and components. You can apply it at two levels:
* **Data-level:** Cache a function that fetches or computes data (e.g., `getProducts()`, `getUser(id)`)
* **UI-level:** Cache an entire component or page (e.g., `async function BlogPosts()`)


**Revalidate cache by using these methods:**
* cacheLife('hours')
* cacheTag('posts')
* revalidateTag('user', 'max')
* updateTag('posts')
* revalidatePath('/profile')

## Error Handling

Errors can be divided into two categories:

* **Handling expected errors:** Expected errors are those that can occur during the normal operation of the application, such as those from server-side form validation or failed requests. These errors should be handled explicitly and returned to the client.
* **Handling uncaught exceptions:** Uncaught exceptions are unexpected errors that indicate bugs or issues that should not occur during the normal flow of your application. These should be handled by throwing errors, which will then be caught by error boundaries.

