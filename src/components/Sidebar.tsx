import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { 
  LayoutDashboard, 
  Map, 
  Users,
  User, 
  BookOpen, 
  BarChart, 
  Settings, 
  LogOut,
  Briefcase
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem("assessment_step");
    // Navigate to landing page
    navigate("/");
  };
  
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Career Roadmap", href: "/dashboard/roadmap", icon: Map },
    { name: "Mentorship", href: "/dashboard/mentors", icon: Users },
    { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Skill Analysis", href: "/dashboard/skills", icon: BarChart },
    { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-3 py-4">
      <Link to="/dashboard" className="mb-8 flex items-center px-2 cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="CareerCompass" className="h-10 w-10 object-contain rounded-full shadow-sm" />
        <span className="ml-3 text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CareerCompass</span>
      </Link>
      
      <div className="flex-1 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto">
        <Link
          to="/dashboard/profile"
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <User className="mr-3 h-5 w-5" />
          My Profile
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="mt-1 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
