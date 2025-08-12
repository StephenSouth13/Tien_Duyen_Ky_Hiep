"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeedbackForm from "@/components/feedback-form"
import FloatingChat from "@/components/floating-chat"

export default function FeedbackPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 min-h-screen bg-gradient-to-b from-slate-900 to-purple-900">
          <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent">
                {language === "vi" ? "Góp Ý" : "Feedback"}
              </h1>
              <p className="text-lg text-white/80">
                {language === "vi"
                  ? "Chia sẻ ý kiến của bạn để giúp chúng tôi cải thiện game"
                  : "Share your thoughts to help us improve the game"}
              </p>
            </div>

            <FeedbackForm language={language} />
          </div>
        </section>
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
