"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Bot, Send, Sparkles, Heart, Wind } from "lucide-react"
import type { Message } from "@/types/message"

const cultivationQuotes = [
  "Đạo tâm như thủy, tĩnh lặng mà sâu thẳm. 道心如水，静而深远。",
  "Tình duyên tiền định, gặp gỡ là duyên phận. 情缘前定，相遇即是缘分。",
  "Tu tiên chi đạo, nhẫn nại là then chốt. 修仙之道，忍耐为关键。",
  "Thiên đạo luân hồi, thiện ác tự có báo ứng. 天道轮回，善恶自有报应。",
  "Tâm tịnh tự nhiên lương, ý thành tắc linh. 心静自然凉，意诚则灵。",
  "Phong ba tâm sự, chỉ có đạo hữu hiểu. 风波心事，只有道友懂。",
  "Cảm ngộ thiên cơ, đốn ngộ đại đạo. 感悟天机，顿悟大道。",
  "Tình như lưu thủy, đạo như núi cao. 情如流水，道如高山。",
  "Tu luyện ngàn năm, chỉ vì một niệm. 修炼千年，只为一念。",
  "Duyên phận trời định, tình nghĩa người làm. 缘分天定，情义人为。",
  "Đạo pháp tự nhiên, thuận theo thiên ý. 道法自然，顺应天意。",
  "Tâm ma dễ sinh, đạo tâm khó giữ. 心魔易生，道心难守。",
  "Thiên địa vô tình, vạn vật như cỏ rơm. 天地无情，万物如刍狗。",
  "Tu tiên cầu đạo, trước tu tâm tính. 修仙求道，先修心性。",
  "Tình sâu duyên cạn, đạo cao ma trọng. 情深缘浅，道高魔重。",
  "Nhất niệm thành ma, nhất niệm thành Phật. 一念成魔，一念成佛。",
  "Thiên cơ bất khả lộ, duyên phận tự an bài. 天机不可露，缘分自安排。",
  "Tu luyện như nghịch thủy hành chu. 修炼如逆水行舟。",
  "Đạo tâm kiên định, vạn pháp không xâm. 道心坚定，万法不侵。",
  "Tình duyên như mộng, tỉnh lại vẫn là không. 情缘如梦，醒来仍是空。",
]

const gameKnowledge = {
  story:
    "Tiên Duyên Kỳ Hiệp là câu chuyện về hành trình thu thập 7 mảnh Thiên Tâm Thạch qua Tam Giới. Người chơi sẽ trải nghiệm cuộc phiêu lưu tu tiên đầy hài hước và cảm động.",
  characters:
    "Game có 5 nhân vật chính: Linh Nhi (tiểu tiên nữ), Hạo Vũ (kiếm hiệp trẻ), Tiểu Ngưu (lực sĩ yêu tộc), Mặc Vân (pháp sư ma tộc), và A Xoài (đạo chích lang thang).",
  gameplay:
    "Game kết hợp yếu tố nhập vai, hành động và chiến thuật. Người chơi có thể tu luyện, chiến đấu, kết bạn và khám phá thế giới rộng lớn.",
  features: "Hệ thống tu luyện độc đáo, PvP kịch tính, guild system, pet system, và nhiều hoạt động thú vị khác.",
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌸 Chào mừng đạo hữu đến với Tiên Duyên Kỳ Hiệp! Tại hạ là Linh Nhi, trợ lý tu tiên của ngươi. Có điều gì thắc mắc về hành trình tu tiên không? ✨",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [currentQuote, setCurrentQuote] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      const randomQuote = cultivationQuotes[Math.floor(Math.random() * cultivationQuotes.length)]
      setCurrentQuote(randomQuote)
    }, 15000)

    // Set initial quote
    setCurrentQuote(cultivationQuotes[0])

    return () => clearInterval(quoteInterval)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("cốt truyện") || lowerMessage.includes("story")) {
      return `🏮 ${gameKnowledge.story} Đạo hữu có muốn biết thêm về các nhân vật chính không? ⚔️`
    }

    if (lowerMessage.includes("nhân vật") || lowerMessage.includes("character")) {
      return `🗡️ ${gameKnowledge.characters} Mỗi nhân vật đều có câu chuyện và kỹ năng độc đáo riêng! ✨`
    }

    if (lowerMessage.includes("gameplay") || lowerMessage.includes("chơi")) {
      return `⚡ ${gameKnowledge.gameplay} Hành trình tu tiên này sẽ rất thú vị đấy! 🌟`
    }

    if (lowerMessage.includes("tính năng") || lowerMessage.includes("feature")) {
      return `🎮 ${gameKnowledge.features} Đạo hữu muốn trải nghiệm tính năng nào trước? 🚀`
    }

    if (lowerMessage.includes("xin chào") || lowerMessage.includes("hello")) {
      return `🌸 Xin chào đạo hữu! Tại hạ rất vui được gặp ngươi. Có điều gì cần tư vấn về hành trình tu tiên không? Như cổ nhân có câu: "${cultivationQuotes[Math.floor(Math.random() * cultivationQuotes.length)]}" ✨`
    }

    if (lowerMessage.includes("cảm ơn") || lowerMessage.includes("thank")) {
      return `🙏 Đạo hữu khách khí quá! Giúp đỡ đồng đạo là bổn phận của tại hạ. Chúc đạo hữu tu tiên thuận lợi! 🌟`
    }

    // Default responses with cultivation wisdom
    const responses = [
      `🌸 Tại hạ hiểu rồi! Như cổ nhân có câu: "${cultivationQuotes[Math.floor(Math.random() * cultivationQuotes.length)]}" Đạo hữu có thể hỏi thêm về game nhé! ✨`,
      `⚔️ Thú vị! Trong Tiên Duyên Kỳ Hiệp, mọi câu hỏi đều có thể tìm được đáp án. Đạo hữu muốn khám phá điều gì? 🏮`,
      `🌟 Tu tiên chi đạo, học hỏi không ngừng! Tại hạ sẵn sàng chia sẻ kiến thức về thế giới game với đạo hữu! ⚡`,
      `✨ Như người xưa nói: "${cultivationQuotes[Math.floor(Math.random() * cultivationQuotes.length)]}" Đạo hữu còn thắc mắc gì khác không? 🎋`,
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)]">
      {isOpen && (
        <Card className="w-80 sm:w-96 h-[500px] mb-4 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-800/95 backdrop-blur-sm border-jade/30 shadow-2xl shadow-jade/20 max-w-full">
          <CardHeader className="pb-3 border-b border-jade/20 px-3 sm:px-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm sm:text-base text-white flex items-center min-w-0">
                <div className="relative mr-2 flex-shrink-0">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-jade animate-pulse" />
                  <Sparkles className="w-2 h-2 text-gold absolute -top-1 -right-1 animate-spin" />
                </div>
                <span className="bg-gradient-to-r from-jade-light to-gold bg-clip-text text-transparent truncate">
                  Linh Nhi - Trợ lý Tu Tiên
                </span>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white hover:bg-jade/20 flex-shrink-0 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {currentQuote && (
              <div className="mt-2 p-2 bg-gradient-to-r from-jade/10 to-purple/10 rounded-lg border border-jade/20">
                <p className="text-xs text-jade-light italic flex items-start">
                  <Wind className="w-3 h-3 mr-1 animate-pulse flex-shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">{currentQuote}</span>
                </p>
              </div>
            )}
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-3 overflow-hidden">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-thin scrollbar-thumb-jade/30 scrollbar-track-transparent">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] p-2 sm:p-3 rounded-2xl break-words ${
                      message.isBot
                        ? "bg-gradient-to-r from-jade/20 to-purple/20 border border-jade/30 text-white"
                        : "bg-gradient-to-r from-gold/20 to-purple/20 border border-gold/30 text-white"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs text-white/50 mt-1">
                      {message.timestamp.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hỏi về game, cốt truyện..."
                className="flex-1 bg-slate-800/50 border border-jade/30 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-jade focus:ring-2 focus:ring-jade/20 transition-all min-w-0"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-jade to-jade-dark hover:from-jade-light hover:to-jade shadow-lg shadow-jade/30 hover:shadow-jade/50 transition-all duration-300 px-3 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-1 sm:gap-2">
              {["Cốt truyện", "Nhân vật", "Gameplay", "Tính năng"].map((topic) => (
                <Button
                  key={topic}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setInputValue(topic)
                    handleSendMessage()
                  }}
                  className="text-xs border-jade/30 text-jade hover:bg-jade/20 hover:border-jade px-2 py-1 flex-shrink-0"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-jade via-jade-dark to-purple-mystic hover:from-jade-light hover:to-purple shadow-2xl shadow-jade/50 hover:shadow-jade/70 transition-all duration-300 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        {isOpen ? (
          <X className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <Heart className="w-2 h-2 text-pink-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
        )}
      </Button>
    </div>
  )
}
