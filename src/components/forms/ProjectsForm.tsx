
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/pages/ResumeBuilder";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

interface ProjectsFormProps {
  data: ResumeData["projects"];
  onChange: (data: ResumeData["projects"]) => void;
}

const ProjectsForm = ({ data, onChange }: ProjectsFormProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newProjects = [...data];
    newProjects[index] = {
      ...newProjects[index],
      [name]: value,
    };
    onChange(newProjects);
  };

  const handleHighlightChange = (value: string, projIndex: number, highlightIndex: number) => {
    const newProjects = [...data];
    const newHighlights = [...newProjects[projIndex].highlights];
    newHighlights[highlightIndex] = value;
    newProjects[projIndex] = {
      ...newProjects[projIndex],
      highlights: newHighlights,
    };
    onChange(newProjects);
  };

  const handleAddHighlight = (projIndex: number) => {
    const newProjects = [...data];
    newProjects[projIndex] = {
      ...newProjects[projIndex],
      highlights: [...newProjects[projIndex].highlights, ""],
    };
    onChange(newProjects);
  };

  const handleRemoveHighlight = (projIndex: number, highlightIndex: number) => {
    if (data[projIndex].highlights.length <= 1) return;
    const newProjects = [...data];
    const newHighlights = [...newProjects[projIndex].highlights];
    newHighlights.splice(highlightIndex, 1);
    newProjects[projIndex] = {
      ...newProjects[projIndex],
      highlights: newHighlights,
    };
    onChange(newProjects);
  };

  const handleAddProject = () => {
    onChange([
      ...data,
      {
        id: `proj-${Date.now()}`,
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        url: "",
        highlights: [""],
      },
    ]);
  };

  const handleRemoveProject = (index: number) => {
    if (data.length <= 1) return; // Keep at least one project entry
    const newProjects = [...data];
    newProjects.splice(index, 1);
    onChange(newProjects);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-resume-text">Projects</h2>
      <p className="text-gray-600 text-sm">
        Add relevant personal, academic, or professional projects to showcase your skills and experience.
      </p>

      {data.map((project, projIndex) => (
        <div
          key={project.id}
          className="p-5 border border-gray-200 rounded-md space-y-5"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-resume-primary">
              Project {projIndex + 1}
            </h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveProject(projIndex)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor={`name-${projIndex}`}>Project Name</Label>
              <Input
                id={`name-${projIndex}`}
                name="name"
                value={project.name}
                onChange={(e) => handleChange(e, projIndex)}
                placeholder="Project Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`url-${projIndex}`}>Project URL (Optional)</Label>
              <Input
                id={`url-${projIndex}`}
                name="url"
                value={project.url}
                onChange={(e) => handleChange(e, projIndex)}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${projIndex}`}>Start Date</Label>
              <Input
                id={`startDate-${projIndex}`}
                name="startDate"
                value={project.startDate}
                onChange={(e) => handleChange(e, projIndex)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${projIndex}`}>End Date</Label>
              <Input
                id={`endDate-${projIndex}`}
                name="endDate"
                value={project.endDate}
                onChange={(e) => handleChange(e, projIndex)}
                placeholder="MM/YYYY or 'Present'"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${projIndex}`}>Project Description</Label>
            <Textarea
              id={`description-${projIndex}`}
              name="description"
              value={project.description}
              onChange={(e) => handleChange(e, projIndex)}
              placeholder="Brief description of the project, its purpose, and your role..."
              rows={3}
            />
          </div>

          <div className="space-y-3">
            <Label>Key Features/Accomplishments</Label>
            <p className="text-sm text-gray-500">
              Use bullet points to highlight the most impressive aspects of this project.
            </p>

            {project.highlights.map((highlight, highlightIndex) => (
              <div key={highlightIndex} className="flex gap-2">
                <Input
                  value={highlight}
                  onChange={(e) => 
                    handleHighlightChange(e.target.value, projIndex, highlightIndex)
                  }
                  placeholder="Developed X feature using Y technology that resulted in Z..."
                  className="flex-1"
                />
                {project.highlights.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveHighlight(projIndex, highlightIndex)}
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
              onClick={() => handleAddHighlight(projIndex)}
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
        onClick={handleAddProject}
        className="w-full border-dashed border-gray-300 text-gray-600 hover:border-resume-primary hover:text-resume-primary"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Another Project
      </Button>
    </div>
  );
};

export default ProjectsForm;
