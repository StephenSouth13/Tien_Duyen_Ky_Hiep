"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Eye, Heart, Share2, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const blogPosts = {
  "cap-nhat-phien-ban-2-0": {
    title: "Cập nhật phiên bản 2.0 - Tam Giới Đại Chiến",
    category: "Cập nhật",
    author: "GM Linh Nhi",
    date: "2024-12-15",
    readTime: "5 phút đọc",
    views: 1250,
    likes: 89,
    image: "/placeholder.svg?height=400&width=800",
    content: `
# Tam Giới Đại Chiến - Phiên bản 2.0

Chào mừng các đạo hữu đến với bản cập nhật lớn nhất trong lịch sử Tiên Duyên Kỳ Hiệp! Phiên bản 2.0 "Tam Giới Đại Chiến" chính thức ra mắt với hàng loạt tính năng mới hấp dẫn.

## 🌟 Tính năng mới nổi bật

### 1. Hệ thống Tam Giới mở rộng
- **Tiên Giới**: Thêm 5 khu vực mới với boss cấp độ Tiên Đế
- **Nhân Giới**: Mở rộng thế giới với 10 thành phố lớn
- **Ma Giới**: Khu vực PvP hoàn toàn mới với phần thưởng hấp dẫn

### 2. Hệ thống Guild War
- Chiến tranh liên bang quy mô lớn
- Tranh giành lãnh thổ giữa các bang phái
- Phần thưởng độc quyền cho bang phái chiến thắng

### 3. Pet System 2.0
- 20 loại thú cưng mới từ Tam Giới
- Hệ thống tiến hóa pet với 5 cấp độ
- Pet có thể tham gia chiến đấu cùng chủ nhân

## ⚔️ Cân bằng gameplay

### Điều chỉnh nhân vật
- **Linh Nhi**: Tăng sát thương kỹ năng gió 15%
- **Hạo Vũ**: Giảm thời gian hồi chiêu kiếm pháp
- **Tiểu Ngưu**: Tăng HP và phòng thủ
- **Mặc Vân**: Cải thiện hiệu ứng ma thuật
- **A Xoài**: Tăng tốc độ di chuyển và tàng hình

### Hệ thống trang bị mới
- Thêm 50+ món trang bị Thần Khí cấp
- Hệ thống nâng cấp trang bị với Thiên Tâm Thạch
- Trang bị có thể thay đổi ngoại hình

## 🎉 Sự kiện ra mắt

### Tuần lễ Tam Giới (15/12 - 22/12)
- **Ngày 1-2**: Double EXP toàn server
- **Ngày 3-4**: Sự kiện săn boss hiếm
- **Ngày 5-6**: PvP Tournament với giải thưởng khủng
- **Ngày 7**: Lễ hội Tam Giới với mini-game

### Phần thưởng đặc biệt
- Đăng nhập 7 ngày liên tiếp nhận pet Rồng Vàng
- Top 100 player đầu tiên đạt level 80 nhận title "Tiên Giới Tiên Phong"
- Hoàn thành quest line mới nhận mount "Phượng Hoàng Lửa"

## 🔧 Cải thiện kỹ thuật

- Tối ưu hóa hiệu suất game, giảm lag 40%
- Cải thiện giao diện người dùng
- Thêm hệ thống auto-save
- Hỗ trợ đa ngôn ngữ tốt hơn

## 📱 Tương thích mobile

Phiên bản mobile cũng được cập nhật đồng bộ với:
- Điều khiển cảm ứng được tối ưu
- Giao diện thân thiện với màn hình nhỏ
- Hỗ trợ chơi cross-platform

---

*Cảm ơn tất cả đạo hữu đã đồng hành cùng Tiên Duyên Kỳ Hiệp. Chúc các bạn có những trải nghiệm tuyệt vời trong phiên bản mới!*

**- Đội ngũ phát triển Tiên Duyên Kỳ Hiệp**
    `,
    tags: ["Cập nhật", "Tam Giới", "Guild War", "Pet System"],
    relatedPosts: ["su-kien-tet-nguyen-dan", "huong-dan-newbie", "pvp-tournament-thang-12"],
  },
  "su-kien-tet-nguyen-dan": {
    title: "Sự kiện Tết Nguyên Đán - Xuân Về Tam Giới",
    category: "Sự kiện",
    author: "GM Hạo Vũ",
    date: "2024-12-10",
    readTime: "4 phút đọc",
    views: 980,
    likes: 156,
    image: "/placeholder.svg?height=400&width=800",
    content: `
# Xuân Về Tam Giới - Sự kiện Tết Nguyên Đán 2025

Tết Nguyên Đán đang đến gần, và Tam Giới cũng tràn ngập không khí xuân về! Cùng tham gia sự kiện "Xuân Về Tam Giới" với vô vàn hoạt động thú vị và phần thưởng hấp dẫn.

## 🧧 Thời gian sự kiện
**Từ 25/01/2025 đến 15/02/2025**

## 🎊 Các hoạt động chính

### 1. Lì xì Tam Giới
- Đăng nhập mỗi ngày nhận lì xì may mắn
- Lì xì chứa: Gold, EXP, item hiếm, pet egg
- Ngày đầu năm nhận lì xì đặc biệt x5

### 2. Hội chợ Xuân
- Khu vực mua sắm đặc biệt mở tại 3 thành phố chính
- Trao đổi "Hoa Mai" lấy trang bị Tết độc quyền
- Các món ăn Tết tăng buff đặc biệt

### 3. Múa Lân - Múa Rồng
- Mini-game múa lân với phần thưởng hấp dẫn
- Thi đấu múa rồng theo đội, đội thắng nhận title
- Biểu diễn múa lân mỗi 2 tiếng tại thành phố

### 4. Đua Thuyền Rồng
- Sự kiện PvP đặc biệt trên sông
- 5v5 team battle trên thuyền rồng
- Thắng 10 trận liên tiếp nhận mount "Rồng Vàng"

## 🎁 Phần thưởng độc quyền

### Trang phục Tết
- **Áo Dài Xuân**: Tăng 20% EXP, hiệu ứng hoa mai bay
- **Khăn Đóng Xuân**: Tăng 15% Gold drop
- **Giày Thêu Rồng**: Tăng 10% tốc độ di chuyển

### Pet Tết đặc biệt
- **Heo Vàng May Mắn**: Pet tăng luck, giúp drop item hiếm
- **Chuột Bạch Kim**: Pet tăng EXP cho cả team
- **Rồng Xuân**: Pet chiến đấu mạnh với skill "Hơi Thở Xuân"

### Mount độc quyền
- **Kỳ Lân Xuân**: Mount bay với hiệu ứng hoa đào
- **Phượng Hoàng Lửa**: Mount hiếm nhất, chỉ 100 người có

## 🏮 Trang trí Tam Giới

Toàn bộ 3 giới được trang hoàng lộng lẫy:
- **Tiên Giới**: Hoa đào nở rộ, đèn lồng vàng
- **Nhân Giới**: Pháo hoa, bánh chưng, cây nêu
- **Ma Giới**: Phong cách Tết ma quái độc đáo

## 🎯 Quest line đặc biệt

### "Tìm Lại Mùa Xuân"
- 15 quest kể về truyền thuyết Tết cổ xưa
- Phần thưởng cuối: Title "Sứ Giả Mùa Xuân"
- Mở khóa khu vực bí mật "Vườn Xuân Bất Tử"

### "Đoàn Viên Tam Giới"
- Quest tập thể, cần cả server cùng hoàn thành
- Mục tiêu: Thu thập 1 triệu "Lời Chúc Xuân"
- Thành công: Toàn server nhận buff "Phúc Lộc Thọ" 1 tháng

## 🍜 Ẩm thực Tết

Các món ăn Tết với hiệu ứng đặc biệt:
- **Bánh Chưng**: Tăng HP max 30 phút
- **Mứt Tết**: Tăng MP regen 1 giờ  
- **Chả Lụa**: Tăng sát thương vật lý 45 phút
- **Nem Rán**: Tăng tốc độ tấn công 30 phút

---

*Chúc tất cả đạo hữu một năm mới an khang thịnh vượng, tu tiên tiến bộ vượt bậc!*

**Xuân Ất Tỵ 2025 - Đội ngũ Tiên Duyên Kỳ Hiệp**
    `,
    tags: ["Sự kiện", "Tết", "Xuân", "Phần thưởng"],
    relatedPosts: ["cap-nhat-phien-ban-2-0", "tam-su-game-thu", "huong-dan-newbie"],
  },
  "tam-su-game-thu": {
    title: "Tâm sự của một game thủ 5 năm - Hành trình tu tiên không hối hận",
    category: "Tâm sự",
    author: "Đạo hữu Vô Cực",
    date: "2024-12-08",
    readTime: "8 phút đọc",
    views: 2100,
    likes: 234,
    image: "/placeholder.svg?height=400&width=800",
    content: `
# 5 Năm Tu Tiên - Một Hành Trình Không Hối Hận

*Bài viết được chia sẻ bởi đạo hữu Vô Cực - một trong những game thủ kỳ cựu nhất của Tiên Duyên Kỳ Hiệp*

---

Ngồi đây viết những dòng này, tôi không khỏi xúc động khi nhìn lại 5 năm gắn bó với Tiên Duyên Kỳ Hiệp. Từ một newbie lúng túng không biết gì, đến giờ đây là một "lão làng" trong cộng đồng, quả thật là một hành trình đáng nhớ.

## 🌱 Những ngày đầu - Newbie lúng túng

Còn nhớ ngày đầu tiên vào game, tôi chọn nhân vật Hạo Vũ vì thấy kiếm sĩ trông ngầu. Nhưng mà... ngầu thì có ngầu, chết thì cũng chết nhiều! 😅

Lúc đó tôi không hiểu gì về:
- Cách phân bổ điểm kỹ năng
- Chiến thuật đánh boss
- Hệ thống guild và làm việc nhóm
- Thậm chí là cách chat với người khác!

Nhớ lần đầu vào dungeon, tôi cứ lao vào đánh như Rambo, kết quả là team phải carry tôi suốt. Cảm ơn những anh chị đã kiên nhẫn chỉ dạy newbie ngày đó!

## ⚔️ Giai đoạn phát triển - Tìm hiểu game

Sau khoảng 6 tháng chơi, tôi bắt đầu hiểu được cơ chế game:

### Khám phá thế giới
- **Tiên Giới**: Cảnh đẹp như tranh, nhưng monster khó nhằn
- **Nhân Giới**: Nơi tôi dành phần lớn thời gian leveling
- **Ma Giới**: Vùng đất PvP khốc liệt, lúc đầu không dám bén mảng

### Học được bài học
- Không nên solo boss cấp cao (đã chết vô số lần mới hiểu 😂)
- Tầm quan trọng của teamwork
- Kiên nhẫn farm để có trang bị tốt
- Giao lưu với cộng đồng để học hỏi

## 🏆 Thời kỳ hoàng kim - Top player

Năm thứ 2-3 là thời kỳ tôi chơi hardcore nhất:

### Thành tích đáng nhớ
- **Top 10 server** về level và trang bị
- **Guild Master** của bang "Thiên Kiếm Môn" 
- **Champion** PvP Tournament mùa Xuân 2022
- **First Kill** boss Thiên Ma Đế cùng team

### Những kỷ niệm đẹp
- Đêm đêm cùng guild mates đi raid boss
- Những trận PvP kịch tính đến phút cuối
- Giúp đỡ newbie như ngày xưa mình được giúp
- Tổ chức event cho cộng đồng

## 💔 Giai đoạn khó khăn - Burnout

Năm thứ 4, tôi bắt đầu cảm thấy mệt mỏi:

### Lý do burnout
- Chơi quá nhiều, ảnh hưởng công việc và gia đình
- Game trở nên repetitive, thiếu content mới
- Một số bạn bè thân thiết quit game
- Áp lực duy trì vị trí top player

### Quyết định nghỉ
Tôi đã nghỉ game gần 8 tháng, tập trung vào cuộc sống thực. Lúc đó nghĩ sẽ không bao giờ quay lại...

## 🌟 Trở lại - Tình yêu bất diệt

Nhưng rồi bản update 2.0 ra mắt, bạn bè rủ rê, tôi lại "tái xuất g강호":

### Thay đổi cách chơi
- Không còn hardcore như xưa
- Chơi để giải trí, giao lưu
- Tập trung vào việc giúp đỡ newbie
- Tham gia các hoạt động cộng đồng

### Những điều tôi yêu ở game này

#### 1. Cộng đồng tuyệt vời
- Người chơi thân thiện, sẵn sàng giúp đỡ
- Các guild như một gia đình thứ hai
- Events cộng đồng sôi nổi

#### 2. Gameplay sâu sắc
- Hệ thống kỹ năng đa dạng
- Chiến thuật phong phú
- Luôn có điều mới để khám phá

#### 3. Đồ họa và âm nhạc
- Cảnh quan Tam Giới tuyệt đẹp
- Nhạc nền du dương, phù hợp không khí
- Hiệu ứng kỹ năng mãn nhãn

#### 4. Câu chuyện hấp dẫn
- Cốt truyện về Thiên Tâm Thạch rất cuốn
- Các nhân vật có cá tính riêng
- Quest line được viết công phu

## 🎯 Lời khuyên cho đạo hữu mới

Sau 5 năm, tôi muốn chia sẻ vài điều:

### Cho newbie
1. **Đừng vội vàng**: Hãy tận hưởng từng khoảnh khắc
2. **Hỏi khi không biết**: Cộng đồng luôn sẵn sàng giúp đỡ
3. **Tham gia guild**: Chơi một mình sẽ rất nhàm chán
4. **Đừng so sánh**: Mỗi người có tốc độ phát triển khác nhau

### Cho game thủ lâu năm
1. **Giúp đỡ newbie**: Hãy nhớ ngày mình mới chơi
2. **Tham gia cộng đồng**: Đóng góp để game phát triển
3. **Cân bằng cuộc sống**: Game chỉ là giải trí
4. **Luôn giữ tinh thần fair-play**

## 💭 Suy nghĩ cuối

5 năm qua thật nhanh, nhưng cũng thật đáng nhớ. Tiên Duyên Kỳ Hiệp không chỉ là một game, mà là nơi tôi gặp được những người bạn tuyệt vời, học được nhiều điều về teamwork, kiên nhẫn và sự cống hiến.

Có lúc tôi nghĩ mình đã "lãng phí" quá nhiều thời gian cho game. Nhưng nhìn lại, những kỷ niệm đẹp, những tình bạn chân thành, những bài học cuộc sống... tất cả đều rất đáng giá.

Cảm ơn Tiên Duyên Kỳ Hiệp đã cho tôi một hành trình tu tiên tuyệt vời. Cảm ơn tất cả đạo hữu đã đồng hành. 

**Chúc tất cả đạo hữu tu tiên thuận lợi, tình bạn bền chặt!** 🙏

---

*P/S: Ai muốn add friend thì tìm tôi nhé - IGN: VoCucTuTien. Luôn sẵn sàng giúp đỡ đạo hữu mới! 😊*

**- Đạo hữu Vô Cực**
*Guild: Thiên Kiếm Môn*
*Server: Thiên Long*
    `,
    tags: ["Tâm sự", "Cộng đồng", "Kinh nghiệm", "5 năm"],
    relatedPosts: ["cap-nhat-phien-ban-2-0", "huong-dan-newbie", "su-kien-tet-nguyen-dan"],
  },
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<any>(null)
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (slug && blogPosts[slug as keyof typeof blogPosts]) {
      const postData = blogPosts[slug as keyof typeof blogPosts]
      setPost(postData)
      setLikes(postData.likes)
    }
  }, [slug])

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Bài viết không tồn tại</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 text-jade hover:text-jade-light hover:bg-jade/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Button>
        </Link>

        {/* Article header */}
        <article className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-jade/20 rounded-xl overflow-hidden">
          {/* Featured image */}
          <div className="relative h-64 md:h-96">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-jade text-white">{post.category}</Badge>
          </div>

          {/* Article content */}
          <div className="p-6 md:p-8">
            {/* Title and meta */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {post.views} lượt xem
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-jade/20">
              <Button
                onClick={handleLike}
                variant="ghost"
                className={`flex items-center gap-2 ${isLiked ? "text-red-400 hover:text-red-300" : "text-white/60 hover:text-white"}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                {likes}
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-white/60 hover:text-white">
                <Share2 className="w-5 h-5" />
                Chia sẻ
              </Button>
            </div>

            {/* Article body */}
            <div className="prose prose-invert prose-jade max-w-none">
              <div
                className="text-white/90 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, "<br>")
                    .replace(/#{3}\s(.+)/g, '<h3 class="text-xl font-bold text-jade-light mt-8 mb-4">$1</h3>')
                    .replace(/#{2}\s(.+)/g, '<h2 class="text-2xl font-bold text-jade-light mt-8 mb-4">$1</h2>')
                    .replace(/#{1}\s(.+)/g, '<h1 class="text-3xl font-bold text-jade-light mt-8 mb-6">$1</h1>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-jade-light">$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em class="text-jade-light/80">$1</em>')
                    .replace(/^-\s(.+)/gm, '<li class="ml-4">$1</li>'),
                }}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-jade/20">
              {post.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="border-jade/30 text-jade hover:bg-jade/10">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>

        {/* Related posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Bài viết liên quan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedSlug: string, index: number) => {
              const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts]
              if (!relatedPost) return null

              return (
                <Link key={index} href={`/blog/${relatedSlug}`}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/20 hover:border-jade/40 transition-all duration-300 hover:scale-105">
                    <div className="relative h-32">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-jade text-white text-xs">{relatedPost.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="text-white font-semibold text-sm line-clamp-2 mb-2">{relatedPost.title}</h4>
                      <div className="flex items-center text-white/60 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(relatedPost.date).toLocaleDateString("vi-VN")}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
