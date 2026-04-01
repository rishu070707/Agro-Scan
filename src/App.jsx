import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Helper component for the landing page
function LandingPage({ isDarkMode, toggleTheme }) {
  return (
    <div className="min-h-screen">
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check initial state from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
