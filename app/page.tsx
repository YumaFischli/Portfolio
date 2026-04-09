const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "SQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code"] },
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
      {/* ── Navbar ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight">
            Your Name
          </a>
          <ul className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* ── Hero ── */}
        <section
          id="hero"
          className="flex min-h-screen flex-col items-start justify-center pt-20"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-500">
            Hello, world! I&apos;m
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your Name
          </h1>
          <p className="mt-4 text-2xl font-medium text-zinc-500 dark:text-zinc-400 sm:text-3xl">
            Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I build fast, accessible, and beautiful web applications. Passionate
            about great developer experience and clean code.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-24">
          <SectionHeading label="About" title="Who I am" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m a developer based in [Your City], focused on creating
              thoughtful digital experiences. I love turning complex problems
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              When I&apos;m not coding, you can find me [your hobby], [your
              other hobby], or exploring new technologies. I&apos;m always open
              to new opportunities and collaborations.
            </p>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-24">
          <SectionHeading label="Skills" title="What I work with" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SKILLS.map(({ category, items }) => (
              <div
                key={category}
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-500">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-24">
          <SectionHeading label="Projects" title="Things I've built" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-md dark:border-zinc-800"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm font-medium">
                  <a
                    href={project.github}
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Live →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24">
          <SectionHeading label="Contact" title="Let's work together" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to say hi — my inbox is always open.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Say Hello
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-10 border-t border-zinc-200 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800">
        © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.
      </footer>
    </>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">
        {label}
      </p>
      <h2 className="mt-1 text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
