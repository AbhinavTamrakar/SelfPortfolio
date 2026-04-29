"use client";
import { useState, useEffect } from "react";

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.057 23.428a.75.75 0 00.916.916l5.569-1.476A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-5.004-1.383l-.36-.214-3.733.989.989-3.733-.214-.36A9.726 9.726 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const phoneNumber = "9779840356245"; 
  const message = "Hi Abhinav! I saw your portfolio and would like to get in touch.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.25rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background 0.3s, border-bottom 0.3s",
        background: scrolled ? "rgba(247,245,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
        Abhinav Tamrakar
      </span>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.target as HTMLElement).style.color = "var(--fg)")}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {item}
          </a>
        ))}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#25D366",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "12px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 500,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.currentTarget as HTMLElement).style.background = "#20ba5a")}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.currentTarget as HTMLElement).style.background = "#25D366")}
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
      </div>
    </nav>
  );
}