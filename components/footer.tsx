"use client"

import Link from "next/link"
import { Sword, Facebook, Youtube, Music } from "lucide-react"

interface FooterProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    quickLinks: "Liên kết nhanh",
    terms: "Điều khoản",
    privacy: "Chính sách bảo mật",
    feedback: "Góp ý",
    copyright: "© 2025 Quách Thành Long – Nhà phát triển Tiên Duyên Kỳ Hiệp",
    followUs: "Theo dõi chúng tôi",
  },
  en: {
    quickLinks: "Quick Links",
    terms: "Terms",
    privacy: "Privacy Policy",
    feedback: "Feedback",
    copyright: "© 2025 Quach Thanh Long – Developer of Fairy Destiny Knight",
    followUs: "Follow Us",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-purple-900/50 to-transparent border-t border-jade/20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cloud opacity-10" style={{ top: "20%", animationDuration: "25s" }}>
          ☁️
        </div>
        <div className="cloud opacity-10" style={{ top: "60%", animationDuration: "30s", animationDelay: "5s" }}>
          ☁️
        </div>

        {/* Glowing logo effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-jade/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-3 group mb-4">
              <div className="relative">
                <Sword className="w-8 h-8 text-gold rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 w-8 h-8 bg-gold/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent">
                Tiên Duyên Kỳ Hiệp
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {language === "vi"
                ? "Hành trình tu tiên hài hước nhất Tam Giới đang chờ đón bạn!"
                : "The most hilarious cultivation journey in the Three Realms awaits you!"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">{t.quickLinks}</h3>
            <div className="space-y-2">
              <Link href="/terms" className="block text-white/70 hover:text-jade-light transition-colors text-sm">
                {t.terms}
              </Link>
              <Link href="/privacy" className="block text-white/70 hover:text-jade-light transition-colors text-sm">
                {t.privacy}
              </Link>
              <Link href="/feedback" className="block text-white/70 hover:text-jade-light transition-colors text-sm">
                {t.feedback}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">{t.followUs}</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/long.quach.273823/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@southstephenins"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors group"
              >
                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/longquach130723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-colors group"
              >
                <Music className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
