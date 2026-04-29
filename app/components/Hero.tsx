"use client";
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Image
        src="/images/Abhinav.jpg"
        alt="My photo"
        width={400}
        height={500}
        style={{ float: 'right', margin: '100px 50px 16px 16px' }}
      />
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 2.5rem 5rem",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Year label */}
        <div
          className="opacity-init animate-fade-in delay-1"
          style={{
            position: "absolute",
            top: "7rem",
            right: "2.5rem",
            fontSize: "11px",
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()}
        </div>

        {/* Status dot */}
        <div
          className="opacity-init animate-fade-in delay-2"
          style={{
            position: "absolute",
            top: "7.2rem",
            left: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "11px",
            color: "var(--muted)",
            letterSpacing: "0.06em",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          Available for work
        </div>

        <div style={{ position: "relative", maxWidth: 900 }}>
          <p
            className="opacity-init animate-fade-up delay-2"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Frontend Developer
          </p>

          <h1
            className="opacity-init animate-fade-up delay-3"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              margin: "0 0 2rem",
            }}
          >
            Building things
            <br />
            for the <em style={{ fontStyle: "italic", color: "var(--muted)" }}>web.</em>
          </h1>

          <p
            className="opacity-init animate-fade-up delay-4"
            style={{
              maxWidth: 420,
              color: "var(--muted)",
              fontSize: "13px",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            I design and build clean, performant digital experiences. Focused on
            frontend development with a sharp eye for detail and user experience.
          </p>

          <div className="opacity-init animate-fade-up delay-5" style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#work"
              style={{
                padding: "0.75rem 1.75rem",
                background: "var(--fg)",
                color: "var(--bg)",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              View Work
            </a>
            <a
              href="#contact"
              style={{
                padding: "0.75rem 1.75rem",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              Get in Touch
            </a>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </section>
    </>
  );
}
