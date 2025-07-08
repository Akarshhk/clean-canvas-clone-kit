import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

const IndiaServices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              India Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete business support services for companies operating in India. From incorporation to compliance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Incorporation of Entities</CardTitle>
                <CardDescription>
                  Complete business setup and registration services in India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Private Limited Company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>LLP Formation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>OPC Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Partnership Firms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>ROC Compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Digital Signature Certificates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Accounting & Bookkeeping</CardTitle>
                <CardDescription>
                  Comprehensive accounting solutions for Indian businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Books of Accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Financial Statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Management Reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tally Implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>GST Ready Accounting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Monthly MIS Reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Secretarial Services</CardTitle>
                <CardDescription>
                  Corporate secretarial and compliance management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Board Meetings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Annual Filings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Statutory Registers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Share Transfers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Director Appointments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Annual Returns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Payroll Management</CardTitle>
                <CardDescription>
                  End-to-end payroll processing for Indian companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Salary Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>PF & ESI Compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>TDS Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Form 16 Generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Labour Law Compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Statutory Returns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Management Section */}
          <div className="bg-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Compliance Management</h2>
            <p className="text-center text-muted-foreground mb-12">
              Stay compliant with all Indian statutory requirements. We handle all your compliance needs so you can focus on business growth.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">GST Registration & Returns</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Income Tax Returns</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">TDS Compliance</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">PF & ESI Returns</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Professional Tax</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Labour Law Compliance</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">FEMA Compliance</h4>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-primary mb-2">RBI Reporting</h4>
              </div>
            </div>
          </div>

          {/* Virtual CFO Services */}
          <div className="bg-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Virtual CFO Services</h2>
            <p className="text-center text-muted-foreground mb-12">
              Strategic financial guidance for growing businesses without the overhead of a full-time CFO
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Financial Planning</h3>
                <p className="text-muted-foreground">Budget preparation, cash flow forecasting, and financial modeling</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Business Advisory</h3>
                <p className="text-muted-foreground">Strategic decision support, investment analysis, and growth planning</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Investor Relations</h3>
                <p className="text-muted-foreground">Investor reporting, due diligence support, and fundraising assistance</p>
              </div>
            </div>
          </div>

          {/* What We Offer Table */}
          <div className="bg-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
            <p className="text-center text-muted-foreground mb-12">
              Choose the perfect plan that fits your business needs and scale as you grow
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Services Offered</TableHead>
                    <TableHead className="font-semibold text-primary text-center">AW-Startup</TableHead>
                    <TableHead className="font-semibold text-primary text-center">AW Startup PRO</TableHead>
                    <TableHead className="font-semibold text-primary text-center">AW Startup PRO +</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Book Keeping & Accounting Services</TableCell>
                    <TableCell className="text-center">Lite Plan</TableCell>
                    <TableCell className="text-center">Full Plan</TableCell>
                    <TableCell className="text-center">Full Plan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TDS & GST Compliance (Monthly/Quarterly/Annual as applicable)</TableCell>
                    <TableCell className="text-center">Quarterly</TableCell>
                    <TableCell className="text-center">Monthly/Quarterly</TableCell>
                    <TableCell className="text-center">Monthly/Quarterly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Payroll Accounting including PT and PF/ESI Compliance</TableCell>
                    <TableCell className="text-center">NA</TableCell>
                    <TableCell className="text-center">Full Management - Up to 20 employees</TableCell>
                    <TableCell className="text-center">Full Management - Up to 100 employees</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support from Dedicated Account Manager through mails/phones</TableCell>
                    <TableCell className="text-center">NA</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Corporate Secretarial Filings</TableCell>
                    <TableCell className="text-center">NA</TableCell>
                    <TableCell className="text-center">Annual Returns</TableCell>
                    <TableCell className="text-center">Full Management</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Review meeting with a Senior Professional on cashflow planning/MIS</TableCell>
                    <TableCell className="text-center">NA</TableCell>
                    <TableCell className="text-center">Monthly</TableCell>
                    <TableCell className="text-center">Monthly and Ad-hoc service</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Cross-Service CTA */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-16 text-center border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Looking for US Services Too?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We also provide comprehensive accounting, tax, and business services for companies operating in the United States. Expand your business with confidence across both markets.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/us-services'}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Explore US Services →
            </Button>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your India Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 100+ happy clients who trust us with their Indian business operations
            </p>
            <Button 
              size="lg" 
              className="px-8 py-3"
              onClick={() => window.location.href = '/#contact'}
            >
              Start Your India Journey
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

export default IndiaServices;