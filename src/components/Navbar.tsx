
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-resume-primary">ResumeAI</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-resume-primary transition-colors">
              Home
            </Link>
            <Link to="/templates" className="text-gray-700 hover:text-resume-primary transition-colors">
              Templates
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-resume-primary transition-colors">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-resume-primary text-resume-primary hover:bg-resume-primary hover:text-white">
              <Link to="/builder">
                Create Resume
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/templates" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-resume-primary hover:bg-resume-primary/90">
                <Link 
                  to="/builder"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
