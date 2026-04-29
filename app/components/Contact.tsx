"use client";
import { useState } from "react";


export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("turke.abhinav@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2.5rem 5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
        Contact
      </p>

      <div style={{ maxWidth: 700 }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}
        >
          Let's build something
          <br />
          <em style={{ fontStyle: "italic", color: "var(--muted)" }}>together.</em>
        </h2>

        <p style={{ color: "var(--muted)", fontSize: "13px", maxWidth: 480, marginBottom: "3rem" }}>
          I'm open to freelance projects, full-time roles, and interesting collaborations.
          Don't hesitate to reach out — I reply to every message.
        </p>

        <button
          onClick={copyEmail}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 2rem",
            background: "var(--fg)",
            color: "var(--bg)",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            letterSpacing: "0.02em",
            fontFamily: "'DM Mono', monospace",
            fontWeight: 300,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <span>{copied ? "Copied!" : "turke.abhinav@gmail.com"}</span>
          <span style={{ opacity: 0.5, fontSize: "11px" }}>{copied ? "✓" : "copy"}</span>
        </button>
      </div>
    </section>
  );
}
