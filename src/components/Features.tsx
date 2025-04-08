
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Resume Content",
      description: "Our AI analyzes your information and generates professional, tailored content to highlight your strengths.",
      icon: "⚡",
    },
    {
      title: "ATS-Friendly Templates",
      description: "All our templates are designed to pass Applicant Tracking Systems and get your resume into human hands.",
      icon: "✅",
    },
    {
      title: "Customizable Designs",
      description: "Choose from multiple designs and customize colors, fonts, and layouts to match your personal style.",
      icon: "🎨",
    },
    {
      title: "Real-Time Preview",
      description: "See your resume come to life as you type, with instant visual feedback on your changes.",
      icon: "👁️",
    },
    {
      title: "Expert Resume Tips",
      description: "Get suggestions and improvements directly in the editor based on industry best practices.",
      icon: "💡",
    },
    {
      title: "Multiple Download Formats",
      description: "Export your finished resume as PDF, DOCX, or plain text, ready to submit to employers.",
      icon: "📄",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-resume-text mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our resume builder combines modern design with powerful AI to help you create professional, effective resumes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-resume-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-resume-primary/5 rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-resume-primary mb-4">Why Choose Our Resume Builder?</h3>
              <ul className="space-y-3">
                {[
                  "Human-like AI writing that showcases your value",
                  "Templates tested with real ATS software",
                  "Expert-designed formats for every industry",
                  "Fast and intuitive user experience",
                  "Privacy-focused with secure data handling",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-resume-primary shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-3 text-resume-text">What Our Users Say</h4>
              <blockquote className="italic text-gray-600 mb-4">
                "I spent hours trying to write my resume before finding this tool. The AI suggestions were spot-on and helped me highlight achievements I wouldn't have thought to include!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-resume-secondary rounded-full flex items-center justify-center text-white font-semibold">JS</div>
                <div className="ml-3">
                  <div className="font-medium text-resume-text">Jamie Smith</div>
                  <div className="text-sm text-gray-500">Marketing Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
