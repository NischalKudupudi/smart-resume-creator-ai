
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/pages/ResumeBuilder";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

interface ExperienceFormProps {
  data: ResumeData["experience"];
  onChange: (data: ResumeData["experience"]) => void;
}

const ExperienceForm = ({ data, onChange }: ExperienceFormProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newExperience = [...data];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    onChange(newExperience);
  };

  const handleHighlightChange = (value: string, expIndex: number, highlightIndex: number) => {
    const newExperience = [...data];
    const newHighlights = [...newExperience[expIndex].highlights];
    newHighlights[highlightIndex] = value;
    newExperience[expIndex] = {
      ...newExperience[expIndex],
      highlights: newHighlights,
    };
    onChange(newExperience);
  };

  const handleAddHighlight = (expIndex: number) => {
    const newExperience = [...data];
    newExperience[expIndex] = {
      ...newExperience[expIndex],
      highlights: [...newExperience[expIndex].highlights, ""],
    };
    onChange(newExperience);
  };

  const handleRemoveHighlight = (expIndex: number, highlightIndex: number) => {
    if (data[expIndex].highlights.length <= 1) return;
    const newExperience = [...data];
    const newHighlights = [...newExperience[expIndex].highlights];
    newHighlights.splice(highlightIndex, 1);
    newExperience[expIndex] = {
      ...newExperience[expIndex],
      highlights: newHighlights,
    };
    onChange(newExperience);
  };

  const handleAddExperience = () => {
    onChange([
      ...data,
      {
        id: `exp-${Date.now()}`,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        highlights: [""],
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    if (data.length <= 1) return; // Keep at least one experience entry
    const newExperience = [...data];
    newExperience.splice(index, 1);
    onChange(newExperience);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-resume-text">Work Experience</h2>
      <p className="text-gray-600 text-sm">
        Add your work experience, starting with the most recent position.
      </p>

      {data.map((experience, expIndex) => (
        <div
          key={experience.id}
          className="p-5 border border-gray-200 rounded-md space-y-5"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-resume-primary">
              Experience {expIndex + 1}
            </h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveExperience(expIndex)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor={`company-${expIndex}`}>Company/Organization</Label>
              <Input
                id={`company-${expIndex}`}
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(e, expIndex)}
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`position-${expIndex}`}>Position Title</Label>
              <Input
                id={`position-${expIndex}`}
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(e, expIndex)}
                placeholder="Job Title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${expIndex}`}>Location</Label>
              <Input
                id={`location-${expIndex}`}
                name="location"
                value={experience.location}
                onChange={(e) => handleChange(e, expIndex)}
                placeholder="City, State/Country"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${expIndex}`}>Start Date</Label>
              <Input
                id={`startDate-${expIndex}`}
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(e, expIndex)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="space-y-2 md:col-start-2">
              <Label htmlFor={`endDate-${expIndex}`}>End Date</Label>
              <Input
                id={`endDate-${expIndex}`}
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleChange(e, expIndex)}
                placeholder="MM/YYYY or 'Present'"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${expIndex}`}>Job Description</Label>
            <Textarea
              id={`description-${expIndex}`}
              name="description"
              value={experience.description}
              onChange={(e) => handleChange(e, expIndex)}
              placeholder="Briefly describe your role and responsibilities..."
              rows={3}
            />
          </div>

          <div className="space-y-3">
            <Label>Key Achievements/Responsibilities</Label>
            <p className="text-sm text-gray-500">
              Use bullet points to highlight your most impactful achievements. Focus on results and quantify when possible.
            </p>

            {experience.highlights.map((highlight, highlightIndex) => (
              <div key={highlightIndex} className="flex gap-2">
                <Input
                  value={highlight}
                  onChange={(e) => 
                    handleHighlightChange(e.target.value, expIndex, highlightIndex)
                  }
                  placeholder="Achieved X by implementing Y, resulting in Z..."
                  className="flex-1"
                />
                {experience.highlights.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveHighlight(expIndex, highlightIndex)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAddHighlight(expIndex)}
              className="border-dashed mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-1" /> Add Bullet Point
            </Button>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={handleAddExperience}
        className="w-full border-dashed border-gray-300 text-gray-600 hover:border-resume-primary hover:text-resume-primary"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Another Experience
      </Button>
    </div>
  );
};

export default ExperienceForm;
