import { client, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Syne, Lora } from 'next/font/google'
import { notFound } from 'next/navigation'

const syne = Syne({ subsets: ['latin'], weight: '400' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      body,
      coverImage,
      publishedAt,
      excerpt
    }`,
    { slug }
  )
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) notFound()

  return (
    <main className={`${syne.className} min-h-screen bg-black text-white px-6 md:px-16 py-20`}>
      <div className="max-w-2xl mx-auto">

        {/* Meta */}
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-4">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })
            : 'Draft'}
        </p>

        {/* Title */}
        <h1 className={`${lora.className} text-[clamp(2rem,6vw,3rem)] leading-tight italic mb-6 text-white`}>
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-gray-400 text-[15px] leading-relaxed mb-10 border-l-2 border-gray-700 pl-4">
            {post.excerpt}
          </p>
        )}

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative w-full h-64 md:h-96 mb-12 overflow-hidden">
            <Image
              src={urlFor(post.coverImage).width(800).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className={`${lora.className} prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed`}>
          {post.body && <PortableText value={post.body} />}
        </div>

        {/* Back link */}
        <a
          href="/blog"
          className="inline-block mt-16 text-[11px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
        >
          ← Back to Blog
        </a>
      </div>
    </main>
  )
}