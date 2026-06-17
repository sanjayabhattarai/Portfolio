import { projects } from "@/data"
import ProjectCard from "./ProjectCard"
import FadeIn from "./ui/FadeIn"

export default function Projects() {
  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold mb-4">
            Projects
          </p>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--fg)]">
              Things I&apos;ve built
            </h2>
            <p className="hidden sm:block text-sm text-[var(--muted)]">
              {projects.length} projects
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mb-6">
            <ProjectCard project={featured} featured />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <FadeIn key={project.id} delay={0.08 + i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
