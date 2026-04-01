import React from 'react';

export default function Technology() {
  return (
    <section id="technology" className="py-32 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>
      <div className="max-w-[1440px] mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-headline text-sm font-bold uppercase tracking-[0.4em]">System Architecture</h2>
              <h3 className="text-5xl font-black font-headline tracking-tighter">Edge-Computing <br/>Scan Tech</h3>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="text-primary-fixed-dim font-headline font-black text-2xl">01</div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Decentralized Logic</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Processing occurs at the point of capture, eliminating the need for constant high-bandwidth satellite uplinks.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-primary-fixed-dim font-headline font-black text-2xl">02</div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Neural Core Optimization</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Compressed AI models specifically trained for plant pathology identification at 99.8% precision.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-primary-fixed-dim font-headline font-black text-2xl">03</div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Real-Time Sync</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Global data sharing protocols that update the entire network whenever a new variant is detected.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square bg-surface-container-high rounded-full border border-primary/20 flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-60"></div>
              <img className="w-full h-full object-cover rounded-full opacity-40 mix-blend-screen" alt="Greenhouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1QUNcfuc2p9zdHnpiRFTlT4CbhM51VNutu6H-YS9wNHM8VbXhM-QU9L_20IkN_buYpzH3nN6raJ4iVQ6RWbglGebAgCgEZ3AjL_2WXFNBz85i88sCpjAHlsld0T8biqU5KaAaSURDlzovFED0A_DdlHKibIgF08Y4IyYykr49TQbpTtqx1JbU0Rd2wktGgYQ1TR_NFhH8K_xsfnzPCE6bSnkUKF7EUQ3XhxrWPTnKPDMq-qJXn6hVipfdo-sxzt5KD7iVkU-Lgc"/>
              <div className="absolute top-1/4 left-1/4 bg-primary p-2 text-on-primary-container font-headline text-[10px] font-bold tracking-tighter">DATA_SYNC: ACTIVE</div>
              <div className="absolute bottom-1/3 right-1/4 bg-surface-bright/80 backdrop-blur-md border border-primary/30 p-3 text-primary font-headline text-[10px] font-bold">NODE_01: NOMINAL</div>
              <div className="absolute w-[80%] h-[80%] border border-primary/10 rounded-full animate-[ping-slow_10s_linear_infinite]"></div>
              <div className="absolute w-[60%] h-[60%] border border-primary/20 rounded-full animate-[ping-slow_7s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
