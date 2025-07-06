import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calculator, Users, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Entity Setup & Regulatory Structuring",
    description: "End-to-end business setup and registration services in India and the US",
    features: [
      "Company incorporation and registration",
      "Legal documentation and corporate structuring", 
      "Regulatory advisory"
    ]
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Reporting",
    description: "Accurate, timely, and investor-ready financial records",
    features: [
      "Bookkeeping and accounting oversight",
      "Monthly financial reporting and analytics",
      "Audit coordination and GAAP-compliant reporting"
    ]
  },
  {
    icon: Users,
    title: "Payroll & Employment Compliance",
    description: "Complete payroll processing with jurisdiction-specific compliance",
    features: [
      "Monthly payroll and salary processing",
      "Statutory deductions and tax filings",
      "Advisory on employee benefits and compensation structures"
    ]
  },
  {
    icon: FileText,
    title: "Taxation & Filings",
    description: "Domestic and cross-border tax management for founders and companies",
    features: [
      "Corporate and individual tax filings (India/US)",
      "GST/VAT filings and reconciliations",
      "Withholding tax, transfer pricing, and compliance reviews"
    ]
  },
  {
    icon: Shield,
    title: "Corporate Secretarial & Governance",
    description: "Maintaining governance frameworks and legal filings",
    features: [
      "Board support and statutory filings",
      "Annual return filings and ROC compliance",
      "Corporate governance advisory"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground">
            We work as an integrated finance partner across the following areas to provide 
            operational clarity and regulatory confidence businesses need at every stage.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-0 shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Our team brings over 80 years of collective experience across India and the US.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Ongoing Clients</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-1">80+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;