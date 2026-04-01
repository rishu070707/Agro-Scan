import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Scanner from './dashboard/Scanner';
import ScanHistory from './dashboard/ScanHistory';
import Reports from './dashboard/Reports';
import MyCrops from './dashboard/MyCrops';
import DiseaseLibrary from './dashboard/DiseaseLibrary';
import ExpertConnect from './dashboard/ExpertConnect';
import Settings from './dashboard/Settings';
import ThemeToggle from '../components/ThemeToggle';
import { HISTORY_DATA } from '../data/mockData';

export default function Dashboard({ isDarkMode, toggleTheme }) {
  const [activeTab, setActiveTab] = useState('scanner');
  const [toast, setToast] = useState({ msg: '', icon: '', visible: false });
  const [historyData, setHistoryData] = useState(HISTORY_DATA);
  const [profile, setProfile] = useState({
    name: 'AgroScan123',
    email: 'AgroScan123@gmail.com',
    role: 'Farmer / Producer',
    region: 'Punjab, India',
    avatar: 'A'
  });

  const showToast = (msg, icon = 'info') => {
    setToast({ msg, icon, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3200);
  };

  const titles = { 
    scanner: 'Crop Scanner', 
    history: 'Scan History', 
    reports: 'Analytics & Reports', 
    crops: 'My Crops', 
    library: 'Disease Library', 
    experts: 'Expert Connect', 
    settings: 'Settings' 
  };
  
  const subs = { 
    scanner: 'Upload a crop image to run AI disease detection', 
    history: 'Full log of all your past scans', 
    reports: 'Visual overview of crop health & disease trends', 
    crops: 'Manage and track your registered crop fields', 
    library: 'Browse 50+ known crop diseases with treatments and symptoms', 
    experts: 'Connect with certified agricultural specialists', 
    settings: 'Manage your profile, preferences and account' 
  };

  return (
    <div className="bg-background text-on-surface font-body overflow-hidden h-screen flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} profile={profile} />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="bg-surface-container-low/80 backdrop-blur border-b border-outline-variant/20 px-8 py-3 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-lg font-black font-headline tracking-tight">{titles[activeTab]}</h1>
            <p className="text-[11px] text-on-surface-variant">{subs[activeTab]}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-primary/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]"></span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">AI Online</span>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <button className="text-on-surface-variant hover:text-on-surface transition-colors w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 relative">
          <div className={activeTab === 'scanner' ? 'block h-full' : 'hidden'}>
            <Scanner showToast={showToast} setActiveTab={setActiveTab} historyData={historyData} setHistoryData={setHistoryData} />
          </div>
          <div className={activeTab === 'history' ? 'block h-full' : 'hidden'}>
            <ScanHistory showToast={showToast} historyData={historyData} />
          </div>
          <div className={activeTab === 'reports' ? 'block h-full' : 'hidden'}>
            <Reports showToast={showToast} />
          </div>
          <div className={activeTab === 'crops' ? 'block h-full' : 'hidden'}>
            <MyCrops showToast={showToast} setActiveTab={setActiveTab} />
          </div>
          <div className={activeTab === 'library' ? 'block h-full' : 'hidden'}>
            <DiseaseLibrary showToast={showToast} />
          </div>
          <div className={activeTab === 'experts' ? 'block h-full' : 'hidden'}>
            <ExpertConnect showToast={showToast} />
          </div>
          <div className={activeTab === 'settings' ? 'block h-full' : 'hidden'}>
            <Settings showToast={showToast} profile={profile} setProfile={setProfile} />
          </div>
        </main>

        <div className={`absolute bottom-6 right-6 z-50 bg-surface-bright border border-primary/40 rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold shadow-2xl transition-all duration-300 ${toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
          <span className="material-symbols-outlined text-primary">{toast.icon || 'check_circle'}</span>
          <span>{toast.msg}</span>
        </div>
      </div>
    </div>
  );
}
