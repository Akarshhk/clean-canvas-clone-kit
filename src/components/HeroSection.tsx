import { Button } from "@/components/ui/button";
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
              <span className="text-3xl md:text-5xl text-primary mt-2 block">STRATEGIC</span> <br />
              <span className="text-3xl md:text-5xl text-primary">FINANCIAL SERVICES</span> <br />
              <span className="text-3xl md:text-5xl text-primary">FOR GROWTH</span>
            </h1>
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
              >
                Explore India Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3"
              >
                Explore US Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="text-5xl font-bold text-primary mb-2">80+</div>
                <div className="text-lg text-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg text-foreground">Ongoing Clients</div>
              </div>
            </div>
            
            <div className="text-sm text-foreground/60 mb-12">
              80% of Our Clients are Backed by Leading Institutional Investors
            </div>

            {/* Client Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-foreground/60">
              <span className="text-lg font-medium">HungerBox</span>
              <span className="text-lg font-medium">B2Brain</span>
              <span className="text-lg font-medium">Innoventes</span>
              <span className="text-lg font-medium">Plum</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;