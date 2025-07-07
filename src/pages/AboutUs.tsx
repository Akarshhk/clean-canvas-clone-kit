import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">AccountsWhiz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your One-Stop Shop For All Accounting & Compliance Needs
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="shadow-card border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-lg text-foreground">
                  To be known as a firm that provides diverse financial services exemplifying the highest standards in the industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-foreground">
                  To maintain meaningful relationships with clients as we provide cost-effective, competitive and efficient financial solutions that include accounting, tax planning, auditing and business advisory services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-lg leading-relaxed mb-6">
                Paying taxes, performing accounting tasks, ensuring statutory compliances, filing returns put forward by government authorities and so on, the very thought of working with these numbers can be nerve-wracking for business owners. Worry not. You have found the right partner in Accountswhiz India Pvt Ltd. We are a full-service accountancy firm with its headquarters in Bengaluru. For decades, our name has been synonymous with accurate accounting, compliance and timely corporate Secretarial work.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We strive to provide reliable accounting and related services to small and mid-sized companies. Over the years, we have served companies across a cross-section of industries. Our client roster includes entrepreneurs, trusts, firms, corporates and a number of multinationals. No matter what the size of a company may be, all our clients are equally important to us. We consider our long-standing relationships with our clients to be amongst our biggest successes.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">
                From Accounting To Regulatory Compliance And Everything In Between
              </h3>
              
              <p className="text-lg leading-relaxed mb-6">
                Accountswhiz India Pvt Ltd offers a full bouquet of professional advisory and executionary services. Our services include payroll management, bookkeeping, tax compliance, regulatory compliance of state and central laws, audits co-ordination, document processing, and a range of other customized services.
              </p>
              
              <p className="text-lg leading-relaxed mb-12">
                We partner with businesses not just to keep their books in order but also to help each venture grow. We are constantly on the lookout for new opportunities that could prove beneficial to our clients. Backed by knowledge gained from years of experience, our team helps you put the financial and other documentation crucial to the firm's growth in place helping you focus on your core operations. For all our customers, we offer hands-on support that can help them achieve their short term and long term goals.
              </p>
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