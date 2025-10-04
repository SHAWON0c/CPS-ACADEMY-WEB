"use client"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function CyberpunkHero() {
  const canvasRef = useRef(null)
  const router = useRouter()

  const handleClickStarted = () => {
    router.push("/home")
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    const gridLines = []
    for (let i = 0; i < 30; i++) {
      gridLines.push({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.4 + Math.random() * canvas.height * 0.3,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size)

        particle.y += particle.speed
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }
      })

      ctx.strokeStyle = "rgba(239, 68, 68, 0.4)"
      ctx.lineWidth = 1
      gridLines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length)
        ctx.stroke()

        line.angle += line.speed
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f1e3a] to-[#050a14]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-[15%] right-[15%] animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-amber-500/50 rounded-full" />
            <svg
              className="w-16 h-16 relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="4" r="2" className="text-amber-400" />
              <circle cx="7" cy="12" r="2" className="text-amber-400" />
              <circle cx="17" cy="12" r="2" className="text-amber-400" />
              <circle cx="5" cy="20" r="2" className="text-amber-400" />
              <circle cx="9" cy="20" r="2" className="text-amber-400" />
              <circle cx="15" cy="20" r="2" className="text-amber-400" />
              <circle cx="19" cy="20" r="2" className="text-amber-400" />
              <line x1="12" y1="6" x2="7" y2="10" className="text-amber-400" />
              <line x1="12" y1="6" x2="17" y2="10" className="text-amber-400" />
              <line x1="7" y1="14" x2="5" y2="18" className="text-amber-400" />
              <line x1="7" y1="14" x2="9" y2="18" className="text-amber-400" />
              <line x1="17" y1="14" x2="15" y2="18" className="text-amber-400" />
              <line x1="17" y1="14" x2="19" y2="18" className="text-amber-400" />
            </svg>
          </div>
        </div>

        <div className="absolute top-[20%] left-[12%] animate-float-medium">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-amber-500/50 rounded-full" />
            <svg
              className="w-14 h-14 relative z-10 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
            </svg>
          </div>
        </div>

        <div className="absolute top-[45%] left-[10%] animate-float-fast">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-amber-500/50 rounded-full" />
            <svg
              className="w-12 h-12 relative z-10 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-[50%] right-[8%] animate-float-medium">
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-amber-500/50 rounded-full" />
            <svg
              className="w-14 h-14 relative z-10 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
            </svg>
          </div>
        </div>

        <div className="absolute top-[30%] left-0 w-64 h-64 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border-2 border-amber-500/20 animate-spin-reverse" />
            <div className="absolute inset-8 rounded-full border-2 border-amber-500/10 animate-spin-slow" />
          </div>
        </div>

        <div className="absolute top-[30%] right-0 w-64 h-64 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-spin-reverse" />
            <div className="absolute inset-4 rounded-full border-2 border-amber-500/20 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border-2 border-amber-500/10 animate-spin-reverse" />
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Master Competitive <span className="text-amber-400">Programming</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Learn algorithms, data structures, and problem-solving techniques through expert-led online classes.
            Compete, practice, and excel in coding competitions.
          </p>

          <div className="pt-4 flex justify-center">
      <button
        onClick={handleClickStarted}
        className="relative bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 border-2 border-amber-400/50 overflow-hidden group"
      >
        <span className="relative z-10">Start Learning</span>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50" />
      </button>
    </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-10 h-96 bg-gradient-to-t from-[#050a14] via-[#050a14]/80 to-transparent">
        <svg 
          className=" mt-20 w-[80%] h-full mx-auto"
          viewBox="0 0 1400 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff0000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff8c00" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#aa00aa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#aa00aa" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0000ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0000ff" stopOpacity="0.05" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#808080" />
              <stop offset="15%" stopColor="#00ff00" />
              <stop offset="30%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#0000ff" />
              <stop offset="65%" stopColor="#aa00aa" />
              <stop offset="80%" stopColor="#ff8c00" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>

          <rect x="80" y="20" width="1280" height="320" fill="#0a1628" opacity="0.6" rx="8" />
          <rect
            x="80"
            y="20"
            width="1280"
            height="320"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1"
            opacity="0.2"
            rx="8"
          />

          {[
            { y: 40, rating: "3000", color: "#ff0000", label: "Legendary GM" },
            { y: 80, rating: "2600", color: "#ff0000", label: "Int. GM" },
            { y: 120, rating: "2400", color: "#ff0000", label: "Grandmaster" },
            { y: 160, rating: "2100", color: "#ff8c00", label: "Master" },
            { y: 200, rating: "1900", color: "#aa00aa", label: "Candidate Master" },
            { y: 240, rating: "1600", color: "#0000ff", label: "Expert" },
            { y: 280, rating: "1400", color: "#00ffff", label: "Specialist" },
            { y: 320, rating: "1200", color: "#00ff00", label: "Pupil" },
          ].map((line, i) => (
            <g key={i}>
              <line
                x1="80"
                y1={line.y}
                x2="1360"
                y2={line.y}
                stroke={line.color}
                strokeWidth="1"
                strokeDasharray="8,4"
                opacity="0.25"
              />
              <text
                x="65"
                y={line.y + 4}
                fill={line.color}
                fontSize="11"
                textAnchor="end"
                fontWeight="700"
                opacity="0.9"
              >
                {line.rating}
              </text>
              <text
                x="1370"
                y={line.y + 4}
                fill={line.color}
                fontSize="9"
                textAnchor="start"
                fontWeight="600"
                opacity="0.7"
              >
                {line.label}
              </text>
            </g>
          ))}

          {Array.from({ length: 21 }, (_, i) => {
            const x = 80 + (i * 1280) / 20
            return (
              <g key={`v-${i}`}>
                <line x1={x} y1="40" x2={x} y2="340" stroke="#fbbf24" strokeWidth="0.5" opacity="0.1" />
                {i % 5 === 0 && (
                  <text x={x} y="360" fill="#fbbf24" fontSize="10" textAnchor="middle" opacity="0.6">
                    {i * 5}
                  </text>
                )}
              </g>
            )
          })}

          <text x="720" y="385" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="600" opacity="0.8">
            Contests →
          </text>

          <rect x="80" y="40" width="1280" height="40" fill="url(#redGradient)" opacity="0.15" />
          <rect x="80" y="120" width="1280" height="40" fill="url(#redGradient)" opacity="0.1" />
          <rect x="80" y="160" width="1280" height="40" fill="url(#orangeGradient)" opacity="0.1" />
          <rect x="80" y="200" width="1280" height="40" fill="url(#purpleGradient)" opacity="0.1" />
          <rect x="80" y="240" width="1280" height="40" fill="url(#blueGradient)" opacity="0.1" />

          <path
            d="M 80,330 
               L 144,325 L 208,318 L 272,312 L 336,315 L 400,308 L 464,302 L 528,298 
               L 592,292 L 656,285 L 720,288 L 784,280 L 848,274 L 912,268 L 976,262 
               L 1040,258 L 1104,252 L 1168,246 L 1232,240 L 1296,235 L 1360,228"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            filter="url(#glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />

          <path
            d="M 80,330 
               L 144,325 L 208,318 L 272,312 L 336,315 L 400,308 L 464,302 L 528,298 
               L 592,292 L 656,285 L 720,288 L 784,280 L 848,274 L 912,268 L 976,262 
               L 1040,258 L 1104,252 L 1168,246 L 1232,240 L 1296,235 L 1360,228
               L 1360,340 L 80,340 Z"
            fill="url(#lineGradient)"
            opacity="0.15"
          />

          {[
            { x: 80, y: 330, color: "#808080", rating: "800", change: "+45" },
            { x: 144, y: 325, color: "#808080", rating: "950", change: "+150" },
            { x: 208, y: 318, color: "#00ff00", rating: "1180", change: "+230" },
            { x: 272, y: 312, color: "#00ff00", rating: "1250", change: "+70" },
            { x: 336, y: 315, color: "#00ff00", rating: "1220", change: "-30" },
            { x: 400, y: 308, color: "#00ff00", rating: "1350", change: "+130" },
            { x: 464, y: 302, color: "#00ffff", rating: "1480", change: "+130" },
            { x: 528, y: 298, color: "#00ffff", rating: "1540", change: "+60" },
            { x: 592, y: 292, color: "#00ffff", rating: "1620", change: "+80" },
            { x: 656, y: 285, color: "#0000ff", rating: "1750", change: "+130" },
            { x: 720, y: 288, color: "#0000ff", rating: "1710", change: "-40" },
            { x: 784, y: 280, color: "#0000ff", rating: "1840", change: "+130" },
            { x: 848, y: 274, color: "#0000ff", rating: "1920", change: "+80" },
            { x: 912, y: 268, color: "#aa00aa", rating: "2010", change: "+90" },
            { x: 976, y: 262, color: "#aa00aa", rating: "2090", change: "+80" },
            { x: 1040, y: 258, color: "#ff8c00", rating: "2150", change: "+60" },
            { x: 1104, y: 252, color: "#ff8c00", rating: "2240", change: "+90" },
            { x: 1168, y: 246, color: "#ff8c00", rating: "2320", change: "+80" },
            { x: 1232, y: 240, color: "#ff0000", rating: "2410", change: "+90" },
            { x: 1296, y: 235, color: "#ff0000", rating: "2490", change: "+80" },
            { x: 1360, y: 228, color: "#ff0000", rating: "2610", change: "+120" },
          ].map((point, i) => (
            <g key={i}>
              <circle cx={point.x} cy={point.y} r="8" fill="none" stroke={point.color} strokeWidth="1.5" opacity="0.4">
                <animate attributeName="r" values="8;12;8" dur="3s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0.4;0.1;0.4"
                  dur="3s"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={point.x} cy={point.y} r="5" fill={point.color} filter="url(#glow)" opacity="0.95">
                <animate attributeName="r" values="5;6.5;5" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={point.x} cy={point.y} r="2" fill="#ffffff" opacity="0.8" />
            </g>
          ))}

          <g opacity="0.95">
            <circle cx="1360" cy="228" r="18" fill="none" stroke="#ff0000" strokeWidth="2.5" opacity="0.5">
              <animate attributeName="r" values="18;28;18" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="1360" cy="228" r="14" fill="none" stroke="#ff0000" strokeWidth="2" opacity="0.6">
              <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="1360" cy="228" r="10" fill="#ff0000" filter="url(#strongGlow)" opacity="0.9">
              <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="1360" cy="228" r="5" fill="#ffffff" opacity="0.9" />
            <text
              x="1360"
              y="210"
              fill="#ff0000"
              fontSize="13"
              textAnchor="middle"
              fontWeight="800"
              filter="url(#glow)"
            >
              2610
            </text>
          </g>

          <ellipse cx="720" cy="350" rx="400" ry="30" fill="#ff0000" opacity="0.08">
            <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="1300" cy="350" rx="200" ry="25" fill="#ff0000" opacity="0.15">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
          </ellipse>

          <g opacity="0.9">
            <rect x="100" y="50" width="180" height="85" fill="#0a1628" opacity="0.85" rx="6" />
            <rect
              x="100"
              y="50"
              width="180"
              height="85"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1"
              opacity="0.3"
              rx="6"
            />
            <text x="190" y="70" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="700" opacity="0.9">
              Rating Progress
            </text>
            <line x1="110" y1="85" x2="140" y2="85" stroke="url(#lineGradient)" strokeWidth="3" />
            <text x="145" y="88" fill="#ffffff" fontSize="9" opacity="0.8">
              Your Journey
            </text>
            <circle cx="125" cy="105" r="4" fill="#ff0000" />
            <text x="145" y="108" fill="#ffffff" fontSize="9" opacity="0.8">
              Contest Result
            </text>
            <line
              x1="110"
              y1="120"
              x2="140"
              y2="120"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeDasharray="4,2"
              opacity="0.5"
            />
            <text x="145" y="123" fill="#ffffff" fontSize="9" opacity="0.8">
              Rating Tier
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
