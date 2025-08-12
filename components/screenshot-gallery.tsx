"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface ScreenshotGalleryProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Hình Ảnh Game",
    subtitle: "Khám phá đồ họa tuyệt đẹp của Tiên Duyên Kỳ Hiệp",
    viewAll: "Xem tất cả",
    close: "Đóng",
    previous: "Trước",
    next: "Tiếp",
  },
  en: {
    title: "Game Screenshots",
    subtitle: "Explore the stunning graphics of Fairy Destiny Knight",
    viewAll: "View All",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },
}

const screenshots = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Battle Scene",
    title: "Epic Battle",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Character Selection",
    title: "Choose Your Hero",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "World Map",
    title: "Explore the World",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Guild Hall",
    title: "Guild System",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pet Collection",
    title: "Pet Cultivation",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Dungeon Boss",
    title: "Boss Battle",
  },
]

export default function ScreenshotGallery({ language }: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const t = translations[language]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? screenshots.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-mystic to-gold bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-white/80">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold">{screenshot.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img
                src={screenshots[selectedImage].src || "/placeholder.svg"}
                alt={screenshots[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">{screenshots[selectedImage].title}</h3>
                <p className="text-white/70 text-sm">
                  {selectedImage + 1} / {screenshots.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
