import { useState } from "react";
import { MapPin, Briefcase, Calendar, Award, Star, Zap, Edit } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { storage } from "../lib/storage";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  
  // Get user data from storage (same key as Settings)
  const [profile] = useState(() => storage.get("user_profile", {
    firstName: "Ahmed",
    lastName: "Mohamed",
    email: "ahmed@example.com",
    title: "Frontend Developer",
    bio: "Passionate about building accessible and performant web applications. Currently mastering React and TypeScript.",
    location: "Cairo, Egypt",
    joinedDate: "January 2024"
  }));

  const stats = [
    { label: "Roadmap Progress", value: "33%", icon: Zap, color: "text-yellow-500" },
    { label: "Courses Completed", value: "4", icon: Award, color: "text-blue-500" },
    { label: "Skill Score", value: "780", icon: Star, color: "text-purple-500" },
  ];

  const achievements = [
    { id: 1, title: "Fast Learner", desc: "Completed 3 modules in 1 week", date: "Feb 2024", icon: Zap },
    { id: 2, title: "Bug Hunter", desc: "Fixed 5 bugs in projects", date: "Jan 2024", icon: Briefcase },
    { id: 3, title: "Early Bird", desc: "Started learning at 6 AM", date: "Jan 2024", icon: Calendar },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Header / Cover */}
      <div className="relative mb-12">
        <div className="h-48 w-full rounded-xl bg-gradient-to-r from-primary/80 to-purple-600/80"></div>
        <div className="absolute -bottom-10 left-8 flex items-end">
          <div className="relative h-24 w-24 rounded-full border-4 border-background bg-muted">
             <div className="h-full w-full rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary">
                {profile.firstName[0]}{profile.lastName[0]}
             </div>
          </div>
          <div className="mb-2 ml-4 space-y-1">
            <h2 className="text-2xl font-bold text-foreground">{profile.firstName} {profile.lastName}</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Briefcase className="h-3 w-3" /> {profile.title}
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-6">
           <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur" onClick={() => navigate("/dashboard/settings")}>
             <Edit className="mr-2 h-4 w-4" /> Edit Profile
           </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-7 mt-12">
        {/* Left Column: Stats & Bio */}
        <div className="space-y-6 md:col-span-2">
           <Card>
             <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {profile.location || "Cairo, Egypt"}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Joined {profile.joinedDate || "Jan 2024"}
                </div>
                <hr />
                <div>
                  <h4 className="font-semibold mb-2 text-sm">About</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {profile.bio || "No bio added yet."}
                  </p>
                </div>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="text-sm">Skills</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-wrap gap-2">
               {["React", "TypeScript", "Tailwind", "Git", "Figma"].map(skill => (
                 <Badge key={skill} variant="secondary">{skill}</Badge>
               ))}
             </CardContent>
           </Card>
        </div>

        {/* Right Column: Content */}
        <div className="space-y-6 md:col-span-5">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color} opacity-80`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map(item => (
                  <div key={item.id} className="flex items-center p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
