import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",  items: ["Node.js", "Python", "REST APIs", "SQL"] },
  { category: "Tools",    items: ["Git", "GitHub", "Vercel", "VS Code"] },
];

const PROJECTS = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Python", "REST API", "Docker"],
    github: "#",
    live: "#",
  },
];

export default function Home() {
  return (
    <>
      {/* Fixed background layers */}
      <div className="fixed inset-0 z-0 bg-black" />
      <div className="dot-grid fixed inset-0 z-0" />
      <ParticleCanvas />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-8">

        {/* ── Hero ── */}
        <section id="hero" className="flex min-h-screen flex-col justify-center pt-24">
          <p
            className="fade-up mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400"
            style={{ animationDelay: "0s" }}
          >
            Available for work
          </p>

          <h1
            className="fade-up gradient-text text-6xl font-bold tracking-tight sm:text-8xl"
            style={{ animationDelay: "0.1s" }}
          >
            Yuma Fischli
          </h1>

          <p
            className="fade-up mt-4 text-2xl font-light text-zinc-400 sm:text-3xl"
            style={{ animationDelay: "0.2s" }}
          >
            Full-Stack Developer
          </p>

          <p
            className="fade-up mt-6 max-w-lg text-base leading-relaxed text-zinc-500"
            style={{ animationDelay: "0.3s" }}
          >
            I craft fast, accessible, and beautiful web applications — focused on
            clean architecture and exceptional user experience.
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="btn-glow rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="fade-up mt-20 flex flex-col items-start gap-1.5"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-700">
              Scroll
            </span>
            <div className="scroll-line h-10 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-32">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Who I am
          </h2>
          <div className="mt-10 grid gap-8 border-t border-white/5 pt-10 md:grid-cols-2">
            <p className="text-base leading-relaxed text-zinc-400">
              I&apos;m a developer based in [Your City], focused on creating
              thoughtful digital experiences. I love turning complex problems
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              When I&apos;m not coding, you can find me [your hobby],
              [your other hobby], or exploring new technologies. I&apos;m
              always open to new opportunities and collaborations.
            </p>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-32">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            What I work with
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {SKILLS.map(({ category, items }) => (
              <div
                key={category}
                className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="h-px w-5 shrink-0 bg-cyan-400/40" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-32">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Things I&apos;ve built
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="card-hover flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-5 text-xs font-medium">
                  <a
                    href={project.github}
                    className="text-zinc-600 transition-colors hover:text-white"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.live}
                    className="text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    Live ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-32">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to say hi — my inbox is always open.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:yfischli@ethz.ch"
              className="btn-glow rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-300"
            >
              Say Hello ↗
            </a>
            <a
              href="https://github.com/YumaFischli"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yuma-fischli-a1b247268/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-700">
        © {new Date().getFullYear()} Yuma Fischli — Built with Next.js &amp; Tailwind CSS
      </footer>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
      {children}
    </p>
  );
}
