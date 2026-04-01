import React, { useState } from 'react';
import { LIBRARY } from '../../data/mockData';

export default function DiseaseLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredLibrary = LIBRARY.filter(d => 
    (filterType === 'all' || d.crop === filterType) && 
    (d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     d.symptoms.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const severityColor = (s) => 
    s === 'high' ? 'text-red-400 border-red-400/30' : 
    s === 'medium' ? 'text-yellow-400 border-yellow-400/30' : 'text-primary border-primary/30';

  return (
    <div className="section-panel">
      <div className="mb-4 flex gap-3 items-center">
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search diseases, crops, symptoms..." 
          className="flex-1 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 outline-none"
        />
        <select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
        >
          <option value="all">All Crops</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Soybean">Soybean</option>
          <option value="Tomato">Tomato</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredLibrary.map(d => (
          <div key={d.id} className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-5 hover:border-primary/30 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl drop-shadow-sm group-hover:scale-110 transition-transform">{d.icon}</span>
                <div>
                  <h3 className="font-headline font-bold text-sm leading-tight">{d.name}</h3>
                  <p className="text-[10px] text-on-surface-variant">{d.crop} • {d.type}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border uppercase ${severityColor(d.severity)}`}>
                {d.severity}
              </span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div><span className="text-primary font-bold">Symptoms: </span><span className="text-on-surface-variant">{d.symptoms}</span></div>
              <div><span className="text-primary font-bold">Cause: </span><span className="text-on-surface-variant">{d.cause}</span></div>
              <div><span className="text-primary font-bold">Treatment: </span><span className="text-on-surface-variant">{d.treatment}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
