export const profile = {
  name: "Sanjaya Bhattarai",
  role: "Full-Stack Developer",
  location: "Helsinki, Finland",
  email: "sanjaybhattarai362@gmail.com",
  phone: "+358 407 017 910",
  github: "https://github.com/sanjayabhattarai",
  linkedin: "https://www.linkedin.com/in/sanjaya-bhattarai-a6a69818b/",
  trinova: "https://trinovatech.fi",
  cv: "/Sanjay_Bhattarai_cv.pdf",
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  badge?: string
  isLive: boolean
  liveUrl?: string
  githubUrl?: string
  image: string
  gradient: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "namaste-desk",
    title: "Namaste Desk",
    description:
      "Hotel front-desk management desktop app, built from scratch. Handles check-ins, checkouts, billing, and room management. Offline-first: all guest data lives in local SQLite so staff keep working without internet. Used daily by 7 hotels.",
    tech: ["Electron", "Next.js", "Prisma", "SQLite", "Supabase"],
    badge: "Flagship · 7 Hotels",
    isLive: false,
    image: "/images/projects/namaste-desk.png",
    gradient: "from-amber-100 via-orange-50 to-amber-50",
    featured: true,
  },
  {
    id: "khelset",
    title: "Khelset",
    description:
      "Sports management and live scoring platform. Admin panel in React.js, mobile app in Flutter. Real-time scores, fixtures, player stats, and community tournament creation.",
    tech: ["React.js", "Flutter", "Firebase"],
    isLive: true,
    liveUrl: "https://khelset.com",
    image: "/images/projects/khelset.png",
    gradient: "from-sky-100 via-blue-50 to-sky-50",
    featured: false,
  },
  {
    id: "katkut-ai",
    title: "Katkut AI",
    description:
      "Cloud video editing platform with AI-assisted features. Upload, preview, and trim clips. AI silence removal, text-to-speech, Google sign-in, and real-time cloud storage.",
    tech: ["Next.js", "Firebase", "AI APIs"],
    badge: "AI",
    isLive: false,
    image: "/images/projects/katkut-ai.png",
    gradient: "from-violet-100 via-purple-50 to-violet-50",
    featured: false,
  },
  {
    id: "pahilo-khudkilo",
    title: "Pahilo Khudkilo",
    description:
      "Gamified Nepali language learning app for kids. Multiple choice, letter-grid hunt, and pronunciation matching quizzes, available in English and Finnish. Plays a celebration animation at 80%+ score.",
    tech: ["React 18", "Vite", "Tailwind CSS", "Vercel"],
    isLive: true,
    liveUrl: "https://pahilokhudkila.com",
    image: "/images/projects/pahilo-khudkilo.png",
    gradient: "from-emerald-100 via-green-50 to-emerald-50",
    featured: false,
  },
]

export const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Prisma"],
  Mobile: ["React Native", "Flutter", "Kotlin", "Expo"],
  Databases: ["PostgreSQL", "SQLite", "MongoDB", "Firebase"],
  Cloud: ["Supabase", "Firebase", "Google OAuth"],
  Desktop: ["Electron", "IPC", "better-sqlite3"],
  Tools: ["Git", "Docker", "Linux", "Figma"],
}

export const stats = [
  { value: "7", label: "Hotels using my app daily" },
  { value: "4.5", label: "GPA out of 5.0" },
  { value: "5", label: "Countries collaborated" },
  { value: "Top 24", label: "Comedy Champion Nepal" },
]

export interface ExperienceEntry {
  id: string
  title: string
  subtitle?: string
  company: string
  location: string
  url?: string
  date: string
  current: boolean
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "trinova",
    title: "Co-founder",
    company: "Trinova Technology Oy",
    location: "Finland",
    url: "trinovatech.fi",
    date: "2025 – Present",
    current: true,
    bullets: [
      "Co-founded a software and IT solutions company with classmates while finishing university. We work with businesses on custom software, tech consulting, and digital projects.",
      "Handle technology selection, client meetings, partnership discussions, and making sure projects are scoped and delivered properly.",
      "Responsible for both the technical direction and the business side of the company.",
    ],
  },
  {
    id: "near-real",
    title: "Software Developer Intern",
    company: "Near Real Oy",
    location: "Helsinki, Finland",
    date: "Apr – Aug 2025",
    current: false,
    bullets: [
      "Worked on a mobile app for health data collection using React Native and Expo, with integrations to Google Health Connect and MDT APIs.",
      "Handled user permission flows for sensitive health data and contributed to architecture decisions and documentation.",
    ],
  },
  {
    id: "erasmus",
    title: "Product Developer",
    subtitle: "Erasmus+ BIP",
    company: "Instituto Politécnico de Setúbal",
    location: "Portugal",
    date: "Nov 2025",
    current: false,
    bullets: [
      "Part of an EU-funded programme where our team of five nationalities built and presented a product prototype in one week.",
      "Interviewed international students about social isolation, then built a web platform prototype to help new students connect with locals and nearby events.",
    ],
  },
]
