
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ResumeData } from "@/pages/ResumeBuilder";
import { useToast } from "@/components/ui/use-toast";
import { Sparkles } from "lucide-react";

interface AIAssistantProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  activeSection: string;
}

const AIAssistant = ({ resumeData, setResumeData, activeSection }: AIAssistantProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateContent = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Enter what you'd like help with before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation (would be replaced with actual API call)
    setTimeout(() => {
      let updatedData = { ...resumeData };
      
      // Generate different content based on active section
      if (activeSection === "personal") {
        if (prompt.toLowerCase().includes("summary")) {
          updatedData.personal.summary = generateSummary(resumeData);
        }
      } 
      else if (activeSection === "experience") {
        // Find the first experience entry with a company name
        const experienceIndex = resumeData.experience.findIndex(exp => exp.company);
        if (experienceIndex >= 0) {
          const newHighlights = generateBulletPoints(resumeData.experience[experienceIndex], prompt);
          updatedData.experience[experienceIndex].highlights = newHighlights;
        } else {
          // If no valid experience entries yet, update the first one
          updatedData.experience[0].highlights = generateBulletPoints({...updatedData.experience[0], position: "professional"}, prompt);
        }
      }
      else if (activeSection === "education") {
        const educationIndex = resumeData.education.findIndex(edu => edu.institution);
        if (educationIndex >= 0) {
          updatedData.education[educationIndex].description = generateEducationDescription(prompt);
        } else {
          // If no valid education entries yet, update the first one
          updatedData.education[0].description = generateEducationDescription(prompt);
        }
      }
      else if (activeSection === "skills") {
        if (prompt.toLowerCase().includes("technical")) {
          updatedData.skills.technical = generateTechnicalSkills(prompt);
        } else if (prompt.toLowerCase().includes("soft")) {
          updatedData.skills.soft = generateSoftSkills(prompt);
        } else if (prompt.toLowerCase().includes("language")) {
          updatedData.skills.languages = generateLanguageSkills(prompt);
        } else if (prompt.toLowerCase().includes("certification")) {
          updatedData.skills.certifications = generateCertifications(prompt);
        } else {
          // Default to technical skills if not specified
          updatedData.skills.technical = generateTechnicalSkills(prompt);
        }
      }
      else if (activeSection === "projects") {
        const projectIndex = resumeData.projects.findIndex(proj => proj.name);
        if (projectIndex >= 0) {
          const newHighlights = generateProjectHighlights(prompt);
          updatedData.projects[projectIndex].highlights = newHighlights;
          // Also update the description if it's empty
          if (!updatedData.projects[projectIndex].description) {
            updatedData.projects[projectIndex].description = generateProjectDescription(prompt);
          }
        } else {
          // If no valid project entries yet, update the first one
          updatedData.projects[0].highlights = generateProjectHighlights(prompt);
          updatedData.projects[0].description = generateProjectDescription(prompt);
        }
      }
      
      setResumeData(updatedData);
      setIsGenerating(false);
      setPrompt("");
      
      toast({
        title: "Content generated",
        description: "AI-powered content has been added to your resume.",
      });
    }, 1500);
  };

  // Mock AI generation functions
  const generateSummary = (data: ResumeData) => {
    const name = data.personal.name || "professional";
    const title = data.personal.title || "experienced professional";
    const skills = data.skills.technical.slice(0, 3).join(", ") || "various skills";
    
    return `Dedicated ${title} with a proven track record of delivering results. ${name.split(" ")[0]} brings expertise in ${skills} to help organizations achieve their goals. Committed to continuous improvement and driving innovation in every role.`;
  };

  const generateBulletPoints = (experience: ResumeData["experience"][0], prompt: string) => {
    const role = experience.position || "professional";
    
    return [
      `Increased team productivity by 35% through implementing streamlined workflows and communication protocols.`,
      `Led cross-functional team of 8 members to successfully deliver project under budget and 2 weeks ahead of schedule.`,
      `Developed and maintained relationships with key stakeholders, resulting in 3 new partnership opportunities.`,
      `Created comprehensive documentation that reduced onboarding time for new team members by 40%.`,
    ];
  };

  const generateEducationDescription = (prompt: string) => {
    return `Completed coursework with distinction in advanced topics relevant to my field. Participated in research projects and extracurricular activities that enhanced my practical skills and theoretical knowledge. Received academic honors for outstanding performance.`;
  };

  const generateTechnicalSkills = (prompt: string) => {
    return [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Git",
      "REST APIs",
      "Data Analysis",
    ];
  };

  const generateSoftSkills = (prompt: string) => {
    return [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Critical Thinking",
      "Time Management",
    ];
  };

  const generateLanguageSkills = (prompt: string) => {
    return [
      "English (Native)",
      "Spanish (Intermediate)",
      "French (Basic)",
    ];
  };

  const generateCertifications = (prompt: string) => {
    return [
      "AWS Certified Solutions Architect",
      "Project Management Professional (PMP)",
      "Certified Scrum Master",
      "Google Analytics Certification",
    ];
  };

  const generateProjectHighlights = (prompt: string) => {
    return [
      "Designed and implemented key features that improved user engagement by 40%",
      "Collaborated with cross-functional teams to deliver the project 2 weeks ahead of schedule",
      "Optimized codebase resulting in 30% faster load times and improved performance",
      "Implemented automated testing that reduced bugs in production by 25%",
    ];
  };

  const generateProjectDescription = (prompt: string) => {
    return `An innovative project designed to solve real-world problems through the application of modern technologies and methodologies. This project demonstrates both technical expertise and creative problem-solving abilities.`;
  };

  // Suggestion prompts based on active section
  const getSuggestions = () => {
    switch (activeSection) {
      case "personal":
        return [
          "Generate a professional summary highlighting my leadership skills",
          "Write a summary focused on career transition",
          "Create a summary for an entry-level position",
        ];
      case "experience":
        return [
          "Generate bullet points for my current role",
          "Improve my job descriptions with metrics",
          "Create achievement-focused bullet points",
        ];
      case "education":
        return [
          "Add relevant coursework to my degree",
          "Highlight academic achievements",
          "Describe research projects",
        ];
      case "skills":
        return [
          "Suggest technical skills for a software developer",
          "List soft skills for management positions",
          "Recommend certifications for my field",
        ];
      case "projects":
        return [
          "Create bullet points highlighting my project's impact",
          "Describe technical challenges overcome",
          "Write a concise project summary",
        ];
      default:
        return [];
    }
  };

  return (
    <Card className="mt-8 border-resume-primary/20">
      <CardHeader className="bg-resume-primary/5 rounded-t-lg">
        <CardTitle className="flex items-center text-resume-primary">
          <Sparkles className="h-5 w-5 mr-2" />
          AI Resume Assistant
        </CardTitle>
        <CardDescription>
          Let our AI help you craft compelling content for your resume
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h3 className="font-medium mb-2">Try these prompts:</h3>
          <div className="flex flex-wrap gap-2">
            {getSuggestions().map((suggestion, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="sm"
                className="text-sm text-resume-primary border-resume-primary/30 hover:bg-resume-primary/5"
                onClick={() => setPrompt(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`What would you like help with in the ${activeSection} section?`}
          className="min-h-[100px] focus-visible:ring-resume-primary"
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleGenerateContent}
          disabled={isGenerating || !prompt.trim()}
          className="bg-resume-primary hover:bg-resume-primary/90"
        >
          {isGenerating ? "Generating..." : "Generate Content"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
