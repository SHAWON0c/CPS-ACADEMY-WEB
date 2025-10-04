"use client"

import { useEffect, useRef } from "react"

export default function MissionSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Floating particles
    const particles = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251, 191, 36, ${particle.opacity})`
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating Paper Plane - Top Left */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M10 50 L90 10 L50 90 L40 50 Z" fill="url(#planeGradient)" className="animate-pulse" />
          <path d="M40 50 L90 10" stroke="#fbbf24" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Floating Trophy - Top Right */}
      <div className="absolute top-20 right-10 animate-float-medium">
        <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="trophyShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Trophy Base */}
          <rect x="35" y="75" width="30" height="8" rx="2" fill="url(#trophyGradient)" />
          <rect x="40" y="70" width="20" height="5" fill="url(#trophyGradient)" />

          {/* Trophy Stem */}
          <rect x="45" y="55" width="10" height="15" fill="url(#trophyGradient)" />

          {/* Trophy Cup */}
          <path
            d="M 30 55 Q 30 35, 35 25 L 65 25 Q 70 35, 70 55 L 65 55 L 65 30 L 35 30 L 35 55 Z"
            fill="url(#trophyGradient)"
            className="animate-pulse"
          />

          {/* Trophy Handles */}
          <path d="M 30 30 Q 20 30, 20 40 Q 20 45, 25 45 L 30 40" fill="url(#trophyGradient)" />
          <path d="M 70 30 Q 80 30, 80 40 Q 80 45, 75 45 L 70 40" fill="url(#trophyGradient)" />

          {/* Star on Trophy */}
          <path
            d="M 50 15 L 52 21 L 58 21 L 53 25 L 55 31 L 50 27 L 45 31 L 47 25 L 42 21 L 48 21 Z"
            fill="#fef3c7"
            className="animate-pulse"
          />

          {/* Shine Effect */}
          <ellipse cx="45" cy="35" rx="8" ry="15" fill="url(#trophyShine)" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Mission<span className="text-amber-400">_</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6FzRTkbkCTVnbMK10b0xeE6Xzdu8lb.png"
                alt="Programming Hero Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Mission Text */}
          <div className="space-y-8">
            {/* Why */}
            <div className="group">
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-amber-400">Why:</span>{" "}
                <span className="text-white group-hover:text-amber-300 transition-colors">
                  Empowering Problem Solvers
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We are passionate about empowering individuals to transform their lives through the power of competitive
                programming. We believe that everyone should have access to high-quality, affordable algorithmic
                education, regardless of their background or experience.
              </p>
            </div>

            {/* What */}
            <div className="group">
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-amber-400">What:</span>{" "}
                <span className="text-white group-hover:text-amber-300 transition-colors">
                  Comprehensive CP Training
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We provide a comprehensive range of online competitive programming courses, from beginner-level Data
                Structures and Algorithms to advanced topics like Dynamic Programming, Graph Theory, and Advanced
                Problem Solving. Our courses are designed to be engaging, effective, and tailored to the needs of
                aspiring competitive programmers.
              </p>
            </div>

            {/* How */}
            <div className="group">
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-amber-400">How:</span>{" "}
                <span className="text-white group-hover:text-amber-300 transition-colors">Personalized Mentorship</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We nurture our students in a personalized and supportive environment that fosters confidence and
                success. Our friendly and dedicated instructors are always available to guide and mentor our students,
                ensuring they receive the support they need to achieve their competitive programming goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
