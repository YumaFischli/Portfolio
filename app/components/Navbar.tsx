"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ transition: "background 0.3s, border-color 0.3s" }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <a
          href="#hero"
          className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400"
        >
          YF.dev
        </a>
        <ul className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="group relative text-sm font-medium text-zinc-500 transition-colors hover:text-white"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
