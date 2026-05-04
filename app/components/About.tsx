"use client";
const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Infra / Tools", items: ["GitHub Actions", "Vercel"] },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 2.5rem",
        borderBottom: "1px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
      }}
    >
      <div>
        <p style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          About
        </p>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
        >
          Developer with a
          <br />
          <em style={{ fontStyle: "italic", color: "var(--muted)" }}>designer's eye.</em>
        </h2>
        <div style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>
            I'm a front-end developer with hands-onexperience building products from idea to production.
            I care deeply about code quality, performance, and the experience of the people using what I build.
          </p>
          <p>
            Now freelancing and building in public. 
          </p>
          <p>
            When I'm not coding, I'm probably reading about playing chess, or hiking.
          </p>
        </div>

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/AbhinavTamrakar" },
            { label: "LinkedIn", href: "#" },
            { label: "Resume ↓", href: "https://drive.google.com/file/d/1KLfPP5GbhG2jB8RLZ3zffWLCMBpOxNUl/view?usp=drivesdk" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--fg)",
                textDecoration: "none",
                borderBottom: "1px solid var(--fg)",
                paddingBottom: "2px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Skills
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {skills.map((group) => (
            <div key={group.category}>
              <p style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "12px",
                      padding: "0.3rem 0.75rem",
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      color: "var(--fg)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { value: "10+", label: "Projects shipped" },
              { value: "3", label: "Open source libs" },
              { value: "∞", label: "Coffees ☕" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
