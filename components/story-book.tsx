"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

const storyPages = [
  {
    title: "KHỞI NGUYÊN",
    content: `Ngàn vạn năm trước, giữa Tam Giới (Tiên – Nhân – Ma) tồn tại một viên bảo thạch huyền bí tên là Thiên Tâm Thạch.

Nó được sinh ra từ giọt lệ cuối cùng của Thần Nữ Tạo Thế, ẩn chứa sức mạnh dung hòa sinh tử, xoay chuyển càn khôn.

Thiên Tâm Thạch không thuộc về bất kỳ giới nào. Khi nó tỏa sáng, chiến tranh dừng lại, vạn vật sinh sôi. Nhưng khi nó bị tổn thương, cả Tam Giới rơi vào hỗn loạn.`,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "BIẾN CỐ",
    content: `Một đêm Huyết Nguyệt, Ma Tôn Hắc Thiên phá phong ấn, xé toạc bầu trời, cướp đi Thiên Tâm Thạch. Sức mạnh bị đánh thức khiến linh khí tràn ngập, yêu ma quỷ quái thức giấc, cổ thú hồi sinh.

Trong trận chiến, Thiên Tâm Thạch vỡ thành 7 mảnh, bay khắp Tam Giới:

• Nhân Gian: nơi phàm nhân sinh sống
• Yêu Vực: rừng sâu, núi thẳm  
• Tiên Giới: lầu các ngọc bích
• Ma Giới: vực sâu tăm tối`,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "NGƯỜI ĐƯỢC CHỌN",
    content: `Bạn vào vai một kẻ vô danh sinh ra ở Nhân Gian, chỉ mong sống bình yên.

Một ngày, khi đi săn thú ở Thung Lũng Sương Mù, bạn vô tình cứu một tiểu hồ ly bị thương. Không ngờ nó là hóa thân của một mảnh Thiên Tâm Thạch.

Từ giây phút đó, bạn bị cuốn vào dòng xoáy của số mệnh — nơi mỗi bước đi, mỗi đồng minh, mỗi kẻ thù đều có thể thay đổi tương lai của Tam Giới.`,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "HÀNH TRÌNH",
    content: `Để thu thập đủ 7 mảnh Thiên Tâm Thạch, bạn phải:

🗡️ Tầm sư học đạo – bái nhập môn phái, học tuyệt kỹ võ công hoặc tiên pháp.

🌍 Du hành Tam Giới – vượt qua những vùng đất huyền thoại, mỗi nơi một câu chuyện riêng.

⚔️ PK sinh tử – đối đầu người chơi khác để tranh tài, cướp mảnh bảo thạch.

👹 Quyết chiến Ma Tôn – trận cuối định đoạt vận mệnh Tam Giới.`,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    title: "KẾT THÚC MỞ",
    content: `Khi thu thập đủ 7 mảnh Thiên Tâm Thạch, bạn có quyền lựa chọn:

🕊️ Trả lại cho Tam Giới → hòa bình được lập lại, nhưng sức mạnh biến mất mãi mãi.

👑 Giữ cho riêng mình → bạn trở thành kẻ mạnh nhất, nhưng bị toàn Tam Giới truy sát.

💥 Phá hủy hoàn toàn → cắt đứt vòng lặp chiến tranh, nhưng Tam Giới rơi vào thời kỳ linh khí cạn kiệt.

Từ đây, game mở ra nhiều bản mở rộng với tuyến cốt truyện khác nhau.`,
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function StoryBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextPage = () => {
    if (currentPage < storyPages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-jade-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-jade-400 to-gold-400 bg-clip-text text-transparent">
            Cốt Truyện
          </h2>
        </div>
        <p className="text-gold-300 text-lg">Khám phá câu chuyện huyền thoại của Tiên Duyên Kỳ Hiệp</p>
      </div>

      {/* Book Container */}
      <div className="relative mx-auto" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-2xl overflow-hidden"
          style={{
            height: "600px",
            transform: "rotateX(5deg)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(139,69,19,0.1)",
          }}
        >
          {/* Book Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-800 to-amber-900 shadow-inner"></div>

          {/* Page Content */}
          <div
            className={`absolute inset-0 ml-8 transition-all duration-300 ${isFlipping ? "transform rotateY-180" : ""}`}
          >
            <div className="h-full flex">
              {/* Left Page */}
              <div className="w-1/2 p-8 border-r border-amber-200">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <img
                      src={storyPages[currentPage].image || "/placeholder.svg"}
                      alt={storyPages[currentPage].title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-amber-200"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-amber-800 mb-2 font-serif">
                      {storyPages[currentPage].title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-jade-400 to-gold-400 mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Right Page */}
              <div className="w-1/2 p-8">
                <div className="h-full flex flex-col justify-center">
                  <div className="prose prose-amber max-w-none">
                    <div className="text-amber-900 leading-relaxed text-base font-serif whitespace-pre-line">
                      {storyPages[currentPage].content}
                    </div>
                  </div>

                  {/* Page Number */}
                  <div className="mt-auto text-center">
                    <span className="text-amber-600 text-sm font-serif">
                      {currentPage + 1} / {storyPages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Flip Effect Overlay */}
          {isFlipping && (
            <div className="absolute inset-0 ml-8 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-800 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === storyPages.length - 1 || isFlipping}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-800 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {storyPages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isFlipping) {
                setIsFlipping(true)
                setTimeout(() => {
                  setCurrentPage(index)
                  setIsFlipping(false)
                }, 300)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentPage ? "bg-jade-400 scale-125" : "bg-amber-300 hover:bg-amber-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
