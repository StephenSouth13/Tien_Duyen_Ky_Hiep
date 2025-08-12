"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Sword, Star } from "lucide-react"

interface HeroSectionProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Tiên Duyên Kỳ Hiệp",
    slogan: "Bước vào hành trình tu tiên hài hước nhất Tam Giới",
    cta: "Bắt đầu hành trình",
  },
  en: {
    title: "Fairy Destiny Knight",
    slogan: "Enter the most hilarious cultivation journey in the Three Realms",
    cta: "Start Journey",
  },
}

export default function HeroSection({ language }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setIsVisible(true)

    // Create floating clouds
    const createCloud = () => {
      const cloud = document.createElement("div")
      cloud.className = "cloud"
      cloud.innerHTML = "☁️"
      cloud.style.top = Math.random() * 50 + "%"
      cloud.style.fontSize = Math.random() * 20 + 20 + "px"
      cloud.style.animationDelay = Math.random() * 5 + "s"
      cloud.style.animationDuration = Math.random() * 10 + 15 + "s"

      const heroElement = document.getElementById("hero-section")
      if (heroElement) {
        heroElement.appendChild(cloud)
        setTimeout(() => cloud.remove(), 25000)
      }
    }

    // Create falling petals
    const createPetal = () => {
      const petal = document.createElement("div")
      petal.className = "petal"
      petal.style.left = Math.random() * 100 + "%"
      petal.style.animationDelay = Math.random() * 3 + "s"
      petal.style.animationDuration = Math.random() * 4 + 6 + "s"

      const heroElement = document.getElementById("hero-section")
      if (heroElement) {
        heroElement.appendChild(petal)
        setTimeout(() => petal.remove(), 10000)
      }
    }

    const cloudInterval = setInterval(createCloud, 3000)
    const petalInterval = setInterval(createPetal, 800)

    return () => {
      clearInterval(cloudInterval)
      clearInterval(petalInterval)
    }
  }, [])

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-jade/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-mystic/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Decorative elements */}
          <div className="flex justify-center items-center mb-6">
            <Sparkles className="w-8 h-8 text-gold animate-spin mr-4" />
            <Sword className="w-12 h-12 text-jade-light animate-bounce" />
            <Sparkles className="w-8 h-8 text-gold animate-spin ml-4" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent glow-text">
            {t.title}
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">{t.slogan}</p>

          {/* CTA Button */}
          <Link href="/gameplay">
            <Button
              size="lg"
              className="btn-wave bg-gradient-to-r from-jade to-jade-dark hover:from-jade-light hover:to-jade text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg shadow-jade/50 hover:shadow-jade/70 transition-all duration-300 transform hover:scale-105"
            >
              <Star className="w-5 h-5 mr-2" />
              {t.cta}
            </Button>
          </Link>

          {/* Floating stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-jade/30">
              <div className="text-2xl font-bold text-jade-light">5</div>
              <div className="text-sm text-white/80">{language === "vi" ? "Nhân vật chính" : "Main Characters"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gold/30">
              <div className="text-2xl font-bold text-gold">∞</div>
              <div className="text-sm text-white/80">{language === "vi" ? "Cuộc phiêu lưu" : "Adventures"}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-mystic/30">
              <div className="text-2xl font-bold text-purple-mystic">3</div>
              <div className="text-sm text-white/80">{language === "vi" ? "Thế giới" : "Realms"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
