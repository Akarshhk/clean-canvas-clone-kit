import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import TeamModal from "@/components/TeamModal";
import { Building2, Clock, Users, FileBarChart, Star, Handshake, Scale } from "lucide-react";

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
    
    // Ensure all items start invisible and untransformed
    timelineItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.setAttribute('data-has-animated', 'false');
    });

    // Set initial line height to 0
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
            // Animate the item with a slight delay
            setTimeout(() => {
              target.style.opacity = '1';
              target.style.transform = 'translateY(0)';
              target.setAttribute('data-has-animated', 'true');
            }, index * 100); // Stagger animation
            
            // Update timeline line height based on scroll progress
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
      position: "DIRECTOR, M.COM, FCA, CPA (Inactive), CISA (USA) AND CIA (USA)",
      image: "/lovable-uploads/247e2848-8ebb-4360-8ddc-59d136ea8ca3.png",
      description: "A seasoned risk management and compliance champion with more than 12 years of experience in leading global audit and software compliance teams in HP. Prior to HP, she worked in Deloitte Haskins & Sells in Risk Advisory Services. She is also well versed with the accounting and financial advisory needs of start-ups. Given her exposure in multiple geographies, Radha can lead, engage and work with teams from diverse backgrounds.",
      linkedin: "https://linkedin.com/in/radha-kolathur"
    },
    {
      name: "GEETHA SURESH",
      position: "DIRECTOR B COM, CMA, CS, CPA (Inactive), (USA)",
      image: "/lovable-uploads/1850e040-d06f-4b25-aea6-eb82cf822d58.png",
      description: "Geetha specializes in Cost Accountancy and is a member of the California Board of Accountancy(CPA) and CS. Her theoretical knowledge is backed by over 26 years of practical work experience with multinational corporations as well as start-ups., Including heading the Bangalore operations of Proactive Solutech , a dominant player in outsourcing field. A dynamic personality paired with an optimistic outlook makes Geetha exude positivity wherever she goes. She is known by her team to be a good team player and someone who is always ready to help in any way she can.",
      linkedin: "https://linkedin.com/in/geetha-suresh"
    },
    {
      name: "JAYANTHI SRINIVASAN",
      position: "DIRECTOR, B.COM, CS",
      image: "/lovable-uploads/20c494bf-75b9-459f-825a-833c11098350.png",
      description: "Jayanthi Srinivasan is an accomplished Company Secretary and a generalist by practice. She has over 25 years of experience working with big and small brands. .Her stint also involved heading secretarial practice & marketing in Proactive Solutech Operations in Bangalore. Over the years she has become known as a specialist on Corporate Secretarial Matters. Having worked with a number of emerging start-ups, she understands the pulse of the budding directors and entrepreneurs and manages investor relations.",
      linkedin: "https://linkedin.com/in/jayanthi-srinivasan"
    },
    {
      name: "SUDHA K C",
      position: "MANAGING PARTNER – S R P S & ASSOCIATES (Chennai) M.COM, FCA, CISA(USA) and CIA(USA)",
      image: "/lovable-uploads/b963138e-8796-4756-90df-c0a928fcf2fb.png",
      description: "An experienced Audit & Finance Professional with stints in US based IT giants – DXC Technology & iGate Global Solutions (part of Capgemini.) Sudha was a key contributor in Corporate Finance with primary focus on revenue recognition, revenue assurance and FP&A. As a risk management professional, she handled diverse areas in Corporate Internal Audit .Currently she heads our associate firm specializing in Corporate Compliances and Taxation.",
      linkedin: "https://linkedin.com/in/sudha-kc"
    }
  ];

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-[#17181b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Purpose - Mission and Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Purpose
            </h2>
            <div className="flex flex-col gap-10">
              {/* Our Vision */}
              <div
                className="relative bg-white border-2 border-blue-400 rounded-lg p-10 shadow-none mb-4"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                }}
              >
                <h3 className="text-2xl font-extrabold text-black mb-3">Our Vision</h3>
                <p className="text-lg text-black leading-relaxed">
                  To be known as a firm that provides diverse financial services exemplifying the highest standards in the industry.
                </p>
              </div>
              {/* Our Mission */}
              <div
                className="relative bg-white border-2 border-blue-400 rounded-lg p-10 shadow-none"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                }}
              >
                <h3 className="text-2xl font-extrabold text-black mb-3">Our Mission</h3>
                <p className="text-lg text-black leading-relaxed">
                  To maintain meaningful relationships with clients as we provide cost-effective, competitive and efficient financial solutions that include accounting, tax planning, auditing and business advisory services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Interactive Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in financial excellence and business growth
            </p>
          </div>
          
          {/* Interactive Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-primary/20 h-full timeline-line"></div>
            
            {/* Timeline Items */}
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
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer timeline-dot">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1 bg-white rounded-lg p-6 shadow-md border border-border group-hover:shadow-lg transition-all duration-300 cursor-pointer timeline-content">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-professional-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Do We Empower Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All our actions are driven by a core set of beliefs and values shared amongst all the members of our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">An Ethical Approach</h3>
                <p className="text-foreground/80">
                  We believe that nothing can be valued higher than integrity. We approach everything we do with fairness and a highly conscious attitude.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Diligence</h3>
                <p className="text-foreground/80">
                  We investigate every situation thoroughly from all angles to understand the impact it may have on businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Professionalism</h3>
                <p className="text-foreground/80">
                  We adhere to national and international accounting standards in all our reports and findings, maintain confidentiality at all times.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Open Honest Communication</h3>
                <p className="text-foreground/80">
                  At all times, we maintain open lines of communication with our clients and provide constructive advice.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Harmonious Teamwork</h3>
                <p className="text-foreground/80">
                  The members of our team work harmoniously together, building each other up to bring out the best in you.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Trust</h3>
                <p className="text-foreground/80">
                  By promoting transparency at all levels, we build relationships based on trust between us and our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto shadow-card border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expertise And Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Between all the members of our team, we have over 80 years of experience backing our expertise. However, we continually strive to improve our services to maintain our status as the best in the business.
              </p>
              <p className="text-lg text-foreground">
                We believe that for growth to be sustainable, it must be socially inclusive. This is one of the reasons why we also work with Non-Profit organizations. Through our influence and approach to various situations, we are committed to helping your organization put the best financial practices in place.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Expert Team Section */}
      <section className="py-20 bg-professional-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center cursor-pointer group transition-all duration-300"
                onClick={() => handleMemberClick(member)}
              >
                <div className="relative mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-56 rounded-lg object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">View Details</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
          
          <TeamModal
            member={selectedMember}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </section>



      {/* Footer */}
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
    </div>
  );
};

export default AboutUs;