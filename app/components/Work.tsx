"use client";
const projects = [
  {
    number: "01",
    title: "Cafe Order and Expences Management System",
    tags: ["html", "css", "javascript"],
    description:
      "User-friendly interface for cafe staff to manage orders, track transcations, and analyze sales.",
    year: "2026",
    link: "https://cafechiyahub.vercel.app/",
  },
  {
    number: "02",
    title: "Digital Portfolio Website",
    tags: ["html", "css"],
    description:
      "Portfolio for a digitial marketing agency showcasing their services and client testimonials with a sleek, modern design.",
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
    link: "https://familyfirsthealthclinic.vercel.app/",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "7rem 2.5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Selected Work
        </h2>
        <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {projects.length} projects
        </span>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: typeof projects[0] }) {
  return (
    <a
      href={project.link}
      style={{
        display: "grid",
        gridTemplateColumns: "3rem 1fr auto",
        gap: "2rem",
        alignItems: "start",
        padding: "2rem 0",
        borderTop: "1px solid var(--border)",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.015)";
        (e.currentTarget as HTMLElement).style.margin = "0 -1.5rem";
        (e.currentTarget as HTMLElement).style.padding = "2rem 1.5rem";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.margin = "0";
        (e.currentTarget as HTMLElement).style.padding = "2rem 0";
      }}
    >
      <span style={{ fontSize: "11px", color: "var(--muted)", paddingTop: "0.15rem" }}>
        {project.number}
      </span>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "0.5rem" }}>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  padding: "0.15rem 0.5rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "13px", maxWidth: 560, margin: 0 }}>
          {project.description}
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <span style={{ fontSize: "11px", color: "var(--muted)" }}>{project.year}</span>
        <div style={{ fontSize: "1.2rem", color: "var(--muted)", marginTop: "0.25rem" }}>↗</div>
      </div>
    </a>
  );
}
