"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface BlogListProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Cộng Đồng Game",
    subtitle: "Tin tức, sự kiện và tâm sự của cộng đồng",
    readMore: "Đọc thêm",
    author: "Tác giả",
    views: "lượt xem",
    filterAll: "Tất cả",
    categories: {
      update: "Cập nhật",
      event: "Sự kiện",
      story: "Tâm sự",
      guide: "Hướng dẫn",
      news: "Tin tức",
    },
    posts: [
      {
        id: "cap-nhat-phien-ban-2-0",
        title: "Cập nhật phiên bản 2.0 - Tam Giới Đại Chiến",
        excerpt:
          "Chào mừng các đạo hữu đến với bản cập nhật lớn nhất trong lịch sử Tiên Duyên Kỳ Hiệp! Phiên bản 2.0 mang đến hệ thống Tam Giới mở rộng, Guild War, Pet System 2.0 và nhiều tính năng hấp dẫn khác.",
        category: "update",
        author: "GM Linh Nhi",
        date: "2024-12-15",
        views: 1250,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "su-kien-tet-nguyen-dan",
        title: "Sự kiện Tết Nguyên Đán - Xuân Về Tam Giới",
        excerpt:
          "Tết Nguyên Đán đang đến gần! Tham gia sự kiện 'Xuân Về Tam Giới' với lì xì may mắn, hội chợ xuân, múa lân múa rồng, đua thuyền rồng và vô vàn phần thưởng độc quyền.",
        category: "event",
        author: "GM Hạo Vũ",
        date: "2024-12-10",
        views: 980,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "tam-su-game-thu",
        title: "Tâm sự của một game thủ 5 năm - Hành trình tu tiên không hối hận",
        excerpt:
          "Chia sẻ từ đạo hữu Vô Cực về 5 năm gắn bó với Tiên Duyên Kỳ Hiệp. Từ newbie lúng túng đến lão làng, những kỷ niệm đẹp, khó khăn và bài học quý giá trong hành trình tu tiên.",
        category: "story",
        author: "Đạo hữu Vô Cực",
        date: "2024-12-08",
        views: 2100,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "huong-dan-newbie",
        title: "Hướng dẫn newbie - Bí kíp tu tiên cho người mới",
        excerpt:
          "Hướng dẫn chi tiết dành cho đạo hữu mới bắt đầu hành trình tu tiên. Cách chọn nhân vật, phân bổ điểm kỹ năng, chiến thuật đánh boss và tips để phát triển nhanh chóng.",
        category: "guide",
        author: "Master Kiếm Thần",
        date: "2024-12-05",
        views: 3200,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "pvp-tournament-thang-12",
        title: "Giải đấu PvP tháng 12 - Tranh Bá Tam Giới",
        excerpt:
          "Giải đấu PvP lớn nhất năm sắp diễn ra! Đăng ký ngay để tranh tài cùng các cao thủ và nhận những phần thưởng cực khủng. Thể thức thi đấu mới với nhiều bất ngờ thú vị.",
        category: "event",
        author: "Tournament Team",
        date: "2024-12-01",
        views: 4200,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "cam-nang-guild",
        title: "Cẩm nang Guild - Xây dựng bang phái mạnh nhất",
        excerpt:
          "Hướng dẫn toàn diện về hệ thống Guild: cách tạo bang, quản lý thành viên, chiến thuật Guild War, và bí quyết xây dựng một bang phái thống trị server.",
        category: "guide",
        author: "Guild Master Thiên Long",
        date: "2024-11-28",
        views: 1800,
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  en: {
    title: "Game Community",
    subtitle: "Latest news, events and player stories",
    readMore: "Read More",
    author: "Author",
    views: "views",
    filterAll: "All",
    categories: {
      update: "Update",
      event: "Event",
      story: "Story",
      guide: "Guide",
      news: "News",
    },
    posts: [
      {
        id: "cap-nhat-phien-ban-2-0",
        title: "Version 2.0 Update - Three Realms War",
        excerpt:
          "Welcome to the biggest update in Fairy Destiny Knight history! Version 2.0 brings expanded Three Realms system, Guild War, Pet System 2.0 and many exciting features.",
        category: "update",
        author: "GM Linh Nhi",
        date: "2024-12-15",
        views: 1250,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "su-kien-tet-nguyen-dan",
        title: "Lunar New Year Event - Spring Comes to Three Realms",
        excerpt:
          "Lunar New Year is approaching! Join the 'Spring Comes to Three Realms' event with lucky money, spring fair, lion dance, dragon boat racing and countless exclusive rewards.",
        category: "event",
        author: "GM Hao Vu",
        date: "2024-12-10",
        views: 980,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "tam-su-game-thu",
        title: "5-Year Gamer's Story - A Cultivation Journey Without Regrets",
        excerpt:
          "Sharing from fellow cultivator Vo Cuc about 5 years with Fairy Destiny Knight. From confused newbie to veteran, beautiful memories, challenges and valuable lessons in the cultivation journey.",
        category: "story",
        author: "Fellow Cultivator Vo Cuc",
        date: "2024-12-08",
        views: 2100,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "huong-dan-newbie",
        title: "Newbie Guide - Cultivation Secrets for Beginners",
        excerpt:
          "Detailed guide for new cultivators starting their journey. How to choose characters, allocate skill points, boss fighting tactics and tips for rapid development.",
        category: "guide",
        author: "Master Sword God",
        date: "2024-12-05",
        views: 3200,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "pvp-tournament-thang-12",
        title: "December PvP Tournament - Battle for Three Realms Supremacy",
        excerpt:
          "The biggest PvP tournament of the year is coming! Register now to compete with masters and receive amazing rewards. New tournament format with many exciting surprises.",
        category: "event",
        author: "Tournament Team",
        date: "2024-12-01",
        views: 4200,
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "cam-nang-guild",
        title: "Guild Handbook - Building the Strongest Faction",
        excerpt:
          "Comprehensive guide to Guild system: how to create factions, manage members, Guild War tactics, and secrets to building a server-dominating faction.",
        category: "guide",
        author: "Guild Master Heavenly Dragon",
        date: "2024-11-28",
        views: 1800,
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
}

export default function BlogList({ language }: BlogListProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const t = translations[language]

  const filteredPosts = activeFilter === "all" ? t.posts : t.posts.filter((post) => post.category === activeFilter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "update":
        return "bg-gradient-to-r from-jade to-jade-dark text-white"
      case "event":
        return "bg-gradient-to-r from-purple-mystic to-purple-deep text-white"
      case "story":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
      case "guide":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      case "news":
        return "bg-gradient-to-r from-gold to-gold-dark text-white"
      default:
        return "bg-slate-600 text-white"
    }
  }

  return (
    <section className="py-20 px-4 min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-jade-light to-purple-mystic bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-jade to-jade-dark text-white shadow-lg shadow-jade/30"
                : "bg-slate-800/50 text-white/70 hover:bg-slate-700/50 border border-jade/30"
            }`}
          >
            {t.filterAll}
          </button>
          {Object.entries(t.categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === key
                  ? getCategoryColor(key) + " shadow-lg"
                  : "bg-slate-800/50 text-white/70 hover:bg-slate-700/50 border border-jade/30"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 border-jade/30 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-jade/20 transition-all duration-500 cursor-pointer group overflow-hidden h-full">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Category Badge */}
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)} border-0`}>
                      {t.categories[post.category as keyof typeof t.categories]}
                    </Badge>

                    {/* Views */}
                    <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()} {t.views}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-jade-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString(language === "vi" ? "vi-VN" : "en-US")}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="inline-flex items-center text-jade hover:text-jade-light transition-colors text-sm font-medium group">
                    {t.readMore}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-jade to-jade-dark hover:from-jade-light hover:to-jade text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-jade/50 hover:shadow-jade/70 transition-all duration-300 transform hover:scale-105">
            {language === "vi" ? "Tải thêm bài viết" : "Load More Posts"}
          </button>
        </div>
      </div>
    </section>
  )
}
