import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-professional-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              STRATEGIC <br />
              <span className="text-primary">FINANCIAL SERVICES</span> <br />
              FOR GROWTH
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Enabling Founders and Finance Leaders to Focus on What Matters. 
              We provide a full suite of accounting, payroll, tax, compliance, and advisory 
              services tailored for startups, SMEs, and cross-border businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                Explore India Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-professional-dark px-8 py-3"
              >
                Explore US Services
              </Button>
            </div>
            
            <div className="text-sm text-white/80">
              80% of Our Clients are Backed by Leading Institutional Investors
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="hidden lg:flex flex-col space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold text-primary mb-2">80+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg">Ongoing Clients</div>
            </div>
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            <span className="text-lg font-medium">HungerBox</span>
            <span className="text-lg font-medium">B2Brain</span>
            <span className="text-lg font-medium">Innoventes</span>
            <span className="text-lg font-medium">Plum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;