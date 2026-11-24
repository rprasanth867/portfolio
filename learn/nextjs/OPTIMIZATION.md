
## Image Optimization

The Next.js `<Image>` component extends the HTML `<img>` element to provide:

* **Size optimization:** Automatically serving correctly sized images for each device, using modern image formats like WebP.
* **Visual stability:** Preventing layout shift automatically when images are loading.
* **Faster page loads:** Only loading images when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
* **Asset flexibility:** Resizing images on-demand, even images stored on remote servers.

```typescript
// app/page.tsx

import Image from 'next/image'
import ProfileImage from './profile.png'
 
export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
```


## Font Optimization

The `next/font` module automatically optimizes your fonts and removes external network requests for improved privacy and performance.

It includes built-in self-hosting for any font file. This means you can optimally load web fonts with no layout shift.

```typescript
// app/layout.tsx

import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
```

## SEO Optimization

The Metadata APIs can be used to define your application metadata for improved **SEO** and web shareability and include:

* The static metadata object
* The dynamic generateMetadata function
* Special file conventions that can be used to add static or dynamically generated favicons and OG images.

```typescript
// static metadata
// app/blog/layout.tsx

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Blog',
  description: '...',
}
 
export default function Layout() {}
```

```typescript
// dynamic metadata
// app/blog/[slug]/page.tsx

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  // fetch post information
  const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    res.json()
  )
 
  return {
    title: post.title,
    description: post.description,
  }
}
 
export default function Page({ params, searchParams }: Props) {}
```
