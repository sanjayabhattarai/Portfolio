"use client"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { profile } from "@/data"

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-[0.45] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[100px] pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--accent-light)] border border-[var(--accent)]/20 rounded-full text-xs text-[var(--accent-text)] font-medium mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Open to opportunities · {profile.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-[clamp(3.2rem,10vw,8rem)] leading-[0.88] tracking-tight mb-6"
        >
          <span className="text-[var(--fg)]">Sanjaya</span>
          <br />
          <span className="text-[var(--accent)]">Bhattarai</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-[var(--muted)] mb-3">
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-[var(--fg)] font-medium mb-10 max-w-md mx-auto"
        >
          I build software that real people use.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] bg-white text-[var(--fg)] rounded-lg font-medium hover:border-[var(--fg)] transition-colors shadow-sm"
          >
            Download CV
            <Download size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
