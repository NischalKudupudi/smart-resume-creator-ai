
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-resume-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About ProFile AI</h1>
              <p className="text-xl opacity-90">
                Building better resumes with the power of artificial intelligence
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-resume-text mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At ProFile AI, we believe that everyone deserves access to professional-quality resume tools 
                that can help them land their dream job. Our mission is to democratize the job application 
                process by leveraging artificial intelligence to help job seekers create polished, 
                ATS-friendly resumes that highlight their unique skills and experiences.
              </p>
              <p className="text-gray-700 mb-6">
                We understand that writing a resume can be intimidating and time-consuming. That's why we've 
                built a platform that makes it easy to create a professional resume in minutes. Our AI 
                analyzes your information and suggests improvements, helping you present yourself in the 
                best possible light to potential employers.
              </p>
              <p className="text-gray-700">
                Whether you're a recent graduate, a seasoned professional, or someone changing careers, 
                ProFile AI provides the tools you need to create a resume that stands out and gets noticed.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-resume-text mb-6">The ProFile AI Advantage</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-resume-primary mb-3">AI-Powered Content Generation</h3>
                  <p className="text-gray-700">
                    Our advanced AI analyzes your information and generates professional-quality content 
                    that highlights your achievements, skills, and experience. The AI suggests 
                    improvements to your resume, helping you create a document that stands out to both 
                    human recruiters and Applicant Tracking Systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-resume-primary mb-3">ATS-Friendly Templates</h3>
                  <p className="text-gray-700">
                    All our templates are designed to pass through Applicant Tracking Systems with ease. 
                    We've tested our templates with real ATS software to ensure your resume gets into 
                    human hands. Our clean, professional designs also make a great impression when a 
                    recruiter does review your application.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-resume-primary mb-3">Industry-Specific Guidance</h3>
                  <p className="text-gray-700">
                    Different industries have different expectations for resumes. Our platform provides 
                    tailored guidance based on your target industry, ensuring your resume meets the specific 
                    requirements and preferences of employers in your field.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-resume-primary mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    We're constantly updating our AI models and resume templates based on the latest hiring 
                    trends and feedback from recruiters. When you use ProFile AI, you can be confident that 
                    your resume reflects current best practices in the job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-resume-text mb-6">Start Building Your Resume Today</h2>
              <p className="text-gray-700 mb-8">
                Ready to create a professional, ATS-friendly resume that will help you land your dream job? 
                Get started with ProFile AI today and see the difference our AI-powered platform can make.
              </p>
              <Button asChild size="lg" className="bg-resume-primary hover:bg-resume-primary/90">
                <Link to="/builder">
                  Create Your Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
