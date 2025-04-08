
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResumeData } from "@/pages/ResumeBuilder";
import { X } from "lucide-react";
import { useState } from "react";

interface SkillsFormProps {
  data: ResumeData["skills"];
  onChange: (data: ResumeData["skills"]) => void;
}

const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const [technicalInput, setTechnicalInput] = useState("");
  const [softInput, setSoftInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [certificationInput, setCertificationInput] = useState("");

  const handleAddSkill = (
    type: "technical" | "soft" | "languages" | "certifications",
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (!value.trim()) return;
    
    const newData = { ...data };
    newData[type] = [...data[type], value.trim()];
    onChange(newData);
    setter("");
  };

  const handleRemoveSkill = (
    type: "technical" | "soft" | "languages" | "certifications",
    index: number
  ) => {
    const newData = { ...data };
    newData[type] = newData[type].filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-resume-text mb-4">Skills</h2>
        <p className="text-gray-600 text-sm mb-6">
          Add your professional skills to showcase your capabilities to employers.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="space-y-3">
        <Label htmlFor="technical-skills">Technical Skills</Label>
        <p className="text-sm text-gray-500">
          Include programming languages, software, tools, and technical methodologies.
        </p>
        
        <div className="flex gap-2">
          <Input
            id="technical-skills"
            value={technicalInput}
            onChange={(e) => setTechnicalInput(e.target.value)}
            placeholder="e.g., Python, JavaScript, Adobe Photoshop"
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill("technical", technicalInput, setTechnicalInput);
              }
            }}
          />
          <Button 
            type="button"
            onClick={() => handleAddSkill("technical", technicalInput, setTechnicalInput)}
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {data.technical.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
            >
              {skill}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveSkill("technical", index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-3">
        <Label htmlFor="soft-skills">Soft Skills</Label>
        <p className="text-sm text-gray-500">
          Include interpersonal abilities, communication skills, and personal qualities.
        </p>
        
        <div className="flex gap-2">
          <Input
            id="soft-skills"
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
            placeholder="e.g., Leadership, Communication, Problem-solving"
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill("soft", softInput, setSoftInput);
              }
            }}
          />
          <Button 
            type="button"
            onClick={() => handleAddSkill("soft", softInput, setSoftInput)}
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {data.soft.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
            >
              {skill}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveSkill("soft", index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <Label htmlFor="languages">Languages</Label>
        <p className="text-sm text-gray-500">
          List languages you can speak and your proficiency level.
        </p>
        
        <div className="flex gap-2">
          <Input
            id="languages"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
            placeholder="e.g., English (Native), Spanish (Intermediate)"
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill("languages", languageInput, setLanguageInput);
              }
            }}
          />
          <Button 
            type="button"
            onClick={() => handleAddSkill("languages", languageInput, setLanguageInput)}
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {data.languages.map((language, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
            >
              {language}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveSkill("languages", index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-3">
        <Label htmlFor="certifications">Certifications</Label>
        <p className="text-sm text-gray-500">
          Include relevant certifications, licenses, or professional qualifications.
        </p>
        
        <div className="flex gap-2">
          <Input
            id="certifications"
            value={certificationInput}
            onChange={(e) => setCertificationInput(e.target.value)}
            placeholder="e.g., AWS Certified Solutions Architect, PMP"
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill("certifications", certificationInput, setCertificationInput);
              }
            }}
          />
          <Button 
            type="button"
            onClick={() => handleAddSkill("certifications", certificationInput, setCertificationInput)}
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {data.certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
            >
              {cert}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveSkill("certifications", index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
