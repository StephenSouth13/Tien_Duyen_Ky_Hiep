"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, CheckCircle, AlertCircle, Star, Lightbulb, Bug, Heart } from "lucide-react"

interface FeedbackFormProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Gửi Góp Ý",
    subtitle: "Chúng tôi luôn lắng nghe ý kiến của bạn",
    name: "Họ và tên",
    email: "Email",
    category: "Loại góp ý",
    feedback: "Nội dung góp ý",
    send: "Gửi góp ý",
    sending: "Đang gửi...",
    success: "Góp ý đã được gửi thành công! Cảm ơn bạn đã chia sẻ.",
    error: "Có lỗi xảy ra. Vui lòng thử lại sau.",
    nameRequired: "Vui lòng nhập họ tên",
    emailRequired: "Vui lòng nhập email",
    emailInvalid: "Email không hợp lệ",
    categoryRequired: "Vui lòng chọn loại góp ý",
    feedbackRequired: "Vui lòng nhập nội dung góp ý",
    categories: {
      suggestion: "Đề xuất tính năng",
      bug: "Báo lỗi",
      compliment: "Khen ngợi",
      complaint: "Khiếu nại",
      other: "Khác",
    },
    placeholders: {
      name: "Nhập họ tên của bạn",
      email: "Nhập địa chỉ email",
      feedback: "Chia sẻ ý kiến, đề xuất hoặc báo cáo lỗi của bạn...",
    },
  },
  en: {
    title: "Send Feedback",
    subtitle: "We always listen to your opinions",
    name: "Full Name",
    email: "Email",
    category: "Feedback Type",
    feedback: "Feedback Content",
    send: "Send Feedback",
    sending: "Sending...",
    success: "Feedback sent successfully! Thank you for sharing.",
    error: "An error occurred. Please try again later.",
    nameRequired: "Please enter your name",
    emailRequired: "Please enter your email",
    emailInvalid: "Invalid email address",
    categoryRequired: "Please select feedback type",
    feedbackRequired: "Please enter feedback content",
    categories: {
      suggestion: "Feature Suggestion",
      bug: "Bug Report",
      compliment: "Compliment",
      complaint: "Complaint",
      other: "Other",
    },
    placeholders: {
      name: "Enter your full name",
      email: "Enter your email address",
      feedback: "Share your thoughts, suggestions, or bug reports...",
    },
  },
}

export default function FeedbackForm({ language }: FeedbackFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    feedback: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const t = translations[language]

  const categoryIcons = {
    suggestion: Lightbulb,
    bug: Bug,
    compliment: Heart,
    complaint: AlertCircle,
    other: MessageSquare,
  }

  const categoryColors = {
    suggestion: "bg-blue-600 hover:bg-blue-700",
    bug: "bg-red-600 hover:bg-red-700",
    compliment: "bg-green-600 hover:bg-green-700",
    complaint: "bg-orange-600 hover:bg-orange-700",
    other: "bg-purple-600 hover:bg-purple-700",
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.emailInvalid
    }

    if (!formData.category) {
      newErrors.category = t.categoryRequired
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = t.feedbackRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real application, you would send the feedback here
      console.log("Feedback submitted:", {
        ...formData,
        to: "stephensouth1307@gmail.com",
        timestamp: new Date().toISOString(),
      })

      setSubmitStatus("success")
      setFormData({ name: "", email: "", category: "", feedback: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({ ...prev, category }))
    if (errors.category) {
      setErrors((prev) => ({ ...prev, category: "" }))
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Feedback Form */}
      <div className="lg:col-span-2">
        <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-jade" />
              {t.title}
            </CardTitle>
            <p className="text-white/70">{t.subtitle}</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  {t.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-white/50 focus:border-jade"
                  placeholder={t.placeholders.name}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  {t.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-white/50 focus:border-jade"
                  placeholder={t.placeholders.email}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Category */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">{t.category}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(t.categories).map(([key, label]) => {
                    const Icon = categoryIcons[key as keyof typeof categoryIcons]
                    const isSelected = formData.category === key
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleCategorySelect(key)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                          isSelected
                            ? "border-jade bg-jade/20 text-jade"
                            : "border-slate-600 bg-slate-700/30 text-white/70 hover:border-jade/50 hover:bg-jade/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{label}</span>
                      </button>
                    )
                  })}
                </div>
                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-white/80 text-sm font-medium mb-2">
                  {t.feedback}
                </label>
                <Textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={6}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-white/50 focus:border-jade resize-none"
                  placeholder={t.placeholders.feedback}
                />
                {errors.feedback && <p className="text-red-400 text-sm mt-1">{errors.feedback}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-jade to-jade-dark hover:from-jade-light hover:to-jade text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-jade/50 hover:shadow-jade/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {t.sending}
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t.send}
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center text-green-400 text-sm bg-green-400/10 p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t.success}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {t.error}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Why Feedback Matters */}
        <Card className="bg-gradient-to-br from-gold/10 to-gold-dark/10 border-gold/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-gold" />
              {language === "vi" ? "Tại sao góp ý quan trọng?" : "Why feedback matters?"}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                {language === "vi" ? "Giúp chúng tôi cải thiện trải nghiệm game" : "Helps us improve game experience"}
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                {language === "vi" ? "Phát hiện và sửa lỗi nhanh chóng" : "Quickly identify and fix bugs"}
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                {language === "vi" ? "Phát triển tính năng mới theo nhu cầu" : "Develop new features based on needs"}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="bg-gradient-to-br from-purple-mystic/10 to-purple-mystic-dark/10 border-purple-mystic/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              {language === "vi" ? "Thời gian phản hồi" : "Response Time"}
            </h3>
            <div className="text-3xl font-bold text-purple-mystic mb-2">24h</div>
            <p className="text-white/70 text-sm">
              {language === "vi" ? "Chúng tôi sẽ phản hồi trong vòng 24 giờ" : "We will respond within 24 hours"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
