
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const USServices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              US Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive accounting, tax, and business services for companies operating in the United States. Navigate US regulations with confidence.
            </p>
            
            {/* Service Category Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="px-8 py-3"
                onClick={() => document.getElementById("us-smes")?.scrollIntoView({ behavior: "smooth" })}
              >
                US SMEs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => document.getElementById("us-cpa-firms")?.scrollIntoView({ behavior: "smooth" })}
              >
                US CPA Firms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our US Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Expert US Team</h3>
                <p className="text-muted-foreground">Certified professionals with deep US market knowledge</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Cross-Border Expertise</h3>
                <p className="text-muted-foreground">Seamless coordination between US and India operations</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Compliance Focused</h3>
                <p className="text-muted-foreground">Stay compliant with all US federal and state requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US SMEs Section */}
      <section id="us-smes" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">US SMEs</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">US Tax Preparation & Planning</CardTitle>
                <CardDescription>
                  Comprehensive tax services for individuals and businesses operating in the US
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Federal and State Tax Returns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tax Planning Strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Quarterly Estimated Payments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">US Business Formation</CardTitle>
                <CardDescription>
                  Complete support for setting up your business entity in the United States
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>LLC Formation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Corporation Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>EIN Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>State Compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">US Bookkeeping & Accounting</CardTitle>
                <CardDescription>
                  Professional accounting services tailored for US business requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>QuickBooks Setup & Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Financial Statement Preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cash Flow Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Monthly Reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">US Payroll Services</CardTitle>
                <CardDescription>
                  Comprehensive payroll management for US-based employees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Payroll Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tax Withholdings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>W-2 Preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>State Unemployment Insurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section for SMEs */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Ready to Expand to the US?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let us handle your US compliance while you focus on growing your business.
            </p>
            <Button size="lg" className="px-8 py-3">
              Get Started with US Services
            </Button>
          </div>
        </div>
      </section>

      {/* US CPA Firms Section */}
      <section id="us-cpa-firms" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">US CPA Firms</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            Accelerate your practise as we deliver Accuracy, Efficiency, and Insight—Across Borders
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Accounting Outsourcing Services</CardTitle>
                <CardDescription>
                  Comprehensive accounting support for your firm's clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Full-service accounting support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Financial reporting & analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>General ledger maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Chart of accounts setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Book Keeping Outsourcing Services</CardTitle>
                <CardDescription>
                  Professional bookkeeping services to support your clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Monthly Bookkeeping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Bank Reconciliations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Transaction categorization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>QuickBooks Clean-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Outsourced Tax Preparation</CardTitle>
                <CardDescription>
                  Scale your firm with our expert tax preparation services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Individual Tax Returns (1040)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Business Tax Returns (1120, 1120S, 1065)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Multi-State Tax Returns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tax Review & Quality Control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">AR & AP Management</CardTitle>
                <CardDescription>
                  Efficient accounts receivable and payable management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Invoice processing & tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Payment collection management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Vendor payment processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Aging reports & follow-ups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Payroll Reconciliations</CardTitle>
                <CardDescription>
                  Accurate payroll processing and reconciliation services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Payroll data verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tax calculation accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Quarterly payroll reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Year-end compliance support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA for CPA Firms */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Scale Your Practice?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with us to expand your capacity and serve more clients efficiently.
            </p>
            <Button size="lg" className="px-8 py-3">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-Service CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need India Services Too?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We also provide comprehensive accounting, tax, and business services for companies operating in India. Navigate both markets seamlessly with our expert guidance.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/india-services'}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Explore India Services →
            </Button>
          </div>
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
            <p>&copy; 2024 AccountsWhiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default USServices;
