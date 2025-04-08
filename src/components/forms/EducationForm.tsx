
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/pages/ResumeBuilder";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

interface EducationFormProps {
  data: ResumeData["education"];
  onChange: (data: ResumeData["education"]) => void;
}

const EducationForm = ({ data, onChange }: EducationFormProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newEducation = [...data];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    };
    onChange(newEducation);
  };

  const handleAddEducation = () => {
    onChange([
      ...data,
      {
        id: `edu-${Date.now()}`,
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    if (data.length <= 1) return; // Keep at least one education entry
    const newEducation = [...data];
    newEducation.splice(index, 1);
    onChange(newEducation);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-resume-text">Education</h2>
      <p className="text-gray-600 text-sm">
        Add your educational background, starting with the most recent.
      </p>

      {data.map((education, index) => (
        <div
          key={education.id}
          className="p-5 border border-gray-200 rounded-md space-y-5"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-resume-primary">
              Education {index + 1}
            </h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveEducation(index)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                name="institution"
                value={education.institution}
                onChange={(e) => handleChange(e, index)}
                placeholder="University/College Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location</Label>
              <Input
                id={`location-${index}`}
                name="location"
                value={education.location}
                onChange={(e) => handleChange(e, index)}
                placeholder="City, State/Country"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`degree-${index}`}>Degree</Label>
              <Input
                id={`degree-${index}`}
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(e, index)}
                placeholder="Bachelor's, Master's, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`fieldOfStudy-${index}`}>Field of Study</Label>
              <Input
                id={`fieldOfStudy-${index}`}
                name="fieldOfStudy"
                value={education.fieldOfStudy}
                onChange={(e) => handleChange(e, index)}
                placeholder="Computer Science, Business, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input
                id={`startDate-${index}`}
                name="startDate"
                value={education.startDate}
                onChange={(e) => handleChange(e, index)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${index}`}>End Date (or Expected)</Label>
              <Input
                id={`endDate-${index}`}
                name="endDate"
                value={education.endDate}
                onChange={(e) => handleChange(e, index)}
                placeholder="MM/YYYY or 'Present'"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${index}`}>Description/Achievements (Optional)</Label>
            <Textarea
              id={`description-${index}`}
              name="description"
              value={education.description}
              onChange={(e) => handleChange(e, index)}
              placeholder="Relevant coursework, honors, achievements, GPA if notable..."
              rows={3}
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={handleAddEducation}
        className="w-full border-dashed border-gray-300 text-gray-600 hover:border-resume-primary hover:text-resume-primary"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Another Education
      </Button>
    </div>
  );
};

export default EducationForm;
