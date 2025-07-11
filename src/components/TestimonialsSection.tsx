import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

// Mapping each testimonial to its logo file
const testimonialData = [
  {
    text: "We selected Accountswhiz as our partner for accounting, payroll, compliance & corporate secretarial activities. Accountswhiz management has a good level of experience & insight backed by a professional team that is always proactive to our requirements. In our 8+ years of association with them, we have met all our compliances on time.",
    name: "Karthik Mahadevan",
    designation: "Co-Founder",
    logo: "01c88e9e-b2c9-4d1e-a66a-a5ef1b63a4ae.png", // B2Brain
    logoAlt: "B2Brain"
  },
  {
    text: "The decision of outsourcing the payroll services was one of the key & best decisions has been taken by M360 (M-Panels) in the year 2021. Accountswhiz has been seamlessly handling our payroll activity from past couple of years now and we are completely satisfied with their services. They have a thorough knowledge on payroll process & direct tax matters with rich professional experience. Very professional & optimistic approach and have been handling it efficiently and satisfactorily. Employees are satisfied with their queries and the income tax help desk provided by them.",
    name: "Kasi Viswanathan",
    designation: "Finance Controller",
    logo: "/lovable-uploads/36a275fd-b2bb-4dbd-a6a6-8e46cf7a0add.png", // m360
    logoAlt: "m360 Research"
  },
  {
    text: "Accountswhiz Team has been taking care of all the Secretarial and Accounting services for the Companies I am associated with as Founder. I have known Jayanthi Srinivasan, Geetha Suresh and her team for over 20 years, both as part of Pro-Active Solutech earlier as well as Accountswhiz India. Accountswhiz team takes total ownership for the responsibilities undertaken by them and ensure proper compliance. As Director of various Companies, this gives much comfort and satisfaction. A highly Reliable, Trustworthy partner for compliance.",
    name: "Srinivasan G",
    designation: "Co Founder",
    logo: "/lovable-uploads/f0620ad2-bd21-4a24-b818-cb54019ff15e.png", // RuralShores
    logoAlt: "Rural Shores"
  },
  {
    text: "Accountswhiz has been our (EatGood technologies pvt ltd) trusted partner for payroll, accounting, book keeping, compliance and whole bunch of such services since almost a decade now and I have to thank them for always being a partner I can always rely on to support me during tough times. The team of Jayanthi Geetha n Sreenath have been great support systems for our organization since years and I cant thank them enough for that.",
    name: "Sandipan Mitra",
    designation: "Co-Founder & CEO",
    logo: "/lovable-uploads/85f88535-faa4-44a1-84cf-364671ae1611.png", // HungerBox
    logoAlt: "HungerBox"
  }
];

const TestimonialsSection = () => {
  return (
    <section
      className="py-20 bg-muted/30"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Client Testimonials
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" aria-label="Client testimonials carousel">
            <CarouselContent>
              {testimonialData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <article
                    className="bg-card rounded-2xl p-8 shadow-card mx-4"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    {/* Client Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.logoAlt + " logo"}
                        className="h-12 md:h-16 max-w-[140px] object-contain mx-auto rounded-lg shadow"
                        style={{
                          background: "white",
                          padding: "0.2em 0.5em",
                          filter: "brightness(0) invert(1) grayscale(1) drop-shadow(0 1px 4px #0006)",
                          boxShadow: "0 1px 12px 0 rgba(0,0,0,0.08)"
                        }}
                        loading="lazy"
                      />
                    </div>
                    {/* 5 Star Rating */}
                    <div
                      className="flex justify-center mb-6"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote
                      className="text-lg text-foreground/80 leading-relaxed mb-8 text-center"
                      itemProp="reviewBody"
                    >
                      “{testimonial.text}”
                    </blockquote>
                    
                    {/* Name and Designation - Center Aligned */}
                    <div
                      className="text-center"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <h4 className="font-semibold text-foreground text-lg mb-1" itemProp="name">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground" itemProp="jobTitle">
                        {testimonial.designation}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" aria-label="Previous testimonial" />
            <CarouselNext className="hidden md:flex" aria-label="Next testimonial" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
