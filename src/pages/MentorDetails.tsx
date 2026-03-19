import { useParams, useNavigate } from "react-router-dom";
import { MENTORS } from "../data/mentors";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Calendar, MapPin, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function MentorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mentor = MENTORS.find(m => m.id === Number(id));
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  if (!mentor) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Mentor not found</h2>
        <Button onClick={() => navigate("/dashboard/mentors")} className="mt-4">Back to Mentors</Button>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedSlot) return;
    setIsBooked(true);
    // In a real app, this would send an API request
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-primary" onClick={() => navigate("/dashboard/mentors")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
      </Button>

      {/* Header Profile */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-primary/5 to-transparent">
        <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <div className="h-32 w-32 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
              <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold border border-yellow-200 flex items-center">
              <Star className="h-3 w-3 mr-1 fill-yellow-600" /> {mentor.rating}
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-2 flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{mentor.name}</h1>
            <p className="text-lg text-primary font-medium">{mentor.role} at {mentor.company}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {mentor.location}</span>
              <span className="flex items-center"><Star className="h-4 w-4 mr-1" /> {mentor.reviews} Reviews</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
              {mentor.expertise.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="text-right">
             <div className="text-2xl font-bold text-primary">{mentor.price}</div>
             <p className="text-xs text-muted-foreground">per 60 min session</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Col: About */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {mentor.bio}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm">Personalized career guidance and roadmap reviews</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm">Technical mock interviews with detailed feedback</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm">Code reviews and best practices for cleaner code</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Col: Booking */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Book a Session</CardTitle>
              <CardDescription>Select a time slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isBooked ? (
                <>
                  <div className="grid grid-cols-1 gap-2">
                    {mentor.availability.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-md border text-sm font-medium transition-all flex items-center justify-between ${
                          selectedSlot === slot 
                            ? "border-primary bg-primary/5 text-primary ring-1 ring-primary" 
                            : "hover:bg-accent hover:border-primary/50"
                        }`}
                      >
                       <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {slot}</span>
                       {selectedSlot === slot && <CheckCircle2 className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    size="lg" 
                    disabled={!selectedSlot} 
                    onClick={handleBooking}
                  >
                    Confirm Booking
                  </Button>
                </>
              ) : (
                <div className="text-center py-8 space-y-3 animate-in fade-in zoom-in">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg">Booking Confirmed!</h3>
                  <p className="text-sm text-muted-foreground">
                    You are scheduled with {mentor.name.split(" ")[0]} for <br/>
                    <strong className="text-foreground">{selectedSlot}</strong>.
                  </p>
                  <Button variant="outline" onClick={() => setIsBooked(false)}>Book Another</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
