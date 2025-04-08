
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ResumeTemplates = () => {
  const navigate = useNavigate();

  const templates = [
    {
      name: "Professional",
      description: "A traditional format perfect for corporate roles and conservative industries. Clean lines and structured layout.",
      image: "https://images.unsplash.com/photo-1616510096628-fb051d6b7add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      features: ["Clean and minimal design", "ATS-optimized", "Perfect for corporate roles", "Traditional section ordering"],
      popular: true,
    },
    {
      name: "Modern",
      description: "Contemporary design with clean lines and visual elements for creative and tech-forward roles.",
      image: "https://images.unsplash.com/photo-1636040807064-a3e215e464e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      features: ["Two-column layout", "Skills visualization", "Modern typography", "Strategic use of color"],
      popular: false,
    },
    {
      name: "Creative",
      description: "Bold, eye-catching design for roles in design, marketing, or media where visual presentation matters.",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      features: ["Visual elements and icons", "Personality-focused", "Strategic color usage", "Showcase for creative work"],
      popular: false,
    },
    {
      name: "Executive",
      description: "Sophisticated design for senior positions, with emphasis on leadership and achievements.",
      image: "https://images.unsplash.com/photo-1586282023692-5614d0ff2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      features: ["Elegant styling", "Achievement-focused", "Strategic white space", "Leadership emphasis"],
      popular: true,
    },
    {
      name: "Simple",
      description: "Minimalist design focusing purely on content, perfect for academic or research positions.",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      features: ["Extremely ATS-friendly", "Text-focused", "Maximum content space", "Clean typography"],
      popular: false,
    },
    {
      name: "Technical",
      description: "Specialized design for technology roles with emphasis on technical skills and projects.",
      image: "https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Skills visualization", "Project highlighting", "Technical focus", "Code-friendly typography"],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-resume-text mb-4">Resume Templates</h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our professionally designed templates to showcase your skills and experience in the best light. All templates are ATS-friendly and fully customizable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform hover:shadow-lg">
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
                    <h3 className="text-xl font-semibold text-resume-primary mb-2">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 mb-6 space-y-1">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-resume-primary mr-2">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => navigate(`/builder?template=${template.name.toLowerCase()}`)}
                      className="w-full bg-resume-primary hover:bg-resume-primary/90"
                    >
                      Use This Template
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-resume-primary text-white rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Perfect Resume?</h2>
                <p className="text-white/90 mb-8">
                  Our AI-powered resume builder will help you craft a professional resume in minutes.
                  Choose any template and start building your career-winning resume today.
                </p>
                <Button asChild size="lg" className="bg-white text-resume-primary hover:bg-gray-100">
                  <div onClick={() => navigate('/builder')}>
                    Start Building Your Resume
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResumeTemplates;
