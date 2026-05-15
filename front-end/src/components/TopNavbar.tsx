import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { useState, useRef, useEffect } from "react";
import {
  Home,
  Route,
  Users,
  User,
  BookOpen,
  PieChart,
  Settings,
  LogOut,
  Briefcase,
  Bell,
  Search,
  ChevronDown,
  X,
  Map,
} from "lucide-react";
import { Input } from "./ui/Input";

const SEARCH_ITEMS = [
  { title: "Dashboard", href: "/dashboard", icon: Map, type: "Page" },
  { title: "Career Roadmap", href: "/dashboard/roadmap", icon: Route, type: "Feature" },
  { title: "Mentorship Hub", href: "/dashboard/mentors", icon: Users, type: "Page" },
  { title: "Skill Analysis", href: "/dashboard/skills", icon: PieChart, type: "Feature" },
  { title: "Jobs Board", href: "/dashboard/jobs", icon: Briefcase, type: "Page" },
  { title: "Courses Library", href: "/dashboard/courses", icon: BookOpen, type: "Page" },
  { title: "Settings", href: "/dashboard/settings", icon: Settings, type: "Page" },
];

const NOTIFICATIONS = [
  { id: 1, title: "New Course Available", desc: "Advanced React Patterns added.", time: "2h ago", unread: true },
  { id: 2, title: "Mentor Request", desc: "Sarah Miller accepted your request.", time: "5h ago", unread: true },
  { id: 3, title: "Milestone Unlocked", desc: "You completed 'JavaScript Basics'.", time: "1d ago", unread: false },
];

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Roadmap", href: "/dashboard/roadmap", icon: Route },
  { name: "Mentors", href: "/dashboard/mentors", icon: Users },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Skills", href: "/dashboard/skills", icon: PieChart },
  { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
];

export function TopNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("assessment_step");
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setIsSearchOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotifications(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setShowProfile(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredItems = SEARCH_ITEMS.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="w-full bg-[#11233E] z-30 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      {/* Top Row: Logo + Search + Actions */}
      <div className="flex items-center justify-between px-6 h-14 border-b border-white/10">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain mix-blend-screen" />
          <span className="text-lg font-bold tracking-tight text-[#E8C162]">CareerCompass</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-sm mx-8 relative" ref={searchRef}>
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 h-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 rounded-xl text-sm"
            value={searchQuery}
            onFocus={() => setIsSearchOpen(true)}
            onChange={(e) => { setSearchQuery(e.target.value); setIsSearchOpen(true); }}
          />
          {isSearchOpen && searchQuery && (
            <div className="absolute top-full mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-xl z-50 overflow-hidden">
              <div className="p-1.5">
                {filteredItems.length === 0 ? (
                  <p className="p-2 text-sm text-gray-400 text-center">No results found.</p>
                ) : (
                  filteredItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => { navigate(item.href); setIsSearchOpen(false); setSearchQuery(""); }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-700 cursor-pointer"
                    >
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span>{item.title}</span>
                      <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{item.type}</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="h-9 w-9 rounded-xl flex items-center justify-center text-white/70 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#11233E]" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border bg-white shadow-xl z-50 overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                  <h4 className="font-semibold text-sm text-[#11233E]">Notifications</h4>
                  <button onClick={() => setShowNotifications(false)}>
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="divide-y">
                  {NOTIFICATIONS.map(notif => (
                    <div key={notif.id} className={cn("px-4 py-3", notif.unread && "bg-[#11233E]/3")}>
                      <div className="flex justify-between items-start">
                        <p className={cn("text-sm font-medium", notif.unread ? "text-[#11233E]" : "text-gray-600")}>{notif.title}</p>
                        <span className="text-xs text-gray-400 ml-2 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{notif.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-white/10 text-white"
            >
              <div className="h-6 w-6 rounded-full bg-[#D4A34B] flex items-center justify-center text-[#11233E] text-xs font-bold">
                AM
              </div>
              <span className="text-sm font-medium">Ahmed</span>
              <ChevronDown className="h-3.5 w-3.5 text-white/60" />
            </button>

            {showProfile && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border bg-white shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold text-[#11233E]">Ahmed Mohamed</p>
                  <p className="text-xs text-gray-400">ahmed@example.com</p>
                </div>
                <div className="p-1.5">
                  <Link
                    to="/dashboard/profile"
                    onClick={() => setShowProfile(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 w-full"
                  >
                    <User className="h-4 w-4 text-gray-400" />
                    My Profile
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    onClick={() => setShowProfile(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 w-full"
                  >
                    <Settings className="h-4 w-4 text-gray-400" />
                    Settings
                  </Link>
                  <div className="border-t my-1" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-500 w-full"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row: Nav Links */}
      <div className="flex items-center gap-1 px-6 h-11 overflow-x-auto">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                isActive
                  ? "bg-[#D4A34B] text-[#11233E] font-bold shadow-sm"
                  : "text-white/70"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
