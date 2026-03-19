import { useParams, useNavigate } from "react-router-dom";
import { JOBS } from "../data/jobs";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { MapPin, DollarSign, Briefcase, Clock, ArrowLeft, CheckCircle2, Building, Globe } from "lucide-react";
import { useState } from "react";

export function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === Number(id));
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Job opening not found</h2>
        <Button onClick={() => navigate("/dashboard/jobs")} className="mt-4">Back to Jobs</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-primary" onClick={() => navigate("/dashboard/jobs")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
      </Button>

      {/* Header */}
      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-8">
           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                 <h1 className="text-3xl font-bold tracking-tight mb-2">{job.title}</h1>
                 <div className="flex items-center gap-2 text-lg text-muted-foreground font-medium mb-4">
                    <Building className="h-5 w-5" /> {job.company}
                 </div>
                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> {job.salary}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Posted {job.posted}</span>
                 </div>
              </div>
              <div className="flex flex-col gap-2 min-w-[150px]">
                 {!applied ? (
                   <Button size="lg" onClick={() => setApplied(true)}>Apply Now</Button>
                 ) : (
                   <Button size="lg" variant="outline" className="text-green-600 border-green-600 hover:text-green-700 hover:bg-green-50">
                     <CheckCircle2 className="mr-2 h-5 w-5" /> Applied
                   </Button>
                 )}
                 <Button variant="outline" size="sm" onClick={() => window.open('https://linkedin.com', '_blank')}>
                    <Globe className="mr-2 h-4 w-4" /> Company Site
                 </Button>
              </div>
           </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
         <div className="md:col-span-2 space-y-6">
            <Card>
               <CardHeader>
                  <CardTitle>Description</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{job.description}</p>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Requirements</CardTitle>
               </CardHeader>
               <CardContent>
                  <ul className="space-y-2">
                     {job.requirements.map((req, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                           <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                           {req}
                        </li>
                     ))}
                  </ul>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Benefits</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {job.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                           <CheckCircle2 className="h-4 w-4 text-green-500" />
                           {benefit}
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="md:col-span-1 space-y-6">
            <Card>
               <CardHeader>
                  <CardTitle className="text-sm">Technologies</CardTitle>
               </CardHeader>
               <CardContent className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                     <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
               </CardContent>
            </Card>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-xl border border-blue-100 dark:border-blue-900">
               <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Pro Tip</h4>
               <p className="text-sm text-blue-800 dark:text-blue-300">
                  Tailor your CV to highlight your experience with <strong>{job.tags[0]}</strong> to increase your chances of getting hired.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
