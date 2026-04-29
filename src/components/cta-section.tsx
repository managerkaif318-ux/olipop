
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        <div className="flex flex-col justify-center p-8 md:p-24 space-y-8">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase italic leading-[0.9]">
            A New Kind<br />of Soda
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Finally, a soda you can feel good about. Packed with prebiotics, botanical extracts, and incredible flavor.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-full px-10 h-14 text-sm font-bold uppercase tracking-[0.2em] bg-primary hover:bg-primary/90">
              SHOP ALL FLAVORS
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto bg-[#6D28D9] flex items-center justify-center overflow-hidden">
           {/* Visual simulation of the requested CTA style */}
           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-black/40 pointer-events-none" />
           <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
             <div className="relative w-64 h-96">
                <Image
                  src="https://xkbusafxgmexravpxruc.supabase.co/storage/v1/object/public/vanila%20grape/frame_000_delay-0.041s.webp"
                  alt="Vanilla Grape Can"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  data-ai-hint="grape soda can"
                />
             </div>
             {/* Simple grape pile simulation with overlay styling */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-purple-900/80 to-transparent blur-xl" />
           </div>
        </div>
      </div>
    </section>
  );
}
