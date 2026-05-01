'use client'
import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from './components/Hero'
import { MessageCircle } from 'lucide-react'
import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'], weight: '400' });

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HomePage() {
  return (
    <main className="bg-blue-400">
      <HeroSlider />

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 h-72 md:w-80 md:h-96 lg:w-96 lg:h-125 overflow-hidden shadow-2xl">
              <Image
                src="/images/Abhinav.jpg"
                alt="Abhinav Tamrakar"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <div className="flex flex-col items-start gap-4">
            <motion.p
              className="text-[17px] font-bold italic tracking-widest text-gray-800 uppercase"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              className={`text-cyan-800 text-[20px] text-base md:text-lg max-w-md ${lora.className}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              I design and build clean, performant digital experiences.
              Focused on frontend development with a sharp eye for detail.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/work"
                className="inline-flex items-center bg-black text-white px-7 py-3 text-xs font-semibold tracking-widest hover:bg-gray-800 transition"
              >
                VIEW WORK
              </Link>
              <a
                href="https://wa.me/9779840356245"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-black border border-black px-7 py-3 text-xs font-semibold tracking-widest hover:bg-green-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  )
}