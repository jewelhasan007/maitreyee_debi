'use client';

import { useEffect, useState } from 'react';

export default function Navigation_en() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = [
        'hero',
        'about',
        'books',
        'music',
        'gallery',
        'social',
        'contact',
        'timeline',
      ];

      let current = 'hero';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = sectionId;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔒 lock body scroll when drawer open
  useEffect(() => {
    if (navOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#books', label: 'Books' },
    { href: '#music', label: 'Music' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#social', label: 'Social' },
    { href: '#contact', label: 'Contact' },
    { href: '#timeline', label: 'Timeline' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between w-full">

        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-2xl font-serif tracking-tight hover:scale-105 transition"
        >
          <span className="text-gray-900 dark:text-white">Maitreyee</span>
          <span className="text-amber-600 dark:text-amber-500 font-light">
            Devi
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative py-2 transition hover:text-amber-600 dark:hover:text-amber-500 ${
                  activeSection === item.href.slice(1)
                    ? 'text-amber-600 dark:text-amber-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[10000]"
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
          <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-[9998] transition-opacity duration-300 ${
          navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeNav}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 🔥 SAAS STYLE DRAWER (FIXED TRANSPARENCY ISSUE) */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-[9999] transform transition-transform duration-300 ease-in-out ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ isolation: 'isolate' }}
      >
        {/* HARD BACKGROUND LAYER (prevents mobile transparency bug) */}
        <div className="absolute inset-0 bg-white dark:bg-gray-950 opacity-100" />

        {/* CONTENT */}
        <div className="relative h-full flex flex-col">

          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeNav}
              className="text-gray-700 dark:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-6 px-8 pt-10 text-lg font-light">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeNav}
                className={`transition hover:text-amber-600 dark:hover:text-amber-500 ${
                  activeSection === item.href.slice(1)
                    ? 'text-amber-600 dark:text-amber-500 font-medium'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}