

### Search params

* In a Server Component page, you can access search parameters using the `searchParams` prop
* Using `searchParams` opts your page into dynamic rendering to read the search parameters
* For client components, use `useSearchParams` hook.

```typescript
// app/page.tsx

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = (await searchParams).filters
}
```

### generateStaticParams

The generateStaticParams function can be used in combination with **dynamic route segments** to **statically generate routes** at **build time** instead of on-demand at request time.

It can be used with `page.tsx`, `layout.tsx`, `route.ts`

```typescript
// app/blog/[slug]/page.tsx

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}
```