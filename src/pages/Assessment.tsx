import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, BrainCircuit } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { cn } from "../lib/utils";
import { storage } from "../lib/storage";

// Mock Data
const INTERESTS = ["Web Development", "Data Science", "Cybersecurity", "Mobile Apps", "AI/ML", "Cloud Computing"];
const TRAITS = ["Analytical", "Creative", "Leader", "Introvert", "Extrovert", "Team Player"];

export function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(() => storage.get("assessment_step", 1));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisText, setAnalysisText] = useState("Initializing AI Model...");

  const [formData, setFormData] = useState(() => storage.get("assessment_data", {
    name: "",
    university: "",
    location: "",
    selectedInterests: [] as string[],
    selectedTraits: [] as string[],
  }));

  useEffect(() => {
    storage.set("assessment_step", step);
    storage.set("assessment_data", formData);
  }, [step, formData]);

  const totalSteps = 3;

  const simulateAIAnalysis = () => {
    setIsAnalyzing(true);
    const steps = [
      { progress: 10, text: "Processing user profile..." },
      { progress: 30, text: "Analyzing cognitive traits..." },
      { progress: 50, text: "Matching with industry standards..." },
      { progress: 70, text: "Generating personalized roadmap..." },
      { progress: 90, text: "Finalizing career recommendations..." },
      { progress: 100, text: "Done!" }
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= steps.length) {
        clearInterval(interval);
        localStorage.removeItem("assessment_step");
        navigate("/dashboard");
        return;
      }

      setAnalysisProgress(steps[currentStep].progress);
      setAnalysisText(steps[currentStep].text);
      currentStep++;
    }, 800); // 800ms per step
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      simulateAIAnalysis();
    }
  };

  const toggleSelection = (field: "selectedInterests" | "selectedTraits", value: string) => {
    setFormData(prev => {
      const current = prev[field]; // TS will infer this correctly now
      const isSelected = current.includes(value); 
      return {
        ...prev,
        [field]: isSelected 
          ? current.filter(item => item !== value)
          : [...current, value]
      };
    });
  };

  if (isAnalyzing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
        <Card className="w-full max-w-md text-center p-8 space-y-8 animate-in fade-in zoom-in duration-500">
           <div className="mx-auto h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center relative">
              <BrainCircuit className="h-12 w-12 text-primary animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
           </div>
           
           <div className="space-y-4">
             <h2 className="text-2xl font-bold">AI Career Analysis</h2>
             <p className="text-muted-foreground animate-pulse">{analysisText}</p>
             
             <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${analysisProgress}%` }}
                />
             </div>
           </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="mb-4 flex items-center justify-between">
             <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
             <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary/20">
               <div 
                 className="h-full bg-primary transition-all duration-300" 
                 style={{ width: `${(step / totalSteps) * 100}%` }} 
               />
             </div>
          </div>
          <CardTitle className="text-2xl">
            {step === 1 && "Tell us about yourself"}
            {step === 2 && "What are your interests?"}
            {step === 3 && "How would you describe yourself?"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Start by sharing some basic information."}
            {step === 2 && "Select topics that excite you."}
            {step === 3 && "This helps us match you with the right mentors."}
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px]">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Aly Ahmed" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">University / College</label>
                <Input 
                  value={formData.university} 
                  onChange={(e) => setFormData({...formData, university: e.target.value})}
                  placeholder="e.g. Cairo University" 
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map(interest => (
                <div
                  key={interest}
                  onClick={() => toggleSelection("selectedInterests", interest)}
                  className={cn(
                    "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    formData.selectedInterests.includes(interest)
                      ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                      : "bg-background"
                  )}
                >
                  {interest}
                  {formData.selectedInterests.includes(interest) && (
                    <Check className="ml-2 inline-block h-3 w-3" />
                  )}
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
             <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Where are you located?</h3>
                  <div className="grid grid-cols-2 gap-4">
                     {["Cairo", "Giza", "Alexandria", "Remote", "Other"].map(loc => (
                        <div 
                          key={loc}
                          onClick={() => setFormData({...formData, location: loc})}
                          className={cn(
                            "cursor-pointer rounded-lg border p-4 text-center transition-all hover:bg-muted",
                            formData.location === loc
                              ? "border-primary bg-primary/10 text-primary"
                              : "bg-background"
                          )}
                        >
                          {loc}
                        </div>
                     ))}
                  </div>
                </div>

                <div className="space-y-4">
                   <h3 className="font-medium">Top Skills (Select up to 5)</h3>
                   <div className="flex flex-wrap gap-2">
                     {TRAITS.concat(["HTML", "CSS", "JavaScript", "React", "Python"]).map(skill => (
                       <div
                         key={skill}
                         onClick={() => toggleSelection("selectedTraits", skill)}
                         className={cn(
                           "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                           formData.selectedTraits.includes(skill)
                             ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                             : "bg-background"
                         )}
                       >
                         {skill}
                         {formData.selectedTraits.includes(skill) && (
                           <Check className="ml-2 inline-block h-3 w-3" />
                         )}
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="ghost" 
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === totalSteps ? "Finish" : "Next"}
            {step !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
