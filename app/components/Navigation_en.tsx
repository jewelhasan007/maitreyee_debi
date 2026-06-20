'use client';

import { useEffect, useState } from 'react';

export default function Navigation_en() {
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
        Maitreyee <span>Devi</span>
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
            About
          </a>
        </li>
        <li>
          <a href="#books" onClick={closeNav}>
            Books
          </a>
        </li>
        <li>
          <a href="#music" onClick={closeNav}>
            Music
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={closeNav}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#social" onClick={closeNav}>
            Social
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
        </li>
        <li>
          <a href="#timeline" onClick={closeNav}>
            Timeline
          </a>
        </li>
      </ul>
    </nav>
  );
}