import React, { useState } from 'react';
import { EXPERTS } from '../../data/mockData';

export default function ExpertConnect({ showToast }) {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    showToast(`Message sent to ${selectedExpert.name}`, 'send');
    setSelectedExpert(null);
    setMessage('');
  };

  return (
    <div className="section-panel relative">
      <div className="grid grid-cols-3 gap-5">
        {EXPERTS.map(e => (
          <div key={e.id} className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-5 hover:border-primary/30 hover:shadow-lg transition-all transform hover:-translate-y-1 group flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-primary font-black text-lg font-headline group-hover:scale-110 transition-transform">
                {e.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-headline font-bold text-sm truncate">{e.name}</p>
                <p className="text-[10px] text-on-surface-variant">{e.title}</p>
                <p className="text-[10px] text-primary/70">{e.org}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-[9px] font-black border ${e.avail ? 'border-primary/30 text-primary bg-primary/10' : 'border-outline-variant/30 text-on-surface-variant bg-surface-container-high'}`}>
                {e.avail ? 'ONLINE' : 'AWAY'}
              </span>
            </div>
            
            <div>
              <p className="text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">Specialization</p>
              <p className="text-[12px] font-semibold">{e.spec}</p>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-sm font-bold">{e.rating}</span>
              <span className="text-[10px] text-on-surface-variant ml-1">({e.reviews} reviews)</span>
            </div>
            
            <div className="flex gap-2 mt-auto">
              <button 
                onClick={() => setSelectedExpert(e)} 
                className="flex-1 text-[11px] font-bold uppercase tracking-widest py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
              >
                Message
              </button>
              <button 
                onClick={() => showToast('Consultation request sent', 'event')} 
                className="flex-1 text-[11px] font-bold uppercase tracking-widest py-2 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high transition-all"
              >
                Book Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setSelectedExpert(null)}>
          <div className="bg-surface-bright border border-primary/20 rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline font-bold">Message {selectedExpert.name}</h3>
              <button onClick={() => setSelectedExpert(null)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <textarea 
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 outline-none resize-none" 
              rows="4" 
              placeholder="Describe your crop issue..."
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button onClick={() => setSelectedExpert(null)} className="text-[11px] font-bold uppercase tracking-widest py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high transition-all">Cancel</button>
              <button onClick={handleSendMessage} disabled={!message} className="text-[11px] font-bold uppercase tracking-widest py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] disabled:opacity-50">Send Message</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
