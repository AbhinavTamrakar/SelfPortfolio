import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from './components/Hero'
import { MessageCircle } from 'lucide-react' 
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], weight: '400' }); 

export default function HomePage() {
  return (
    <main className="bg-blue-400">
      <HeroSlider />
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-72 md:w-80 md:h-96 lg:w-96 lg:h-125">
              <Image
                src="/images/Abhinav.jpg"
                alt="Abhinav Tamrakar"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-[17px] font-bold italic tracking-widest text-gray-800 uppercase">
              Frontend Developer
            </p>
            <p className={`text-cyan-800 text-[20px] text-align text-base md:text-lg max-w-md ${lora.className}`}>
              I design and build clean, performant digital experiences.
              Focused on frontend development with a sharp eye for detail.
            </p>
            <div className="flex gap-4 mt-4">
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
                className="inline-flex items-center bg-green-500 text-black border border-black px-7 py-3 text-xs font-semibold tracking-widest hover:bg-green-600 transition"
              >
                <MessageCircle className="w-6 h-6" />
                GET IN TOUCH
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}