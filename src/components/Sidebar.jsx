import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ activeTab, setActiveTab, profile }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const navItem = (id, icon, label, isMain = true) => {
    const active = activeTab === id;
    const baseClasses = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ";
    const activeClasses = active
      ? "bg-primary/5 text-primary border-l-2 border-primary"
      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface border-l-2 border-transparent";
      
    return (
      <button 
        key={id} 
        onClick={() => setActiveTab(id)} 
        className={baseClasses + activeClasses + " w-full text-left"}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span> {label}
      </button>
    );
  };

  return (
    <aside className="w-64 min-h-screen bg-surface border-r border-outline-variant/10 flex flex-col z-20 shrink-0">
      <div className="px-6 py-5 border-b border-outline-variant/10">
        <a href="/" className="text-xl font-black text-primary uppercase tracking-tighter font-headline">AGRO</a>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-0.5">MVP Dashboard</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] px-3 mb-2">Main</p>
        {navItem('scanner', 'center_focus_weak', 'Scanner')}
        {navItem('history', 'history', 'Scan History')}
        {navItem('reports', 'analytics', 'Reports')}
        {navItem('crops', 'grass', 'My Crops')}
        
        <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] px-3 mb-2 mt-5">Tools</p>
        {navItem('library', 'biotech', 'Disease Library')}
        {navItem('experts', 'hub', 'Expert Connect')}
        {navItem('settings', 'settings', 'Settings')}
      </nav>

      <div className="px-5 py-4 border-t border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-transparent border border-outline-variant/30 flex items-center justify-center text-primary font-black text-[15px] font-headline">
            {profile.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-bold truncate text-on-surface leading-tight tracking-wide">{profile.name}</p>
            <p className="text-[11px] text-on-surface-variant truncate mt-0.5">{profile.role}</p>
          </div>
          <button onClick={handleLogout} title="Logout" className="flex items-center shrink-0">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
