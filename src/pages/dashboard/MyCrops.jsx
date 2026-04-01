import React from 'react';

export default function MyCrops({ setActiveTab }) {
  const crops = [
    { name:'North Field — Wheat', area:'4.2 ha', health:'good', lastScan:'25 Mar', icon:'grass', status:'Healthy', badge:'border-primary/30 text-primary bg-primary/10' },
    { name:'South Field — Rice',  area:'3.8 ha', health:'risk', lastScan:'20 Mar', icon:'spa',   status:'At Risk',  badge:'border-red-400/30 text-red-400 bg-red-400/10' },
    { name:'East Plot — Soybean', area:'2.5 ha', health:'ok',   lastScan:'27 Mar', icon:'eco',   status:'Monitoring', badge:'border-yellow-400/30 text-yellow-400 bg-yellow-400/10' },
    { name:'West Plot — Tomato',  area:'1.9 ha', health:'good', lastScan:'22 Mar', icon:'yard',  status:'Healthy', badge:'border-primary/30 text-primary bg-primary/10' },
    { name:'Greenhouse — Herbs',  area:'0.8 ha', health:'good', lastScan:'26 Mar', icon:'potted_plant', status:'Healthy', badge:'border-primary/30 text-primary bg-primary/10' },
  ];

  return (
    <div className="section-panel">
      <div className="grid grid-cols-3 gap-4">
        {crops.map((c, i) => (
          <div key={i} className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-5 hover:border-primary/30 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl drop-shadow-sm">{c.icon}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-[9px] font-black border ${c.badge}`}>{c.status}</span>
            </div>
            <h3 className="font-headline font-bold text-sm mb-1">{c.name}</h3>
            <p className="text-[11px] text-on-surface-variant mb-3">Area: {c.area} • Last scan: {c.lastScan}</p>
            <button 
              onClick={() => setActiveTab('scanner')}
              className="w-full text-[11px] font-bold uppercase tracking-widest py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
            >
              Scan Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
