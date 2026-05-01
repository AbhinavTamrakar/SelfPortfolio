"use client";
import { useState } from "react";
import { BookOpenCheck, FileDown, Layout, Hammer, Coffee } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiGithubactions, SiVercel } from 'react-icons/si';
import ResumeModal from "../components/ResumeModal";
import { Lora, Syne } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], weight: '400' });
const syne = Syne({ subsets: ['latin'], weight: '400' });

// Skill mapping with Icons
const skills = [
  { 
    category: "Frontend", 
    Icon: Layout,
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vue.js", Icon: SiVuedotjs },
    ] 
  },
  { 
    category: "Infra / Tools", 
    Icon: Hammer,
    items: [
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Vercel", Icon: SiVercel },
    ] 
  },
];

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Open source libs" },
  { value: "∞", label: "Coffees consumed", Icon: Coffee },
];

export default function About() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className={lora.className + " bg-green-700 text-yellow-500"}>

      {/* Full-width stat bar */}
      <div className={`${syne.className} grid grid-cols-1 md:grid-cols-3 border-b border-yellow-500/20`}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-[clamp(1rem,4vw,2.5rem)] pt-22 pb-[clamp(1.5rem,4vw,2.5rem)] border-b md:border-b-0 last:border-b-0 ${i !== stats.length - 1 ? "md:border-r border-yellow-500/20" : ""}`}
          >
            <div className="font-['DM_Serif_Display',serif] text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.2] tracking-[-0.03em]">
              {stat.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.12em] opacity-70 flex items-center gap-2">
              {stat.label}
              {stat.Icon && <stat.Icon size={14} className="text-yellow-500" />}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`${syne.className} grid grid-cols-1 md:grid-cols-2 gap-0`}>

        {/* Left column */}
        <div className={`${lora.className} border-b md:border-b-0 md:border-r border-yellow-500/20 px-[clamp(1rem,4vw,2.5rem)] py-[clamp(3rem,8vw,5rem)]`}>
          <p className="font-semibold font-['DM_Serif_Display',serif] italic mb-8 text-[15px] uppercase tracking-[0.16em] text-black">
            About Me
          </p>

          <h2 className="mb-10 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-gray-800 italic font-semibold">
            Developer with a
            <br />
            <em className="text-black font-sans not-italic">designer's eye.</em>
          </h2>

          <div className="border-l-2 border-black pl-5">
            <div className="flex flex-col gap-4 text-[clamp(12px,2vw,13px)] leading-[1.9] opacity-90">
              <p>I'm a front-end developer with hands-on experience building products from idea to production. I care deeply about code quality, performance, and the experience of the people using what I build.</p>
              <p>Now freelancing and building in public.</p>
              <p>When I'm not coding, I'm probably reading, playing chess, or hiking.</p>
            </div>
          </div>

          {/* Links */}
          <div className={`${lora.className} mt-12 flex flex-wrap gap-3`}>
            {[
              { label: "GitHub", href: "https://github.com/AbhinavTamrakar" },
              { label: "LinkedIn", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 border border-yellow-500/40 px-4 py-2 text-[11px] uppercase tracking-widest transition-all duration-200 hover:bg-yellow-500 hover:text-green-900"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 border border-black bg-black px-4 py-2 text-[11px] uppercase tracking-widest text-green-700 cursor-pointer transition-all duration-200 hover:bg-transparent hover:text-black"
            >
              <FileDown size={13} />
              Resume
            </button>
          </div>
        </div>

        {/* Right column — skills as indexed list with Icons */}
        <div className={`${syne.className} px-[clamp(1rem,4vw,2.5rem)] py-[clamp(3rem,8vw,5rem)]`}>
          <p className="mb-8 text-[11px] uppercase tracking-[0.16em] opacity-70">
            Skills
          </p>

          <div className="flex flex-col gap-10">
            {skills.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-4">
                   <p className="text-[11px] uppercase tracking-widest opacity-70">
                    — {group.category}
                  </p>
                  <group.Icon size={14} className="text-yellow-500" />
                </div>
                
                <div className="flex flex-col">
                  {group.items.map((skill, i) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between border-t border-yellow-500/20 py-4 last:border-b group hover:bg-yellow-500/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <skill.Icon className="text-lg transition-transform group-hover:scale-110" />
                        <span className="text-[clamp(12px,2vw,14px)] tracking-[-0.01em]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] tabular-nums opacity-50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </section>
  );
}