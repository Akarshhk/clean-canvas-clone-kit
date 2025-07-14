import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// --- ContactSection: LLMO/SEO/schema optimized ---

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { toast } = useToast();

  // 1. Submission logic is unchanged (Supabase write + feedback toast)
  const onSubmit = async (data: any) => {
    try {
      const { error } = await supabase
        .from('Contact')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          message: data.message,
          date: new Date().toISOString()
        });

      if (error) {
        toast({
          title: "Error",
          description: "There was an issue sending your message. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    // -- 2. Outer section: ContactPage schema --
    <section
      id="contact"
      className="py-20 bg-background"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* -- 3. Left: Org info, address, contacts, schema.org markup -- */}
          <aside itemScope itemType="https://schema.org/Organization" className="w-full">
            <meta itemProp="name" content="AccountsWhiz" />
            <header>
              {/* Use h2 for clarity (SEO/LLMO) */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" itemProp="slogan">
                Partner With Us to
                <span className="text-primary"> Simplify Finance & Compliance</span>
              </h2>
              {/* Two descriptive paragraphs, clear for LLM */}
              <p className="text-xl text-muted-foreground mb-8" itemProp="description">
                Whether you're launching, scaling, or streamlining—our expert team helps manage your accounting, 
                tax, payroll, and regulatory needs with precision and tech-driven efficiency.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Get in touch with our expert team to discuss how we can support your business growth.
              </p>
            </header>
            {/* Address with PostalAddress schema (SEO/LLMO) */}
            <address
              className="not-italic mb-8"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">1386, 1st Floor, 28th Main, South End 'A' Cross,</span><br />
              <span itemProp="addressLocality">Jayanagar 9th Block</span>,{" "}
              <span itemProp="addressRegion">Bangalore</span> –{" "}
              <span itemProp="postalCode">560069</span>
            </address>
            {/* ContactPoint cards: phone/email/hours -- schema.org ContactPoint */}
            <div
              className="space-y-6"
              itemScope
              itemType="https://schema.org/ContactPoint"
              itemProp="contactPoint"
            >
              {/* Phone */}
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919008034040"
                      className="text-muted-foreground"
                      itemProp="telephone"
                    >
                      +91 90080 34040
                    </a>
                  </div>
                </CardContent>
              </Card>
              {/* Email */}
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:info@accountswhiz.com"
                      className="text-muted-foreground"
                      itemProp="email"
                    >
                      info@accountswhiz.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              {/* Business Hours */}
              <Card className="shadow-card border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <time className="text-muted-foreground" itemProp="hoursAvailable">
                      Mon - Fri: 9:00 AM - 6:00 PM IST
                    </time>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
          
          {/* -- 4. Right: Contact form, ContactForm schema -- */}
          <section
            aria-label="Contact Form"
            className="w-full"
            itemScope
            itemType="https://schema.org/ContactForm"
          >
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground" id="contact-form-title">
                  Contact Us
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  aria-labelledby="contact-form-title"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName", { required: "First name is required" })}
                        className={errors.firstName ? "border-destructive" : ""}
                        autoComplete="given-name"
                        itemProp="givenName"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName.message as string}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName", { required: "Last name is required" })}
                        className={errors.lastName ? "border-destructive" : ""}
                        autoComplete="family-name"
                        itemProp="familyName"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName.message as string}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={errors.email ? "border-destructive" : ""}
                      autoComplete="email"
                      itemProp="email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message as string}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      autoComplete="tel"
                      itemProp="telephone"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      itemProp="organization"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...register("message", { required: "Message is required" })}
                      className={errors.message ? "border-destructive" : ""}
                      itemProp="description"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message as string}</p>
                    )}
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
