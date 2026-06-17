import { experience } from "@/data"
import FadeIn from "./ui/FadeIn"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold mb-4">
            Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--fg)] mb-16">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

          <div className="flex flex-col gap-0">
            {experience.map((entry, i) => (
              <FadeIn key={entry.id} delay={i * 0.08}>
                <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 pb-12 last:pb-0 group">

                  {/* Date column */}
                  <div className="md:w-[200px] md:pr-8 shrink-0 md:text-right">
                    <span className="text-xs text-[var(--muted)] font-medium">{entry.date}</span>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-[200px] -translate-x-1/2 top-0 z-10">
                    <span
                      className={`w-3 h-3 rounded-full border-2 border-[var(--bg)] ring-2 transition-colors ${
                        entry.current
                          ? "bg-[var(--accent)] ring-[var(--accent)]"
                          : "bg-[var(--border)] ring-[var(--border)] group-hover:bg-[var(--accent)] group-hover:ring-[var(--accent)]"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:pl-10 flex-1">
                    <div
                      className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                        entry.current
                          ? "border-[var(--accent)]/30"
                          : "border-[var(--border)] hover:border-[var(--accent)]/30"
                      }`}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-[var(--fg)] text-base">{entry.title}</h3>
                          {entry.subtitle && (
                            <span className="text-xs px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--muted)] rounded-lg">
                              {entry.subtitle}
                            </span>
                          )}
                          {entry.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 bg-[var(--accent-light)] border border-[var(--accent)]/20 text-[var(--accent-text)] rounded-lg font-medium">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                              </span>
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap mb-4">
                        {entry.url ? (
                          <a
                            href={`https://${entry.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--accent)] hover:underline font-medium"
                          >
                            {entry.company}
                          </a>
                        ) : (
                          <span className="text-sm text-[var(--muted)] font-medium">{entry.company}</span>
                        )}
                        <span className="text-[var(--border)]">·</span>
                        <span className="text-sm text-[var(--muted)]">{entry.location}</span>
                        <span className="md:hidden text-xs text-[var(--muted)] ml-auto">{entry.date}</span>
                      </div>

                      <ul className="space-y-2">
                        {entry.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-2.5 text-sm text-[var(--muted)] leading-relaxed">
                            <span className="text-[var(--accent)] mt-1.5 shrink-0 text-[8px]">●</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
