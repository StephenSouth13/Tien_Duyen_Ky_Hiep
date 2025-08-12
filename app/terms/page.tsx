"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, Shield, Users, AlertTriangle } from "lucide-react"
import FloatingChat from "@/components/floating-chat"

export default function TermsPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  const translations = {
    vi: {
      title: "Điều Khoản Sử Dụng",
      subtitle: "Quy định và điều khoản khi sử dụng Tiên Duyên Kỳ Hiệp",
      lastUpdated: "Cập nhật lần cuối: 15/01/2025",
      sections: [
        {
          icon: ScrollText,
          title: "1. Chấp Nhận Điều Khoản",
          content: [
            "Bằng việc truy cập và sử dụng game Tiên Duyên Kỳ Hiệp, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này.",
            "Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.",
            "Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào mà không cần thông báo trước.",
          ],
        },
        {
          icon: Users,
          title: "2. Quyền và Nghĩa Vụ Người Chơi",
          content: [
            "Người chơi có quyền trải nghiệm game một cách công bằng và được hỗ trợ kỹ thuật khi cần thiết.",
            "Người chơi có nghĩa vụ tuân thủ các quy tắc game và không làm ảnh hưởng đến trải nghiệm của người khác.",
            "Nghiêm cấm việc chia sẻ tài khoản, mua bán tài khoản hoặc các vật phẩm trong game bằng tiền thật.",
            "Người chơi phải cung cấp thông tin chính xác khi đăng ký tài khoản.",
          ],
        },
        {
          icon: Shield,
          title: "3. Chống Gian Lận",
          content: [
            "Nghiêm cấm sử dụng bất kỳ phần mềm hack, cheat, bot hoặc công cụ thứ ba nào để có lợi thế không công bằng.",
            "Việc khai thác lỗi game để thu lợi cá nhân sẽ bị xử phạt nghiêm khắc.",
            "Chúng tôi sử dụng hệ thống chống gian lận tự động và có quyền khóa tài khoản vi phạm vĩnh viễn.",
            "Người chơi có thể báo cáo hành vi gian lận thông qua hệ thống hỗ trợ.",
          ],
        },
        {
          icon: AlertTriangle,
          title: "4. Tuân Thủ Pháp Luật",
          content: [
            "Người chơi phải tuân thủ pháp luật Việt Nam và quốc tế khi sử dụng dịch vụ.",
            "Nghiêm cấm các hành vi: spam, quấy rối, đe dọa, phân biệt chủng tộc, hoặc nội dung không phù hợp.",
            "Chúng tôi hợp tác với cơ quan chức năng khi có yêu cầu điều tra pháp lý.",
            "Mọi tranh chấp sẽ được giải quyết theo pháp luật Việt Nam.",
          ],
        },
      ],
    },
    en: {
      title: "Terms of Service",
      subtitle: "Rules and terms for using Fairy Destiny Knight",
      lastUpdated: "Last updated: January 15, 2025",
      sections: [
        {
          icon: ScrollText,
          title: "1. Acceptance of Terms",
          content: [
            "By accessing and using Fairy Destiny Knight game, you agree to comply with the terms and conditions outlined in this document.",
            "If you do not agree with any of these terms, please do not use our services.",
            "We reserve the right to change these terms at any time without prior notice.",
          ],
        },
        {
          icon: Users,
          title: "2. Player Rights and Obligations",
          content: [
            "Players have the right to experience the game fairly and receive technical support when needed.",
            "Players are obligated to follow game rules and not affect other players' experience.",
            "Account sharing, buying/selling accounts or in-game items for real money is strictly prohibited.",
            "Players must provide accurate information when registering accounts.",
          ],
        },
        {
          icon: Shield,
          title: "3. Anti-Cheat Policy",
          content: [
            "Using any hack software, cheats, bots, or third-party tools for unfair advantage is strictly prohibited.",
            "Exploiting game bugs for personal gain will be severely punished.",
            "We use automated anti-cheat systems and reserve the right to permanently ban violating accounts.",
            "Players can report cheating behavior through our support system.",
          ],
        },
        {
          icon: AlertTriangle,
          title: "4. Legal Compliance",
          content: [
            "Players must comply with Vietnamese and international laws when using our services.",
            "Prohibited behaviors include: spam, harassment, threats, racism, or inappropriate content.",
            "We cooperate with authorities when legally required for investigations.",
            "All disputes will be resolved according to Vietnamese law.",
          ],
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <section className="py-20 px-4 min-h-screen bg-gradient-to-b from-slate-900 to-purple-900">
          <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-jade-light via-gold to-purple-mystic bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-lg text-white/80 mb-4">{t.subtitle}</p>
              <p className="text-sm text-white/60">{t.lastUpdated}</p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {t.sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex items-center">
                        <Icon className="w-6 h-6 mr-3 text-jade" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-white/80 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Contact Info */}
            <Card className="mt-12 bg-gradient-to-br from-gold/10 to-gold-dark/10 border-gold/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  {language === "vi" ? "Liên Hệ Hỗ Trợ" : "Contact Support"}
                </h3>
                <p className="text-white/80 mb-4">
                  {language === "vi"
                    ? "Nếu bạn có thắc mắc về các điều khoản này, vui lòng liên hệ:"
                    : "If you have questions about these terms, please contact:"}
                </p>
                <p className="text-gold font-medium">stephensouth1307@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer language={language} />
      <FloatingChat />
    </div>
  )
}
