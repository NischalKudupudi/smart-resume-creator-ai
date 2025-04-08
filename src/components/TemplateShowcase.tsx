
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TemplateShowcase = () => {
  const templates = [
    {
      name: "Professional",
      description: "Clean and traditional format perfect for corporate roles",
      image: "https://images.unsplash.com/photo-1616510096628-fb051d6b7add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      popular: true,
    },
    {
      name: "Modern",
      description: "Contemporary design with clean lines and visual elements",
      image: "https://images.unsplash.com/photo-1636040807064-a3e215e464e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      popular: false,
    },
    {
      name: "Creative",
      description: "Standout design for roles in design, marketing, or media",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-resume-text">Choose Your Template</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Select from our professionally designed templates to showcase your skills and experience in the best light.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform hover:scale-105">
              <div className="relative">
                <img 
                  src={template.image} 
                  alt={`${template.name} template`} 
                  className="w-full h-64 object-cover object-top"
                />
                {template.popular && (
                  <div className="absolute top-4 right-4 bg-resume-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-resume-primary">{template.name}</h3>
                <p className="text-gray-600 mt-2 mb-4">{template.description}</p>
                <Button asChild className="w-full bg-resume-primary hover:bg-resume-primary/90">
                  <Link to={`/builder?template=${template.name.toLowerCase()}`}>
                    Use This Template
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-resume-primary text-resume-primary hover:bg-resume-primary hover:text-white">
            <Link to="/templates">
              View All Templates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
