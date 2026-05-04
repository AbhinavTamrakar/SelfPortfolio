import Link from 'next/link'
import { client, urlFor } from '../../lib/sanity'
import { Syne, Lora } from 'next/font/google'
import Image from 'next/image'

const syne = Syne({ subsets: ['latin'], weight: '400' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt
    }`
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className={`${syne.className} min-h-screen bg-black text-white px-6 md:px-16 py-20`}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-4">Blog</p>
        <h1 className={`${lora.className} text-[clamp(2rem,6vw,3.5rem)] leading-tight italic mb-12 text-white`}>
          Thoughts & Writing.
        </h1>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-gray-500 text-sm">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col divide-y divide-gray-800">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 py-10 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] uppercase tracking-widest text-gray-500">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'long', day: 'numeric',
                        })
                      : 'Draft'}
                  </p>
                  <h2 className={`${lora.className} text-[clamp(1.2rem,3vw,1.6rem)] font-normal italic leading-snug group-hover:text-gray-300 transition-colors`}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="text-[11px] uppercase tracking-widest text-gray-500 mt-2 group-hover:text-white transition-colors">
                    Read more ↗
                  </span>
                </div>

                {post.coverImage && (
                  <div className="relative w-full md:w-48 h-36 overflow-hidden shrink-0">
                    <Image
                      src={urlFor(post.coverImage).width(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}