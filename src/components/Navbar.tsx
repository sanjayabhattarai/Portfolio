"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="block w-9 h-9 rounded-full overflow-hidden border-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/projects/erasmus-portugal.png"
            alt="Sanjaya Bhattarai"
            className="w-full h-full object-cover"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                active === link.href.replace("#", "")
                  ? "text-[var(--accent)] font-medium"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-dark)] transition-colors font-medium"
          >
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-[var(--fg)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2.5 bg-[var(--accent)] text-white rounded-lg text-center font-medium"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
