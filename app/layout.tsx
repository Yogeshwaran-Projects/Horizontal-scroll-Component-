// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

// Google Fonts
const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "yogesh",
  description: "yogesh",
  generator: "yogesh",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${sansFont.variable} ${monoFont.variable}`}>
        {/* Suspense fallback */}
        <Suspense fallback={null}>{children}</Suspense>

        {/* Analytics */}
        <Analytics />

        {/* GSAP scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="gsap-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
                window.gsap.registerPlugin(window.ScrollTrigger);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
