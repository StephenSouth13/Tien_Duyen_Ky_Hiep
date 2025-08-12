"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Swords, Users, Heart, Zap, Trophy, Map } from "lucide-react"

interface GameFeaturesSectionProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Tính Năng Game",
    subtitle: "Khám phá những điều thú vị trong thế giới Tiên Hiệp",
    features: [
      {
        icon: Swords,
        title: "PK Tự Do",
        description:
          "Chiến đấu với người chơi khác trong các trận PvP kịch tính. Hệ thống matchmaking công bằng đảm bảo trận đấu cân bằng.",
        details: ["Đấu trường xếp hạng", "Giải đấu hàng tuần", "Phần thưởng hấp dẫn"],
      },
      {
        icon: Users,
        title: "Hệ Thống Bang Hội",
        description: "Tham gia bang hội, làm nhiệm vụ cùng bạn bè và xây dựng liên minh mạnh mẽ để thống trị Tam Giới.",
        details: ["Nhiệm vụ bang hội", "Chiến tranh bang hội", "Kho báu chung"],
      },
      {
        icon: Heart,
        title: "Nuôi Thú Tiên",
        description:
          "Thu thập và nuôi dưỡng các thú cưng thần thoại với khả năng tiến hóa độc đáo và kỹ năng hỗ trợ mạnh mẽ.",
        details: ["50+ loài thú tiên", "Hệ thống tiến hóa", "Kỹ năng hỗ trợ"],
      },
      {
        icon: Zap,
        title: "Phụ Bản Epic",
        description: "Thách thức các boss khủng trong phụ bản để nhận phần thưởng quý hiếm và trang bị mạnh mẽ.",
        details: ["Boss độc đáo", "Trang bị hiếm", "Chế độ khó"],
      },
      {
        icon: Trophy,
        title: "Hệ Thống Thành Tựu",
        description:
          "Hoàn thành các thành tựu để nhận phần thưởng và khoe khoang với bạn bè về những chiến công của mình.",
        details: ["200+ thành tựu", "Danh hiệu đặc biệt", "Phần thưởng độc quyền"],
      },
      {
        icon: Map,
        title: "Thế Giới Mở",
        description:
          "Khám phá thế giới rộng lớn với nhiều vùng đất bí ẩn, kho báu ẩn giấu và những cuộc phiêu lưu thú vị.",
        details: ["10+ khu vực", "Kho báu ẩn", "Sự kiện ngẫu nhiên"],
      },
    ],
  },
  en: {
    title: "Game Features",
    subtitle: "Discover exciting elements in the Martial Arts world",
    features: [
      {
        icon: Swords,
        title: "Free PvP",
        description: "Battle other players in intense PvP matches. Fair matchmaking system ensures balanced fights.",
        details: ["Ranked Arena", "Weekly Tournaments", "Attractive Rewards"],
      },
      {
        icon: Users,
        title: "Guild System",
        description:
          "Join guilds, complete missions with friends and build powerful alliances to dominate the Three Realms.",
        details: ["Guild Missions", "Guild Wars", "Shared Treasury"],
      },
      {
        icon: Heart,
        title: "Pet Cultivation",
        description:
          "Collect and nurture mythical pets with unique evolution capabilities and powerful support skills.",
        details: ["50+ Pet Species", "Evolution System", "Support Skills"],
      },
      {
        icon: Zap,
        title: "Epic Dungeons",
        description: "Challenge powerful bosses in dungeons for rare rewards and mighty equipment.",
        details: ["Unique Bosses", "Rare Equipment", "Hard Mode"],
      },
      {
        icon: Trophy,
        title: "Achievement System",
        description: "Complete achievements to earn rewards and show off your accomplishments to friends.",
        details: ["200+ Achievements", "Special Titles", "Exclusive Rewards"],
      },
      {
        icon: Map,
        title: "Open World",
        description: "Explore a vast world with mysterious regions, hidden treasures and exciting adventures.",
        details: ["10+ Regions", "Hidden Treasures", "Random Events"],
      },
    ],
  },
}

export default function GameFeaturesSection({ language }: GameFeaturesSectionProps) {
  const t = translations[language]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-jade-light bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              { bg: "from-blue-400/20 to-blue-600/20", border: "border-blue-400/30", icon: "text-blue-400" },
              { bg: "from-red-400/20 to-red-600/20", border: "border-red-400/30", icon: "text-red-400" },
              { bg: "from-green-400/20 to-green-600/20", border: "border-green-400/30", icon: "text-green-400" },
            ]
            const color = colors[index % colors.length]

            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${color.bg} ${color.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${color.icon}`} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-jade-light transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-white/70 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${color.icon.replace("text-", "bg-")} mr-2`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
