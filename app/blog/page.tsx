"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogList from "@/components/blog-list"
import FloatingChat from "@/components/floating-chat"

export default function BlogPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <BlogList language={language} />
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
