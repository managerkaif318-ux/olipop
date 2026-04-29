
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { DrinkVariant, getFrameUrl } from "@/app/lib/variants";
import { Button } from "@/components/ui/button";
import { LoadingOverlay } from "./loading-overlay";
import { VariantNav } from "./variant-nav";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { DRINK_VARIANTS } from "@/app/lib/variants";

export function ParallaxHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentVariant = DRINK_VARIANTS[currentVariantIndex];

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas || imagesRef.current[index]) {
      const img = imagesRef.current[index];
      if (img && img.complete) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        
        // Object-fit: cover implementation for canvas
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }
  }, []);

  const preloadSequence = useCallback(async (variant: DrinkVariant) => {
    setIsSwitching(true);
    setProgress(0);
    imagesRef.current = [];

    const loadPromises = Array.from({ length: variant.frameCount }).map((_, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(variant.sequencePath, i);
        img.onload = () => {
          imagesRef.current[i] = img;
          setProgress((prev) => prev + (100 / variant.frameCount));
          resolve();
        };
      });
    });

    await Promise.all(loadPromises);
    setProgress(100);
    setIsPreloaded(true);
    setIsSwitching(false);
    drawFrame(0);
  }, [drawFrame]);

  useEffect(() => {
    preloadSequence(currentVariant);
  }, [currentVariantIndex, preloadSequence]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalScrollableHeight = windowHeight; // Total hero length effectively
      const scrollPercent = Math.min(Math.max(scrollY / totalScrollableHeight, 0), 1);
      const frameIndex = Math.min(Math.floor(scrollPercent * (currentVariant.frameCount - 1)), currentVariant.frameCount - 1);
      
      setCurrentFrame(frameIndex);
      drawFrame(frameIndex);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(currentFrame);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentVariant, currentFrame, drawFrame]);

  const handleNext = () => {
    setCurrentVariantIndex((prev) => (prev + 1) % DRINK_VARIANTS.length);
  };

  const handlePrev = () => {
    setCurrentVariantIndex((prev) => (prev - 1 + DRINK_VARIANTS.length) % DRINK_VARIANTS.length);
  };

  return (
    <section className="relative w-full h-[200vh]">
      <LoadingOverlay progress={progress} isInitial={!isPreloaded} />
      
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full object-cover z-0 fade-mask"
      />

      <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-16">
        {/* Header / Logo */}
        <div className="flex justify-between items-center pointer-events-auto">
          <h2 className="font-headline text-2xl font-bold tracking-tighter uppercase italic transition-colors duration-500" style={{ color: currentVariant.themeColor }}>
            OLIPOP
          </h2>
          <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-primary transition-colors">Shop</a>
            <a href="#" className="hover:text-primary transition-colors">Journal</a>
            <a href="#" className="hover:text-primary transition-colors">Rewards</a>
          </div>
        </div>

        {/* Hero Text Block */}
        <div className="max-w-xl space-y-8 pointer-events-auto">
          <div className={`transition-all duration-700 ${isSwitching ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter leading-none uppercase italic">
              {currentVariant.name}
            </h1>
            <h3 className="font-headline text-2xl md:text-3xl font-light tracking-widest text-muted-foreground uppercase mt-2">
              {currentVariant.subtitle}
            </h3>
            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              {currentVariant.description}
            </p>
            
            <div className="flex gap-4 mt-10">
              <Button 
                variant="outline" 
                className="rounded-full px-8 h-12 border-2 text-xs font-bold uppercase tracking-widest bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
              >
                ADD TO
              </Button>
              <Button 
                className="rounded-full px-8 h-12 text-xs font-bold uppercase tracking-widest transition-all"
                style={{ backgroundColor: currentVariant.themeColor, color: 'white' }}
              >
                CART
              </Button>
            </div>
          </div>
        </div>

        {/* Social Icons Bottom Center */}
        <div className="flex justify-center items-center gap-8 pointer-events-auto">
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      <VariantNav 
        current={currentVariantIndex} 
        total={DRINK_VARIANTS.length} 
        onNext={handleNext} 
        onPrev={handlePrev}
        isLoading={isSwitching}
      />
    </section>
  );
}
