"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const horizontalSection = horizontalSectionRef.current
    if (horizontalSection) {
      const panels = gsap.utils.toArray<HTMLElement>(".panel", horizontalSection)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalSection,
          pin: true,
          scrub: 1,
          end: () => "+=" + (horizontalSection.scrollWidth - window.innerWidth),
          // markers: true, // For debugging
        },
      })

      tl.to(panels, {
        x: () => -(horizontalSection.scrollWidth - window.innerWidth),
        ease: "none",
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Vertical Section 1 */}
      <section className="flex h-[100vh] items-center justify-center bg-blue-200 text-4xl font-bold text-blue-900">
        <h1 className="text-balance">Vertical Scroll Section 1</h1>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={horizontalSectionRef} className="horizontal-section flex h-[100vh] overflow-hidden bg-gray-800">
        <div className="flex w-[400vw] flex-shrink-0">
          <div className="panel flex h-full w-screen items-center justify-center bg-red-300 text-4xl font-bold text-red-900">
            <h2 className="text-balance">Horizontal Panel 1</h2>
          </div>
          <div className="panel flex h-full w-screen items-center justify-center bg-green-300 text-4xl font-bold text-green-900">
            <h2 className="text-balance">Horizontal Panel 2</h2>
          </div>
          <div className="panel flex h-full w-screen items-center justify-center bg-yellow-300 text-4xl font-bold text-yellow-900">
            <h2 className="text-balance">Horizontal Panel 3</h2>
          </div>
          <div className="panel flex h-full w-screen items-center justify-center bg-purple-300 text-4xl font-bold text-purple-900">
            <h2 className="text-balance">Horizontal Panel 4</h2>
          </div>
        </div>
      </section>

      {/* Vertical Section 2 */}
      <section className="flex h-[100vh] items-center justify-center bg-blue-200 text-4xl font-bold text-blue-900">
        <h1 className="text-balance">Vertical Scroll Section 2</h1>
      </section>
    </div>
  )
}
