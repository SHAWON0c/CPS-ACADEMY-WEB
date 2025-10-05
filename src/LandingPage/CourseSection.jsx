"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import CourseImg1 from "../../public/images/courses/course1.jpg"
import CourseImg2 from "../../public/images/courses/course2.jpg"

export default function CourseSection() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = "rgba(251, 191, 36, 0.1)"
            ctx.lineWidth = 1

            const gridSize = 80
            const angle = Math.PI / 6

            for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
                ctx.beginPath()
                ctx.moveTo(i, 0)
                ctx.lineTo(i + canvas.height * Math.tan(angle), canvas.height)
                ctx.stroke()

                ctx.beginPath()
                ctx.moveTo(i, 0)
                ctx.lineTo(i - canvas.height * Math.tan(angle), canvas.height)
                ctx.stroke()
            }
        }

        drawGrid()

        const handleResize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            drawGrid()
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="relative py-20 px-4 bg-[#0a0e27] overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            <div className="absolute top-20 right-20 animate-float-slow">
                <div className="relative w-16 h-16 transform rotate-45">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 opacity-80 blur-sm" />
                    <svg className="relative w-16 h-16 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Our Courses<span className="text-amber-400">_</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-500" />

                        <div className="relative bg-[#1a1f3a] rounded-2xl overflow-hidden">
                            <div className="relative h-44 bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] flex items-center justify-center overflow-hidden">
                                {/* Add Image */}
                                <div className="absolute inset-0 opacity-80">
                                    <Image
                                        src={CourseImg1}
                                        alt="Course Image"
                                        className="object-cover w-full h-full rounded-2xl"
                                        fill
                                    />
                                </div>

                                {/* Animated background elements */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-8 left-8 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                                    <div className="absolute bottom-8 right-8 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse delay-700" />
                                </div>

                                {/* Play button */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <div className="absolute w-24 h-24 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-full blur-xl animate-pulse" />
                                    <button className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/50 hover:scale-105 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Code snippet overlay */}
                                <div className="absolute top-6 left-6 text-amber-400/30 font-mono text-xs">
                                    <div>{"function solve() {"}</div>
                                    <div className="ml-3">{"// Your code here"}</div>
                                    <div>{"}"}</div>
                                </div>

                                <div className="absolute top-1/4 right-8 w-10 h-10 border-2 border-amber-400/40 rotate-45 animate-spin-slow" />
                                <div className="absolute bottom-1/4 left-8 w-6 h-6 border-2 border-yellow-400/40 rounded-full animate-float-medium" />
                            </div>

                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-bold text-white">Complete Competitive Programming</h3>
                                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold py-4 text-base rounded-lg shadow-md shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300">
                                    Let's Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right text */}
                    <div className="space-y-2">
                        <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 leading-tight">
                            Kickstart your journey in Competitive Programming
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Welcome to Programming Hero! Dive into the world of algorithms and data structures with a focus on
                            problem-solving techniques. Master dynamic programming, graph theory, and advanced algorithms from the
                            beginning of your journey until you reach Red Coder status.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold px-6 py-3 text-base rounded-lg shadow-md shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300">
                                Explore
                            </button>
                            <button className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 font-bold px-6 py-3 text-base rounded-lg transition-all duration-300 bg-transparent">
                                Success Stories
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-1 border-t border-amber-500/20 left-0">
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">500+</div>
                                <div className="text-xs text-gray-400">Problems</div>
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">50+</div>
                                <div className="text-xs text-gray-400">Topics</div>
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">10k+</div>
                                <div className="text-xs text-gray-400">Students</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
                    {/* Mobile first: card on top, text below */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-500" />

                        <div className="relative bg-[#1a1f3a] rounded-2xl overflow-hidden">
                            <div className="relative h-44 bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] flex items-center justify-center overflow-hidden">
                                {/* Add Image */}
                                <div className="absolute inset-0 opacity-80">
                                    <Image
                                        src={CourseImg1}
                                        alt="Course Image"
                                        className="object-cover w-full h-full rounded-2xl"
                                        fill
                                    />
                                </div>

                                {/* Animated background elements */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-8 left-8 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                                    <div className="absolute bottom-8 right-8 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse delay-700" />
                                </div>

                                {/* Play button */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <div className="absolute w-24 h-24 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-full blur-xl animate-pulse" />
                                    <button className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/50 hover:scale-105 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Code snippet overlay */}
                                <div className="absolute top-6 left-6 text-amber-400/30 font-mono text-xs">
                                    <div>{"function solve() {"}</div>
                                    <div className="ml-3">{"// Your code here"}</div>
                                    <div>{"}"}</div>
                                </div>

                                <div className="absolute top-1/4 right-8 w-10 h-10 border-2 border-amber-400/40 rotate-45 animate-spin-slow" />
                                <div className="absolute bottom-1/4 left-8 w-6 h-6 border-2 border-yellow-400/40 rounded-full animate-float-medium" />
                            </div>

                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-bold text-white">Complete Competitive Programming</h3>
                                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold py-4 text-base rounded-lg shadow-md shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300">
                                    Let's Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left text section */}
                    <div className="order-2 lg:order-1 space-y-2">
                        <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 leading-tight">
                            Kickstart your journey in Competitive Programming
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Welcome to Programming Hero! Dive into the world of algorithms and data structures with a focus on
                            problem-solving techniques. Master dynamic programming, graph theory, and advanced algorithms from the
                            beginning of your journey until you reach Red Coder status.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold px-6 py-3 text-base rounded-lg shadow-md shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300">
                                Explore
                            </button>
                            <button className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 font-bold px-6 py-3 text-base rounded-lg transition-all duration-300 bg-transparent">
                                Success Stories
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-1 border-t border-amber-500/20 left-0">
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">500+</div>
                                <div className="text-xs text-gray-400">Problems</div>
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">50+</div>
                                <div className="text-xs text-gray-400">Topics</div>
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-amber-400 mb-1">10k+</div>
                                <div className="text-xs text-gray-400">Students</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
