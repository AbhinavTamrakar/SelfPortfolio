'use client'
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'], weight: '400' });

const projects = [
  {
    number: "01",
    title: "Cafe Order and Expences Management System",
    tags: ["html", "css", "javascript"],
    description:
      "User-friendly interface for cafe staff to manage orders, track transactions, and analyze sales.",
    year: "2026",
    link: "https://cafechiyahub.vercel.app/",
  },
  {
    number: "02",
    title: "Digital Portfolio Website",
    tags: ["html", "css"],
    description:
      "Portfolio for a digital marketing agency showcasing their services and client testimonials with a sleek, modern design.",
    year: "2026",
    link: "https://astryxportfolio.vercel.app/",
  },
  {
    number: "03",
    title: "Family First Health Clinic Website",
    tags: ["html", "css", "javascript"],
    description:
      "A responsive website for a local health clinic providing information about services, appointments, and contact details.",
    year: "2025",
    link: "https://familyfirst-homecare.vercel.app/",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className={`scroll-mt-16 border-b px-5 pt-16 bg-cyan-300 text-gray-600 ${inter.className}`}
    >
      <div className="mb-[clamp(2rem,6vw,4rem)] flex flex-row items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <motion.span
            className="pt-15 text-[clamp(9px,2vw,11px)] tracking-[0.08em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.length} projects
          </motion.span>
          <motion.h2
            className="font-['Lora',serif] text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[-0.02em] leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected Work
          </motion.h2>
        </div>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-row grid grid-cols-[auto_1fr_auto] gap-[clamp(1rem,4vw,2rem)] border-t px-0 py-[clamp(1rem,4vw,2rem)] no-underline transition-all duration-200 hover:mx-[clamp(-0.5rem,-2vw,-1.5rem)] hover:bg-black/5 hover:px-[clamp(0.5rem,2vw,1.5rem)]"
      style={{ color: "inherit", cursor: "pointer" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ x: 4 }}
    >
      <span className="pt-[0.15rem] text-[clamp(9px,2vw,11px)]">
        {project.number}
      </span>
      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-[clamp(0.75rem,3vw,1.5rem)]">
          <h3 className="font-['Lora',serif] text-[clamp(1.2rem,3vw,1.4rem)] font-normal tracking-[-0.01em]">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border px-2 py-[0.15rem] text-[clamp(8px,1.5vw,10px)] tracking-[0.06em] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="m-0 max-w-140 text-[clamp(12px,2vw,13px)]">
          {project.description}
        </p>
      </div>
      <div className="text-right">
        <span className="text-[clamp(9px,2vw,11px)]">{project.year}</span>
        <motion.div
          className="mt-1 text-[clamp(1rem,2vw,1.2rem)]"
          whileHover={{ x: 3, y: -3 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          ↗
        </motion.div>
      </div>
    </motion.a>
  );
}