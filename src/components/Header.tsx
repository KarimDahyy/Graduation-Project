import { useState, useEffect, useRef } from "react";
import { Bell, Search, ChevronRight, User, BookOpen, Map, Settings } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

const SEARCH_ITEMS = [
  { title: "Dashboard", href: "/dashboard", icon: Map, type: "Page" },
  { title: "Career Roadmap", href: "/dashboard/roadmap", icon: Map, type: "Feature" },
  { title: "Mentorship Hub", href: "/dashboard/mentors", icon: User, type: "Page" },
  { title: "Skill Analysis", href: "/dashboard/skills", icon: ChevronRight, type: "Feature" },
  { title: "Jobs Board", href: "/dashboard/jobs", icon: Briefcase, type: "Page" },
  { title: "Courses Library", href: "/dashboard/courses", icon: BookOpen, type: "Page" },
  { title: "Settings", href: "/dashboard/settings", icon: Settings, type: "Page" },
];

// Mock Notifications
const NOTIFICATIONS = [
  { id: 1, title: "New Course Available", desc: "Advanced React Patterns added.", time: "2h ago", unread: true },
  { id: 2, title: "Mentor Request", desc: "Sarah Miller accepted your request.", time: "5h ago", unread: true },
  { id: 3, title: "Milestone Unlocked", desc: "You completed 'JavaScript Basics'.", time: "1d ago", unread: false },
];

import { Briefcase } from "lucide-react";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredItems = SEARCH_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full items-center justify-between">
        {/* Search Bar */}
        <div className="flex w-1/3 items-center" ref={searchRef}>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search pages, features..."
              className="pl-9"
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
            />
            {/* Search Results Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute top-full mt-2 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95">
                <div className="p-2">
                  {filteredItems.length === 0 ? (
                    <p className="p-2 text-sm text-muted-foreground text-center">No results found.</p>
                  ) : (
                    filteredItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavigate(item.href)}
                        className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{item.title}</span>
                        <span className="ml-auto text-xs text-muted-foreground">{item.type}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-9 w-9 px-0 rounded-full relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600 block ring-2 ring-background" />
              <span className="sr-only">Notifications</span>
            </Button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 p-4 z-50">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold leading-none">Notifications</h4>
                  <span className="text-xs text-muted-foreground">Mark all as read</span>
                </div>
                <div className="space-y-3">
                  {NOTIFICATIONS.map(notif => (
                    <div key={notif.id} className="flex flex-col gap-1 pb-3 border-b last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                         <p className={cn("text-sm font-medium", notif.unread && "text-primary")}>{notif.title}</p>
                         <span className="text-xs text-muted-foreground">{notif.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notif.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs ring-2 ring-background">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
