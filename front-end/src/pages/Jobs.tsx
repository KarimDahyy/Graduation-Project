import { Briefcase, MapPin, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { useNavigate } from "react-router-dom";
import { JOBS } from "../data/jobs";

export function Jobs() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Recommended Jobs</h2>
        <p className="text-muted-foreground">Opportunities tailored to your skills and career path.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job) => (
          <Card 
            key={job.id} 
            className="flex flex-col shadow-sm transition-shadow cursor-pointer"
            onClick={() => navigate(`/dashboard/jobs/${job.id}`)}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="font-medium mt-1">{job.company}</CardDescription>
                </div>
                <Badge variant="outline">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Posted {job.posted}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
