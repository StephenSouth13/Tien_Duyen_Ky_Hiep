"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Facebook, Youtube, Music } from "lucide-react"

interface ContactInfoProps {
  language: "vi" | "en"
}

const translations = {
  vi: {
    title: "Thông tin liên hệ",
    email: "Email",
    phone: "Điện thoại",
    address: "Địa chỉ",
    website: "Website",
    social: "Mạng xã hội",
    mapTitle: "Vị trí của chúng tôi",
  },
  en: {
    title: "Contact Information",
    email: "Email",
    phone: "Phone",
    address: "Address",
    website: "Website",
    social: "Social Media",
    mapTitle: "Our Location",
  },
}

export default function ContactInfo({ language }: ContactInfoProps) {
  const t = translations[language]

  const contactDetails = [
    {
      icon: Mail,
      label: t.email,
      value: "stephensouth1307@gmail.com",
      href: "mailto:stephensouth1307@gmail.com",
    },
    {
      icon: Phone,
      label: t.phone,
      value: "0979 137 018",
      href: "tel:+84979137018",
    },
    {
      icon: MapPin,
      label: t.address,
      value: "Ho Chi Minh City, Vietnam",
      href: "#map",
    },
    {
      icon: Globe,
      label: t.website,
      value: "quachthanhlong.com",
      href: "https://quachthanhlong.com",
    },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "#",
      color: "text-blue-500 hover:text-blue-400",
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "#",
      color: "text-red-500 hover:text-red-400",
    },
    {
      icon: Music,
      name: "TikTok",
      href: "#",
      color: "text-white hover:text-gray-300",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-gold/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <Mail className="w-6 h-6 mr-2 text-gold" />
            {t.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">{detail.label}</div>
                  <a
                    href={detail.href}
                    className="text-white hover:text-gold transition-colors font-medium"
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {detail.value}
                  </a>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-purple-mystic/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white">{t.social}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Google Map */}
      <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-jade/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-jade" />
            {t.mapTitle}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div id="map" className="aspect-video rounded-b-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4326002932!2d106.69975731533414!3d10.776889992319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3332a4b9%3A0x5a4f6b1c5e8b9c2d!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1642678901234!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ho Chi Minh City Location"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
