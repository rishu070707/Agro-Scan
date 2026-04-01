import React from 'react';

export default function Reports() {
  const diseases = [
    { name:'Leaf Blight', pct:28, color:'from-primary to-primary-container' },
    { name:'Powdery Mildew', pct:21, color:'from-yellow-500 to-yellow-400' },
    { name:'Late Blight', pct:18, color:'from-red-500 to-red-400' },
    { name:'Rice Blast', pct:15, color:'from-orange-500 to-orange-400' },
    { name:'Others', pct:11, color:'from-blue-500 to-blue-400' },
    { name:'Healthy', pct:7, color:'from-primary to-teal-400' },
  ];

  const months = ['Oct','Nov','Dec','Jan','Feb','Mar'];
  const vals   = [14, 22, 18, 28, 20, 25];
  const max    = Math.max(...vals);

  const crops = [
    { name:'Wheat', total:38, healthy:28, icon:'grass' },
    { name:'Rice',  total:31, healthy:20, icon:'spa' },
    { name:'Soybean', total:34, healthy:27, icon:'eco' },
    { name:'Tomato', total:24, healthy:18, icon:'yard' },
  ];

  return (
    <div className="section-panel">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-headline font-bold mb-4">Disease Distribution</h2>
          <div className="space-y-3">
            {diseases.map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="font-semibold">{d.name}</span>
                  <span className="text-on-surface-variant">{d.pct}%</span>
                </div>
                <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${d.color} rounded-full`} style={{width: `${d.pct}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-headline font-bold mb-4">Monthly Scans</h2>
          <div className="flex items-end gap-2 h-40">
            {months.map((m, i) => (
              <div key={m} className="flex flex-col items-center gap-1 flex-1 h-full justify-end">
                <span className="text-[10px] text-primary font-bold">{vals[i]}</span>
                <div className="w-full bg-surface-container-high rounded-t-lg overflow-hidden flex items-end relative" style={{height: `${Math.round((vals[i]/max)*120)}px`}}>
                  <div className="w-full h-full bg-gradient-to-t from-primary to-primary-container opacity-80"></div>
                </div>
                <span className="text-[10px] text-on-surface-variant">{m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 bg-surface-container-low rounded-2xl border border-outline-variant/10 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-headline font-bold mb-4">Crop Health Overview</h2>
          <div className="grid grid-cols-4 gap-4">
            {crops.map((c, i) => {
              const pct = Math.round((c.healthy/c.total)*100);
              return (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-base drop-shadow-sm">{c.icon}</span>
                    </div>
                    <span className="font-headline font-bold text-sm">{c.name}</span>
                  </div>
                  <p className="text-2xl font-black font-headline text-primary mb-0.5">{pct}%</p>
                  <p className="text-[10px] text-on-surface-variant">Healthy ({c.healthy}/{c.total} scans)</p>
                  <div className="mt-2 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style={{width: `${pct}%`}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
