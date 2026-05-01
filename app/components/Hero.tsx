'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { MessageCircle } from 'lucide-react'
import { Lora, Syne, Gaegu } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], weight: '400' });
const syne = Syne({ subsets: ['latin'], weight: '400' });
const gaegu = Gaegu({ subsets: ['latin'], weight: '400' });

const slides = [
  {
    id: 1,
    title: "Building things for the web.",
    subtitle: "Frontend Developer",
    description: "I design and build clean, performant digital experiences.",
    image: "./images/Abhinav.jpg",
  },
  {
    id: 2,
    title: "Clean Code. Great Design.",
    subtitle: "Available for work",
    description: "Focused on frontend development with a sharp eye for detail.",
    image: "./images/f1.jpg",
  },
  {
    id: 3,
    title: "Let's build something together.",
    subtitle: "Open to freelance",
    description: "Don't hesitate to reach out — I reply to every message.",
    image: "./images/Manu.jpg",
  },
]

export default function HeroSlider() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Text content */}
              <div className= "font-extrabold italic absolute inset-0 flex flex-col justify-center px-6 py-40 md:px-24 text-white">
                <p className="text-[17px] tracking-[0.15em] uppercase text-red-500 mb-4">
                  {slide.subtitle}
                </p>

                <h1 className="font-stretch-condensed text-cyan-500 text-7xl italic md:text-6xl lg:text-7xl leading-tight max-w-2xl mb-6">
                  {slide.title}
                </h1>

                <p className="text-[16px] font-bold md:text-lg text-orange-400 max-w-xl mb-10">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/work"
                    className="inline-flex items-center bg-black text-white px-7 py-3 text-xs font-semibold tracking-widest hover:bg-gray-800 transition"
                  >
                    VIEW WORK
                  </a>
                  <a
                    href="https://wa.me/9779840356245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-white text-white px-7 py-3 text-xs font-semibold tracking-widest hover:bg-white/10 transition"
                  >
                    <MessageCircle className="w-6 h-6" /> 
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}