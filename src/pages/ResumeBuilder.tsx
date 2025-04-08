
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import EducationForm from "@/components/forms/EducationForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import SkillsForm from "@/components/forms/SkillsForm";
import ProjectsForm from "@/components/forms/ProjectsForm";
import ResumePreview from "@/components/ResumePreview";
import AIAssistant from "@/components/AIAssistant";
import { useToast } from "@/components/ui/use-toast";

export type ResumeData = {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    summary: string;
    website?: string;
    linkedin?: string;
  };
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    highlights: string[];
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
    certifications: string[];
  };
  projects: Array<{
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    url?: string;
    highlights: string[];
  }>;
};

const initialResumeData: ResumeData = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    summary: "",
    website: "",
    linkedin: "",
  },
  education: [
    {
      id: "edu-1",
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      highlights: [""],
    },
  ],
  skills: {
    technical: [],
    soft: [],
    languages: [],
    certifications: [],
  },
  projects: [
    {
      id: "proj-1",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
      highlights: [""],
    },
  ],
};

const ResumeBuilder = () => {
  const [searchParams] = useSearchParams();
  const templateParam = searchParams.get("template") || "professional";
  
  const [activeTab, setActiveTab] = useState("personal");
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [template, setTemplate] = useState(templateParam);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleUpdatePersonal = (personal: ResumeData["personal"]) => {
    setResumeData((prev) => ({ ...prev, personal }));
  };

  const handleUpdateEducation = (education: ResumeData["education"]) => {
    setResumeData((prev) => ({ ...prev, education }));
  };

  const handleUpdateExperience = (experience: ResumeData["experience"]) => {
    setResumeData((prev) => ({ ...prev, experience }));
  };

  const handleUpdateSkills = (skills: ResumeData["skills"]) => {
    setResumeData((prev) => ({ ...prev, skills }));
  };

  const handleUpdateProjects = (projects: ResumeData["projects"]) => {
    setResumeData((prev) => ({ ...prev, projects }));
  };

  const handleNext = () => {
    const tabs = ["personal", "education", "experience", "skills", "projects"];
    const currentIndex = tabs.indexOf(activeTab);
    
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const tabs = ["personal", "education", "experience", "skills", "projects"];
    const currentIndex = tabs.indexOf(activeTab);
    
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleGenerateResume = () => {
    // Validate form data
    if (!resumeData.personal.name || !resumeData.personal.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in at least your name and email in the Personal Information section.",
        variant: "destructive",
      });
      setActiveTab("personal");
      return;
    }

    // Generate resume logic would go here
    // For now, just show a success message
    toast({
      title: "Resume generated!",
      description: "Your resume has been created successfully.",
    });
    
    // Show the preview
    setShowPreview(true);
  };

  const handleDownload = () => {
    // This would be implemented with a PDF generation library in a real application
    toast({
      title: "Resume downloaded",
      description: "Your resume has been downloaded as a PDF.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-resume-primary">Create Your Resume</h1>
              <p className="text-gray-600 mt-2">Fill in your information below to create a professional resume</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
              <div className={`lg:col-span-${showPreview ? "1" : "2"} p-6 bg-white border-r border-gray-200`}>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full mb-6 grid grid-cols-5">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="resume-form-transition">
                    <PersonalInfoForm data={resumeData.personal} onChange={handleUpdatePersonal} />
                  </TabsContent>
                  
                  <TabsContent value="education" className="resume-form-transition">
                    <EducationForm data={resumeData.education} onChange={handleUpdateEducation} />
                  </TabsContent>
                  
                  <TabsContent value="experience" className="resume-form-transition">
                    <ExperienceForm data={resumeData.experience} onChange={handleUpdateExperience} />
                  </TabsContent>
                  
                  <TabsContent value="skills" className="resume-form-transition">
                    <SkillsForm data={resumeData.skills} onChange={handleUpdateSkills} />
                  </TabsContent>
                  
                  <TabsContent value="projects" className="resume-form-transition">
                    <ProjectsForm data={resumeData.projects} onChange={handleUpdateProjects} />
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={activeTab === "personal"}
                  >
                    Previous
                  </Button>
                  
                  {activeTab === "projects" ? (
                    <Button onClick={handleGenerateResume}>
                      Generate Resume
                    </Button>
                  ) : (
                    <Button onClick={handleNext}>
                      Next
                    </Button>
                  )}
                </div>
              </div>
              
              <div className={`${showPreview ? "block" : "hidden"} lg:block lg:col-span-${showPreview ? "2" : "1"} p-6 bg-gray-50`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-resume-text">Resume Preview</h2>
                  <Button onClick={() => setShowPreview(!showPreview)} variant="outline" size="sm">
                    {showPreview ? "Hide Preview" : "Show Preview"}
                  </Button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 overflow-auto max-h-[600px]">
                  <ResumePreview data={resumeData} template={template} />
                </div>
                
                {showPreview && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button onClick={handleDownload} className="bg-resume-primary hover:bg-resume-primary/90">
                      Download PDF
                    </Button>
                    <Button variant="outline" onClick={() => setTemplate(template === "professional" ? "modern" : "professional")}>
                      Change Template
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <AIAssistant resumeData={resumeData} setResumeData={setResumeData} activeSection={activeTab} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
