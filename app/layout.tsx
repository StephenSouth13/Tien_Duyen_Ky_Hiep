import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Noto_Serif_SC, Inter } from "next/font/google"
import "./globals.css"
import WeatherEffects from "@/components/weather-effects"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cinzel",
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-sc",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tiên Duyên Kỳ Hiệp - Game Tiên Hiệp 2D Chibi | TienDuyenKyLong",
  description:
    "Bước vào hành trình tu tiên hài hước nhất Tam Giới. Game tiên hiệp 2D chibi với đồ họa tuyệt đẹp và gameplay hấp dẫn. Phát triển bởi Quách Thành Long.",
  keywords: "game tiên hiệp, 2D chibi, tu tiên, Tiên Duyên Kỳ Hiệp, game online, TienDuyenKyLong",
  authors: [{ name: "Quách Thành Long (TienDuyenKyLong)" }],
  creator: "Quách Thành Long - TienDuyenKyLong Studio",
  publisher: "TienDuyenKyLong Studio",
  applicationName: "Tiên Duyên Kỳ Hiệp",
  generator: "TienDuyenKyLong Studio",
  openGraph: {
    title: "Tiên Duyên Kỳ Hiệp - Game Tiên Hiệp 2D Chibi",
    description: "Bước vào hành trình tu tiên hài hước nhất Tam Giới. Phát triển bởi TienDuyenKyLong Studio.",
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: "TienDuyenKyLong Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiên Duyên Kỳ Hiệp - Game Tiên Hiệp 2D Chibi",
    description: "Bước vào hành trình tu tiên hài hước nhất Tam Giới",
    creator: "@TienDuyenKyLong",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${cinzel.variable} ${notoSerifSC.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-serif antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen custom-cursor">
        <div id="particles-bg" className="fixed inset-0 pointer-events-none z-0"></div>
        <WeatherEffects />
        {children}
      </body>
    </html>
  )
}
