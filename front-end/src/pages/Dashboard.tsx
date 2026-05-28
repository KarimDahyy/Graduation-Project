import { Card } from "../components/ui/Card";
import { Route, BookOpen, ArrowUpRight, Star, Clock, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { COURSES } from "../data/courses";

export function Dashboard() {
  const navigate = useNavigate();
  const recommendedCourses = COURSES.slice(0, 4);

  return (
    <div className="space-y-7 min-h-full">

      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-bold text-[#11233E] tracking-tight">Good morning 👋</h1>
        <p className="text-gray-400 text-sm mt-1">Here's what's happening with your career today.</p>
      </div>

      {/* Top 3 Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-none shadow-sm bg-white p-5 cursor-pointer" onClick={() => navigate("/dashboard/roadmap")}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Career Path</span>
            <div className="h-7 w-7 rounded-full bg-[#D4A34B]/15 flex items-center justify-center">
              <Route className="h-3.5 w-3.5 text-[#D4A34B]" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#11233E]">Frontend Dev</div>
          <p className="text-xs text-gray-400 mt-1">Level 2: Junior Developer</p>
        </Card>

        <Card className="rounded-2xl border-none shadow-sm bg-white p-5 cursor-pointer" onClick={() => navigate("/dashboard/courses")}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Modules Completed</span>
            <div className="h-7 w-7 rounded-full bg-[#D4A34B]/15 flex items-center justify-center">
              <BookOpen className="h-3.5 w-3.5 text-[#D4A34B]" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#11233E]">4/12</div>
          <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#D4A34B] rounded-full" style={{ width: "33%" }} />
          </div>
          <p className="text-xs text-gray-400 mt-1.5">33% complete</p>
        </Card>

        <Card className="rounded-2xl border-none shadow-sm bg-white p-5 cursor-pointer" onClick={() => navigate("/dashboard/skills")}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Skill Score</span>
            <div className="h-7 w-7 rounded-full bg-[#D4A34B]/15 flex items-center justify-center">
              <ArrowUpRight className="h-3.5 w-3.5 text-[#D4A34B]" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#11233E]">780</div>
          <p className="text-xs text-green-500 mt-1 font-medium">↑ +20 from last week</p>
        </Card>
      </div>

      {/* Recommended Courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#11233E]">Recommended for You</h2>
            <p className="text-xs text-gray-400 mt-0.5">Courses picked based on your career path</p>
          </div>
          <button
            onClick={() => navigate("/dashboard/courses")}
            className="flex items-center gap-1 text-xs font-semibold text-[#D4A34B]"
          >
            View All <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCourses.map(course => (
            <div
              key={course.id}
              onClick={() => navigate(`/dashboard/courses/${course.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <span className="text-[10px] font-semibold text-[#D4A34B] bg-[#D4A34B]/10 px-2 py-0.5 rounded-full">
                  {course.category}
                </span>
                <h3 className="text-xs font-bold text-[#11233E] mt-2 leading-snug line-clamp-2">{course.title}</h3>
                <p className="text-[10px] text-gray-400 mt-1">by {course.instructor}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    <Star className="h-3 w-3 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-600">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <Clock className="h-2.5 w-2.5" />
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Roadmap + Actions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Current Roadmap */}
        <div className="col-span-4 space-y-4">
          <h3 className="text-base font-bold text-[#11233E]">Current Roadmap</h3>
          <div className="flex gap-1 h-6 rounded-full overflow-hidden bg-gray-100">
            <div className="flex-1 bg-[#D4A34B]" />
            <div className="flex-1 bg-[#D4A34B]" />
            <div className="flex-1 bg-[#D4A34B]" />
            <div className="flex-1 bg-gray-200" />
            <div className="flex-1 bg-gray-200" />
          </div>
          <div className="relative mt-6">
            <div className="absolute -top-3 left-14 w-5 h-5 bg-[#fcfaf5] border-t-2 border-l-2 border-[#D4A34B]/30 rotate-45 z-0" />
            <Card className="rounded-2xl border border-[#D4A34B]/20 bg-[#fcfaf5] p-5 relative z-10 w-3/4 shadow-sm">
              <p className="text-xs text-gray-400 font-medium mb-1">Next Step:</p>
              <h4 className="text-xl font-bold text-[#11233E] mb-4">React Framework</h4>
              <Button
                onClick={() => navigate("/dashboard/courses")}
                className="bg-[#D4A34B] text-[#11233E] font-bold rounded-full px-6 text-sm shadow-sm"
              >
                Continue
              </Button>
            </Card>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="col-span-3 space-y-3">
          <h3 className="text-base font-bold text-[#11233E]">Recommended Actions</h3>
          <div className="space-y-3">
            {[
              { label: "Complete 'React Basics'", sub: "Due in 2 days", btn: "Start", path: "/dashboard/courses" },
              { label: "Book a Mentor", sub: "Unlock next level", btn: "Book", path: "/dashboard/mentors" },
              { label: "Take Skill Assessment", sub: "Update your score", btn: "Quiz", path: "/dashboard/skills" },
            ].map(a => (
              <div
                key={a.label}
                onClick={() => navigate(a.path)}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm cursor-pointer"
              >
                <div>
                  <p className="text-sm font-semibold text-[#11233E]">{a.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.sub}</p>
                </div>
                <Button className="bg-[#D4A34B] text-[#11233E] font-bold rounded-full px-5 text-xs shadow-sm h-8">
                  {a.btn}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
