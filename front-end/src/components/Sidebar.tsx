import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { 
  Home, 
  Route, 
  Users,
  User, 
  BookOpen, 
  PieChart, 
  Settings, 
  LogOut,
  Briefcase
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("assessment_step");
    navigate("/");
  };
  
  const topLinks = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Career Roadmap", href: "/dashboard/roadmap", icon: Route },
    { name: "Mentorship", href: "/dashboard/mentors", icon: Users },
    { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Skill Analysis", href: "/dashboard/skills", icon: PieChart },
    { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  ];

  const bottomLinks = [
    { name: "My Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen w-64 shrink-0 flex-col border-none bg-[#11233E] rounded-r-[2rem] px-4 py-8 hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-20">
      <Link to="/dashboard" className="mb-10 flex items-center px-2 cursor-pointer transition-opacity">
        <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain" />
        <span className="ml-3 text-xl font-bold tracking-tight text-[#E8C162]">CareerCompass</span>
      </Link>
      
      <div className="flex-1 space-y-2">
        {topLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200",
                isActive 
                  ? "bg-[#E8C162] text-[#11233E] font-bold shadow-md" 
                  : "text-[#E8C162] font-medium"
              )}
            >
              <Icon className={cn("mr-4 h-5 w-5", isActive ? "text-[#11233E]" : "text-[#E8C162]")} />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto space-y-2">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          return (
             <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200",
                isActive 
                  ? "bg-[#E8C162] text-[#11233E] font-bold shadow-md" 
                  : "text-[#E8C162] font-medium"
              )}
            >
              <Icon className={cn("mr-4 h-5 w-5", isActive ? "text-[#11233E]" : "text-[#E8C162]")} />
              {link.name}
            </Link>
          )
        })}
        <button
          onClick={handleLogout}
          className="flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-[#E8C162] transition-all duration-200 text-left"
        >
          <LogOut className="mr-4 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
