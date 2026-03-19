import { useState } from "react";
import { Search, Clock, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { useNavigate } from "react-router-dom";
import { COURSES } from "../data/courses";

export function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Development", "Design", "Business", "Backend"];

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Browse Courses</h2>
        <p className="text-muted-foreground">Expand your knowledge with top-rated courses from industry experts.</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses or instructors..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map(category => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <Card 
            key={course.id} 
            className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => navigate(`/dashboard/courses/${course.id}`)}
          >
            <div className="aspect-video w-full overflow-hidden bg-muted relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <CardHeader className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                <div className="flex items-center text-xs font-medium text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">
                  <Star className="mr-1 h-3 w-3 fill-yellow-600" />
                  {course.rating}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{course.title}</CardTitle>
              <CardDescription className="text-sm mt-1">by {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1">
              <div className="flex flex-wrap gap-1 mt-2">
                {course.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0 border-muted-foreground/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t flex justify-between items-center bg-muted/20">
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {course.duration}
              </div>
              <Button size="sm" variant="ghost" className="hover:bg-primary/10 hover:text-primary p-0 h-auto font-medium">View Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
