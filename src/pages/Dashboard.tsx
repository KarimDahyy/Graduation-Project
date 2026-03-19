import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Map, BookOpen, Users, ArrowUpRight, Award, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  const handleDownloadReport = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Button onClick={handleDownloadReport}>Download Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Clickable Stat Cards */}
        <Card 
          className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md"
          onClick={() => navigate("/dashboard/roadmap")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Career Path</CardTitle>
            <Map className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Frontend Dev</div>
            <p className="text-xs text-muted-foreground">Level 2: Junior Developer</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md"
          onClick={() => navigate("/dashboard/courses")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/12</div>
            <p className="text-xs text-muted-foreground">33% progress</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md"
          onClick={() => navigate("/dashboard/mentors")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentorship Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Last session: Yesterday</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md"
          onClick={() => navigate("/dashboard/skills")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Score</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">780</div>
            <p className="text-xs text-muted-foreground">+20 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Current Roadmap</CardTitle>
            <Link to="/dashboard/roadmap" className="text-sm text-primary hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="pl-2 flex-1">
            <Link to="/dashboard/roadmap" className="group block h-full">
              <div className="h-[200px] flex flex-col items-center justify-center border-dashed border-2 rounded-md bg-muted/20 text-muted-foreground group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                <Map className="h-10 w-10 mb-2 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />
                <p className="font-medium">Continue your journey</p>
                <p className="text-xs">Next: React Framework</p>
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div 
                className="flex items-center p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                onClick={() => navigate("/dashboard/courses")}
              >
                <div className="h-9 w-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                   <BookOpen className="h-5 w-5" />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Complete "React Basics"</p>
                  <p className="text-sm text-muted-foreground">Due in 2 days</p>
                </div>
                <div className="ml-auto font-medium text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Course</div>
              </div>

              <div 
                className="flex items-center p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                onClick={() => navigate("/dashboard/mentors")}
              >
                <div className="h-9 w-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                   <Users className="h-5 w-5" />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Book a Mentor</p>
                  <p className="text-sm text-muted-foreground">Unlock next level</p>
                </div>
                <div className="ml-auto font-medium text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Action</div>
              </div>

              <div 
                className="flex items-center p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                onClick={() => navigate("/dashboard/skills")}
              >
                <div className="h-9 w-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                   <Award className="h-5 w-5" />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Take Skill Assessment</p>
                  <p className="text-sm text-muted-foreground">Update your score</p>
                </div>
                <div className="ml-auto font-medium text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Quiz</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
