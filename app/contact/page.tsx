"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import FloatingChat from "@/components/floating-chat"

export default function ContactPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 min-h-screen bg-gradient-to-b from-slate-900 to-purple-900">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent">
                {language === "vi" ? "Liên Hệ" : "Contact Us"}
              </h1>
              <p className="text-lg text-white/80">
                {language === "vi"
                  ? "Hãy liên hệ với chúng tôi để được hỗ trợ hoặc đóng góp ý kiến"
                  : "Get in touch with us for support or feedback"}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm language={language} />
              <ContactInfo language={language} />
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
