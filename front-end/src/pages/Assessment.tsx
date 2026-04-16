import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { cn } from "../lib/utils";
import { storage } from "../lib/storage";

// Mock Data
const INTERESTS = [
  "Web Development", "Data Science", "Cybersecurity", "Mobile Apps", 
  "AI/ML", "Cloud Computing", "UI/UX Design", "Game Development", 
  "Blockchain", "DevOps", "Digital Marketing", "Product Management"
];
const TRAITS = [
  "Analytical", "Creative", "Leader", "Introvert", 
  "Extrovert", "Team Player", "Problem Solver", "Adaptable", 
  "Detail-Oriented", "Communicator"
];

export function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(() => storage.get("assessment_step", 1));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisText, setAnalysisText] = useState("Initializing AI Model...");

  const [formData, setFormData] = useState(() => storage.get("assessment_data", {
    university: "",
    location: "",
    selectedInterests: [] as string[],
    selectedTraits: [] as string[],
  }));

  useEffect(() => {
    storage.set("assessment_step", step);
    storage.set("assessment_data", formData);
  }, [step, formData]);

  const totalSteps = 4;

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
    }, 800);
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
      const current = prev[field]; 
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
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa] p-4">
        <div className="w-full max-w-md bg-white rounded-3xl text-center p-12 space-y-8 shadow-2xl animate-in fade-in zoom-in duration-500">
           <div className="mx-auto h-24 w-24 bg-[#11233E]/10 rounded-full flex items-center justify-center relative">
              <BrainCircuit className="h-12 w-12 text-[#11233E] animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-[#11233E]/30 border-t-[#D4A34B] animate-spin" />
           </div>
           
           <div className="space-y-4">
             <h2 className="text-2xl font-bold text-[#11233E]">AI Career Analysis</h2>
             <p className="text-[#11233E]/70 animate-pulse">{analysisText}</p>
             
             <div className="h-2 w-full bg-[#11233E]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#D4A34B] transition-all duration-500 ease-out"
                  style={{ width: `${analysisProgress}%` }}
                />
             </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa] p-4 font-sans">
      <div className="flex w-full max-w-[950px] bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.08)] h-[550px] max-h-[85vh] relative flex-shrink-0">
        
        {/* Left Side: Illustration */}
        <div className="hidden md:flex w-[40%] bg-[#fffdf9] items-center justify-center p-6 border-r border-gray-100">
          <img 
            src="/assessment-illustration.png" 
            alt="Career Compass Illustration" 
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col relative overflow-y-auto">
          
          {/* Header / Progress Line */}
          <div className="mb-6 flex items-center justify-between shrink-0">
             <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
               {step === 2 ? "Introduction" : `Step ${step > 2 ? step - 1 : step} of 3`}
             </span>
             <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
               <div 
                 className="h-full bg-[#11233E] transition-all duration-500 relative" 
                 style={{ width: `${(step / totalSteps) * 100}%` }} 
               >
                 <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#11233E] rounded-full shadow-[0_0_10px_rgba(17,35,62,0.5)]"></div>
               </div>
             </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#11233E] mb-1 tracking-tight">Tell us about yourself</h2>
                  <p className="text-[#11233E]/60 text-base">Start by sharing some basic information.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#11233E]">University / College</label>
                    <Input 
                      value={formData.university} 
                      onChange={(e) => setFormData({...formData, university: e.target.value})}
                      placeholder="e.g. Cairo University" 
                      className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#11233E]">Where are you located?</label>
                    <div className="grid grid-cols-3 gap-2">
                       {["Cairo", "Giza", "Alexandria", "Remote", "Other"].map(loc => (
                          <div 
                            key={loc}
                            onClick={() => setFormData({...formData, location: loc})}
                            className={cn(
                              "cursor-pointer rounded-xl border-2 p-2 text-sm text-center font-medium transition-all hover:bg-gray-50",
                              formData.location === loc
                                ? "border-[#11233E] bg-[#11233E]/5 text-[#11233E]"
                                : "border-gray-100 bg-white text-gray-500"
                            )}
                          >
                            {loc}
                          </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col justify-center h-full pb-4">
                <h2 className="text-3xl leading-[1.2] font-extrabold text-[#11233E] tracking-tight">
                  Ready to discover what suits you best?
                </h2>
                <p className="text-[#11233E]/70 text-base leading-relaxed">
                  Take this quick and fun test to explore your personality, interests, and strengths. Don't overthink it—just answer honestly and let us guide you to the right career path for you!
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#11233E] mb-1 tracking-tight">What are your interests?</h2>
                  <p className="text-[#11233E]/60 text-base">Select topics that excite you the most.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map(interest => (
                    <div
                      key={interest}
                      onClick={() => toggleSelection("selectedInterests", interest)}
                      className={cn(
                        "cursor-pointer rounded-full border-2 px-4 py-2 text-xs font-semibold transition-all hover:shadow-md",
                        formData.selectedInterests.includes(interest)
                          ? "border-[#11233E] bg-[#11233E] text-white shadow-md transform scale-[1.02]"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      )}
                    >
                      {interest}
                      {formData.selectedInterests.includes(interest) && (
                        <Check className="ml-1 inline-block h-3 w-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
               <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#11233E] mb-1 tracking-tight">Your Top Skills</h2>
                    <p className="text-[#11233E]/60 text-base">Select up to 5 skills or traits.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                    {TRAITS.concat(["HTML", "CSS", "JavaScript", "React", "Python", "Node.js", "SQL", "TypeScript", "Figma", "Git"]).map(skill => (
                      <div
                        key={skill}
                        onClick={() => toggleSelection("selectedTraits", skill)}
                        className={cn(
                          "cursor-pointer rounded-full border-2 px-4 py-2 text-xs font-semibold transition-all hover:shadow-md",
                          formData.selectedTraits.includes(skill)
                            ? "border-[#11233E] bg-[#11233E] text-white shadow-md transform scale-[1.02]"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        )}
                      >
                        {skill}
                        {formData.selectedTraits.includes(skill) && (
                          <Check className="ml-1 inline-block h-3 w-3" />
                        )}
                      </div>
                    ))}
                  </div>
               </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex justify-between items-center pt-4 border-t border-gray-100 shrink-0">
            <Button 
              variant="ghost" 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className={cn("font-medium text-gray-500 hover:text-[#11233E] hover:bg-gray-100 rounded-xl px-5 py-2 h-10", step === 1 && "opacity-0 cursor-default")}
            >
              Back
            </Button>
            
            {step === 2 ? (
              <Button 
                onClick={handleNext}
                className="bg-[#D4A34B] hover:bg-[#c0913f] text-[#11233E] font-bold rounded-xl px-6 h-11 shadow-md hover:shadow-lg transition-all"
              >
                Start the Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                className="bg-[#11233E] hover:bg-[#1c3559] text-white font-semibold rounded-xl px-6 h-11 shadow-md transition-all"
              >
                {step === totalSteps ? "Finish" : "Next"}
                {step !== totalSteps && <ChevronRight className="ml-1 h-5 w-5" />}
              </Button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
