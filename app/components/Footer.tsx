"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "11px",
        color: "var(--muted)",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem" }}>
        Abhinav Tamrakar
      </span>
      <span>Built with Next.js — {new Date().getFullYear()}</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["GitHub", "LinkedIn", "Twitter"].map((s) => (
          <a
            key={s}
            href="#"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "10px",
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}
