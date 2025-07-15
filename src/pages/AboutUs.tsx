import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Clock, Users, FileBarChart, Star, Handshake, Scale } from "lucide-react";

// --- NotchedBox Component (inline, fully styled) ---
const NotchedBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    style={{
      background: "#fff",
      border: "3px solid #163d9e",
      borderRadius: 0,
      padding: "1.8rem 2.2rem",
      clipPath:
        "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))",
      marginBottom: "1.8rem",
      minHeight: 220,
      boxSizing: "border-box",
      maxWidth: "100%",
      width: "100%",
    }}
    itemScope
    itemType="https://schema.org/CreativeWork"
  >
    <h3
      style={{
        fontWeight: 800,
        fontSize: "2rem",
        marginBottom: "1rem",
        lineHeight: 1.1,
        color: "#141414",
      }}
      itemProp="headline"
    >
      {title}
    </h3>
    <div
      style={{
        fontSize: "1.5rem",
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#141414",
      }}
      itemProp="text"
    >
      {children}
    </div>
  </div>
);

const AboutUs = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line') as HTMLElement;

    timelineItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.setAttribute('data-has-animated', 'false');
    });

    if (timelineLine) {
      timelineLine.style.height = '0%';
      timelineLine.style.transition = 'height 0.3s ease-out';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = Array.from(timelineItems).indexOf(target);

          if (entry.isIntersecting && target.getAttribute('data-has-animated') !== 'true') {
            setTimeout(() => {
              target.style.opacity = '1';
              target.style.transform = 'translateY(0)';
              target.setAttribute('data-has-animated', 'true');
            }, index * 100);

            if (timelineLine) {
              const progress = ((index + 1) / timelineItems.length) * 100;
              timelineLine.style.height = `${progress}%`;
              timelineLine.style.background = `linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) ${progress}%, hsl(var(--primary) / 0.2) ${progress}%, hsl(var(--primary) / 0.2) 100%)`;
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "RADHA KOLATHUR CANTHADAI",
      position: "DIRECTOR | M.Com, FCA, CPA (Inactive), CISA (USA), CIA (USA)",
      image: "/lovable-uploads/247e2848-8ebb-4360-8ddc-59d136ea8ca3.png",
      description: "Radha is a seasoned risk and compliance professional with experience leading global audit and software compliance teams at HP. She began her career at Deloitte Haskins & Sells in the Risk Advisory practice, where she developed deep expertise in internal controls and regulatory frameworks. At Accountswhiz, Radha holds a leadership role in driving service delivery across accounting, compliance, and financial advisory. Having worked with numerous early-stage startups, she brings practical insights tailored to their unique needs—particularly those looking to expand their global reach. With cross-border exposure, she is adept at leading and collaborating with multicultural, cross-functional teams.",
      linkedin: "https://linkedin.com/in/radha-kolathur"
    },
    {
      name: "GEETHA SURESH",
      position: " DIRECTOR | B.Com, CMA, CS, CPA (Inactive, USA)",
      image: "/lovable-uploads/1850e040-d06f-4b25-aea6-eb82cf822d58.png",
      description: "Geetha is a qualified Cost and Management Accountant, Company Secretary, and US CPA (Inactive) registered with the California Board of Accountancy. She brings over 26 years of diverse experience across multinational corporations and startups, with deep expertise in cost management, regulatory compliance, and strategic finance. She previously led the Bangalore operations of Proactive Solutech, a leading player in the outsourcing space. At Accountswhiz, Geetha heads both the payroll and accounting functions, overseeing end-to-end service delivery with a focus on accuracy, compliance, and client-specific process efficiency. Her strong operational command and proactive leadership are integral to maintaining the firm’s high standards of execution and reliability.",
      linkedin: "https://linkedin.com/in/geetha-suresh"
    },
    {
      name: "JAYANTHI SRINIVASAN",
      position: "DIRECTOR | B.Com, CS",
      image: "/lovable-uploads/20c494bf-75b9-459f-825a-833c11098350.png",
      description: "Jayanthi Srinivasan is an accomplished Company Secretary with over 25 years of experience working across both established brands and emerging businesses. Her career spans a broad spectrum of responsibilities, including a leadership role in secretarial practice and marketing at Proactive Solutech’s Bangalore operations. At Accountswhiz, she leads the corporate secretarial function, bringing deep expertise in compliance, governance, and statutory frameworks. She works closely with first-time founders and growing enterprises, offering hands-on support through incorporation and ongoing regulatory compliance, and helps them navigate multiple rounds of funding and investor due diligence with confidence.",
      linkedin: "https://linkedin.com/in/jayanthi-srinivasan"
    },
    {
      name: "Sudha K C",
      position: "DIRECTOR | M.Com, FCA, CISA (USA), CIA (USA)",
      image: "/lovable-uploads/b963138e-8796-4756-90df-c0a928fcf2fb.png",
      description: "Sudha is an accomplished finance and audit professional with a strong background in corporate finance, internal audit, and risk management. She previously worked with DXC Technology, where she was involved in revenue assurance and financial planning & analysis (FP&A). As part of the corporate internal audit team, she led a wide range of assignments, including Sarbanes-Oxley (SOX) compliance audits and operational risk reviews. At Accountswhiz, Sudha plays a strategic leadership role in driving the firm’s compliance and analytics practice. Her expertise spans corporate compliances that help businesses stay aligned with evolving regulatory requirements, and data analytics that empower management with timely, actionable insights for strategic decision-making.",
      linkedin: "https://linkedin.com/in/sudha-kc"
    }
  ];

  return (
    <main
      itemScope
      itemType="https://schema.org/AboutPage"
      className="min-h-screen"
    >
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section
        className="py-16 bg-[#163d9e] text-white relative overflow-hidden"
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="AccountsWhiz" />
        <meta itemProp="url" content="https://accountswhiz.com" />
        <meta itemProp="logo" content="/lovable-uploads/9fa1a284-3e76-4491-974b-b6f393455d33.png" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" itemProp="headline">
            About Us
          </h1>
          <p className="text-xl text-accent font-semibold mb-2" itemProp="slogan">
            Empowered by women leaders, driven by excellence
          </p>
          <p className="text-lg text-white/80" itemProp="description">
            Meet our team of certified professionals with decades of cross-border expertise
          </p>
        </div>
      </section>

      {/* --- OUR PURPOSE / VISION / MISSION --- */}
      <section
        className="py-8"
        style={{ background: "#fafbfc" }}
        aria-labelledby="our-purpose-heading"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div className="container mx-auto px-4">
          <header style={{ maxWidth: 900, margin: "0 auto", paddingLeft: 16, paddingRight: 16 }}>
            <h2 id="our-purpose-heading" className="sr-only">Our Purpose, Vision, and Mission</h2>
            <NotchedBox title="Our Vision">
              To be known as a firm that provides diverse financial services exemplifying the highest standards in the industry.
            </NotchedBox>
            <NotchedBox title="Our Mission">
              To maintain meaningful relationships with clients as we provide cost-effective, competitive and efficient financial solutions that include accounting, tax planning, auditing and business advisory services.
            </NotchedBox>
          </header>
        </div>
      </section>

      {/* --- OUR EXPERT TEAM --- */}
      <section
        className="py-12 bg-white"
        aria-labelledby="expert-team-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 id="expert-team-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Expert Team
            </h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto">
              Meet our experienced women leaders who bring decades of expertise in accounting, compliance, and financial advisory services.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="flex flex-col lg:flex-row gap-6 items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="lg:w-1/3">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-56 h-64 rounded-lg object-cover mx-auto shadow-lg"
                    itemProp="image"
                  />
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2" itemProp="name">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-medium" itemProp="jobTitle">
                    {member.position}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-3 text-sm" itemProp="description">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    itemProp="sameAs"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE TIMELINE --- */}
      <section
        className="py-16 bg-muted/30"
        aria-labelledby="who-we-are-heading"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="who-we-are-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in financial excellence and business growth
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 w-0.5 bg-primary/20 h-full timeline-line"></div>
            <div className="space-y-8">
              {[
                {
                  title: "Full-Service Excellence",
                  description: "Full-service accountancy firm headquartered in Bengaluru",
                  icon: Building2
                },
                {
                  title: "Decades of Experience",
                  description: "Decades of experience in accounting, statutory compliance, and corporate secretarial services",
                  icon: Clock
                },
                {
                  title: "Diverse Clientele",
                  description: "Serving startups, SMEs, trusts, corporates, and multinationals across various industries",
                  icon: Users
                },
                {
                  title: "Comprehensive Expertise",
                  description: "Expertise in tax filing, payroll, returns, and government compliance",
                  icon: FileBarChart
                },
                {
                  title: "Trusted by Clients",
                  description: "Trusted by clients for accuracy, reliability, and timeliness",
                  icon: Star
                },
                {
                  title: "Long-Term Relationships",
                  description: "Committed to building long-term client relationships",
                  icon: Handshake
                },
                {
                  title: "Equal Care for All",
                  description: "Equal attention and care given to companies of all sizes",
                  icon: Scale
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start group timeline-item"
                  itemProp="hasPart"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer timeline-dot">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-8 flex-1 bg-white rounded-lg p-6 shadow-md border border-border group-hover:shadow-lg transition-all duration-300 cursor-pointer timeline-content">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors" itemProp="headline">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" itemProp="description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section
        className="py-20 bg-professional-light"
        aria-labelledby="core-values-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="core-values-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Do We Empower Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All our actions are driven by a core set of beliefs and values shared amongst all the members of our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "An Ethical Approach", description: "We believe that nothing can be valued higher than integrity. We approach everything we do with fairness and a highly conscious attitude." },
              { title: "Diligence", description: "We investigate every situation thoroughly from all angles to understand the impact it may have on businesses." },
              { title: "Professionalism", description: "We adhere to national and international accounting standards in all our reports and findings, maintain confidentiality at all times." },
              { title: "Open Honest Communication", description: "At all times, we maintain open lines of communication with our clients and provide constructive advice." },
              { title: "Harmonious Teamwork", description: "The members of our team work harmoniously together, building each other up to bring out the best in you." },
              { title: "Trust", description: "By promoting transparency at all levels, we build relationships based on trust between us and our clients." },
            ].map((value, idx) => (
              <article
                key={idx}
                className="shadow-card border-0 bg-white rounded-lg"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/DefinedTerm"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3" itemProp="name">{value.title}</h3>
                  <p className="text-foreground/80" itemProp="description">{value.description}</p>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        className="py-20 bg-background"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto shadow-card border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" itemProp="headline">
                Expertise And Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8" itemProp="description">
                Between all the members of our team, we have over 80 years of experience backing our expertise. However, we continually strive to improve our services to maintain our status as the best in the business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-professional-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/lovable-uploads/9fa1a284-3e76-4491-974b-b6f393455d33.png"
                  alt="AccountsWhiz Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/80">
                Strategic financial services for growth-oriented businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Entity Setup & Structuring</li>
                <li>Accounting & Reporting</li>
                <li>Payroll & Compliance</li>
                <li>Taxation & Filings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <p>+91 90080 34040</p>
                <p>info@accountswhiz.com</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              </div>
              {/* Social Media Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com/company/accountswhiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="AccountsWhiz LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/accountswhiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="AccountsWhiz Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>Copyright ©2025 Accountswhiz India Pvt Ltd . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AboutUs;
