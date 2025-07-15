import { Button } from "@/components/ui/button";
import CountUpAnimation from "./CountUpAnimation";

const heroImage = "/lovable-uploads/70a6e374-28b7-4460-b8e8-f9579c0e17e4.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section as Organization */}
      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        itemScope
        itemType="https://schema.org/Organization"
        aria-labelledby="hero-heading"
      >
        <meta itemProp="name" content="AccountsWhiz" />
        <meta itemProp="url" content="https://accountswhiz.com" />
        <meta itemProp="logo" content={heroImage} />
        <meta itemProp="description" content="Strategic financial services for startups, SMEs, and cross-border businesses in India and the US." />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-professional-dark/60" />
        </div>

        {/* Main Branding & Stats */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="animate-fade-in">
            <h1
              id="hero-heading"
              className="font-bold leading-tight"
              itemProp="name"
            >
              <span className="text-5xl md:text-7xl">AccountsWhiz</span>
              <br />
              <span className="text-2xl md:text-4xl mt-2 block" style={{ color: "#b9b8c5" }}>
                Technology Driven Accounting &
              </span>
              <br />
              <span className="text-2xl md:text-4xl" style={{ color: "#b9b8c5" }}>
                Compliance Services for
              </span>
              <br />
              <span className="text-2xl md:text-4xl" style={{ color: "#b9b8c5" }}>
                Startups/SME's growth
              </span>

            </h1>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 max-w-md mx-auto">
              <span
                className="text-center"
                itemProp="foundingDate"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <meta itemProp="name" content="Years of Experience" />
                <meta itemProp="value" content="80" />
                <meta itemProp="unitText" content="years" />
                <CountUpAnimation start={0} end={80} suffix="+" />
                <span className="text-lg text-white/90 mt-2" itemProp="description">
                  Years Experience
                </span>
              </span>
              <span
                className="text-center"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <meta itemProp="name" content="Ongoing Clients" />
                <meta itemProp="value" content="100" />
                <meta itemProp="unitText" content="clients" />
                <CountUpAnimation start={0} end={100} suffix="+" />
                <span className="text-lg text-white/90 mt-2" itemProp="description">
                  Ongoing Clients
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Description & CTA as ProfessionalService */}
      <main
        className="py-20 bg-background"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p
              className="text-xl mb-12 text-foreground/80 leading-relaxed"
              itemProp="description"
            >
              Enabling Founders and Business Leaders to Focus on What Matters. 
              We provide a full suite of accounting, payroll, tax, compliance, 
              and advisory services tailored for startups, SMEs, and 
              cross-border businesses.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                onClick={() => window.location.href = '/india-services'}
              >
                Explore our India Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3"
                onClick={() => window.location.href = '/us-services'}
              >
                Explore our US Services
              </Button>
            </div>
            {/* Trust Message */}
            <div className="text-lg font-bold text-primary bg-primary/10 rounded-lg px-6 py-4 mb-12 border-l-4 border-primary">
              80% of Our Clients are Marquee Investors Backed
            </div>
            {/* Logos Carousel - schema.org ItemList */}
            <section
              className="relative overflow-hidden"
              aria-label="Client logos"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              <meta itemProp="name" content="Client Logos" />
              <div className="flex animate-[scroll_20s_linear_infinite] hover:pause gap-12 items-center">
                {[
                  { src: "139beeb5-2b81-4a12-8d1a-c9a8132abc04.png", alt: "B2Brain" },
                  { src: "24c70498-81ad-430a-a163-06e60552bc36.png", alt: "HungerBox" },
                  { src: "ab64bec2-0f6e-4361-af2a-509284516dd1.png", alt: "Innoventes" },
                  { src: "7f763ff8-c7d0-4020-85fb-63a170489495.png", alt: "Plum" },
                  { src: "bb254e8b-3518-4cb9-b5da-383872f86efb.png", alt: "Rural Shores" },
                  { src: "ce367f56-6e60-43b8-ac2b-ac4ee842f4c2.png", alt: "Elevation Tax and Accounting" },
                ].map((logo, i) => (
                  <img
                    key={i}
                    src={`/lovable-uploads/${logo.src}`}
                    alt={`${logo.alt} logo`}
                    className="h-12 w-auto flex-shrink-0 hover:scale-110 transition-all duration-300"
                    itemProp="itemListElement"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
