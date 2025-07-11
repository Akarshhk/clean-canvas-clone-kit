import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups, SMEs, and cross-border businesses across various industries. Our clients range from early-stage ventures to established companies looking to expand internationally.",
    },
    {
      question: "Do you provide services for both India and US operations?",
      answer: 
        "Yes, we provide comprehensive financial services for both India and US operations, including entity setup, accounting, payroll, taxation, and compliance in both jurisdictions."
    },
    {
      question: "How do you ensure compliance with different regulatory requirements?",
      answer: 
        "Our team stays updated with the latest regulatory changes in both India and the US. We provide proactive compliance management and work closely with local regulatory bodies to ensure all requirements are met."
    },
    {
      question: "What makes your approach different from other accounting firms?",
      answer: 
        "We act as an integrated finance partner rather than just a service provider. Our team brings over 80 years of collective experience and focuses on providing operational clarity and regulatory confidence at every business stage."
    },
    {
      question: "How do you handle data security and confidentiality?",
      answer: 
        "We maintain strict data security protocols and confidentiality agreements. All client information is handled with utmost care and stored securely using industry-standard encryption and security measures."
    },
    {
      question: "What is your typical engagement model?",
      answer: 
        "We offer flexible engagement models based on your business needs - from project-based work to ongoing monthly retainers. We work closely with you to determine the best approach for your specific requirements."
    }
  ];

  return (
    <section
      className="py-20 bg-muted/30"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our services and approach
            </p>
          </header>
          {/* Semantic FAQ list */}
          <dl className="sr-only">
            {faqs.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <dt itemProp="name">{faq.question}</dt>
                <dd
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </dd>
              </div>
            ))}
          </dl>
          {/* Visual FAQ with Accordion */}
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            aria-label="Frequently Asked Questions"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;