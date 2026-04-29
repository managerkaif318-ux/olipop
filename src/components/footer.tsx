
"use client";

import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-8">
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase italic">OLIPOP</h2>
            <div className="flex gap-6">
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] opacity-30">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wholesale</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] opacity-30">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs opacity-30">© {new Date().getFullYear()} OLIPOP. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-50">
            <Mail className="w-4 h-4" />
            <span>JOIN OUR NEWSLETTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
