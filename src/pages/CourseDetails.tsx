import { useParams, useNavigate } from "react-router-dom";
import { COURSES } from "../data/courses";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Clock, Star, ArrowLeft, PlayCircle, BookOpen, Users, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

export function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === Number(id));
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Button onClick={() => navigate("/dashboard/courses")} className="mt-4">Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-10">
      <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-primary" onClick={() => navigate("/dashboard/courses")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
      </Button>

      {/* Hero Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
           <Badge variant="outline" className="mb-2 border-primary text-primary">{course.category}</Badge>
           <h1 className="text-4xl font-bold tracking-tight">{course.title}</h1>
           <p className="text-lg text-muted-foreground">{course.description}</p>
           
           <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
             <div className="flex items-center text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                <Star className="mr-1 h-4 w-4 fill-yellow-600" />
                <span className="font-bold">{course.rating}</span>
             </div>
             <div className="flex items-center gap-1">
               <Users className="h-4 w-4" /> {course.students.toLocaleString()} students
             </div>
             <div className="flex items-center gap-1">
               <Calendar className="h-4 w-4" /> Last updated {course.lastUpdated}
             </div>
           </div>

           <div className="flex items-center gap-3 pt-4">
             <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {course.instructor[0]}
             </div>
             <div>
               <p className="text-sm font-medium">Created by</p>
               <p className="text-sm font-bold text-primary">{course.instructor}</p>
             </div>
           </div>
        </div>

        <div className="md:col-span-1">
          <Card className="overflow-hidden sticky top-24 border-2 border-primary/10 shadow-lg">
             <div className="aspect-video w-full relative group cursor-pointer">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                   <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>
             </div>
             <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                   <span className="text-2xl font-bold">Free</span>
                   <Badge variant="secondary">{course.level}</Badge>
                </div>
                {!enrolled ? (
                  <Button className="w-full" size="lg" onClick={() => setEnrolled(true)}>
                    Enroll Now
                  </Button>
                ) : (
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Continue Learning
                  </Button>
                )}
                <div className="space-y-2 text-sm text-muted-foreground">
                   <div className="flex justify-between">
                      <span className="flex items-center gap-2"><Clock className="h-4 w-4"/> Duration</span>
                      <span>{course.duration}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="flex items-center gap-2"><BookOpen className="h-4 w-4"/> Lectures</span>
                      <span>{course.syllabus.length} modules</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> Certificate</span>
                      <span>Yes</span>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-2xl space-y-8 mt-8">
        <Card>
           <CardHeader>
             <CardTitle>What you'll learn</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.tags.map(tag => (
                   <div key={tag} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Maserting {tag}</span>
                   </div>
                ))}
             </div>
           </CardContent>
        </Card>

        <Card>
           <CardHeader>
             <CardTitle>Course Content</CardTitle>
             <CardDescription>{course.syllabus.length} sections • {course.duration} total length</CardDescription>
           </CardHeader>
           <CardContent className="p-0">
              <div className="divide-y">
                 {course.syllabus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer text-sm">
                       <div className="flex items-center gap-3">
                          <PlayCircle className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{item.title}</span>
                       </div>
                       <span className="text-muted-foreground">{item.duration}</span>
                    </div>
                 ))}
              </div>
           </CardContent>
        </Card>
      </div>

    </div>
  );
}
