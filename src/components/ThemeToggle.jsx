import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
