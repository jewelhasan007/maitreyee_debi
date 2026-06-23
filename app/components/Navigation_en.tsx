'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

export default function Navigation_en() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = [
        'hero',
        'about',
        'books',
        'music',
        'gallery',
        'timeline',
        'contact',
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

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#books', label: 'Books' },
    { href: '#music', label: 'Music' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: FaGithub },
    { href: 'https://instagram.com', icon: FaInstagram },
    { href: 'https://linkedin.com', icon: FaLinkedin },
    { href: 'https://youtube.com', icon: FaYoutube },
  ];

  const isActive = (href: string) =>
    activeSection === href.replace('#', '');

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

      {/* DESKTOP */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* NAV */}
          <ul
            style={{
              display: 'flex',
              gap: '1.6rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: "'Hind Siliguri', sans-serif",
                      textDecoration: 'none',
                      color: active ? '#D4A843' : '#F0EBD6',
                      paddingBottom: '4px',
                      borderBottom: active
                        ? '2px solid #D4A843'
                        : '2px solid transparent',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* SOCIAL ICONS */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(240,235,214,0.4)',
                    color: '#F0EBD6',
                    transition: '0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#D4A843';
                    e.currentTarget.style.color = '#1A2B1C';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#F0EBD6';
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '8px 14px',
              marginLeft: '6px',
              fontSize: '0.85rem',
              border: '2px solid #4A7C59',
              borderRadius: '12px',
              color: '#F0EBD6',
            }}
          >
            Get In Touch
          </motion.a>
        </div>
      )}

      {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE MENU */}
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
          {/* NAV ITEMS */}
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

          {/* MOBILE SOCIAL ICONS */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(240,235,214,0.4)',
                    color: '#F0EBD6',
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}