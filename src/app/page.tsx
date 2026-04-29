
"use client";

import { ParallaxHero } from "@/components/parallax-hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ParallaxHero />
      <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
