import { profile } from "@/data"

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="font-serif text-[var(--muted)]">{profile.name}</span>
        <span className="text-xs text-[var(--muted)]">
          Helsinki, Finland · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
