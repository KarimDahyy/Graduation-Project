import { useState } from "react";
import { Search, MapPin, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { useNavigate } from "react-router-dom";
import { MENTORS } from "../data/mentors";

export function Mentors() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredMentors = MENTORS.filter(mentor => 
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 cursor-default">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
           <h2 className="text-3xl font-bold tracking-tight">Find a Mentor</h2>
           <p className="text-muted-foreground">Connect with industry experts to accelerate your career.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search by name, role, or company..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMentors.map((mentor) => (
          <Card 
            key={mentor.id} 
            className="flex flex-col h-full overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/dashboard/mentors/${mentor.id}`)}
          >
            <div className="aspect-square w-full overflow-hidden bg-muted relative">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.role}</p>
                  <p className="text-xs text-muted-foreground">at {mentor.company}</p>
                </div>
                <div className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                  <Star className="mr-1 h-3 w-3 fill-yellow-700" />
                  {mentor.rating}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                {mentor.location}
              </div>
              <div className="flex flex-wrap gap-1">
                {mentor.expertise.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 py-0">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2 mt-auto">
              <Button className="w-full flex-1" size="sm">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
