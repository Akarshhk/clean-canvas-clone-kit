import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Start Your 
              <span className="text-primary"> Financial Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to streamline your financial operations? Get in touch with our expert team 
              to discuss how we can support your business growth.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 90080 34040</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@accountswhiz.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Right Content - CTA Card */}
          <div>
            <Card className="bg-gradient-hero text-white border-0 shadow-elegant">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">
                  Ready to Get Started?
                </CardTitle>
                <p className="text-white/90">
                  Join 100+ growing businesses that trust us with their financial operations.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Customized service packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Expert guidance from day one</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  Schedule a Consultation
                </Button>
                
                <div className="text-center text-white/80 text-sm">
                  Trusted by startups backed by leading institutional investors
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;