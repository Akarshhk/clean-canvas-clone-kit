import { Button } from "@/components/ui/button";
import CountUpAnimation from "./CountUpAnimation";
const heroImage = "/lovable-uploads/799ad5f7-5986-4218-9203-8b3246083348.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section with Main Headline */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-professional-dark/60"></div>
        </div>
        
        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="font-bold leading-tight text-white">
              <span className="text-5xl md:text-7xl">AccountsWhiz</span> <br />
              <span className="text-3xl md:text-5xl text-professional-accent mt-2 block">strategic</span> <br />
              <span className="text-3xl md:text-5xl text-professional-accent">financial services</span> <br />
              <span className="text-3xl md:text-5xl text-professional-accent">for growth</span>
            </h1>
            
            {/* Stats on Hero */}
            <div className="grid grid-cols-2 gap-8 mt-12 max-w-md mx-auto">
              <div className="text-center">
                <CountUpAnimation start={0} end={80} suffix="+" />
                <div className="text-lg text-white/90 mt-2">Years Experience</div>
              </div>
              <div className="text-center">
                <CountUpAnimation start={0} end={100} suffix="+" />
                <div className="text-lg text-white/90 mt-2">Ongoing Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Below Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-xl mb-12 text-foreground/80 leading-relaxed">
              Enabling Founders and Finance Leaders to Focus on What Matters. 
              We provide a full suite of accounting, payroll, tax, compliance, and advisory 
              services tailored for startups, SMEs, and cross-border businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Start Your India Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Start Your US Journey
              </Button>
            </div>

            
            <div className="text-lg font-bold text-primary bg-primary/10 rounded-lg px-6 py-4 mb-12 border-l-4 border-primary">
              80% of Our Clients are Backed by Leading Institutional Investors
            </div>

            {/* Client Logos - Animated Slider */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_20s_linear_infinite] hover:pause gap-12 items-center">
                <img 
                  src="/lovable-uploads/139beeb5-2b81-4a12-8d1a-c9a8132abc04.png" 
                  alt="B2Brain" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/24c70498-81ad-430a-a163-06e60552bc36.png" 
                  alt="HungerBox" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/ab64bec2-0f6e-4361-af2a-509284516dd1.png" 
                  alt="Innoventes" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/7f763ff8-c7d0-4020-85fb-63a170489495.png" 
                  alt="Plum" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/bb254e8b-3518-4cb9-b5da-383872f86efb.png" 
                  alt="Rural Shores" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/ce367f56-6e60-43b8-ac2b-ac4ee842f4c2.png" 
                  alt="Elevation Tax and Accounting" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                {/* Duplicate for seamless loop */}
                <img 
                  src="/lovable-uploads/139beeb5-2b81-4a12-8d1a-c9a8132abc04.png" 
                  alt="B2Brain" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/24c70498-81ad-430a-a163-06e60552bc36.png" 
                  alt="HungerBox" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/ab64bec2-0f6e-4361-af2a-509284516dd1.png" 
                  alt="Innoventes" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/7f763ff8-c7d0-4020-85fb-63a170489495.png" 
                  alt="Plum" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/bb254e8b-3518-4cb9-b5da-383872f86efb.png" 
                  alt="Rural Shores" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/ce367f56-6e60-43b8-ac2b-ac4ee842f4c2.png" 
                  alt="Elevation Tax and Accounting" 
                  className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;