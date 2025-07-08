import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Contact info bar with social media */}
      <div className="bg-professional-light px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Social Media Icons - Left side */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/accountswhiz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/accountswhiz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
          {/* Contact info - Right side */}
          <div className="flex items-center gap-6 text-sm text-professional-gray">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 90080 34040</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@accountswhiz.com</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9fa1a284-3e76-4491-974b-b6f393455d33.png" 
              alt="AccountsWhiz Logo" 
              className="h-10 w-auto"
            />
          </a>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className={`transition-colors ${window.location.pathname === '/' ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </a>
            <a 
              href="/about" 
              className={`transition-colors ${window.location.pathname === '/about' ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-foreground hover:text-primary'}`}
            >
              About Us
            </a>
            <a 
              href="/india-services" 
              className={`transition-colors ${window.location.pathname === '/india-services' ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-foreground hover:text-primary'}`}
            >
              India Services
            </a>
            <a 
              href="/us-services" 
              className={`transition-colors ${window.location.pathname === '/us-services' ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-foreground hover:text-primary'}`}
            >
              US Services
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // If we're on the home page, scroll to contact section
                if (window.location.pathname === '/') {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  // If we're on another page, navigate to home page with contact hash
                  window.location.href = '/#contact';
                }
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  About Us
                </a>
                <a 
                  href="/india-services" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  India Services
                </a>
                <a 
                  href="/us-services" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  US Services
                </a>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    // If we're on the home page, scroll to contact section
                    if (window.location.pathname === '/') {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // If we're on another page, navigate to home page with contact hash
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;