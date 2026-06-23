'use client';

import { useEffect, useState } from 'react';

export default function Navigation_en() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size (IMPORTANT FIX)
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // scroll tracking
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

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#books', label: 'Books' },
    { href: '#music', label: 'Music' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#social', label: 'Social' },
    { href: '#contact', label: 'Contact' },
    { href: '#timeline', label: 'Timeline' },
  ];

  const isActive = (href) => activeSection === href.replace('#', '');

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5vw',
        zIndex: 1000,
        background: isScrolled ? 'rgba(26,43,28,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: '0.3s',
      }}
    >

      {/* LOGO */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.4rem',
          fontWeight: 600,
          color: '#F0EBD6',
          textDecoration: 'none',
        }}
      >
        Maitreyee <span style={{ color: '#D4A843' }}>Devi</span>
      </a>

      {/* DESKTOP MENU (ONLY DESKTOP) */}
      {!isMobile && (
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  fontSize: '0.85rem',
                  fontFamily: "'Hind Siliguri', sans-serif",
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#D4A843' : '#F0EBD6',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* MOBILE BUTTON (ONLY MOBILE) */}
      {isMobile && (
        <div
          onClick={() => setNavOpen(!navOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            cursor: 'pointer',
          }}
        >
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
        </div>
      )}

      {/* MOBILE MENU (ONLY MOBILE + OPEN) */}
      {isMobile && navOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68,
            right: 0,
            width: '80%',
            height: '100vh',
            background: '#1A2B1C',
            padding: 30,
            zIndex: 9999,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setNavOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: isActive(item.href) ? '#D4A843' : '#F0EBD6',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}