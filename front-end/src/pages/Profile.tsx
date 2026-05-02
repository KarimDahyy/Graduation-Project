import { useState } from "react";
import { Edit, Zap, Bug, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { storage } from "../lib/storage";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();

  const [profile] = useState(() => storage.get("user_profile", {
    firstName: "Ahmed",
    lastName: "Mohamed",
    email: "ahmed@example.com",
    title: "Frontend Developer",
    bio: "Passionate frontend developer focused on creating intuitive, high-performance web applications. Specializing in modern JavaScript frameworks and responsive design systems.",
    location: "Cairo, Egypt",
    joinedDate: "January 2024",
  }));

  const initials = `${profile.firstName?.[0] ?? "A"}${profile.lastName?.[0] ?? "M"}`;

  const skills = ["React", "TypeScript", "Tailwind", "Git", "Figma", "Next.js", "Node.js"];

  const achievements = [
    { id: 1, title: "Fast Learner", desc: "Completed 3 modules in under a week", date: "Feb 2024", bg: "bg-yellow-100", iconColor: "text-yellow-500", icon: Zap },
    { id: 2, title: "Bug Hunter", desc: "Resolved 10 technical challenges in code reviews", date: "Jan 2024", bg: "bg-blue-100", iconColor: "text-blue-500", icon: Bug },
  ];

  const recentActivity = [
    { title: "Advanced React Architecture", sub: "Completed Course • 2 days ago", active: true },
    { title: "TypeScript Generics Masterclass", sub: "Started Module • 4 days ago", active: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">

      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="h-20 w-20 rounded-full bg-[#11233E] flex items-center justify-center text-white text-2xl font-bold shadow-md flex-shrink-0">
              {initials}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#11233E]">{profile.firstName} {profile.lastName}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{profile.title}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 rounded-full text-sm font-medium"
            onClick={() => navigate("/dashboard/settings")}
          >
            <Edit className="h-3.5 w-3.5" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm">
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">About</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">Roadmap Progress</p>
          <p className="text-2xl font-bold text-[#11233E]">33%</p>
          <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#D4A34B] rounded-full" style={{ width: "33%" }} />
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">Courses Completed</p>
          <p className="text-2xl font-bold text-[#11233E]">4</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">Skill Score</p>
          <p className="text-2xl font-bold text-[#D4A34B]">780</p>
        </div>
      </div>

      {/* Achievements + Skills */}
      <div className="grid grid-cols-3 gap-4">

        {/* Achievements */}
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#11233E]">Achievements</h3>
            <button className="text-xs text-[#D4A34B] font-medium flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="space-y-3">
            {achievements.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#11233E]">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-3">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="text-xs rounded-full px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-base font-bold text-[#11233E] mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-1">
                <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${item.active ? "bg-[#D4A34B]" : "bg-gray-300"}`} />
                {i < recentActivity.length - 1 && <div className="w-px h-6 bg-gray-200 mt-1" />}
              </div>
              <div>
                <p className={`text-sm font-semibold ${item.active ? "text-[#11233E]" : "text-gray-500"}`}>{item.title}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
