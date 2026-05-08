import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles, BookOpen, Users, Briefcase } from "lucide-react";

const ADS = [
  {
    id: 1,
    tag: "🎓 New Course",
    title: "Master System Design",
    desc: "Land FAANG interviews with our new intensive bootcamp.",
    cta: "Enroll Free",
    href: "/dashboard/courses",
    icon: BookOpen,
    gradient: "from-[#11233E] to-[#1c3a60]",
    accent: "#D4A34B",
  },
  {
    id: 2,
    tag: "⚡ Limited Offer",
    title: "Book a Top Mentor",
    desc: "Get 50% off your first session with a senior engineer.",
    cta: "Book Now",
    href: "/dashboard/mentors",
    icon: Users,
    gradient: "from-[#D4A34B] to-[#c0913f]",
    accent: "#11233E",
  },
  {
    id: 3,
    tag: "💼 Job Alert",
    title: "10 New Jobs Match You",
    desc: "Companies are actively hiring your exact profile right now.",
    cta: "View Jobs",
    href: "/dashboard/jobs",
    icon: Briefcase,
    gradient: "from-[#1c3a60] to-[#11233E]",
    accent: "#D4A34B",
  },
  {
    id: 4,
    tag: "✨ Pro Tip",
    title: "Boost Your Skill Score",
    desc: "Complete 2 more modules this week to jump 100+ points.",
    cta: "Start Now",
    href: "/dashboard/courses",
    icon: Sparkles,
    gradient: "from-[#11233E] to-[#2a4a70]",
    accent: "#D4A34B",
  },
];

export function AdBanner() {
  const [currentAd, setCurrentAd] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show ad after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    if (!visible || dismissed) return;
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ADS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [visible, dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => setDismissed(true), 400);
  };

  if (dismissed) return null;

  const ad = ADS[currentAd];
  const Icon = ad.icon;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-500"
      style={{
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className={`relative w-72 rounded-2xl bg-gradient-to-br ${ad.gradient} p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden`}
      >
        {/* Decorative circle */}
        <div
          className="absolute -top-8 -right-8 h-28 w-28 rounded-full opacity-10"
          style={{ background: ad.accent }}
        />
        <div
          className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full opacity-10"
          style={{ background: ad.accent }}
        />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 h-6 w-6 rounded-full flex items-center justify-center text-white/60 bg-white/10"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Tag */}
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white mb-3">
            {ad.tag}
          </span>

          {/* Icon + Title */}
          <div className="flex items-start gap-3 mb-2">
            <div
              className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: ad.accent + "25" }}
            >
              <Icon className="h-4.5 w-4.5" style={{ color: ad.accent }} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm leading-tight">{ad.title}</h4>
              <p className="text-white/70 text-xs mt-1 leading-relaxed">{ad.desc}</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={ad.href}
            className="mt-4 flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity"
            style={{ background: ad.accent, color: ad.gradient.includes("D4A34B") ? "#11233E" : "#11233E" }}
          >
            {ad.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-1.5 mt-3 justify-center relative z-10">
          {ADS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentAd(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === currentAd ? "16px" : "6px",
                height: "6px",
                background: i === currentAd ? ad.accent : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
