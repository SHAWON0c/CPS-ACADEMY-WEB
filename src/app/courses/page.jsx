"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import CourseImg1 from "../../../public/images/courses/course1.jpg"
import CourseImg2 from "../../../public/images/courses/course2.jpg"

export default function CoursePage() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
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

    const courses = [
        {
            title: "Mastering Algorithms & Data Structures",
            description:
                "Build strong foundations in algorithms and data structures. Learn step-by-step problem-solving techniques for coding interviews and competitions.",
            img: CourseImg1,
            slug: "mastering-algorithms"
        },
        {
            title: "Advanced Competitive Programming",
            description:
                "Enhance your problem-solving skills with advanced topics like dynamic programming, graphs, and optimization techniques to become a top coder.",
            img: CourseImg2,
            slug: "advanced-competitive"
        }
    ]

    return (
        <section className="relative py-20 px-4 bg-[#0a0e27] overflow-hidden min-h-screen">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                        Explore Our Courses
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {courses.map((course, index) => (
                        <Link key={index} href={`/courses/${course.slug}`} passHref>
                            <div className="relative group cursor-pointer">
                                <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 via-amber-500 to-red-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500" />
                                <div className="relative bg-[#1b1f36] rounded-2xl overflow-hidden shadow-lg shadow-black/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-60 md:h-64 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={course.img}
                                            alt={course.title}
                                            className="object-cover w-full h-full"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                                        <button className="absolute bottom-4 right-4 bg-gradient-to-br from-amber-500 to-yellow-500 text-white px-5 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                                            Enroll Now
                                        </button>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                                        <p className="text-gray-300 text-base">{course.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
