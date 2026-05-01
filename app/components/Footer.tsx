"use client";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-6 md:px-10 py-6 text-[11px] tracking-wide text-gray-500 bg-black">

      <span className="font-serif text-base">
        Abhinav Tamrakar
      </span>

      <span className="order-3 w-full text-center md:order-2 md:w-auto md:text-left">
        Built with Next.js — {new Date().getFullYear()}
      </span>

      <div className="flex gap-4 order-4 md:order-3">
        {["GitHub", "LinkedIn", "Twitter"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-blue-500 hover:text-shadow-green-600 uppercase text-[10px] tracking-widest transition-colors duration-200"
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}