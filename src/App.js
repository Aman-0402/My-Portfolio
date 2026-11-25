import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { profile } from './data';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ScrollBar } from './fx';

const NAV = [['/about', 'About'], ['/experience', 'Experience'], ['/projects', 'Projects'], ['/contact', 'Contact']];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s; } catch (e) {}
    return 'dark';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))];
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell() {
  const [theme, toggle] = useTheme();
  const { pathname } = useLocation();
  return (
    <>
      <ScrollBar />
      <header className="bar">
        <Link className="mark" to="/">AR</Link>
        <nav aria-label="Primary">
          {NAV.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <button className="toggle" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>
      <ScrollTop />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="wrap"><h1>Page not found</h1><p><Link to="/">Back home</Link></p></div>} />
        </Routes>
      </main>
      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer">X</a>
        </span>
      </footer>
    </>
  );
}

export default function App() {
  return <HashRouter><Shell /></HashRouter>;
}
