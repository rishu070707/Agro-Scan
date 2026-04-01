import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function NavBar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 py-4">
        <a href="/" className="text-2xl font-bold tracking-tighter text-primary uppercase font-headline">
          AGRO
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface/70 hover:text-primary transition-colors font-label text-sm uppercase tracking-wider" href="#features">Features</a>
          <a className="text-on-surface/70 hover:text-primary transition-colors font-label text-sm uppercase tracking-wider" href="#technology">Technology</a>
          <a className="text-on-surface/70 hover:text-primary transition-colors font-label text-sm uppercase tracking-wider" href="#cta">Network</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <a href="/login" className="text-on-surface/70 hover:text-primary transition-colors font-label text-sm uppercase tracking-wider">Login</a>
          <a href="/signup" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-DEFAULT font-bold text-sm uppercase tracking-tight hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all active:scale-95">
             Get Started
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent h-[1px] bottom-0 absolute w-full"></div>
    </nav>
  );
}
