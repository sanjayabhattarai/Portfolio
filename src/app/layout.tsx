import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Sanjaya Bhattarai — Full-Stack Developer",
  description:
    "Full-Stack Developer based in Helsinki, Finland. Co-founder of Trinova Technology. I build software that real people use — hotel systems, sports platforms, and AI tools.",
  openGraph: {
    title: "Sanjaya Bhattarai — Full-Stack Developer",
    description:
      "Full-Stack Developer in Helsinki. 7 hotels run my desktop app. Building real software for real users.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjaya Bhattarai — Full-Stack Developer",
    description: "Full-Stack Developer in Helsinki. I build software that real people use.",
  },
  keywords: [
    "Sanjaya Bhattarai",
    "Full-Stack Developer",
    "Helsinki",
    "Finland",
    "React",
    "Next.js",
    "Electron",
    "Flutter",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
