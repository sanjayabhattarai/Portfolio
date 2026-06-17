import { ExternalLink } from "lucide-react"
import { stats, profile } from "@/data"
import FadeIn from "./ui/FadeIn"

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--fg)] mb-16">
            Hi, I&apos;m Sanjaya.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <FadeIn delay={0.08}>
              <p className="text-[var(--muted)] leading-[1.8] mb-5">
                Full-stack developer based in Helsinki, Finland. Graduated with a B.Eng. in
                Information Technology from Oulu University of Applied Sciences (May 2026, GPA{" "}
                <span className="text-[var(--fg)] font-medium">4.5/5.0</span>, thesis{" "}
                <span className="text-[var(--fg)] font-medium">5/5</span>). I build across the full
                stack: web, mobile, and desktop apps.
              </p>
            </FadeIn>
            <FadeIn delay={0.13}>
              <p className="text-[var(--muted)] leading-[1.8] mb-5">
                While finishing university I co-founded{" "}
                <a
                  href={profile.trinova}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline font-medium"
                >
                  Trinova Technology
                </a>
                , a software and IT solutions company. I handle tech direction, client work, and the
                business side simultaneously.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-[var(--muted)] leading-[1.8] mb-8">
                Outside of code, I do stand-up comedy. Reached{" "}
                <span className="text-[var(--fg)] font-medium">Top 24 out of 8,000</span> on Comedy
                Champion Nepal. Debugging and punchline timing have more in common than you'd think.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors border-b border-transparent hover:border-[var(--fg)] pb-0.5"
                >
                  GitHub <ExternalLink size={12} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors border-b border-transparent hover:border-[var(--fg)] pb-0.5"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
                <a
                  href={profile.trinova}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-0.5 font-medium"
                >
                  trinovatech.fi <ExternalLink size={12} />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.1 + i * 0.07}>
                <div className="bg-white border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                  <p className="font-serif text-[2.4rem] leading-none text-[var(--fg)] mb-2">
                    {s.value}
                  </p>
                  <p className="text-xs text-[var(--muted)] leading-snug">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
