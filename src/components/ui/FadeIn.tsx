"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const offset = { up: { y: 28 }, down: { y: -28 }, left: { x: 28 }, right: { x: -28 }, none: {} }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
