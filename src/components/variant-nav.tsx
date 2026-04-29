
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

interface VariantNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isLoading?: boolean;
}

export function VariantNav({ current, total, onPrev, onNext, isLoading }: VariantNavProps) {
  const displayIndex = (current + 1).toString().padStart(2, '0');

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex items-center gap-6 z-50">
      <div className="flex flex-col items-center gap-1 font-headline">
        <span className="text-6xl md:text-8xl font-bold tracking-tighter opacity-10">
          {displayIndex}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onPrev}
          disabled={isLoading}
          className="group flex flex-col items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary disabled:opacity-30"
        >
          <span>PREV</span>
          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
        </button>

        <div className="w-[1px] h-24 bg-foreground/20" />

        <button
          onClick={onNext}
          disabled={isLoading}
          className="group flex flex-col items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:text-primary disabled:opacity-30"
        >
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          <span>NEXT</span>
        </button>
      </div>
    </div>
  );
}
