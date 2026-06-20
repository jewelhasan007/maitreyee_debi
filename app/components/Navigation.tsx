'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav id="mainNav" className={isScrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        মৈত্রেয়ী <span>দেবী</span>
      </a>

      <button
        className="nav-toggle"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="navLinks" className={`nav-links ${navOpen ? 'open' : ''}`}>
        <li>
          <a href="#about" onClick={closeNav}>
            পরিচয় · About
          </a>
        </li>
        <li>
          <a href="#books" onClick={closeNav}>
            বই · Books
          </a>
        </li>
        <li>
          <a href="#music" onClick={closeNav}>
            সংগীত · Music
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={closeNav}>
            চিত্রকর্ম · Gallery
          </a>
        </li>
        <li>
          <a href="#social" onClick={closeNav}>
            সোশ্যাল · Social
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeNav}>
            যোগাযোগ · Contact
          </a>
        </li>
        <li>
          <a href="#timeline" onClick={closeNav}>
            জীবনী · Timeline
          </a>
        </li>
      </ul>
    </nav>
  );
}
