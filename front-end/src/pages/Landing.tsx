import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, ArrowRight, Search, Users, BookOpen, BarChart2, Award, ChevronRight } from "lucide-react";
import { COURSES } from "../data/courses";

const CATEGORIES = [
  { name: "Web Development", icon: "💻", count: "1.2K courses" },
  { name: "Data Science", icon: "📊", count: "850 courses" },
  { name: "UI/UX Design", icon: "🎨", count: "620 courses" },
  { name: "Cybersecurity", icon: "🔒", count: "430 courses" },
  { name: "AI & Machine Learning", icon: "🤖", count: "710 courses" },
  { name: "Mobile Development", icon: "📱", count: "380 courses" },
  { name: "Cloud Computing", icon: "☁️", count: "290 courses" },
  { name: "DevOps", icon: "⚙️", count: "220 courses" },
];

const STATS = [
  { value: "12K+", label: "Active Learners" },
  { value: "300+", label: "Expert Mentors" },
  { value: "1,500+", label: "Courses Available" },
  { value: "95%", label: "Career Success Rate" },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold text-[#11233E]">CareerCompass</span>
          </Link>


          <div className="flex items-center gap-3">
            <Link to="/auth/login" className="text-sm font-semibold text-[#11233E] px-4 py-2 rounded-full border-2 border-[#11233E]">
              Log In
            </Link>
            <Link to="/auth/register" className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-[#11233E]">
              Join Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#11233E] via-[#1c3a60] to-[#11233E] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4A34B] font-semibold text-sm uppercase tracking-widest mb-4">Your AI-Powered Career Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Launch Your Career<br />with <span className="text-[#D4A34B]">Confidence</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Discover personalized roadmaps, connect with expert mentors, and close your skill gaps — all in one place.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link to="/auth/register" className="flex items-center gap-2 bg-[#D4A34B] text-[#11233E] font-bold px-6 py-3 rounded-full shadow-lg">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/auth/login" className="flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-full">
                Log In
              </Link>
            </div>
          </motion.div>

          {/* Hero illustration side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-[#D4A34B]/10 rounded-[3rem] rotate-6" />
              <div className="absolute inset-0 bg-white/5 rounded-[3rem] -rotate-3" />
              <img
                src="/assessment-illustration.png"
                alt="Career Compass"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl p-6"
              />
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#11233E]">Recommended for You</h2>
              <p className="text-gray-500 text-sm mt-1">Top-rated courses picked by our AI</p>
            </div>
            <Link to="/auth/register" className="flex items-center gap-1 text-sm font-semibold text-[#D4A34B]">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {COURSES.slice(0, 8).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to="/auth/register" className="block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4A34B] bg-[#D4A34B]/10 px-2 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#11233E] mt-2 leading-snug line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">by {course.instructor}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-3.5 w-3.5 fill-yellow-500" />
                        <span className="text-xs font-bold text-gray-700">{course.rating}</span>
                        <span className="text-xs text-gray-400">({course.students?.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-50">
                      <span className="text-xs font-semibold text-[#11233E]">{course.level}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why CareerCompass ── */}
      <section className="py-16 px-6 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold text-[#11233E]">Why CareerCompass?</h2>
          <p className="text-gray-500 text-sm mt-2">Everything you need to launch and grow your career</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, color: "bg-blue-100 text-blue-600", title: "Personalized Roadmap", desc: "AI builds a custom step-by-step career plan based on your goals and skills." },
            { icon: Users, color: "bg-yellow-100 text-yellow-600", title: "Expert Mentors", desc: "Book 1-on-1 sessions with senior professionals from top tech companies." },
            { icon: BarChart2, color: "bg-green-100 text-green-600", title: "Skill Gap Analysis", desc: "See exactly what skills you're missing and get targeted course recommendations." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center"
            >
              <div className={`h-12 w-12 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#11233E] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#11233E] to-[#1c3a60]">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="h-10 w-10 text-[#D4A34B] mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Start Your Journey?</h2>
          <p className="text-white/70 mb-8">Join thousands of learners who found their dream career with CareerCompass.</p>
          <Link
            to="/auth/register"
            className="inline-flex items-center gap-2 bg-[#D4A34B] text-[#11233E] font-bold px-8 py-3.5 rounded-full shadow-lg text-base"
          >
            Get Started for Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#11233E] text-white/60 py-8 px-6 text-center text-sm">
        © 2025 CareerCompass. All rights reserved.
      </footer>
    </div>
  );
}
