import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Contact info bar */}
      <div className="bg-professional-light px-4 py-2">
        <div className="container mx-auto flex justify-end items-center gap-6 text-sm text-professional-gray">
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
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Core Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;