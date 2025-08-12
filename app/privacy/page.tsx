"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react"
import FloatingChat from "@/components/floating-chat"

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  const translations = {
    vi: {
      title: "Chính Sách Bảo Mật",
      subtitle: "Cam kết bảo vệ thông tin cá nhân của người chơi",
      lastUpdated: "Cập nhật lần cuối: 15/01/2025",
      sections: [
        {
          icon: Shield,
          title: "1. Cam Kết Bảo Mật",
          content: [
            "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn với mức độ bảo mật cao nhất.",
            "Mọi dữ liệu được mã hóa và lưu trữ an toàn trên hệ thống máy chủ được bảo vệ.",
            "Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế và pháp luật Việt Nam về bảo vệ dữ liệu cá nhân.",
            "Đội ngũ kỹ thuật thường xuyên cập nhật và kiểm tra hệ thống bảo mật.",
          ],
        },
        {
          icon: Database,
          title: "2. Thu Thập Thông Tin",
          content: [
            "Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp dịch vụ game tốt nhất.",
            "Thông tin bao gồm: email, tên hiển thị, thống kê game, và dữ liệu kỹ thuật cơ bản.",
            "Chúng tôi không thu thập thông tin nhạy cảm như số CMND, thông tin tài chính cá nhân.",
            "Việc thu thập thông tin được thực hiện với sự đồng ý của người dùng.",
          ],
        },
        {
          icon: Lock,
          title: "3. Sử Dụng Thông Tin",
          content: [
            "Thông tin cá nhân chỉ được sử dụng để cải thiện trải nghiệm game và hỗ trợ người chơi.",
            "Chúng tôi có thể sử dụng thông tin để gửi thông báo quan trọng về game và tài khoản.",
            "Dữ liệu thống kê được sử dụng để phân tích và cải thiện chất lượng game.",
            "Thông tin không được sử dụng cho mục đích thương mại khác ngoài dịch vụ game.",
          ],
        },
        {
          icon: Eye,
          title: "4. Chia Sẻ Thông Tin",
          content: [
            "Chúng tôi KHÔNG chia sẻ thông tin cá nhân với bên thứ ba khi chưa có sự đồng ý của bạn.",
            "Trường hợp đặc biệt: khi có yêu cầu từ cơ quan pháp luật có thẩm quyền.",
            "Các đối tác kỹ thuật chỉ được tiếp cận dữ liệu cần thiết và phải ký cam kết bảo mật.",
            "Bạn có quyền yêu cầu xóa hoặc chỉnh sửa thông tin cá nhân bất cứ lúc nào.",
          ],
        },
        {
          icon: UserCheck,
          title: "5. Quyền Của Người Dùng",
          content: [
            "Bạn có quyền truy cập, chỉnh sửa, hoặc xóa thông tin cá nhân của mình.",
            "Bạn có quyền từ chối nhận email marketing (không áp dụng cho thông báo quan trọng).",
            "Bạn có quyền yêu cầu xuất dữ liệu cá nhân hoặc chuyển sang nền tảng khác.",
            "Bạn có quyền khiếu nại nếu thấy thông tin cá nhân bị sử dụng sai mục đích.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Our commitment to protecting player personal information",
      lastUpdated: "Last updated: January 15, 2025",
      sections: [
        {
          icon: Shield,
          title: "1. Privacy Commitment",
          content: [
            "We are committed to protecting your personal information with the highest level of security.",
            "All data is encrypted and stored securely on protected server systems.",
            "We comply with international security standards and Vietnamese laws on personal data protection.",
            "Our technical team regularly updates and monitors security systems.",
          ],
        },
        {
          icon: Database,
          title: "2. Information Collection",
          content: [
            "We only collect information necessary to provide the best gaming service.",
            "Information includes: email, display name, game statistics, and basic technical data.",
            "We do not collect sensitive information such as ID numbers or personal financial information.",
            "Information collection is done with user consent.",
          ],
        },
        {
          icon: Lock,
          title: "3. Information Usage",
          content: [
            "Personal information is only used to improve gaming experience and support players.",
            "We may use information to send important notifications about the game and account.",
            "Statistical data is used for analysis and improving game quality.",
            "Information is not used for other commercial purposes outside of game services.",
          ],
        },
        {
          icon: Eye,
          title: "4. Information Sharing",
          content: [
            "We DO NOT share personal information with third parties without your consent.",
            "Special cases: when requested by competent legal authorities.",
            "Technical partners only access necessary data and must sign confidentiality agreements.",
            "You have the right to request deletion or modification of personal information at any time.",
          ],
        },
        {
          icon: UserCheck,
          title: "5. User Rights",
          content: [
            "You have the right to access, edit, or delete your personal information.",
            "You have the right to refuse marketing emails (does not apply to important notifications).",
            "You have the right to request data export or transfer to other platforms.",
            "You have the right to complain if you find personal information is misused.",
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

            {/* Privacy Sections */}
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
                  {language === "vi" ? "Liên Hệ Về Quyền Riêng Tư" : "Privacy Contact"}
                </h3>
                <p className="text-white/80 mb-4">
                  {language === "vi"
                    ? "Nếu bạn có thắc mắc về chính sách bảo mật, vui lòng liên hệ:"
                    : "If you have questions about our privacy policy, please contact:"}
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
