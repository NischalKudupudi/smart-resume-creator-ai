
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I landed my dream job thanks to this resume builder! The AI suggestions helped me highlight achievements I didn't even think were important.",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "at TechCorp",
    },
    {
      quote: "After months of job searching with no success, I rebuilt my resume with this tool and started getting interviews immediately. The difference was incredible!",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      company: "at Brand Solutions",
    },
    {
      quote: "The templates are not only beautiful but also truly ATS-friendly. I know because I used to work in HR and see how resumes get filtered out by the system.",
      author: "David Rodriguez",
      role: "HR Specialist",
      company: "at Global Industries",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-resume-text">Success Stories</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from job seekers who transformed their job search with our AI resume builder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-4xl text-resume-primary mb-4">"</div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-resume-secondary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-resume-text">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-resume-primary text-white py-10 px-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Standout Resume?</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Join thousands of successful job seekers who have used our AI-powered resume builder to land their dream jobs.
          </p>
          <Button asChild className="bg-white text-resume-primary hover:bg-gray-100">
            <Link to="/builder">
              Start Building Your Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
