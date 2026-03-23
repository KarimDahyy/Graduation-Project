import { Card } from "../components/ui/Card";
import { Route, BookOpen, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 min-h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-[#11233E] tracking-tight">Good morning, Alex</h1>
      </div>

      {/* Top 3 Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <Card className="rounded-2xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-6 pb-8 transition-transform hover:scale-[1.02] cursor-pointer" onClick={() => navigate("/dashboard/roadmap")}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Career Path</span>
            <div className="h-8 w-8 rounded-full bg-[#D4A34B] flex items-center justify-center text-white">
              <Route className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#11233E]">Frontend Dev</div>
          <p className="text-sm text-[#11233E]/70 mt-1 font-medium">Level 2: Junior Developer</p>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-2xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-6 pb-8 transition-transform hover:scale-[1.02] cursor-pointer" onClick={() => navigate("/dashboard/courses")}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Modules Completed</span>
            <div className="h-8 w-8 rounded-full bg-[#D4A34B] flex items-center justify-center text-white">
              <BookOpen className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#11233E]">4/12</div>
          <p className="text-sm text-[#11233E]/70 mt-1 font-medium mb-3">33% progress</p>
          {/* Progress Bar */}
          <div className="h-2 w-full bg-[#D4A34B]/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#D4A34B] rounded-full" style={{ width: '33%' }} />
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-2xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-6 pb-8 transition-transform hover:scale-[1.02] cursor-pointer" onClick={() => navigate("/dashboard/skills")}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Skill Score</span>
            <div className="h-8 w-8 rounded-full bg-[#D4A34B] flex items-center justify-center text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#11233E]">780</div>
          <p className="text-sm text-[#11233E]/70 mt-1 font-medium">+20 from last week</p>
        </Card>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-7 pt-4">
        {/* Current Roadmap */}
        <div className="col-span-4 space-y-4">
          <h3 className="text-xl font-bold text-[#11233E]">Current Roadmap</h3>
          
          {/* Segmented Progress Bar */}
          <div className="flex gap-1 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white mb-6">
            <div className="flex-1 bg-[#D4A34B]"></div>
            <div className="flex-1 bg-[#D4A34B]"></div>
            <div className="flex-1 bg-[#D4A34B]"></div>
            <div className="flex-1 bg-[#D4A34B]/30"></div>
            <div className="flex-1 bg-[#D4A34B]/30"></div>
          </div>

          {/* Speech Bubble Card */}
          <div className="relative mt-8">
            {/* The little arrow pointing up */}
            <div className="absolute -top-3 left-16 w-6 h-6 bg-[#fcfaf5] border-t-2 border-l-2 border-[#D4A34B]/30 rotate-45"></div>
            
            <Card className="rounded-2xl border-2 border-[#D4A34B]/30 shadow-lg bg-[#fcfaf5] p-6 relative z-10 w-3/4">
              <p className="text-sm text-[#11233E]/70 font-medium mb-1">Next Step:</p>
              <h4 className="text-2xl font-bold text-[#11233E] mb-6">React Framework</h4>
              <Button 
                onClick={() => navigate("/dashboard/courses")}
                className="bg-[#D4A34B] hover:bg-[#D4A34B]/90 text-[#11233E] font-bold rounded-full px-8 shadow-md hover:shadow-lg transition-all"
              >
                Continue
              </Button>
            </Card>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="col-span-3 space-y-4">
          <h3 className="text-xl font-bold text-[#11233E]">Recommended Actions</h3>
          
          <div className="space-y-4">
            {/* Action 1 */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-none hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer" onClick={() => navigate("/dashboard/courses")}>
              <div>
                <p className="font-semibold text-[#11233E]">Complete 'React Basics'</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Due in 2 days</p>
              </div>
              <Button className="bg-[#D4A34B] hover:bg-[#D4A34B]/90 text-[#11233E] font-bold rounded-full px-6 shadow-sm">
                Start Course
              </Button>
            </div>

            {/* Action 2 */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-none hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer" onClick={() => navigate("/dashboard/mentors")}>
              <div>
                <p className="font-semibold text-[#11233E]">Book a Mentor</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Unlock next level</p>
              </div>
              <Button className="bg-[#D4A34B] hover:bg-[#D4A34B]/90 text-[#11233E] font-bold rounded-full px-6 shadow-sm">
                Book Now
              </Button>
            </div>

            {/* Action 3 */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-none hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer" onClick={() => navigate("/dashboard/skills")}>
              <div>
                <p className="font-semibold text-[#11233E]">Take Skill Assessment</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">Update your score</p>
              </div>
              <Button className="bg-[#D4A34B] hover:bg-[#D4A34B]/90 text-[#11233E] font-bold rounded-full px-6 shadow-sm">
                Take Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
