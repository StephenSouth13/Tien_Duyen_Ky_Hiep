"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Wind, Sword, Zap, Moon, Eye, Star, Heart, Shield } from "lucide-react"

interface CharactersSectionProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "5 Nhân Vật Chính",
    subtitle: "Gặp gỡ những anh hùng của Tam Giới",
    characters: [
      {
        name: "Linh Nhi",
        title: "Tiểu Tiên Nữ",
        skill: "Phong Linh Vũ",
        description: "Nhanh nhẹn, tinh nghịch, phép gió",
        element: "Gió",
        icon: Wind,
        color: "from-green-400 to-cyan-400",
        bgColor: "from-green-400/20 to-cyan-400/20",
        borderColor: "border-green-400/30",
      },
      {
        name: "Hạo Vũ",
        title: "Kiếm Hiệp Trẻ",
        skill: "Bạch Vân Kiếm Pháp",
        description: "Kiếm pháp mạnh mẽ, trung thành",
        element: "Kim",
        icon: Sword,
        color: "from-blue-400 to-indigo-400",
        bgColor: "from-blue-400/20 to-indigo-400/20",
        borderColor: "border-blue-400/30",
      },
      {
        name: "Tiểu Ngưu",
        title: "Lực Sĩ Yêu Tộc",
        skill: "Ngưu Ma Xung",
        description: "Sức mạnh vô song, tính cách hào sảng",
        element: "Thổ",
        icon: Zap,
        color: "from-orange-400 to-red-400",
        bgColor: "from-orange-400/20 to-red-400/20",
        borderColor: "border-orange-400/30",
      },
      {
        name: "Mặc Vân",
        title: "Pháp Sư Ma Tộc",
        skill: "Hắc Vân Thuật",
        description: "Bí ẩn, ma thuật hắc ám",
        element: "Ám",
        icon: Moon,
        color: "from-purple-400 to-pink-400",
        bgColor: "from-purple-400/20 to-pink-400/20",
        borderColor: "border-purple-400/30",
      },
      {
        name: "A Xoài",
        title: "Đạo Chích Lang Thang",
        skill: "Ảnh Bộ Phi Tặc",
        description: "Nhanh, khéo, hài hước",
        element: "Ảnh",
        icon: Eye,
        color: "from-yellow-400 to-amber-400",
        bgColor: "from-yellow-400/20 to-amber-400/20",
        borderColor: "border-yellow-400/30",
      },
    ],
  },
  en: {
    title: "5 Main Characters",
    subtitle: "Meet the heroes of the Three Realms",
    characters: [
      {
        name: "Linh Nhi",
        title: "Little Fairy",
        skill: "Wind Spirit Dance",
        description: "Agile, mischievous, wind magic",
        element: "Wind",
        icon: Wind,
        color: "from-green-400 to-cyan-400",
        bgColor: "from-green-400/20 to-cyan-400/20",
        borderColor: "border-green-400/30",
      },
      {
        name: "Hao Vu",
        title: "Young Swordsman",
        skill: "White Cloud Sword Art",
        description: "Powerful swordsmanship, loyal",
        element: "Metal",
        icon: Sword,
        color: "from-blue-400 to-indigo-400",
        bgColor: "from-blue-400/20 to-indigo-400/20",
        borderColor: "border-blue-400/30",
      },
      {
        name: "Xiao Niu",
        title: "Demon Clan Warrior",
        skill: "Bull Demon Charge",
        description: "Unmatched strength, bold character",
        element: "Earth",
        icon: Zap,
        color: "from-orange-400 to-red-400",
        bgColor: "from-orange-400/20 to-red-400/20",
        borderColor: "border-orange-400/30",
      },
      {
        name: "Mo Yun",
        title: "Demon Clan Mage",
        skill: "Dark Cloud Arts",
        description: "Mysterious, dark magic",
        element: "Dark",
        icon: Moon,
        color: "from-purple-400 to-pink-400",
        bgColor: "from-purple-400/20 to-pink-400/20",
        borderColor: "border-purple-400/30",
      },
      {
        name: "A Xoai",
        title: "Wandering Thief",
        skill: "Shadow Step Thievery",
        description: "Fast, clever, humorous",
        element: "Shadow",
        icon: Eye,
        color: "from-yellow-400 to-amber-400",
        bgColor: "from-yellow-400/20 to-amber-400/20",
        borderColor: "border-yellow-400/30",
      },
    ],
  },
}

export default function CharactersSection({ language }: CharactersSectionProps) {
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null)
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const t = translations[language]

  const getCharacterDetails = (index: number) => {
    const details = {
      vi: [
        {
          backstory:
            "Sinh ra tại Tiên Giới, Linh Nhi là con gái của Phong Thần. Cô sở hữu khả năng điều khiển gió và có tính cách tinh nghịch, thích phiêu lưu.",
          abilities: ["Phong Linh Vũ", "Thiên Phong Trận", "Gió Lốc Xoáy", "Bay Lượn Tự Do"],
          stats: { attack: 85, defense: 70, speed: 95, magic: 90 },
          quote: "Gió mang theo tự do, và ta là gió!",
        },
        {
          backstory:
            "Xuất thân từ gia tộc kiếm sĩ danh tiếng, Hạo Vũ được huấn luyện kiếm pháp từ nhỏ. Anh có tính cách trung thành và luôn bảo vệ đồng đội.",
          abilities: ["Bạch Vân Kiếm Pháp", "Thiên Kiếm Trận", "Kiếm Khí Xung Thiên", "Nhất Kiếm Phá Vạn Pháp"],
          stats: { attack: 95, defense: 85, speed: 80, magic: 60 },
          quote: "Kiếm trong tay, nghĩa trong lòng!",
        },
        {
          backstory:
            "Tiểu Ngưu là chiến binh của tộc Yêu, sở hữu sức mạnh khủng khiếp. Tính cách hào sảng, thích uống rượu và kết bạn.",
          abilities: ["Ngưu Ma Xung", "Đại Lực Kim Cương", "Bạo Nộ Cuồng Chiến", "Thiết Sơn Đảo"],
          stats: { attack: 100, defense: 95, speed: 60, magic: 40 },
          quote: "Sức mạnh là tất cả, nhưng tình bạn còn quan trọng hơn!",
        },
        {
          backstory:
            "Mặc Vân là pháp sư bí ẩn từ Ma Giới. Thông thạo hắc ma thuật nhưng có trái tim nhân hậu, luôn che chở cho người yếu.",
          abilities: ["Hắc Vân Thuật", "Ma Khí Thiên La", "Bóng Tối Nuốt Chửng", "Hồn Ma Triệu Hồi"],
          stats: { attack: 75, defense: 70, speed: 85, magic: 100 },
          quote: "Trong bóng tối, ta tìm thấy ánh sáng của lòng nhân từ.",
        },
        {
          backstory:
            "A Xoài là đạo chích lang thang, có kỹ năng ăn trộm tuyệt đỉnh. Tính cách hài hước, thích đùa giỡn nhưng rất trung thành với bạn bè.",
          abilities: ["Ảnh Bộ Phi Tặc", "Tàng Hình Thuật", "Phi Tiêu Độc Châm", "Bảo Vật Thám Tri"],
          stats: { attack: 80, defense: 65, speed: 100, magic: 70 },
          quote: "Nhanh như gió, lặng như bóng, hài như... A Xoài!",
        },
      ],
      en: [
        {
          backstory:
            "Born in the Fairy Realm, Linh Nhi is the daughter of the Wind God. She possesses wind control abilities and has a mischievous, adventure-loving personality.",
          abilities: ["Wind Spirit Dance", "Heaven Wind Formation", "Tornado Whirl", "Free Flight"],
          stats: { attack: 85, defense: 70, speed: 95, magic: 90 },
          quote: "Wind carries freedom, and I am the wind!",
        },
        {
          backstory:
            "From a prestigious swordsman family, Hao Vu was trained in swordsmanship from childhood. He has a loyal character and always protects his teammates.",
          abilities: ["White Cloud Sword Art", "Heaven Sword Formation", "Sword Qi Soaring", "One Sword Breaks All"],
          stats: { attack: 95, defense: 85, speed: 80, magic: 60 },
          quote: "Sword in hand, righteousness in heart!",
        },
        {
          backstory:
            "Xiao Niu is a warrior from the Demon Clan, possessing tremendous strength. Bold personality, loves drinking and making friends.",
          abilities: ["Bull Demon Charge", "Diamond Strength", "Rage Berserker", "Iron Mountain Strike"],
          stats: { attack: 100, defense: 95, speed: 60, magic: 40 },
          quote: "Strength is everything, but friendship is more important!",
        },
        {
          backstory:
            "Mo Yun is a mysterious mage from the Demon Realm. Master of dark magic but has a kind heart, always protecting the weak.",
          abilities: ["Dark Cloud Arts", "Demonic Qi Net", "Darkness Devour", "Soul Summoning"],
          stats: { attack: 75, defense: 70, speed: 85, magic: 100 },
          quote: "In darkness, I find the light of compassion.",
        },
        {
          backstory:
            "A Xoai is a wandering thief with supreme stealing skills. Humorous personality, loves joking but very loyal to friends.",
          abilities: ["Shadow Step Thievery", "Invisibility Art", "Poison Dart", "Treasure Detection"],
          stats: { attack: 80, defense: 65, speed: 100, magic: 70 },
          quote: "Fast as wind, silent as shadow, funny as... A Xoai!",
        },
      ],
    }
    return details[language][index]
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-jade-light to-purple-mystic bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-white/80">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.characters.map((character, index) => {
            const Icon = character.icon
            const isHovered = hoveredCharacter === index

            return (
              <Card
                key={index}
                className={`${character.borderColor} bg-gradient-to-br ${character.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                onMouseEnter={() => setHoveredCharacter(index)}
                onMouseLeave={() => setHoveredCharacter(null)}
                onClick={() => setSelectedCharacter(index)}
              >
                <CardContent className="p-6 text-center relative z-10">
                  <div className="relative mb-6">
                    <div
                      className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${character.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    ></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-jade-light transition-colors">
                    {character.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`mb-3 ${character.borderColor} text-white bg-transparent hover:bg-white/10`}
                  >
                    {character.title}
                  </Badge>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{character.description}</p>
                  <div
                    className={`transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="bg-black/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-xs text-white/60 mb-1">
                        {language === "vi" ? "Kỹ năng đặc biệt" : "Special Skill"}
                      </div>
                      <div className={`font-bold bg-gradient-to-r ${character.color} bg-clip-text text-transparent`}>
                        {character.skill}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${character.color} text-white border-0 text-xs`}>
                      {character.element}
                    </Badge>
                  </div>
                </CardContent>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${character.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl`}
                ></div>
              </Card>
            )
          })}
        </div>
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "vi" ? "Sức mạnh đoàn kết" : "Team Synergy"}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {language === "vi"
                  ? "Khi 5 anh hùng hợp sức, họ có thể tạo ra những combo kỹ năng mạnh mẽ và đánh bại những kẻ thù khó nhằn nhất. Mỗi nhân vật đều có vai trò riêng trong đội hình, tạo nên sự cân bằng hoàn hảo."
                  : "When the 5 heroes unite, they can create powerful skill combos and defeat the toughest enemies. Each character has their unique role in the formation, creating perfect balance."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Dialog open={selectedCharacter !== null} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-800/95 backdrop-blur-sm border-jade/30 text-white max-h-[90vh] overflow-y-auto">
          {selectedCharacter !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-jade-light to-purple-mystic bg-clip-text text-transparent flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.characters[selectedCharacter].color} flex items-center justify-center mr-4`}
                  >
                    {React.createElement(t.characters[selectedCharacter].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  {t.characters[selectedCharacter].name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative">
                  <div
                    className={`w-full h-64 rounded-lg bg-gradient-to-br ${t.characters[selectedCharacter].bgColor} border ${t.characters[selectedCharacter].borderColor} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      {React.createElement(t.characters[selectedCharacter].icon, {
                        className: "w-24 h-24 text-white/50 mx-auto mb-4",
                      })}
                      <p className="text-white/60 text-sm">
                        {language === "vi" ? "Ảnh nhân vật sẽ được thêm vào" : "Character image will be added"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-jade-light mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      {language === "vi" ? "Câu chuyện" : "Backstory"}
                    </h4>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {getCharacterDetails(selectedCharacter).backstory}
                    </p>
                    <div className="mt-4 p-4 bg-gradient-to-r from-jade/10 to-purple/10 rounded-lg border border-jade/20">
                      <p className="text-jade-light italic text-sm">"{getCharacterDetails(selectedCharacter).quote}"</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-jade-light mb-3 flex items-center">
                      <Sword className="w-5 h-5 mr-2" />
                      {language === "vi" ? "Kỹ năng" : "Abilities"}
                    </h4>
                    <div className="space-y-2">
                      {getCharacterDetails(selectedCharacter).abilities.map((ability, idx) => (
                        <div key={idx} className="flex items-center p-2 bg-black/20 rounded-lg">
                          <Star className="w-4 h-4 text-gold mr-2" />
                          <span className="text-sm text-white">{ability}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-lg font-bold text-jade-light mb-3 mt-6 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      {language === "vi" ? "Chỉ số" : "Stats"}
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(getCharacterDetails(selectedCharacter).stats).map(([stat, value]) => (
                        <div key={stat} className="flex items-center justify-between">
                          <span className="text-sm text-white/80 capitalize">
                            {language === "vi"
                              ? stat === "attack"
                                ? "Tấn công"
                                : stat === "defense"
                                  ? "Phòng thủ"
                                  : stat === "speed"
                                    ? "Tốc độ"
                                    : "Phép thuật"
                              : stat}
                          </span>
                          <div className="flex items-center">
                            <div className="w-20 h-2 bg-black/30 rounded-full mr-2">
                              <div
                                className={`h-full bg-gradient-to-r ${t.characters[selectedCharacter].color} rounded-full transition-all duration-500`}
                                style={{ width: `${value}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-white font-bold w-8">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
