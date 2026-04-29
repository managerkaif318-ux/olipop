
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingOverlayProps {
  progress: number;
  isInitial?: boolean;
}

export function LoadingOverlay({ progress, isInitial = true }: LoadingOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-xs space-y-8 px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter uppercase italic">OLIPOP</h1>
        <div className="space-y-2">
          <Progress value={progress} className="h-1 bg-muted" />
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Loading {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
