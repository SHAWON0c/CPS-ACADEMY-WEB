import Image from "next/image"
import Link from "next/link"
import CourseImg1 from "../../../../public/images/courses/course1.jpg"
import CourseImg2 from "../../../../public/images/courses/course2.jpg"

// `params` comes from Next.js App Router
export default function CourseDetails({ params }) {
    const { id } = params // <-- this replaces useRouter

    const courses = [
        {
            slug: "mastering-algorithms",
            title: "Mastering Algorithms & Data Structures",
            description:
                "Build strong foundations in algorithms and data structures. Learn step-by-step problem-solving techniques for coding interviews and competitions.",
            img: CourseImg1,
            curriculum: [
                "Introduction to Programming",
                "Sorting & Searching Algorithms",
                "Dynamic Programming",
                "Graph Algorithms"
            ]
        },
        {
            slug: "advanced-competitive",
            title: "Advanced Competitive Programming",
            description:
                "Enhance your problem-solving skills with advanced topics like dynamic programming, graphs, and optimization techniques to become a top coder.",
            img: CourseImg2,
            curriculum: [
                "Advanced Graphs",
                "Bit Manipulation",
                "Number Theory",
                "Optimization Problems"
            ]
        }
    ]

    const course = courses.find(c => c.slug === id)

    if (!course) return <p className="text-white text-center mt-20">Course not found.</p>

    return (
        <section className="py-24 px-4 bg-[#0a0e27] min-h-screen ">
            <div className="max-w-4xl mx-auto text-white space-y-8">
              

                <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg shadow-black/50">
                    <Image src={course.img} alt={course.title} className="object-cover" fill />
                </div>

                <p className="text-gray-300 text-lg">{course.description}</p>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                        {course.curriculum.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <button className="bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4 rounded-lg font-bold text-white shadow-lg hover:scale-105 transition-transform duration-300">
                    Enroll Now
                </button>  <br />
                  <Link href="/courses">
                    <button className="text-amber-400 font-bold hover:underline">&larr; Back to Courses</button>
                </Link>
            </div>
        </section>
    )
}
