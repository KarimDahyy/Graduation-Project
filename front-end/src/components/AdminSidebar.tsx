import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { 
  LayoutDashboard, 
  Users,
  BookOpen, 
  Settings, 
  LogOut,
  Briefcase
} from "lucide-react";

export function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin/login");
  };
  
  const links = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-3 py-4">
      <Link to="/admin" className="mb-8 flex items-center px-2 cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain rounded-full shadow-sm border border-red-600/20" />
        <div className="ml-3 flex flex-col">
          <span className="text-lg font-bold leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CareerCompass</span>
          <span className="text-xs font-semibold text-red-500 uppercase tracking-widest mt-1">Admin</span>
        </div>
      </Link>
      
      <div className="flex-1 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href || location.pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive && link.href === "/admin" && location.pathname !== "/admin" ? "text-muted-foreground hover:bg-accent hover:text-accent-foreground" :
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
          to="/admin/settings"
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="mr-3 h-5 w-5" />
          System Settings
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
