import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'dark';
    setTheme(t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  },[]);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg">Ayush Portfolio</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/skills" className="nav-link">Skills</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <button onClick={toggle} className="ml-3 inline-flex items-center p-2 rounded transition-smooth bg-white/6">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
