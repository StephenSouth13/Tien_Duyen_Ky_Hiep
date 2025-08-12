"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Maximize, Minimize, Settings, Gamepad2, Trophy } from "lucide-react"

interface GameInterfaceProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Tiên Duyên Kỳ Hiệp - Gameplay",
    subtitle: "Khung game Unity WebGL - Sẵn sàng tích hợp",
    loading: "Đang tải game...",
    loadingTip: "Đang chuẩn bị thế giới Tam Giới cho bạn...",
    webglReady: "Unity WebGL Ready",
    webglNote: "Khung game đã tối ưu cho Unity WebGL. Chỉ cần thay URL game thật.",
    fullscreen: "Toàn màn hình",
    exitFullscreen: "Thoát toàn màn hình",
    gameReady: "Sẵn sàng tích hợp Unity WebGL",
    integrationNote: "Thay thế URL Unity WebGL build tại WEBGL_GAME_URL",
    controls: "Hướng dẫn",
    performance: "Hiệu suất",
    webglIntegration: "Tích hợp WebGL",
  },
  en: {
    title: "Fairy Destiny Knight - Gameplay",
    subtitle: "Unity WebGL Game Frame - Ready for Integration",
    loading: "Loading game...",
    loadingTip: "Preparing the Three Realms for you...",
    webglReady: "Unity WebGL Ready",
    webglNote: "Game frame optimized for Unity WebGL. Just replace with real game URL.",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit Fullscreen",
    gameReady: "Ready for Unity WebGL Integration",
    integrationNote: "Replace Unity WebGL build URL at WEBGL_GAME_URL",
    controls: "Guide",
    performance: "Performance",
    webglIntegration: "WebGL Integration",
  },
}

export default function GameInterface({ language = "vi" }: GameInterfaceProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const gameContainerRef = useRef<HTMLDivElement>(null)

  const t = translations[language]

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      gameContainerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const WEBGL_GAME_URL = "/path/to/your/unity-webgl-build/index.html"

  return (
    <section className="py-8 px-4 min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ isolation: "isolate" }}>
        <div className="w-full h-full bg-gradient-to-b from-slate-900/80 to-purple-900/80"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent font-serif">
            {t.title}
          </h1>
          <p className="text-lg text-white/80 mb-4">{t.subtitle}</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <Badge variant="outline" className="border-jade-400 text-jade-400 bg-jade/10">
              {t.webglReady}
            </Badge>
            <span className="text-white/60">{t.webglNote}</span>
          </div>
        </div>

        <div className="mb-8">
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm overflow-hidden relative">
            <CardContent className="p-0 relative">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800/80 to-purple-900/80 border-b border-jade/20">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-jade text-white">Unity WebGL</Badge>
                  <span className="text-white/70 text-sm">Ready for Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="text-white/70 hover:text-white hover:bg-jade/20"
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-jade/20">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div
                ref={gameContainerRef}
                className="aspect-video bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden"
                style={{
                  isolation: "isolate",
                  minHeight: "500px",
                  position: "relative",
                  zIndex: 100,
                }}
              >
                {isLoading ? (
                  /* Professional Unity-style loading screen */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="text-center space-y-8 max-w-md">
                      <div className="relative">
                        <div className="w-20 h-20 border-4 border-jade/30 rounded-full animate-spin border-t-jade mx-auto"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Gamepad2 className="w-8 h-8 text-jade animate-pulse" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">{t.loading}</h3>
                        <div className="w-80 bg-slate-800 rounded-full h-4 overflow-hidden border border-slate-600">
                          <div
                            className="h-full bg-gradient-to-r from-jade via-jade-light to-gold transition-all duration-500 ease-out relative"
                            style={{ width: `${loadingProgress}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-white/70">
                          <span>Unity WebGL</span>
                          <span>{loadingProgress}%</span>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm leading-relaxed">{t.loadingTip}</p>
                    </div>
                  </div>
                ) : (
                  /* WebGL Integration Ready Screen */
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/95 to-purple-900/95">
                    <div className="text-center space-y-8 max-w-2xl px-8">
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-jade to-jade-dark rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-jade/50">
                          <Gamepad2 className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-4xl font-bold text-white font-serif">{t.gameReady}</h3>
                        <div className="bg-slate-800/50 rounded-lg p-6 border border-jade/30">
                          <p className="text-white/90 text-lg mb-4">{t.integrationNote}</p>
                          <div className="bg-slate-900 rounded p-4 font-mono text-sm text-jade-light">
                            <div className="text-white/60">// Replace this URL with your Unity WebGL build:</div>
                            <div className="text-jade">const WEBGL_GAME_URL = "{WEBGL_GAME_URL}"</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-slate-800/30 rounded p-4 border border-jade/20">
                            <h4 className="text-jade font-semibold mb-2">✓ Fullscreen Ready</h4>
                            <p className="text-white/70">Auto-scaling support</p>
                          </div>
                          <div className="bg-slate-800/30 rounded p-4 border border-jade/20">
                            <h4 className="text-jade font-semibold mb-2">✓ Mobile Optimized</h4>
                            <p className="text-white/70">Responsive design</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 
                <iframe 
                  src={WEBGL_GAME_URL}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; microphone; camera"
                  style={{ minHeight: "500px" }}
                />
                */}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Gamepad2 className="w-5 h-5 mr-2 text-jade" />
                {t.webglIntegration}
              </h3>
              <div className="space-y-4 text-sm text-white/80">
                <div className="bg-slate-900/50 rounded p-4 border border-jade/20">
                  <h4 className="text-jade font-semibold mb-2">Bước 1: Build Unity WebGL</h4>
                  <p>Xuất game Unity của bạn thành WebGL build</p>
                </div>
                <div className="bg-slate-900/50 rounded p-4 border border-jade/20">
                  <h4 className="text-jade font-semibold mb-2">Bước 2: Upload Files</h4>
                  <p>Upload các file WebGL lên server hoặc CDN</p>
                </div>
                <div className="bg-slate-900/50 rounded p-4 border border-jade/20">
                  <h4 className="text-jade font-semibold mb-2">Bước 3: Thay URL</h4>
                  <p>Thay thế WEBGL_GAME_URL bằng đường dẫn thật</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-gold/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-gold" />
                {t.performance}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/80">
                  <span>WebGL Status</span>
                  <Badge className="bg-green-600 text-white text-xs">Ready</Badge>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Frame Isolation</span>
                  <Badge className="bg-jade text-white text-xs">Active</Badge>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Responsive Design</span>
                  <Badge className="bg-gold text-white text-xs">Enabled</Badge>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Fullscreen Support</span>
                  <Badge className="bg-purple-600 text-white text-xs">Ready</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
