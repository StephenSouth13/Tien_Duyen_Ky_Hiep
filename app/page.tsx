"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import QuickIntro from "@/components/quick-intro"
import VideoTrailer from "@/components/video-trailer"
import FeatureHighlights from "@/components/feature-highlights"
import FloatingChat from "@/components/floating-chat"
import Footer from "@/components/footer"

export default function HomePage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [cursorDefault, setCursorDefault] = useState(false)

  // Handle double click to reset cursor
  useEffect(() => {
    let clickCount = 0
    let clickTimer: NodeJS.Timeout

    const handleClick = () => {
      clickCount++
      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          clickCount = 0
        }, 300)
      } else if (clickCount === 2) {
        clearTimeout(clickTimer)
        clickCount = 0
        setCursorDefault((prev) => !prev)
      }
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
      if (clickTimer) clearTimeout(clickTimer)
    }
  }, [])

  // Create floating particles
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-bg")
    if (!particlesContainer) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 6 + "s"
      particle.style.animationDuration = Math.random() * 4 + 4 + "s"
      particlesContainer.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 8000)
    }

    const interval = setInterval(createParticle, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cursorDefault ? "cursor-default" : ""}>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <QuickIntro language={language} />
        <VideoTrailer language={language} />
        <FeatureHighlights language={language} />
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
