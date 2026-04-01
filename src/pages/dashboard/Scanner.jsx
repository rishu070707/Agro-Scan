import React, { useState, useRef } from 'react';
import { DISEASES } from '../../data/mockData';

export default function Scanner({ showToast, setActiveTab, historyData, setHistoryData }) {
  const [activeCrop, setActiveCrop] = useState('Soybean');
  const [previewUri, setPreviewUri] = useState(null);
  
  const [scanState, setScanState] = useState('idle'); // idle, loading, result
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [activeTab, setLocalTab] = useState('treatment'); // treatment, info, prevention
  const [sensitivity, setSensitivity] = useState(75);
  
  const recentScans = historyData.slice(0, 3);
  
  const fileInputRef = useRef(null);

  const LOADING_MSGS = [
    'Initializing AI Model...', 'Loading Neural Core...', 'Analyzing Image Pixels...',
    'Detecting Visual Patterns...', 'Mapping Disease Markers...', 'Generating Diagnosis...'
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = ev => {
        setPreviewUri(ev.target.result);
      };
      reader.readAsDataURL(file);
      setScanState('idle');
    }
  };

  const clearScan = () => {
    setPreviewUri(null);
    setScanState('idle');
    setResult(null);
    setLoadingStep(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const runScan = () => {
    let pool = DISEASES.filter(d => d.crop === activeCrop || d.name === 'No Disease Detected');
    if (pool.length === 0) pool = DISEASES;
    const finalResult = pool[Math.floor(Math.random() * pool.length)];
    
    setScanState('loading');
    setResult(finalResult);
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setLoadingStep(step);
      if (step >= 6) {
        clearInterval(interval);
        setTimeout(() => {
          setScanState('result');
          setLocalTab('treatment');
          showToast(`✅ Scan complete — ${finalResult.name}`, 'check_circle');
          addToRecent(finalResult);
        }, 400);
      }
    }, 320);
  };

  const addToRecent = (d) => {
    const today = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
    const newScan = {
      id: Date.now(),
      date: today,
      crop: activeCrop,
      disease: d.name === 'No Disease Detected' ? 'No Disease' : d.name,
      severity: d.name === 'No Disease Detected' ? 'low' : d.severity,
      conf: d.conf,
      status: d.name === 'No Disease Detected' ? 'Healthy' : 'New'
    };
    setHistoryData([newScan, ...historyData]);
  };

  const saveScan = () => {
    if (!result) return;
    showToast('📋 Report saved to Scan History', 'save');
  };

  const severityColor = (s) => 
    s === 'high' ? 'text-red-400' : s === 'medium' ? 'text-yellow-400' : 'text-primary';
  const severityBorder = (s) => 
    s === 'high' ? 'border-red-400/30 bg-red-400/10 text-red-400' : s === 'medium' ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-400' : 'border-primary/30 bg-primary/10 text-primary';

  return (
    <div className="section-panel">
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Total Scans</p>
          <p className="text-2xl font-black font-headline text-primary drop-shadow-[0_2px_4px_rgba(var(--primary),0.2)]">127</p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Diseases Found</p>
          <p className="text-2xl font-black font-headline text-yellow-400 drop-shadow-[0_2px_4px_rgba(250,204,21,0.2)]">34</p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Healthy Crops</p>
          <p className="text-2xl font-black font-headline text-primary drop-shadow-[0_2px_4px_rgba(var(--primary),0.2)]">93</p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Accuracy</p>
          <p className="text-2xl font-black font-headline text-on-surface drop-shadow-sm">94.2%</p>
        </div>
      </div>

      {/* Scanner + Result */}
      <div className="grid grid-cols-2 gap-6">
        {/* Upload Panel */}
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-headline font-bold text-base">Image Input</h2>
            <div className="flex gap-2">
              {['Wheat','Rice','Soybean','Tomato'].map(crop => (
                <button 
                  key={crop}
                  onClick={() => setActiveCrop(crop)} 
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border transition-all ${activeCrop === crop ? 'border-primary text-primary' : 'border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'}`}
                >
                  {crop}
                </button>
              ))}
            </div>
          </div>

          {/* Drop Zone */}
          <div className="relative rounded-xl border-2 border-dashed border-outline-variant/30 bg-surface-container-high/40 overflow-hidden cursor-pointer hover:border-primary/50 transition-all group h-[260px]"
               onClick={() => fileInputRef.current?.click()}>
            <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileChange}/>
            
            {!previewUri ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
                </div>
                <p className="text-sm font-bold text-on-surface">Drop crop image here</p>
                <p className="text-[11px] text-on-surface-variant">JPG, PNG, WebP • or click to browse</p>
              </div>
            ) : (
              <>
                <img src={previewUri} className="w-full h-full object-cover" alt="Preview"/>
                {scanState === 'loading' && <div className="scan-beam"></div>}
              </>
            )}
            
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none"></div>
          </div>

          <div className="flex gap-3">
            <button onClick={runScan} disabled={!previewUri || scanState === 'loading'}
              className={`flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-black uppercase tracking-wide py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all ${(previewUri && scanState !== 'loading') ? 'hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] active:scale-[0.98]' : 'opacity-60 cursor-not-allowed'}`}>
              <span className="material-symbols-outlined text-lg">center_focus_weak</span> Run AI Scan
            </button>
            <button onClick={clearScan} className="px-4 py-3 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all">
              <span className="material-symbols-outlined">restart_alt</span>
            </button>
          </div>

          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Sensitivity Threshold</span>
              <span className="text-[10px] font-bold text-primary">{sensitivity}%</span>
            </div>
            <input type="range" min="50" max="99" value={sensitivity} onChange={e => setSensitivity(e.target.value)} className="w-full accent-primary h-1"/>
          </div>
        </div>

        {/* Result Panel */}
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 p-6 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          {scanState === 'idle' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8">
              <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant text-4xl">query_stats</span>
              </div>
              <div>
                <p className="font-headline font-bold text-base mb-1">Awaiting Scan</p>
                <p className="text-[12px] text-on-surface-variant max-w-[220px]">Upload a crop image and click "Run AI Scan" to get your diagnosis.</p>
              </div>
            </div>
          )}

          {scanState === 'loading' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-5">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl animate-pulse">biotech</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-headline font-bold text-base text-primary mb-1">{LOADING_MSGS[Math.min(loadingStep, 5)]}</p>
                <p className="text-[11px] text-on-surface-variant">Processing with neural core</p>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-300" style={{width: `${(loadingStep/6)*100}%`}}></div>
              </div>
            </div>
          )}

          {scanState === 'result' && result && (
            <div className="flex-col gap-4 flex animate-[slideUp_0.4s_ease-out]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Detected</p>
                  <h3 className="font-headline text-xl font-black leading-tight">{result.name}</h3>
                  {result.crop && <p className="text-[11px] text-on-surface-variant mt-0.5">Crop: {result.crop}</p>}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shrink-0 ${severityBorder(result.severity)}`}>
                  {result.severity}
                </span>
              </div>
              
              <div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-on-surface-variant font-semibold">AI Confidence</span>
                  <span className="font-black text-primary">{result.conf}%</span>
                </div>
                <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-1000" style={{width: `${result.conf}%`}}></div>
                </div>
              </div>
              
              <div className="flex gap-2 border-b border-outline-variant/15 pb-2">
                {['treatment', 'info', 'prevention'].map(tab => (
                  <button key={tab} onClick={() => setLocalTab(tab)} className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg border transition-all ${activeTab === tab ? 'border-primary text-primary bg-primary/10' : 'border-transparent text-on-surface-variant'}`}>
                    {tab === 'info' ? 'Disease Info' : tab}
                  </button>
                ))}
              </div>
              
              <div className="flex-1 space-y-2 overflow-y-auto max-h-[180px]">
                {result[activeTab].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[12px] leading-relaxed">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                    <span className="text-on-surface/85">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 pt-1">
                <button onClick={saveScan} className="flex-1 text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">save</span> Save Report
                </button>
                <button onClick={clearScan} className="flex-1 text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high transition-all flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">refresh</span> New Scan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-headline font-bold text-sm uppercase tracking-wide text-on-surface-variant">Recent Scans</h2>
          <button onClick={() => setActiveTab('history')} className="text-[11px] text-primary font-bold uppercase tracking-widest hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {recentScans.map((s, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 p-5 hover:border-primary/30 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">{s.date}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase border shrink-0 ${severityBorder(s.severity)}`}>{s.severity}</span>
              </div>
              <p className="font-headline font-bold text-[15px] mb-1 group-hover:text-primary transition-colors">{s.disease}</p>
              <p className="text-[11px] text-on-surface-variant mb-3">{s.crop} • {s.conf}% AI Confidence</p>
              <div className="mt-auto h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_10px_var(--primary)]" style={{width: `${s.conf}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
