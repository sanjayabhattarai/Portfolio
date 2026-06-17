"use client"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 100)
    setAtTop(latest < 30)
  })

  return (
    <motion.nav
      variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        atTop
          ? "bg-transparent"
          : "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
          SB
        </a>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors hidden sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-[var(--fg)] text-[var(--bg)] rounded-sm hover:bg-[var(--accent)] transition-colors font-medium"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
