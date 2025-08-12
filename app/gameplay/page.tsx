"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GameInterface from "@/components/game-interface"
import FloatingChat from "@/components/floating-chat"

export default function GameplayPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <GameInterface language={language} />
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
