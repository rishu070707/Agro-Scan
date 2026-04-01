import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-32 bg-background relative">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 space-y-4">
          <h2 className="text-primary font-headline text-sm font-bold uppercase tracking-[0.4em]">Capabilities</h2>
          <h3 className="text-5xl font-black font-headline tracking-tighter">Diagnostic Ecosystem</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="col-span-1 md:col-span-2 bg-surface-container-low rounded-xl p-10 border border-outline-variant/10 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-primary/20 text-8xl group-hover:text-primary/40 transition-colors">biotech</span>
            </div>
            <div className="relative z-10 max-w-md space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <h4 className="text-3xl font-bold font-headline">AI Crop Analysis</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Multi-spectral data processing engine that looks beneath the surface. Our neural networks analyze chlorophyll density and moisture levels to detect stress before it's visible to the human eye.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-sm font-bold text-primary/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  MULTI-SPECTRAL IMAGING
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  STRESS GRADIENT MAPPING
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-high rounded-xl p-10 border border-outline-variant/10 flex flex-col justify-between hover:border-primary/30 transition-colors group">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">radar</span>
              </div>
              <h4 className="text-3xl font-bold font-headline leading-tight">Real-Time Detection</h4>
              <p className="text-on-surface-variant">Instant identification of 400+ unique pathogens with sub-second latency.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="text-3xl font-black font-headline text-primary tracking-tighter">400+</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Global Pathogens</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-high rounded-xl p-10 border border-outline-variant/10 flex flex-col justify-between hover:border-primary/30 transition-colors group">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">query_stats</span>
              </div>
              <h4 className="text-3xl font-bold font-headline leading-tight">Yield Prediction</h4>
              <p className="text-on-surface-variant">AI-driven harvest forecasting utilizing historical climate patterns and current health metrics.</p>
            </div>
            <div className="mt-8 flex gap-1 items-end">
              <div className="w-2 h-8 bg-primary/20"></div>
              <div className="w-2 h-12 bg-primary/40"></div>
              <div className="w-2 h-16 bg-primary/60"></div>
              <div className="w-2 h-24 bg-primary group-hover:h-32 transition-all duration-500"></div>
            </div>
          </div>
          {/* Card 4 (Technology Highlight) */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-surface-container-low to-surface-container-lowest rounded-xl p-1 border border-primary/20 group overflow-hidden">
            <div className="bg-background rounded-[10px] p-10 h-full flex items-center gap-12 flex-col md:flex-row">
              <div className="flex-1 space-y-6">
                <h4 className="text-3xl font-bold font-headline">Neural Core Sync</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Our proprietary architecture bridges the gap between field hardware and cloud-based intelligence, ensuring zero-latency diagnostic feedback even in low-connectivity environments.
                </p>
                <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group">
                  Explore the Core <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-surface-container-high rounded-lg flex items-center justify-center border border-outline-variant/20 relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Semiconductor chip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQV_cEqv-IxooNciLuhhs6TloZinBdgnVU19uXvqTITB5m5wJWBcF_8N41nCveGDh5d700HF8kepcUzX5Ye9-xBwyAZ8xImZh2e15I14oLZoZ5zpDqo0Ekw96QqLb7TxBsOa28mXZlpUOU_Ra_rwyl5-AtcOmUKN0-k0T3SsIQpmkKuIyaCvzv01HDebDl35JIQw-wIOXJKzD2aefsMGLx-gT8CKdHTMsZibS1eHftKSz3dmP0lCmSoFsTG_h6As1yWNc4M0ZGfE"/>
                <span className="material-symbols-outlined text-primary text-5xl relative z-10">memory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
