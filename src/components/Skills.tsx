import { skills } from "@/data"
import FadeIn from "./ui/FadeIn"

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold mb-4">
            Skills
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--fg)] mb-16">
            What I work with
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.05}>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--muted)] mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 bg-white border border-[var(--border)] text-[var(--fg)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
