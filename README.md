# 🗡️ Tiên Duyên Kỳ Hiệp - Fairy Destiny Knight
### *Phát triển bởi TienDuyenKyLong Studio*

![Game Banner](https://via.placeholder.com/1200x400/1a1a2e/16a085?text=Tiên+Duyên+Kỳ+Hiệp+%7C+TienDuyenKyLong+Studio)

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://tienduyenkylong.vercel.app)
[![Unity](https://img.shields.io/badge/Unity-2023.3%20LTS-blue)](https://unity.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🚀 Hướng dẫn Cài đặt và Triển khai

### 📋 Yêu cầu hệ thống
- **Node.js** 20.0.0 hoặc cao hơn
- **pnpm** 9.0.0 hoặc cao hơn (khuyến nghị)
- **Git** 2.34.0 hoặc cao hơn
- **RAM**: Tối thiểu 4GB (Khuyến nghị 8GB)

### ⚡ Cài đặt nhanh với pnpm

\`\`\`bash
# 1. Clone repository
git clone https://github.com/StephenSouth13/Tien_Duyen_Ky_Hiep.git

# 2. Di chuyển vào thư mục dự án
cd Tien_Duyen_Ky_Hiep

# 3. Cài đặt pnpm (nếu chưa có)
npm install -g pnpm@latest

# 4. Cài đặt dependencies với pnpm
pnpm install

# 5. Chạy development server
pnpm dev
\`\`\`

🌐 Mở [http://localhost:3000](http://localhost:3000) để xem website.

### 🔧 Scripts có sẵn

\`\`\`bash
# Development
pnpm dev              # Chạy development server với hot reload
pnpm build            # Build production (tối ưu hóa)
pnpm start            # Chạy production server
pnpm preview          # Build và preview production locally

# Code Quality
pnpm lint             # Kiểm tra code quality với ESLint
pnpm lint:fix         # Tự động fix các lỗi lint
pnpm type-check       # Kiểm tra TypeScript errors

# Maintenance
pnpm clean            # Xóa cache và build files
pnpm check-updates    # Kiểm tra packages cần update
pnpm update-deps      # Update tất cả dependencies
\`\`\`

### 🚀 Triển khai lên Vercel

#### Phương pháp 1: Vercel CLI (Khuyến nghị)
\`\`\`bash
# 1. Cài đặt Vercel CLI
npm i -g vercel

# 2. Login vào Vercel
vercel login

# 3. Deploy từ thư mục dự án
vercel

# 4. Deploy production
vercel --prod
\`\`\`

#### Phương pháp 2: GitHub Integration
1. Push code lên GitHub repository
2. Truy cập [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Cấu hình build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

#### Phương pháp 3: Manual Deploy
\`\`\`bash
# Build production
pnpm build

# Deploy với Vercel CLI
vercel deploy --prebuilt
\`\`\`

### ⚙️ Cấu hình Environment Variables

Tạo file `.env.local` trong thư mục root:

\`\`\`env
# Website Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Tiên Duyên Kỳ Hiệp"

# Contact Form (Optional)
CONTACT_EMAIL=stephensouth1307@gmail.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
\`\`\`

### 🔧 Troubleshooting

#### Lỗi thường gặp và cách khắc phục:

**1. Node.js version không tương thích**
\`\`\`bash
# Kiểm tra version hiện tại
node --version

# Cài đặt Node.js 20+ từ nodejs.org
# Hoặc sử dụng nvm
nvm install 20
nvm use 20
\`\`\`

**2. pnpm không được nhận diện**
\`\`\`bash
# Cài đặt pnpm global
npm install -g pnpm@latest

# Hoặc sử dụng corepack (Node.js 16.10+)
corepack enable
corepack prepare pnpm@latest --activate
\`\`\`

**3. Build errors**
\`\`\`bash
# Xóa cache và node_modules
pnpm clean
rm -rf node_modules pnpm-lock.yaml

# Cài đặt lại
pnpm install
\`\`\`

**4. TypeScript errors**
\`\`\`bash
# Kiểm tra TypeScript
pnpm type-check

# Fix auto-fixable issues
pnpm lint:fix
\`\`\`

### 📱 Kiểm tra Responsive Design

Test website trên các thiết bị:

\`\`\`bash
# Development với network access
pnpm dev -- --hostname 0.0.0.0

# Truy cập từ mobile: http://your-ip:3000
\`\`\`

**Breakpoints được hỗ trợ:**
- 📱 Mobile: 320px - 768px
- 📟 Tablet: 768px - 1024px  
- 💻 Desktop: 1024px - 1440px
- 🖥️ Large: 1440px+

### 🔍 Performance Optimization

\`\`\`bash
# Analyze bundle size
pnpm build
npx @next/bundle-analyzer

# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:3000 --view
\`\`\`

### 🛡️ Security Best Practices

1. **Dependencies Security**
\`\`\`bash
# Audit dependencies
pnpm audit

# Fix vulnerabilities
pnpm audit --fix
\`\`\`

2. **Environment Variables**
- Không commit `.env.local` vào Git
- Sử dụng `NEXT_PUBLIC_` prefix cho client-side variables
- Validate environment variables trong code

3. **Content Security Policy**
- Đã cấu hình CSP headers trong `next.config.js`
- Whitelist trusted domains cho images và scripts

## 🌸 Giới thiệu Game

**Tiên Duyên Kỳ Hiệp** là một tựa game nhập vai hành động 2D phong cách chibi với chủ đề tu tiên hài hước, được phát triển bởi **TienDuyenKyLong Studio**. Người chơi sẽ hóa thân thành một tu sĩ trẻ tuổi, bắt đầu hành trình thu thập 7 mảnh **Thiên Tâm Thạch** huyền thoại để cứu rỗi Tam Giới khỏi thế lực hắc ám.

### ✨ Đặc điểm nổi bật:
- 🎮 **Gameplay độc đáo**: Kết hợp yếu tố nhập vai, hành động và chiến thuật
- 🌍 **Thế giới rộng lớn**: Khám phá Tam Giới với Tiên Giới, Nhân Giới và Ma Giới
- 👥 **5 nhân vật chính**: Mỗi nhân vật có câu chuyện và kỹ năng riêng biệt
- ⚔️ **Hệ thống chiến đấu**: PvP kịch tính và PvE thử thách
- 🏰 **Hệ thống Guild**: Kết bạn và chiến đấu cùng đồng đội
- 🐾 **Pet System**: Nuôi và huấn luyện thú cưng đồng hành
- 🤖 **AI Assistant**: Trợ lý AI thông minh với tính cách tu sĩ
- 🌦️ **Dynamic Weather**: Hiệu ứng thời tiết thay đổi theo thời gian thực

## 📖 Cốt truyện - "Thiên Tâm Thạch Truyền Kỳ"

Ngàn năm trước, trong thời đại hỗn loạn khi Tam Giới rơi vào bất ổn, **Thiên Tâm Thạch** - viên đá huyền thoại chứa đựng sức mạnh vô tận đã xuất hiện để duy trì cân bằng giữa ba cõi. Tuy nhiên, sự xuất hiện của **Ma Vương Hắc Diệm** đã khiến viên đá bị vỡ thành 7 mảnh và rải rác khắp Tam Giới.

### 🌟 Hành trình anh hùng
Người chơi sẽ hóa thân thành một tu sĩ trẻ tuổi, được **Thiên Đế** giao nhiệm vụ thu thập các mảnh Thiên Tâm Thạch để khôi phục hòa bình. Hành trình này không chỉ là cuộc chiến giữa thiện và ác, mà còn là câu chuyện về tình bạn, tình yêu, sự hy sinh và con đường tu tiên gian nan.

### 🗡️ Năm Anh Hùng Tam Giới:

1. **🗡️ Lý Tiêu Dao** - *"Kiếm Thánh Vô Song"*
   - Kiếm sĩ tài ba với trái tim nhân hậu
   - Kỹ năng: Thiên Kiếm Quyết, Vạn Kiếm Quy Tông
   - Vũ khí: Thanh Minh Kiếm

2. **🔥 Lâm Thanh Vũ** - *"Băng Hỏa Song Tu"*
   - Pháp sư thiên tài với sức mạnh băng hỏa
   - Kỹ năng: Băng Hỏa Lưỡng Nghi, Thiên Địa Đại Di
   - Vũ khí: Âm Dương Trượng

3. **⚔️ Vương Thiết Tâm** - *"Ma Đao Bá Chủ"*
   - Đao khách bí ẩn với quá khứ đau thương
   - Kỹ năng: Ma Đao Tuyệt Học, Thiết Tâm Đao Pháp
   - Vũ khí: Hắc Diệm Đao

4. **🏹 Triệu Linh Nhi** - *"Thần Cung Tiên Tử"*
   - Cung thủ tinh linh với tài bắn cung thần sầu
   - Kỹ năng: Bách Bộ Xuyên Dương, Lưu Tinh Vũ
   - Vũ khí: Phượng Minh Cung

5. **👊 Trần Vô Cực** - *"Thiết Quyền Vô Địch"*
   - Võ sĩ hào sảng với nội công thâm hậu
   - Kỹ năng: Thiết Sa Chưởng, Vô Cực Quyền Pháp
   - Vũ khí: Thiên Cương Thủ Khí

## 🛠️ Công nghệ Tiên Tiến

### 🌐 Frontend Website
- **Next.js 15** - React framework hiện đại với App Router
- **TypeScript 5.7** - Type safety và developer experience tối ưu
- **Tailwind CSS v4** - Utility-first CSS framework mới nhất
- **Framer Motion 12** - Animation library mượt mà 60fps
- **Shadcn/ui** - Component library đẹp và accessible
- **pnpm 9** - Package manager nhanh và hiệu quả

### 🎮 Game Engine
- **Unity 2023.3 LTS** - Game engine chuyên nghiệp
- **WebGL** - Deployment tối ưu cho web browser
- **C#** - Ngôn ngữ lập trình game logic hiệu suất cao
- **Unity Addressables** - Asset management thông minh

## 👨‍💻 Về Người Sáng Lập

### 🌟 Quách Thành Long (Stephen South)
**Founder & Lead Developer - TienDuyenKyLong Studio**

> *"Tạo ra những trải nghiệm game độc đáo, kết hợp văn hóa phương Đông với công nghệ hiện đại, mang đến niềm vui cho cộng đồng game thủ Việt Nam."*

#### 📍 Thông tin liên hệ:
- 🏠 **Địa chỉ**: TP. Hồ Chí Minh, Việt Nam
- 📧 **Email**: stephensouth1307@gmail.com
- 🌐 **GitHub**: [StephenSouth13](https://github.com/StephenSouth13/Tien_Duyen_Ky_Hiep)
- 🎯 **Studio**: TienDuyenKyLong Studio

#### 🔗 Kết nối xã hội:
- 📘 **Facebook**: [long.quach.273823](https://www.facebook.com/long.quach.273823/)
- 🎥 **YouTube**: [@southstephenins](https://www.youtube.com/@southstephenins)
- 📸 **Instagram**: [@longquach130723](https://www.instagram.com/longquach130723)

#### 💼 Kinh nghiệm & Chuyên môn:
- **7+ năm** phát triển web và mobile applications
- **4+ năm** nghiên cứu game development với Unity
- **Chuyên môn**: React, Next.js, Unity, C#, TypeScript, Node.js, Game Design
- **Đam mê**: Game design, UI/UX, Storytelling, và văn hóa tu tiên
- **Thành tựu**: 10+ dự án web thành công, 3+ game prototype hoàn thiện

## 📄 License

Dự án này được phân phối dưới **MIT License**. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<div align="center">

### 🗡️ *"Đạo tâm như thủy, tĩnh lặng mà sâu thẳm. Tu tiên chi đạo, nhẫn nại là then chốt."* ⚔️

**🌟 Hành trình tu tiên bắt đầu từ đây! 🌟**

[![Website](https://img.shields.io/badge/🌐_Website-Live-brightgreen?style=for-the-badge)](https://tienduyenkylong.vercel.app)
[![GitHub](https://img.shields.io/badge/⭐_GitHub-Star_Us-yellow?style=for-the-badge)](https://github.com/StephenSouth13/Tien_Duyen_Ky_Hiep)

**Made with ❤️ by TienDuyenKyLong Studio**

</div>
