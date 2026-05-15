import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { cn } from "../lib/utils";
import { storage } from "../lib/storage";

// Mock Data
// Interest Tree: each category has sub-interests
const INTEREST_TREE: Record<string, string[]> = {
  "Web Development":    ["Frontend", "Backend", "Full Stack", "React", "Vue.js", "Angular", "Node.js", "REST APIs", "GraphQL"],
  "Data Science":       ["Machine Learning", "Data Analysis", "Python", "Statistics", "Data Visualization", "SQL", "Big Data", "Pandas"],
  "Cybersecurity":      ["Ethical Hacking", "Penetration Testing", "Network Security", "SOC Analysis", "Cryptography", "Malware Analysis"],
  "Mobile Apps":        ["iOS", "Android", "Flutter", "React Native", "Swift", "Kotlin", "Cross-Platform"],
  "AI/ML":              ["Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Generative AI", "LLMs"],
  "Cloud Computing":    ["AWS", "Azure", "Google Cloud", "Serverless", "Kubernetes", "Docker", "Infrastructure as Code"],
  "UI/UX Design":       ["User Research", "Figma", "Prototyping", "Wireframing", "Design Systems", "Accessibility", "Motion Design"],
  "Game Development":   ["Unity", "Unreal Engine", "3D Modeling", "Game Physics", "Mobile Games", "VR/AR", "Level Design"],
  "Blockchain":         ["Smart Contracts", "Solidity", "DeFi", "Web3", "NFTs", "Cryptocurrency", "Ethereum"],
  "DevOps":             ["CI/CD", "Docker", "Kubernetes", "Terraform", "Monitoring", "Site Reliability", "GitHub Actions"],
  "Digital Marketing":  ["SEO", "Social Media", "Content Marketing", "Email Marketing", "PPC", "Analytics", "Branding"],
  "Product Management": ["Agile", "User Research", "Roadmapping", "OKRs", "Stakeholder Management", "A/B Testing", "Scrum"],
};
const INTERESTS = Object.keys(INTEREST_TREE);

// Skill Tree
const SKILL_TREE: Record<string, string[]> = {
  "Programming":   ["JavaScript", "Python", "TypeScript", "Java", "C++", "C#", "PHP", "Go", "Rust", "Swift"],
  "Frontend":      ["HTML", "CSS", "React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Sass", "Redux"],
  "Backend":       ["Node.js", "Express", "Django", "FastAPI", "Spring Boot", "Laravel", "REST APIs", "GraphQL"],
  "Databases":     ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQLite"],
  "DevOps":        ["Git", "Docker", "Kubernetes", "CI/CD", "Linux", "AWS", "Azure", "GitHub Actions"],
  "Design":        ["Figma", "Adobe XD", "Photoshop", "UI Design", "UX Research", "Prototyping", "Wireframing"],
  "Data & AI":     ["Machine Learning", "Data Analysis", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Tableau"],
  "Soft Skills":   ["Communication", "Leadership", "Problem Solving", "Teamwork", "Critical Thinking", "Time Management", "Adaptability"],
};
const SKILL_CATEGORIES = Object.keys(SKILL_TREE);
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
  const [interestSearch, setInterestSearch] = useState("");
  const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
  const [skillSearch, setSkillSearch] = useState("");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const [formData, setFormData] = useState(() => storage.get("assessment_data", {
    university: "",
    dateOfBirth: "",
    gender: "",
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
              <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <h2 className="text-xl font-extrabold text-[#11233E] mb-0.5 tracking-tight">Tell us about yourself</h2>
                  <p className="text-[#11233E]/60 text-sm">Start by sharing some basic information.</p>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#11233E]">
                        University / College{" "}
                        <span className="text-xs font-normal text-gray-400">(Optional)</span>
                      </label>
                      <Input 
                        value={formData.university} 
                        onChange={(e) => setFormData({...formData, university: e.target.value})}
                        placeholder="e.g. Cairo University" 
                        className="rounded-xl border-gray-200 h-9 text-sm bg-gray-50/50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#11233E]">Date of Birth</label>
                      <Input 
                        type="date"
                        value={formData.dateOfBirth} 
                        onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                        className="rounded-xl border-gray-200 h-9 text-sm bg-gray-50/50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#11233E]">Gender</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Male", "Female", "Prefer not to say"].map(g => (
                        <div
                          key={g}
                          onClick={() => setFormData({...formData, gender: g})}
                          className={cn(
                            "cursor-pointer rounded-xl border-2 py-1.5 text-xs text-center font-medium transition-all hover:bg-gray-50",
                            formData.gender === g
                              ? "border-[#11233E] bg-[#11233E]/5 text-[#11233E]"
                              : "border-gray-100 bg-white text-gray-500"
                          )}
                        >
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#11233E]">Where are you located?</label>
                    <div className="grid grid-cols-3 gap-2">
                       {["Cairo", "Giza", "Alexandria", "Remote", "Other"].map(loc => (
                          <div 
                            key={loc}
                            onClick={() => setFormData({...formData, location: loc})}
                            className={cn(
                              "cursor-pointer rounded-xl border-2 py-1.5 text-xs text-center font-medium transition-all hover:bg-gray-50",
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

            {step === 3 && (() => {
              const filteredInterests = INTERESTS.filter(i =>
                i.toLowerCase().includes(interestSearch.toLowerCase()) ||
                INTEREST_TREE[i].some(s => s.toLowerCase().includes(interestSearch.toLowerCase()))
              );
              return (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#11233E] mb-1 tracking-tight">What are your interests?</h2>
                    <p className="text-[#11233E]/60 text-sm">Select a category, then pick what excites you most.</p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative">
                    <svg className="absolute left-3 top-2.5 h-4 w-4 text-[#11233E]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
                    <input
                      type="text"
                      value={interestSearch}
                      onChange={e => { setInterestSearch(e.target.value); setExpandedInterest(null); }}
                      placeholder="Search interests..."
                      className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border-2 border-gray-100 bg-gray-50 text-[#11233E] placeholder:text-gray-400 focus:outline-none focus:border-[#11233E]/30 focus:bg-white transition-all"
                    />
                    {interestSearch && (
                      <button onClick={() => setInterestSearch("")} className="absolute right-3 top-2.5 text-gray-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    )}
                  </div>

                  {/* Main Interest Pills */}
                  <div className="flex flex-wrap gap-2">
                    {filteredInterests.map(interest => {
                      const isSelected = formData.selectedInterests.includes(interest);
                      const isExpanded = expandedInterest === interest;
                      const subCount = INTEREST_TREE[interest].filter(s => formData.selectedInterests.includes(s)).length;
                      return (
                        <div key={interest} className="contents">
                          <button
                            onClick={() => {
                              setExpandedInterest(isExpanded ? null : interest);
                              if (!isSelected) toggleSelection("selectedInterests", interest);
                            }}
                            className={cn(
                              "flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-xs font-semibold transition-all",
                              isSelected || isExpanded
                                ? "border-[#11233E] bg-[#11233E] text-white shadow-md"
                                : "border-gray-200 bg-white text-gray-600"
                            )}
                          >
                            {interest}
                            {subCount > 0 && (
                              <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-[#D4A34B] text-[#11233E] text-[9px] font-bold">{subCount}</span>
                            )}
                            <svg className={cn("h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sub-interests panel */}
                  {expandedInterest && !interestSearch && (
                    <div className="rounded-2xl border-2 border-[#11233E]/10 bg-[#11233E]/3 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#11233E]/40 mb-2">{expandedInterest} — pick what applies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {INTEREST_TREE[expandedInterest].map(sub => {
                          const isSubSelected = formData.selectedInterests.includes(sub);
                          return (
                            <button
                              key={sub}
                              onClick={() => toggleSelection("selectedInterests", sub)}
                              className={cn(
                                "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
                                isSubSelected
                                  ? "border-[#D4A34B] bg-[#D4A34B] text-[#11233E] font-bold shadow-sm"
                                  : "border-gray-200 bg-white text-gray-500"
                              )}
                            >
                              {isSubSelected && <Check className="h-2.5 w-2.5" />}
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Search results: flat list */}
                  {interestSearch && (
                    <div className="flex flex-wrap gap-1.5">
                      {filteredInterests.flatMap(cat =>
                        INTEREST_TREE[cat]
                          .filter(s => s.toLowerCase().includes(interestSearch.toLowerCase()))
                          .map(sub => {
                            const isSubSelected = formData.selectedInterests.includes(sub);
                            return (
                              <button
                                key={sub}
                                onClick={() => toggleSelection("selectedInterests", sub)}
                                className={cn(
                                  "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
                                  isSubSelected
                                    ? "border-[#D4A34B] bg-[#D4A34B] text-[#11233E] font-bold shadow-sm"
                                    : "border-gray-200 bg-white text-gray-500"
                                )}
                              >
                                {isSubSelected && <Check className="h-2.5 w-2.5" />}
                                {sub}
                              </button>
                            );
                          })
                      )}
                    </div>
                  )}
                </div>
              );
            })()}

            {step === 4 && (() => {
              const filteredSkills = SKILL_CATEGORIES.filter(cat =>
                cat.toLowerCase().includes(skillSearch.toLowerCase()) ||
                SKILL_TREE[cat].some(s => s.toLowerCase().includes(skillSearch.toLowerCase()))
              );
              const isIDontKnow = formData.selectedTraits.includes("__idontknow__");
              return (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#11233E] mb-1 tracking-tight">Your Top Skills</h2>
                    <p className="text-[#11233E]/60 text-sm">Pick a category then select your skills.</p>
                  </div>

                  {/* I don't know option */}
                  <button
                    onClick={() => {
                      if (isIDontKnow) {
                        setFormData(prev => ({ ...prev, selectedTraits: [] }));
                      } else {
                        setFormData(prev => ({ ...prev, selectedTraits: ["__idontknow__"] }));
                        setExpandedSkill(null);
                      }
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-all w-full justify-center",
                      isIDontKnow
                        ? "border-red-300 bg-red-50 text-red-500"
                        : "border-dashed border-gray-300 bg-white text-gray-400"
                    )}
                  >
                    {isIDontKnow ? <Check className="h-3 w-3" /> : null}
                    I don't know yet — skip this step
                  </button>

                  {!isIDontKnow && (
                    <>
                      {/* Search */}
                      <div className="relative">
                        <svg className="absolute left-3 top-2.5 h-4 w-4 text-[#11233E]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
                        <input
                          type="text"
                          value={skillSearch}
                          onChange={e => { setSkillSearch(e.target.value); setExpandedSkill(null); }}
                          placeholder="Search skills..."
                          className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border-2 border-gray-100 bg-gray-50 text-[#11233E] placeholder:text-gray-400 focus:outline-none focus:border-[#11233E]/30 focus:bg-white transition-all"
                        />
                        {skillSearch && (
                          <button onClick={() => setSkillSearch("")} className="absolute right-3 top-2.5 text-gray-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        )}
                      </div>

                      {/* Category Pills */}
                      <div className="flex flex-wrap gap-2">
                        {filteredSkills.map(cat => {
                          const isActive = expandedSkill === cat;
                          const subCount = SKILL_TREE[cat].filter(s => formData.selectedTraits.includes(s)).length;
                          return (
                            <button
                              key={cat}
                              onClick={() => setExpandedSkill(isActive ? null : cat)}
                              className={cn(
                                "flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-xs font-semibold transition-all",
                                isActive
                                  ? "border-[#11233E] bg-[#11233E] text-white shadow-md"
                                  : subCount > 0
                                    ? "border-[#11233E]/40 bg-[#11233E]/5 text-[#11233E]"
                                    : "border-gray-200 bg-white text-gray-600"
                              )}
                            >
                              {cat}
                              {subCount > 0 && (
                                <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-[#D4A34B] text-[#11233E] text-[9px] font-bold">{subCount}</span>
                              )}
                              <svg className={cn("h-3 w-3 transition-transform", isActive ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                          );
                        })}
                      </div>

                      {/* Sub-skills panel */}
                      {expandedSkill && !skillSearch && (
                        <div className="rounded-2xl border-2 border-[#11233E]/10 bg-[#11233E]/3 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#11233E]/40 mb-2">{expandedSkill} — pick your skills</p>
                          <div className="flex flex-wrap gap-1.5">
                            {SKILL_TREE[expandedSkill].map(skill => {
                              const isSel = formData.selectedTraits.includes(skill);
                              return (
                                <button
                                  key={skill}
                                  onClick={() => toggleSelection("selectedTraits", skill)}
                                  className={cn(
                                    "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
                                    isSel
                                      ? "border-[#D4A34B] bg-[#D4A34B] text-[#11233E] font-bold shadow-sm"
                                      : "border-gray-200 bg-white text-gray-500"
                                  )}
                                >
                                  {isSel && <Check className="h-2.5 w-2.5" />}
                                  {skill}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Search results flat */}
                      {skillSearch && (
                        <div className="flex flex-wrap gap-1.5">
                          {filteredSkills.flatMap(cat =>
                            SKILL_TREE[cat]
                              .filter(s => s.toLowerCase().includes(skillSearch.toLowerCase()))
                              .map(skill => {
                                const isSel = formData.selectedTraits.includes(skill);
                                return (
                                  <button
                                    key={skill}
                                    onClick={() => toggleSelection("selectedTraits", skill)}
                                    className={cn(
                                      "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all",
                                      isSel
                                        ? "border-[#D4A34B] bg-[#D4A34B] text-[#11233E] font-bold shadow-sm"
                                        : "border-gray-200 bg-white text-gray-500"
                                    )}
                                  >
                                    {isSel && <Check className="h-2.5 w-2.5" />}
                                    {skill}
                                  </button>
                                );
                              })
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })()}
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
