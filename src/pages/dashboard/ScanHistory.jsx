import React, { useState } from 'react';

export default function ScanHistory({ showToast, historyData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const severityColor = (s) => 
    s === 'high' ? 'text-red-500' : s === 'medium' ? 'text-yellow-500' : 'text-primary';
    
  const statusClasses = (status) => {
    switch (status) {
      case 'Healthy': return 'border-primary/50 text-primary';
      case 'Treated': return 'border-blue-500/50 text-blue-400';
      case 'Monitoring': return 'border-yellow-500/50 text-yellow-500';
      default: return 'border-outline-variant/50 text-on-surface-variant';
    }
  };

  const filteredHistory = historyData.filter(item => 
    item.disease.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.crop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-panel max-w-6xl mx-auto">
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-lg">
        {/* Header */}
        <div className="px-6 py-5 border-b border-outline-variant/20 flex items-center justify-between">
          <h2 className="font-headline font-bold text-lg">All Scan History</h2>
          <div className="flex gap-3">
            <div className="relative">
              <input 
                placeholder="Search disease..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-surface-container-low border border-outline-variant/30 rounded-lg pl-3 pr-4 py-2 text-[13px] text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary focus:border-primary outline-none w-64 transition-all"
              />
            </div>
            <button className="px-4 py-2 border border-primary/40 rounded-lg text-primary text-[12px] font-bold flex items-center gap-1.5 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
          </div>
        </div>
        
        {/* List */}
        <div className="divide-y divide-outline-variant/20">
          {filteredHistory.map(s => (
            <div key={s.id} className="px-6 py-4 flex items-center justify-between hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
              
              {/* Left Side: Icon & Titles */}
              <div className="flex items-center gap-5 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">spa</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-headline font-bold text-[15px]">{s.disease}</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{s.crop}</p>
                </div>
              </div>

              {/* Right Side: Meta Data */}
              <div className="flex items-center gap-8 justify-end shrink-0">
                {/* Severity */}
                <span className={`w-16 text-right text-[10px] font-black uppercase tracking-widest ${severityColor(s.severity)}`}>
                  {s.severity}
                </span>

                {/* Confidence Bar */}
                <div className="w-24">
                  <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_var(--primary)]" style={{width: `${s.conf}%`}}></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant text-center">{s.conf}% conf.</p>
                </div>

                {/* Date */}
                <span className="text-[11px] text-on-surface-variant w-20 text-right">
                  {s.date}
                </span>

                {/* Status Pill */}
                <div className="w-24 flex justify-end">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${statusClasses(s.status)} bg-surface-container-low`}>
                    {s.status}
                  </span>
                </div>
              </div>

            </div>
          ))}
          {filteredHistory.length === 0 && (
            <div className="px-6 py-12 text-center text-on-surface-variant text-sm">
              No scan history matches your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
