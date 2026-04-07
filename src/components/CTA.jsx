import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center space-y-12">
        <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter max-w-4xl mx-auto">
          Ready to modernize your harvest?
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light">
          Join 15,000+ precision farmers globally using AGRO to secure their yield and optimize their resources.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <button className="text-on-surface font-bold text-lg uppercase tracking-widest border-b-2 border-primary/30 hover:border-primary transition-colors pb-1">
            Request Enterprise Demo
          </button>
        </div>
      </div>
    </section>
  );
}
