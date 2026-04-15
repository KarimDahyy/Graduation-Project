import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const SKILLS_DATA = [
  { name: "React", current: 85, required: 90, status: "good", courseId: 1 },
  { name: "TypeScript", current: 60, required: 85, status: "gap", courseId: 3 },
  { name: "Node.js", current: 40, required: 70, status: "gap", courseId: 6 },
  { name: "UI/UX Principles", current: 75, required: 60, status: "good", courseId: 2 },
  { name: "GraphQL", current: 20, required: 60, status: "critical", courseId: 1 }, // Fallback to React course for now
];

export function SkillGap() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Skill Gap Analysis</h2>
        <p className="text-muted-foreground">Compare your skills against industry standards for "Senior Frontend Engineer"</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Skill Proficiency Overview</CardTitle>
            <CardDescription>Your current skill levels vs. job requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {SKILLS_DATA.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">
                    {skill.current}% / {skill.required}% Required
                  </span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/20">
                  {/* Background bar for Requirement */}
                  <div 
                    className="absolute h-full bg-primary/20" 
                    style={{ width: `${skill.required}%` }} 
                  />
                  {/* Foreground bar for Current Skill */}
                  <div 
                    className={cn(
                      "absolute h-full transition-all duration-500 rounded-full",
                      skill.status === "good" ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" :
                      skill.status === "gap" ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" : 
                      "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                    )}
                    style={{ width: `${skill.current}%` }}
                  />
                </div>
                {skill.status !== "good" && (
                   <div className="flex items-center gap-1.5 text-xs">
                     {skill.status === "critical" ? 
                       <AlertCircle className="h-3 w-3 text-red-500" /> : 
                       <AlertTriangle className="h-3 w-3 text-amber-500" />
                     }
                     <span className={cn(
                       skill.status === "critical" ? "text-red-500 font-medium" : "text-amber-500"
                     )}>
                       Gap: {skill.required - skill.current}% - {skill.status === "critical" ? "Critical Priority" : "Needs Improvement"}
                     </span>
                   </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                 <TrendingUp className="h-5 w-5 text-primary" />
                 Market Trends
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm text-muted-foreground mb-4">
                 Based on recent job postings, <strong>TypeScript</strong> and <strong>GraphQL</strong> are the most in-demand skills for this role.
               </p>
               <div className="flex flex-wrap gap-2">
                 <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">React</Badge>
                 <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">TypeScript</Badge>
                 <Badge variant="outline">Next.js</Badge>
                 <Badge variant="outline">Tailwind CSS</Badge>
               </div>
             </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               {SKILLS_DATA.filter(s => s.status !== "good").map(skill => (
                 <div key={skill.name} className="flex items-start gap-4 rounded-lg border p-3 hover:bg-muted/40 transition-colors">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Master {skill.name}</p>
                      <p className="text-xs text-muted-foreground">Recommend Course: "Advanced {skill.name} Patterns"</p>
                      <Button 
                        variant="link" 
                        className="h-auto p-0 text-primary hover:text-primary/80 group"
                        onClick={() => navigate(`/dashboard/courses/${skill.courseId}`)}
                      >
                        View Course <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                 </div>
               ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


