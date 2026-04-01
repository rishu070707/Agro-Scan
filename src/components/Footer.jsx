import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-high bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 max-w-[1440px] mx-auto">
        <div className="text-sm font-black text-on-surface font-headline tracking-tighter uppercase">
          AGRO
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-on-surface/40 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-[0.2em]" href="#">Privacy Protocol</a>
          <a className="text-on-surface/40 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-[0.2em]" href="#">Terms of Service</a>
          <a className="text-on-surface/40 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-[0.2em]" href="#">API Documentation</a>
          <a className="text-on-surface/40 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-[0.2em]" href="#">System Status</a>
        </div>
        <div className="text-on-surface/40 font-label text-[10px] uppercase tracking-[0.2em]">
          © 2025 AGRO. PRECISION SECURED.
        </div>
      </div>
    </footer>
  );
}
