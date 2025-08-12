"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sword } from "lucide-react"

interface HeaderProps {
  language: "vi" | "en"
  setLanguage: (lang: "vi" | "en") => void
}

const translations = {
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    gameplay: "Gameplay",
    blog: "Blog",
    contact: "Liên hệ",
  },
  en: {
    home: "Home",
    about: "About",
    gameplay: "Gameplay",
    blog: "Blog",
    contact: "Contact",
  },
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg shadow-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Sword className="w-8 h-8 text-gold rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-0 w-8 h-8 bg-gold/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent glow-text">
              Tiên Duyên Kỳ Hiệp
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-jade-light transition-colors duration-200 font-medium">
              {t.home}
            </Link>
            <Link href="/about" className="text-white hover:text-jade-light transition-colors duration-200 font-medium">
              {t.about}
            </Link>
            <Link
              href="/gameplay"
              className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
            >
              {t.gameplay}
            </Link>
            <Link href="/blog" className="text-white hover:text-jade-light transition-colors duration-200 font-medium">
              {t.blog}
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
            >
              {t.contact}
            </Link>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="border-jade text-jade hover:bg-jade hover:text-white transition-colors duration-200"
            >
              {language === "vi" ? "EN" : "VN"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-jade-light"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" className="text-white hover:text-jade-light transition-colors duration-200 font-medium">
                {t.home}
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
              >
                {t.about}
              </Link>
              <Link
                href="/gameplay"
                className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
              >
                {t.gameplay}
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
              >
                {t.blog}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-jade-light transition-colors duration-200 font-medium"
              >
                {t.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
