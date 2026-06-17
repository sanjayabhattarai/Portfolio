"use client"
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import type { Project } from "@/data"

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ProjectPlaceholder({ gradient, title, featured }: { gradient: string; title: string; featured?: boolean }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-current opacity-30" />
        <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border border-current opacity-20" />
      </div>
      <span className={`font-serif font-bold text-[var(--fg)] opacity-10 select-none ${featured ? "text-[10rem]" : "text-[6rem]"}`}>
        {title[0]}
      </span>
    </div>
  )
}

function ProjectImage({ src, alt, gradient, title, featured, contain }: {
  src: string; alt: string; gradient: string; title: string; featured?: boolean; contain?: boolean
}) {
  const [error, setError] = useState(false)

  if (error) {
    return <ProjectPlaceholder gradient={gradient} title={title} featured={featured} />
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
        contain ? "object-contain p-2" : "object-cover group-hover:scale-105"
      }`}
      onError={() => setError(true)}
    />
  )
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <div className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)]/40 hover:shadow-xl transition-all duration-500 shadow-sm">
        <div className="relative overflow-hidden h-96">
          <ProjectPlaceholder gradient={project.gradient} title={project.title} featured />
          <ProjectImage
            src={project.image}
            alt={project.title}
            gradient={project.gradient}
            title={project.title}
            featured
            contain
          />
          <div className="absolute top-5 left-5 flex gap-2 flex-wrap z-10">
            {project.badge && (
              <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs font-semibold rounded-lg shadow-sm">
                {project.badge}
              </span>
            )}
            {project.isLive && (
              <span className="px-3 py-1 bg-white text-[var(--accent-text)] text-xs font-semibold rounded-lg border border-[var(--accent)]/20 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Live
              </span>
            )}
          </div>
        </div>

        <div className="p-7 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--fg)]">{project.title}</h3>
            <div className="flex gap-2 shrink-0 pt-1">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors"
                  aria-label="GitHub">
                  <GithubIcon size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label="View live">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
          <p className="text-[var(--muted)] leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs bg-[var(--bg-secondary)] text-[var(--muted)] rounded-lg border border-[var(--border)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-sm">
      <div className="relative overflow-hidden h-44">
        <ProjectPlaceholder gradient={project.gradient} title={project.title} />
        <ProjectImage
          src={project.image}
          alt={project.title}
          gradient={project.gradient}
          title={project.title}
        />
        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {project.isLive && (
            <span className="px-2 py-0.5 bg-[var(--accent-light)] text-[var(--accent-text)] text-xs font-medium rounded-lg border border-[var(--accent)]/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Live
            </span>
          )}
          {project.badge && (
            <span className="px-2 py-0.5 bg-white text-[var(--muted)] text-xs font-medium rounded-lg border border-[var(--border)]">
              {project.badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-xl text-[var(--fg)] leading-tight">{project.title}</h3>
          <div className="flex gap-1 shrink-0 pt-0.5">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="p-1.5 text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                aria-label="GitHub">
                <GithubIcon size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="p-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="View live">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[11px] bg-[var(--bg-secondary)] text-[var(--muted)] rounded border border-[var(--border)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
