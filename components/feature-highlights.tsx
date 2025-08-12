"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Swords, Users, Heart, Zap } from "lucide-react"

interface FeatureHighlightsProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Tính năng nổi bật",
    subtitle: "Khám phá những điều thú vị trong game",
    features: [
      {
        icon: Swords,
        title: "PK Tự Do",
        description: "Chiến đấu với người chơi khác trong các trận PvP kịch tính và công bằng",
      },
      {
        icon: Users,
        title: "Nhiệm vụ Bang Hội",
        description: "Tham gia bang hội, làm nhiệm vụ cùng bạn bè và xây dựng liên minh mạnh mẽ",
      },
      {
        icon: Heart,
        title: "Nuôi Thú Tiên",
        description: "Thu thập và nuôi dưỡng các thú cưng thần thoại với khả năng tiến hóa độc đáo",
      },
      {
        icon: Zap,
        title: "Phụ Bản Epic",
        description: "Thách thức các boss khủng trong phụ bản để nhận phần thưởng quý hiếm",
      },
    ],
  },
  en: {
    title: "Key Features",
    subtitle: "Discover exciting elements in the game",
    features: [
      {
        icon: Swords,
        title: "Free PvP",
        description: "Battle other players in intense and fair PvP combat scenarios",
      },
      {
        icon: Users,
        title: "Guild Missions",
        description: "Join guilds, complete missions with friends and build powerful alliances",
      },
      {
        icon: Heart,
        title: "Pet Cultivation",
        description: "Collect and nurture mythical pets with unique evolution capabilities",
      },
      {
        icon: Zap,
        title: "Epic Dungeons",
        description: "Challenge powerful bosses in dungeons for rare and valuable rewards",
      },
    ],
  },
}

export default function FeatureHighlights({ language }: FeatureHighlightsProps) {
  const t = translations[language]

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-mystic to-jade-light bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature, index) => {
            const Icon = feature.icon
            const colors = [
              { bg: "from-jade/20 to-jade-dark/20", border: "border-jade/30", icon: "text-jade-light" },
              { bg: "from-gold/20 to-gold-dark/20", border: "border-gold/30", icon: "text-gold" },
              {
                bg: "from-purple-mystic/20 to-purple-mystic-dark/20",
                border: "border-purple-mystic/30",
                icon: "text-purple-mystic-light",
              },
              { bg: "from-jade-light/20 to-purple-mystic/20", border: "border-jade-light/30", icon: "text-jade-light" },
            ]
            const color = colors[index % colors.length]

            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${color.bg} ${color.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${color.icon}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-jade-light transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>

                  {/* Decorative glow effect */}
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${color.bg} blur-xl`}
                  ></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional stats section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold text-jade-light group-hover:scale-110 transition-transform">100+</div>
              <div className="text-white/60 text-sm mt-1">{language === "vi" ? "Kỹ năng" : "Skills"}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">50+</div>
              <div className="text-white/60 text-sm mt-1">{language === "vi" ? "Phụ bản" : "Dungeons"}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-mystic group-hover:scale-110 transition-transform">
                200+
              </div>
              <div className="text-white/60 text-sm mt-1">{language === "vi" ? "Trang bị" : "Equipment"}</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-jade group-hover:scale-110 transition-transform">∞</div>
              <div className="text-white/60 text-sm mt-1">{language === "vi" ? "Phiêu lưu" : "Adventures"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
