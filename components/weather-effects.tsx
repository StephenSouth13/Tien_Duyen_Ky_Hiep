"use client"

import { useEffect, useState } from "react"
import { Wind } from "lucide-react" // Fixed import to use Wind from lucide-react

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  rotation: number
  type: "leaf" | "snow" | "petal"
}

export default function WeatherEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [weatherType, setWeatherType] = useState<"spring" | "summer" | "autumn" | "winter">("spring")

  // Change weather every 30 seconds
  useEffect(() => {
    const weatherCycle = ["spring", "summer", "autumn", "winter"] as const
    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % weatherCycle.length
      setWeatherType(weatherCycle[currentIndex])
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      let particleCount = 50

      // Increase particle count for autumn (more leaves)
      if (weatherType === "autumn") particleCount = 80
      else if (weatherType === "winter") particleCount = 60
      else if (weatherType === "spring") particleCount = 70
      else if (weatherType === "summer") particleCount = 30

      for (let i = 0; i < particleCount; i++) {
        let type: "leaf" | "snow" | "petal" = "petal"

        if (weatherType === "autumn") type = "leaf"
        else if (weatherType === "winter") type = "snow"
        else if (weatherType === "spring") type = "petal"

        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          vx: (Math.random() - 0.5) * 3, // Increased wind effect
          vy: Math.random() * 3 + 1,
          size: Math.random() * 10 + 3,
          opacity: Math.random() * 0.8 + 0.2,
          rotation: Math.random() * 360,
          type,
        })
      }

      setParticles(newParticles)
    }

    generateParticles()
  }, [weatherType])

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy
          const newRotation = particle.rotation + (weatherType === "autumn" ? 4 : 2)

          // Enhanced wind effects
          const windStrength = Math.sin(Date.now() * 0.002 + particle.id) * 1.5
          if (weatherType === "autumn") {
            newX += windStrength
            // Occasional strong wind gusts
            if (Math.random() < 0.01) {
              newX += (Math.random() - 0.5) * 10
            }
          } else if (weatherType === "spring") {
            newX += windStrength * 0.7
          }

          // Swirling effect for petals and leaves
          if (weatherType !== "winter") {
            newX += Math.cos(Date.now() * 0.001 + particle.id) * 0.8
          }

          // Reset particle when it goes off screen
          if (newY > window.innerHeight + 10) {
            newY = -10
            newX = Math.random() * window.innerWidth
          }

          if (newX > window.innerWidth + 50) {
            newX = -50
          } else if (newX < -50) {
            newX = window.innerWidth + 50
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: newRotation,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 40) // Smoother animation
    return () => clearInterval(interval)
  }, [weatherType])

  const getParticleColor = (type: string) => {
    switch (type) {
      case "leaf":
        return "#D97706" // Orange for autumn leaves
      case "snow":
        return "#F8FAFC" // White for snow
      case "petal":
        return "#F472B6" // Pink for spring petals
      default:
        return "#F472B6"
    }
  }

  const getParticleShape = (particle: Particle) => {
    switch (particle.type) {
      case "leaf":
        return (
          <div
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size * 0.7}px`,
              background: `linear-gradient(45deg, #D97706, #F59E0B)`,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
              borderRadius: "50% 0 50% 0",
            }}
          />
        )
      case "snow":
        return (
          <div
            className="absolute rounded-full bg-white"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            }}
          />
        )
      case "petal":
        return (
          <div
            className="absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, #F472B6, #EC4899)`,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
              borderRadius: "50% 0 50% 0",
              filter: "blur(0.5px)",
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <div className="absolute top-4 right-4 bg-gradient-to-r from-black/60 to-slate-900/60 backdrop-blur-md rounded-xl px-4 py-3 border border-jade-400/40 shadow-lg">
        <p className="text-jade-400 text-sm font-medium flex items-center">
          <Wind className="w-4 h-4 mr-2 animate-pulse" />
          {weatherType === "spring" && "🌸 Xuân - Hoa anh đào bay"}
          {weatherType === "summer" && "☀️ Hạ - Nắng ấm dịu dàng"}
          {weatherType === "autumn" && "🍂 Thu - Lá vàng rơi rụng"}
          {weatherType === "winter" && "❄️ Đông - Tuyết trắng phủ"}
        </p>
      </div>

      {(weatherType === "autumn" || weatherType === "spring") && (
        <div className="absolute top-20 right-4 text-jade-300/60 text-xs animate-pulse">💨 Gió nhẹ thổi...</div>
      )}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {getParticleShape(particle)}
        </div>
      ))}
    </div>
  )
}
