import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-headline">AI Live Diagnostic Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-on-surface">
            Intelligent <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-fixed-dim to-secondary-dim">Crop Disease</span> <br/>
            Detection
          </h1>
          <p className="max-w-xl text-lg text-on-surface-variant font-light leading-relaxed">
            AgroScan leverages advanced computer vision and AI to detect crop diseases with high accuracy and speed—empowering farmers with fast, reliable, technology-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/signup" className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-md font-black text-lg uppercase tracking-tight hover:shadow-[0_0_30px_rgba(107,255,143,0.4)] transition-all flex items-center gap-3">
              Scan Your Crops
              <span className="material-symbols-outlined">center_focus_weak</span>
            </a>
            <a href="#technology" className="border border-outline-variant/30 text-on-surface px-10 py-5 rounded-md font-bold text-lg uppercase tracking-tight hover:bg-surface-container-high transition-all">
              See How It Works
            </a>
          </div>
        </div>
        <div className="relative lg:h-[700px] flex items-center justify-center">
          {/* Visual Scan Component */}
          <div className="relative w-full aspect-square max-w-[600px] rounded-xl overflow-hidden border border-primary/20 bg-surface-container-low shadow-[0_0_50px_rgba(107,255,143,0.1)] group">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" alt="Close-up of a vibrant green soybean leaf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTQuW186lS96Y1f3bGtJjsL3kFEOnTwSl_06tbk3K-eLntSSbVGtSri1y_POnfSIFG2QqIOIgECf2fTBj5ZjQThCbxytEKwUVPxNu1wX-dX6eCiOz_9atzybgBKkkSM7vZbl4oCrgnwrPcr-JCRCraqD_tHMzgqgZP4ssxBoAmkp2yLT3pOWUSc190wx1VZcUylKvkrVi7xfdzkqyiR63_qjiYzXedJDjtT6m9aobfnWbMBEi0R2A8uDATNof5FRm-avf8z1evJlM"/>
            {/* Scan Line Overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="scan-line top-1/4 animate-[scan_4s_linear_infinite]"></div>
            </div>
            {/* Technical Overlays */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="bg-background/80 backdrop-blur-md p-3 border border-primary/30 text-[10px] font-headline text-primary">
                  <p>COORD: 45.33.22.1</p>
                  <p>SENSITIVITY: 99.4%</p>
                </div>
                <div className="w-12 h-12 border-t-2 border-r-2 border-primary"></div>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-12 h-12 border-b-2 border-l-2 border-primary"></div>
                <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-md px-4 py-2 border border-primary/50">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">Healthy Node</span>
                </div>
              </div>
            </div>
          </div>
          {/* Radial Glow Background */}
          <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
