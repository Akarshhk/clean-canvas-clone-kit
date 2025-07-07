import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "We selected Accountswhiz as our partner for accounting, payroll, compliance & corporate secretarial activities. Accountswhiz management has a good level of experience & insight backed by a professional team that is always proactive to our requirements. In our 8+ years of association with them, we have met all our compliances on time.",
    name: "Karthik Mahadevan",
    designation: "Co-Founder"
  },
  {
    text: "The decision of outsourcing the payroll services was one of the key & best decisions has been taken by M360 (M-Panels) in the year 2021. Accountswhiz has been seamlessly handling our payroll activity from past couple of years now and we are completely satisfied with their services. They have a thorough knowledge on payroll process & direct tax matters with rich professional experience. Very professional & optimistic approach and have been handling it efficiently and satisfactorily. Employees are satisfied with their queries and the income tax help desk provided by them.",
    name: "Kasi Viswanathan",
    designation: "Finance Controller"
  },
  {
    text: "Accountswhiz Team has been taking care of all the Secretarial and Accounting services for the Companies I am associated with as Founder. I have known Jayanthi Srinivasan, Geetha Suresh and her team for over 20 years, both as part of Pro-Active Solutech earlier as well as Accountswhiz India. Accountswhiz team takes total ownership for the responsibilities undertaken by them and ensure proper compliance. As Director of various Companies, this gives much comfort and satisfaction. A highly Reliable, Trustworthy partner for compliance.",
    name: "Srinivasan G",
    designation: "Co Founder"
  },
  {
    text: "Accountswhiz has been our (EatGood technologies pvt ltd) trusted partner for payroll, accounting, book keeping, compliance and whole bunch of such services since almost a decade now and I have to thank them for always being a partner I can always rely on to support me during tough times. The team of Jayanthi Geetha n Sreenath have been great support systems for our organization since years and I cant thank them enough for that.",
    name: "Sandipan Mitra",
    designation: "Co-Founder & CEO"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Client Testimonials
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-card rounded-2xl p-8 shadow-card mx-4">
                    {/* 5 Star Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-center">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Name and Designation - Center Aligned */}
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;