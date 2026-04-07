import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function Login({ isDarkMode, toggleTheme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'Agro123@gmail.com' && password === '123456789') {
      // Mock successful login
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden selection:bg-primary/30 selection:text-primary min-h-screen">
      {/* Absolute top-right toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0 grid-bg pointer-events-none opacity-50"></div>
      
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          {/* Left Side: Branding/Visual */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl font-bold tracking-tight text-on-surface leading-tight">
                Precision <span className="text-primary italic">Intelligence</span> for the Modern Harvest.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed">
                Access your bioluminescent diagnostics dashboard and monitor crop health with AI-powered laboratory precision.
              </p>
            </div>
            
            <div className="relative w-full aspect-square max-w-md rounded-xl overflow-hidden group border border-outline-variant/20">
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
              <img 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
                alt="macro close-up of vibrant green plant leaf structure" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACHOnALEZ1PG4DsGXqOA8qIgh4QY3gKLkvkDDNMvxYPJRHRk6cvmeGkn4lTAzDKsZ59ZpywlIzYhWhZfVWELRyqeO6juseP1U-vqDYSW7DoOI0Z0z0-MGn9B7qfwJutjN07gu8rttoaWzjMBDedqfH3WbSpYsfKERIHEa0clGAZTdUSjwh4L9eJjYMsmPErLEs5-REbBSaoBYUmTsMu-i8uRI4cm4vIyLZaqJhGSy5xWBy-9BWyvVOqmRb90fAbHrKJwjOeGteUME"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-8 bg-primary"></span>
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-primary">System Online</span>
                </div>
                <p className="text-sm font-label text-on-surface-variant">Scanning field sector 7-G for anomalous growth patterns...</p>
              </div>
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                <div className="scan-line top-1/4 animate-[scan_4s_linear_infinite]"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Login Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-surface-bright/60 backdrop-blur-2xl p-10 rounded-xl border border-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.05)] relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="mb-10 text-center lg:text-left">
                  <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-2">Sign In</h2>
                  <p className="text-on-surface-variant text-sm">Enter your credentials to access the laboratory.</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div className="space-y-2 group">
                    <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-primary group-focus-within:text-primary transition-colors">
                      Operator Email
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface-container-high border-none ring-1 ring-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none" 
                        placeholder="name@agro.ai" 
                        type="email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary">
                        alternate_email
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-primary group-focus-within:text-primary transition-colors">
                        Access Code
                      </label>
                      <a className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-colors" href="#">
                        Forgot?
                      </a>
                    </div>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface-container-high border-none ring-1 ring-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none" 
                        placeholder="••••••••" 
                        type="password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 group-focus-within:text-primary">
                        lock
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 py-2">
                    <div className="relative flex items-center">
                      <input 
                        className="w-4 h-4 rounded bg-surface-container-high border-outline-variant/30 text-primary focus:ring-primary focus:ring-offset-background" 
                        id="remember" 
                        type="checkbox"
                      />
                    </div>
                    <label className="font-label text-xs text-on-surface-variant cursor-pointer select-none" htmlFor="remember">
                      Maintain persistent session
                    </label>
                  </div>
                  
                  {error && (
                    <p className="text-xs text-error font-label bg-error/10 p-2 rounded border border-error/50">
                      {error}
                    </p>
                  )}
                  
                  <button 
                    type="submit" 
                    className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-headline font-bold py-4 rounded-lg shadow-[0_4px_20px_rgba(10,188,86,0.3)] hover:shadow-[0_4px_25px_rgba(107,255,143,0.5)] active:scale-[0.98] transition-all duration-300"
                  >
                    <span>INITIALIZE LOGIN</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                      arrow_right_alt
                    </span>
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
