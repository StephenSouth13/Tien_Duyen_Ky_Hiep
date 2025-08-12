"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

interface QuickIntroProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Khám phá thế giới Tiên Hiệp",
    description:
      "Tham gia vào cuộc hành trình tu tiên đầy màu sắc, nơi bạn sẽ gặp gỡ những nhân vật độc đáo, khám phá những bí ẩn của Tam Giới và trải nghiệm những trận chiến epic với đồ họa 2D chibi đáng yêu.",
    features: [
      "Cốt truyện hài hước và cuốn hút",
      "5 nhân vật chính với kỹ năng độc đáo",
      "Thế giới mở rộng lớn để khám phá",
    ],
    cta: "Xem chi tiết",
  },
  en: {
    title: "Discover the Martial Arts World",
    description:
      "Join a colorful cultivation journey where you'll meet unique characters, explore the mysteries of the Three Realms, and experience epic battles with adorable 2D chibi graphics.",
    features: ["Humorous and engaging storyline", "5 main characters with unique skills", "Vast open world to explore"],
    cta: "Learn More",
  },
}

export default function QuickIntro({ language }: QuickIntroProps) {
  const t = translations[language]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-jade-light to-purple-mystic bg-clip-text text-transparent">
              {t.title}
            </h2>

            <p className="text-lg text-white/80 leading-relaxed">{t.description}</p>

            <ul className="space-y-3">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <div className="w-2 h-2 bg-jade rounded-full mr-3 animate-pulse"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-jade text-jade hover:bg-jade hover:text-white transition-all duration-300 group bg-transparent"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {t.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-jade/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-jade/20 to-purple-mystic/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Game Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold text-lg">
                      {language === "vi" ? "Thế giới Tiên Hiệp đang chờ bạn!" : "The Martial World Awaits!"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-jade/30 rounded-full blur-sm animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
