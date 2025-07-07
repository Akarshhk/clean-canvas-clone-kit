import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
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
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.985-5.369 11.985-11.987C23.97 5.39 18.635.029 12.017.029zM8.542 12.015c0-1.96 1.536-3.528 3.465-3.528 1.93 0 3.467 1.568 3.467 3.528s-1.537 3.527-3.467 3.527c-1.929 0-3.465-1.567-3.465-3.527z"/>
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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground">AccountsWhiz</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">India Services</a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">US Services</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;