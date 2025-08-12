"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StorySection from "@/components/story-section"
import CharactersSection from "@/components/characters-section"
import GameFeaturesSection from "@/components/game-features-section"
import ScreenshotGallery from "@/components/screenshot-gallery"
import FloatingChat from "@/components/floating-chat"

export default function AboutPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <StorySection language={language} />
        <CharactersSection language={language} />
        <GameFeaturesSection language={language} />
        <ScreenshotGallery language={language} />
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
