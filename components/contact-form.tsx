"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Gửi tin nhắn",
    name: "Họ và tên",
    email: "Email",
    subject: "Tiêu đề",
    message: "Nội dung",
    send: "Gửi tin nhắn",
    sending: "Đang gửi...",
    success: "Tin nhắn đã được gửi thành công!",
    error: "Có lỗi xảy ra. Vui lòng thử lại sau.",
    nameRequired: "Vui lòng nhập họ tên",
    emailRequired: "Vui lòng nhập email",
    emailInvalid: "Email không hợp lệ",
    subjectRequired: "Vui lòng nhập tiêu đề",
    messageRequired: "Vui lòng nhập nội dung",
  },
  en: {
    title: "Send Message",
    name: "Full Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "An error occurred. Please try again later.",
    nameRequired: "Please enter your name",
    emailRequired: "Please enter your email",
    emailInvalid: "Invalid email address",
    subjectRequired: "Please enter a subject",
    messageRequired: "Please enter your message",
  },
}

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const t = translations[language]

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

    if (!formData.subject.trim()) {
      newErrors.subject = t.subjectRequired
    }

    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired
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

      // In a real application, you would send the email here
      // For now, we'll just simulate success
      console.log("Form submitted:", {
        ...formData,
        to: "stephensouth1307@gmail.com",
      })

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
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

  return (
    <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <Send className="w-6 h-6 mr-2 text-jade" />
          {t.title}
        </CardTitle>
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
              placeholder={t.name}
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
              placeholder={t.email}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
              {t.subject}
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="bg-slate-700/50 border-slate-600 text-white placeholder-white/50 focus:border-jade"
              placeholder={t.subject}
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
              {t.message}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="bg-slate-700/50 border-slate-600 text-white placeholder-white/50 focus:border-jade resize-none"
              placeholder={t.message}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
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
                <Send className="w-4 h-4 mr-2" />
                {t.send}
              </>
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center text-green-400 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.success}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              {t.error}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
