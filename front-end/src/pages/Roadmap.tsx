import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Lock, ExternalLink, BookOpen, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { cn } from "../lib/utils";
import { storage } from "../lib/storage";
import { motion, AnimatePresence } from "framer-motion";

interface Milestone {
  id: number;
  title: string;
  description: string;
  status: string;
  type: string;
  resources: { title: string; url: string }[];
  checklist: { id: string; text: string; checked: boolean }[];
}

// Enhanced Data Structure
const DEFAULT_MILESTONES: Milestone[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Learn the basics of programming and algorithms.",
    status: "completed",
    type: "Course",
    resources: [
      { title: "CS50 by Harvard", url: "#" },
      { title: "Crash Course Computer Science", url: "#" }
    ],
    checklist: [
      { id: "c1", text: "Understand Binary & Data Representation", checked: true },
      { id: "c2", text: "Learn Basic Algorithms (Sorting, Searching)", checked: true }
    ]
  },
  {
    id: 2,
    title: "HTML & CSS Fundamentals",
    description: "Build your first static web pages.",
    status: "completed",
    type: "Project",
    resources: [
      { title: "MDN Web Docs", url: "#" },
      { title: "CSS-Tricks Flexbox Guide", url: "#" }
    ],
    checklist: [
      { id: "c1", text: "Build a semantic HTML structure", checked: true },
      { id: "c2", text: "Style with CSS Flexbox & Grid", checked: true },
      { id: "c3", text: "Make it mobile responsive", checked: true }
    ]
  },
  {
    id: 3,
    title: "JavaScript Basics",
    description: "Add interactivity to your websites.",
    status: "in-progress",
    type: "Course",
    resources: [
      { title: "JavaScript.info", url: "#" },
      { title: "You Don't Know JS", url: "#" }
    ],
    checklist: [
      { id: "c1", text: "Variables, Types, and Functions", checked: false },
      { id: "c2", text: "DOM Manipulation", checked: false },
      { id: "c3", text: "Async JS (Promises, Async/Await)", checked: false }
    ]
  },
  {
    id: 4,
    title: "React Framework",
    description: "Learn component-based architecture.",
    status: "locked",
    type: "Course",
    resources: [
      { title: "React Official Docs", url: "#" }
    ],
    checklist: [
      { id: "c1", text: "Components & Props", checked: false },
      { id: "c2", text: "State & Hooks", checked: false },
      { id: "c3", text: "React Router", checked: false }
    ]
  },
  {
    id: 5,
    title: "Portfolio Project",
    description: "Build a complete application to showcase your skills.",
    status: "locked",
    type: "Project",
    resources: [],
    checklist: [
      { id: "c1", text: "Plan your app architecture", checked: false },
      { id: "c2", text: "Build the MVP", checked: false },
      { id: "c3", text: "Deploy to Vercel/Netlify", checked: false }
    ]
  },
];

export function Roadmap() {
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const saved = storage.get("roadmap_progress_v2", null) as any;
    if (!saved) return DEFAULT_MILESTONES;
    // Basic migration check
    return saved[0]?.checklist ? saved : DEFAULT_MILESTONES;
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Calculate Progress
  const completedCount = milestones.filter(m => m.status === "completed").length;
  const progress = Math.round((completedCount / milestones.length) * 100);

  useEffect(() => {
    storage.set("roadmap_progress_v2", milestones);
  }, [milestones]);

  const updateStatus = (id: number, newStatus: string) => {
    const updated = milestones.map(m => 
      m.id === id ? { ...m, status: newStatus } : m
    );
    setMilestones(updated);
  };

  const toggleChecklist = (milestoneId: number, checkId: string) => {
    const updated = milestones.map(m => {
      if (m.id === milestoneId && m.checklist) {
        return {
          ...m,
          checklist: m.checklist.map(c => 
            c.id === checkId ? { ...c, checked: !c.checked } : c
          )
        };
      }
      return m;
    });
    setMilestones(updated);
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 bg-card p-6 rounded-xl border shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Your Career Roadmap</h2>
            <p className="text-muted-foreground">Frontend Developer Path</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-2xl font-bold text-primary">{progress}%</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-3 w-full bg-secondary/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="relative border-l-2 border-muted md:ml-6 space-y-8">
        {milestones.map((milestone, index) => {
          const isLocked = milestone.status === "locked";
          const isCompleted = milestone.status === "completed";
          const isActive = milestone.status === "in-progress";

          return (
            <motion.div 
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn("ml-6 relative", isLocked && "opacity-70 grayscale-[0.5]")}
            >
              <span className={cn(
                "absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                isCompleted ? "bg-primary text-primary-foreground" :
                isActive ? "bg-secondary text-secondary-foreground" :
                "bg-muted text-muted-foreground"
              )}>
                {isCompleted && <CheckCircle2 className="h-4 w-4" />}
                {isActive && <Circle className="h-4 w-4 fill-current animate-pulse" />}
                {isLocked && <Lock className="h-4 w-4" />}
              </span>
              
              <Card className={cn(
                "group transition-all duration-300 hover:shadow-md",
                isActive && "border-primary/50 ring-1 ring-primary/20"
              )}>
                <CardHeader className="cursor-pointer" onClick={() => !isLocked && toggleExpand(milestone.id)}>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        <Badge variant={isCompleted ? "default" : "secondary"} className="text-[10px] h-5">
                          {milestone.type}
                        </Badge>
                      </div>
                      <CardDescription>{milestone.description}</CardDescription>
                    </div>
                    {!isLocked && (
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        {expandedId === milestone.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {(expandedId === milestone.id || isActive) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="space-y-4 pt-0">
                        {/* Sub-tasks Checklist */}
                        {milestone.checklist && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground">
                              <CheckCircle2 className="h-3 w-3" /> Requirements
                            </h4>
                            <div className="space-y-2">
                              {milestone.checklist.map((item) => (
                                <div key={item.id} className="flex items-center space-x-2 bg-muted/30 p-2 rounded-md">
                                  <input 
                                    type="checkbox" 
                                    checked={item.checked}
                                    onChange={() => toggleChecklist(milestone.id, item.id)}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    disabled={isLocked}
                                  />
                                  <span className={cn("text-sm", item.checked && "text-muted-foreground line-through")}>
                                    {item.text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Resources */}
                        {milestone.resources && milestone.resources.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground">
                              <BookOpen className="h-3 w-3" /> Learning Resources
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {milestone.resources.map((res, i) => (
                                <a 
                                  key={i} 
                                  href={res.url} 
                                  className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                >
                                  {res.title} <ExternalLink className="h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="pt-2 flex justify-end gap-2">
                          {isActive && (
                            <Button size="sm" onClick={(e) => { e.stopPropagation(); updateStatus(milestone.id, "completed"); }}>
                              Mark as Complete
                            </Button>
                          )}
                          {isCompleted && (
                            <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); updateStatus(milestone.id, "in-progress"); }}>
                              Revisit
                            </Button>
                          )}
                          {isLocked && (
                            <Button variant="ghost" size="sm" disabled>
                              Locked
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      {progress === 100 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl text-center"
        >
          <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-xl font-bold text-yellow-600">Congratulations!</h3>
          <p className="text-muted-foreground">You have completed the entire roadmap.</p>
        </motion.div>
      )}
    </div>
  );
}
