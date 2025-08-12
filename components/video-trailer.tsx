"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Volume2 } from "lucide-react"

interface VideoTrailerProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Trailer Game",
    subtitle: "Xem trước gameplay và đồ họa tuyệt đẹp",
    playButton: "Phát video",
    comingSoon: "Video sẽ có sớm!",
  },
  en: {
    title: "Game Trailer",
    subtitle: "Preview the gameplay and stunning graphics",
    playButton: "Play Video",
    comingSoon: "Video Coming Soon!",
  },
}

export default function VideoTrailer({ language }: VideoTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const t = translations[language]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-jade-light bg-clip-text text-transparent">
          {t.title}
        </h2>

        <p className="text-lg text-white/80 mb-12">{t.subtitle}</p>

        <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-gold/30 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-purple-900">
              {/* Video placeholder */}
              <img
                src="/placeholder.svg?height=600&width=1000"
                alt="Game Trailer"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {!isPlaying ? (
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white rounded-full w-20 h-20 p-0 transition-all duration-300 hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </Button>
                ) : (
                  <div className="text-center">
                    <Volume2 className="w-12 h-12 text-white mb-4 mx-auto animate-pulse" />
                    <p className="text-white text-xl font-semibold">{t.comingSoon}</p>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-jade rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-purple-mystic rounded-full animate-pulse delay-700"></div>
              </div>

              {/* Duration indicator */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                2:30
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-jade-light">4K</div>
            <div className="text-sm text-white/60">{language === "vi" ? "Chất lượng" : "Quality"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">60fps</div>
            <div className="text-sm text-white/60">{language === "vi" ? "Khung hình" : "Frame Rate"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-mystic">2:30</div>
            <div className="text-sm text-white/60">{language === "vi" ? "Thời lượng" : "Duration"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-jade">HD</div>
            <div className="text-sm text-white/60">{language === "vi" ? "Âm thanh" : "Audio"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
