'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { MessageCircle } from 'lucide-react'
import { Lora, Syne } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const lora = Lora({ subsets: ['latin'], weight: '400' });
const syne = Syne({ subsets: ['latin'], weight: '400' });

const slides = [
  {
    id: 1,
    title: "Building things for the web.",
    subtitle: "Frontend Developer",
    description: "I design and build clean, performant digital experiences.",
    image: "/images/Abhinav.jpg",
  },
  {
    id: 2,
    title: "Clean Code. Great Design.",
    subtitle: "Available for work",
    description: "Focused on frontend development with a sharp eye for detail.",
    image: "/images/f1.jpg",
  },
  {
    id: 3,
    title: "Let's build something together.",
    subtitle: "Open to freelance",
    description: "Don't hesitate to reach out — I reply to every message.",
    image: "/images/Manu.jpg",
  },
]

const textVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Text content */}
              <div className={`${syne.className} absolute inset-0 flex flex-col justify-center px-6 py-40 md:px-24 text-white`}>
                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <>
                      <motion.p
                        key={`sub-${slide.id}`}
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-[17px] font-extrabold italic tracking-[0.15em] uppercase text-red-500 mb-4"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.h1
                        key={`title-${slide.id}`}
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`${lora.className} text-cyan-500 text-5xl md:text-6xl lg:text-7xl italic leading-tight max-w-2xl mb-6`}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        key={`desc-${slide.id}`}
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-[16px] font-bold md:text-lg text-orange-400 max-w-xl mb-10"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        key={`btns-${slide.id}`}
                        custom={3}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-wrap gap-4"
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
                          className="inline-flex items-center border border-white text-white px-7 py-3 text-xs font-semibold tracking-widest hover:bg-white/10 transition gap-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          GET IN TOUCH
                        </a>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}