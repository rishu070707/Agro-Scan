import React, { useState } from 'react';
import { NOTIF_OPTS } from '../../data/mockData';

export default function Settings({ showToast, profile, setProfile }) {
  const [toggles, setToggles] = useState(NOTIF_OPTS.reduce((acc, curr) => {
    acc[curr.id] = curr.val;
    return acc;
  }, {}));

  const [sensVal, setSensVal] = useState(75);
  const [confVal, setConfVal] = useState(80);
  
  const [formData, setFormData] = useState({ ...profile });

  const handleToggle = (id) => {
    setToggles(prev => ({...prev, [id]: !prev[id]}));
    showToast('Preference updated', 'tune');
  };
  
  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSaveProfile = () => {
    setProfile(formData);
    showToast('Profile saved successfully', 'save');
  };

  const InputField = ({ label, field, type = "text", disabled = false, isSelect = false }) => (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block">{label}</label>
      {isSelect ? (
        <select 
          value={formData[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          className="flex w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-[13px] text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-inner"
        >
          <option>Farmer / Producer</option>
          <option>Agricultural Researcher</option>
          <option>Technology Partner</option>
          <option>Enterprise / Govt</option>
        </select>
      ) : (
        <input 
          value={formData[field]} 
          onChange={(e) => handleChange(field, e.target.value)}
          type={type} 
          disabled={disabled}
          className="flex w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 text-[13px] text-on-surface focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-inner disabled:opacity-50"
        />
      )}
    </div>
  );

  return (
    <div className="section-panel max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Profile Settings */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-8 shadow-lg section-panel">
          <h2 className="font-headline font-bold text-lg mb-8">Profile Settings</h2>
          
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-outline-variant/20">
            <div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary font-black text-2xl font-headline shadow-inner">
              {profile.avatar}
            </div>
            <div>
              <p className="font-bold text-lg leading-tight mb-1">{profile.name}</p>
              <p className="text-[11px] text-on-surface-variant mb-3">{profile.role}</p>
              <button 
                onClick={() => {
                  const newInitial = prompt('Enter a new single letter for avatar:', profile.avatar);
                  if(newInitial) {
                    setFormData({...formData, avatar: newInitial.charAt(0).toUpperCase()});
                    showToast('Avatar updated, click Save Changes', 'check_circle');
                  }
                }} 
                className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/50 px-4 py-1.5 rounded-lg hover:bg-primary/10 active:scale-95 transition-all"
              >
                CHANGE PHOTO
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <InputField label="Full Name" field="name" />
            <InputField label="Work Email" field="email" type="email" />
            <InputField label="User Type" field="role" isSelect={true} />
            <InputField label="Region" field="region" />
            
            <div className="col-span-2 pt-2">
              <button 
                onClick={handleSaveProfile}
                className="bg-primary text-black font-headline font-bold uppercase tracking-widest px-7 py-3 rounded-lg text-sm hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] active:scale-[0.98] transition-all"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Notifications */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-6 shadow-lg">
            <h3 className="font-headline font-bold text-[15px] mb-6">Notifications</h3>
            <div className="space-y-5">
              {NOTIF_OPTS.map(n => (
                <label key={n.id} className="flex items-center justify-between cursor-pointer group">
                  <span className="text-[12px] text-on-surface-variant group-hover:text-on-surface transition-colors">{n.label}</span>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" checked={toggles[n.id]} onChange={() => handleToggle(n.id)}/>
                    <div className="w-10 h-5 bg-surface-container-high peer-checked:bg-primary rounded-full transition-all border border-outline-variant/30 peer-checked:border-primary shadow-inner"></div>
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all peer-checked:translate-x-5 peer-checked:shadow-[0_0_10px_white]"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* AI Preferences */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-6 shadow-lg">
            <h3 className="font-headline font-bold text-[15px] mb-6">AI Preferences</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[11px] mb-3">
                  <span className="text-on-surface-variant font-medium">Default Sensitivity</span>
                  <span className="font-bold text-primary">{sensVal}%</span>
                </div>
                <input 
                  type="range" min="50" max="99" 
                  value={sensVal} 
                  onChange={e => setSensVal(e.target.value)} 
                  className="w-full accent-primary h-1.5 bg-surface-container-high rounded-full overflow-hidden appearance-none cursor-pointer relative"
                  style={{
                    background: `linear-gradient(to right, var(--primary) ${((sensVal - 50) / 49) * 100}%, var(--surface-container-high) ${((sensVal - 50) / 49) * 100}%)`
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between text-[11px] mb-3">
                  <span className="text-on-surface-variant font-medium">Confidence Threshold</span>
                  <span className="font-bold text-primary">{confVal}%</span>
                </div>
                <input 
                  type="range" min="60" max="99" 
                  value={confVal} 
                  onChange={e => setConfVal(e.target.value)} 
                  className="w-full accent-primary h-1.5 bg-surface-container-high rounded-full overflow-hidden appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--primary) ${((confVal - 60) / 39) * 100}%, var(--surface-container-high) ${((confVal - 60) / 39) * 100}%)`
                  }}
                />
              </div>
              
              <button 
                onClick={() => showToast('AI preferences saved', 'tune')} 
                className="w-full text-[10px] font-bold text-primary uppercase tracking-widest py-3 rounded-lg border border-primary/40 hover:bg-primary/10 active:scale-[0.98] transition-all"
              >
                SAVE PREFERENCES
              </button>
            </div>
          </div>

          {/* Account */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-6 shadow-lg">
            <h3 className="font-headline font-bold text-[15px] mb-4">Account</h3>
            <div className="space-y-2">
              <button onClick={() => showToast('Password reset email sent', 'lock')} className="w-full text-left text-[12px] text-on-surface-variant hover:text-on-surface px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px]">lock_reset</span> Change Password
              </button>
              <button onClick={() => showToast('Data export started', 'download')} className="w-full text-left text-[12px] text-on-surface-variant hover:text-on-surface px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px]">download</span> Export My Data
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
