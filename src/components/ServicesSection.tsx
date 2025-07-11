import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calculator, Users2, FileText, Briefcase, TrendingUp, ChevronDown, ChevronUp, Globe, DollarSign, Building, FileCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
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
    icon: Users2,
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
    icon: Briefcase,
    title: "Corporate Secretarial & Governance",
    description: "Maintaining governance frameworks and legal filings",
    features: [
      "Board support and statutory filings",
      "Annual return filings and ROC compliance",
      "Corporate governance advisory"
    ]
  },
  {
    icon: TrendingUp,
    title: "Virtual CFO & Advisory",
    description: "Strategic finance capabilities without full-time overhead",
    features: [
      "Business model validation and growth scenario planning",
      "Investment readiness and due diligence support",
      "Budgeting, forecasting, and investor reporting"
    ]
  },
  {
    icon: Building,
    title: "US Business Formation",
    description: "Complete support for setting up your business entity in the United States",
    features: [
      "LLC Formation and Corporation Setup",
      "EIN Registration and State Compliance",
      "Business structuring and advisory"
    ]
  },
  {
    icon: FileCheck,
    title: "US Tax & Compliance",
    description: "Comprehensive tax services for individuals and businesses operating in the US",
    features: [
      "Federal and State Tax Returns",
      "Tax Planning and Quarterly Payments",
      "US payroll processing and compliance"
    ]
  },
  {
    icon: Globe,
    title: "US Accounting Services",
    description: "Professional accounting services tailored for US business requirements",
    features: [
      "QuickBooks Setup & Management",
      "Financial Statement Preparation",
      "Monthly reporting and cash flow management"
    ]
  },
  {
    icon: DollarSign,
    title: "CPA Firm Support",
    description: "Scale your practice with our expert outsourcing services",
    features: [
      "Outsourced accounting and bookkeeping",
      "Tax preparation and review services",
      "Payroll reconciliations and AR/AP management"
    ]
  }
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-subtle"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" itemProp="name">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground" itemProp="description">
            We work as an integrated finance partner across the following areas to provide 
            operational clarity and regulatory confidence businesses need at every stage.
          </p>
        </div>
        
        {/* Modern Services Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-elegant"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => toggleService(index)}
                tabIndex={0}
                role="button"
                aria-expanded={expandedService === index}
                aria-controls={`service-panel-${index}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground" itemProp="name">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1" itemProp="description">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {expandedService === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>
              {/* Expanded Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedService === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
                id={`service-panel-${index}`}
                aria-hidden={expandedService !== index}
              >
                <div className="px-6 pb-6 pt-2">
                  <ul className="space-y-3 pl-1.5" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/Offer"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed" itemProp="name">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Our team brings over 80 years of collective experience across India and the US.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div
                className="text-3xl font-bold text-primary mb-1"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <span itemProp="value">100</span>+
                <div className="text-sm text-muted-foreground" itemProp="description">
                  Ongoing Clients
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div
                className="text-3xl font-bold text-primary mb-1"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <span itemProp="value">80</span>+
                <div className="text-sm text-muted-foreground" itemProp="description">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
