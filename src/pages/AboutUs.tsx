import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import TeamModal from "@/components/TeamModal";

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Purpose Card */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent border-2 border-blue-200/30 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-white/80 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Our Purpose:
                </h2>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-4xl">
                  Your One-Stop Shop For All Accounting & Compliance Needs. To maintain meaningful relationships with clients as we provide cost-effective, competitive and efficient financial solutions that include accounting, tax planning, auditing and business advisory services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Who We Are
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Your trusted partner in financial excellence and business growth
            </p>
          </div>
          
          {/* Interactive Feature Cards */}
          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Row 1 - Staggered Animation */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">Full-Service Excellence</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">Full-service accountancy firm headquartered in Bengaluru</p>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-secondary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-secondary/30 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary/80 transition-colors">Decades of Experience</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">Decades of experience in accounting, statutory compliance, and corporate secretarial services</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-accent/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-accent/30 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-accent/80 transition-colors">Diverse Clientele</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">Serving startups, SMEs, trusts, corporates, and multinationals across various industries</p>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">Comprehensive Expertise</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">Expertise in tax filing, payroll, returns, and government compliance</p>
                </div>
              </div>
            </div>

            {/* Row 3 - Three columns with enhanced animations */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="group relative bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 border border-secondary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-secondary/80 transition-colors">Trusted Excellence</h3>
                  <p className="text-foreground/70 leading-relaxed">Trusted by clients for accuracy, reliability, and timeliness</p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-accent/80 transition-colors">Long-Term Commitment</h3>
                  <p className="text-foreground/70 leading-relaxed">Committed to building long-term client relationships</p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">Equal Care</h3>
                  <p className="text-foreground/70 leading-relaxed">Equal attention and care given to companies of all sizes</p>
                </div>
              </div>
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