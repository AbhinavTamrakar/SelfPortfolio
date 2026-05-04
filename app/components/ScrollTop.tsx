"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Rocket } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClicked(false), 1000);
  };

 return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50
            w-14 h-14 rounded-full
            bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500
            text-white
            shadow-[0_0_20px_rgba(168,85,247,0.6)]
            hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]
            hover:scale-110
            active:scale-95
            transition-all duration-300 ease-in-out
            flex items-center justify-center
            ${clicked ? "animate-bounce" : ""}
          `}
          aria-label="Scroll to top"
        >
          {clicked ? (
            <Rocket className="w-6 h-6 -rotate-45" />
          ) : (
            <ArrowUp className="w-6 h-6" />
          )}
        </button>
      )}
    </>
  );
}