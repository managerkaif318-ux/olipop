
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What makes Olipop functional?",
    answer: "Olipop combines prebiotics, plant fiber, and botanicals to support digestive health while tasting like the sodas you know and love."
  },
  {
    question: "Is Olipop sugar-free?",
    answer: "Olipop has significantly less sugar than traditional sodas (usually 2-5g per can), primarily sourced from natural juice and cassava root."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship within the continental US. We are working hard to bring Olipop to the rest of the world soon!"
  },
  {
    question: "How should I store my Olipop?",
    answer: "Olipop is best enjoyed chilled. We recommend refrigerating upon arrival to maintain optimal flavor and probiotic stability."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-background">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase italic text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-muted">
              <AccordionTrigger className="font-headline text-lg md:text-xl font-bold hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
