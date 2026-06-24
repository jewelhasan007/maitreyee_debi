'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import Image from 'next/image';

export default function Navigation_en() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
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

  const isActive = (href: string) =>
    activeSection === href.replace('#', '');

  const social = [
    { icon: FaFacebookF, color: '#1877F2', link: 'https://facebook.com' },
    { icon: FaInstagram, color: '#E4405F', link: 'https://instagram.com' },
    { icon: FaYoutube, color: '#FF0000', link: 'https://youtube.com' },
    { icon: FaXTwitter, color: '#000000', link: 'https://x.com' },
    { icon: FaLinkedinIn, color: '#0A66C2', link: 'https://linkedin.com' },
  ];

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

        background: isScrolled
          ? 'rgba(26, 43, 28, 0.35)'
          : '#1A2B1C',

        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',

        borderBottom: isScrolled
          ? '1px solid rgba(212, 168, 67, 0.15)'
          : '1px solid rgba(212, 168, 67, 0.08)',

        transition: 'all 0.35s ease',
      }}
    >
{/* LOGO */}
<a
  href="#hero"
  style={{
    fontFamily: "var(--font-ubuntu), serif",
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#F0EBD6',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }}
>
  <Image
    src="/images/logo/logo2.jpg"           // Put your logo in the public folder
    alt="Maitreyee Devi"
    width={48}                // Adjust size
    height={48}
    style={{
      borderRadius: '6px',
      objectFit: 'contain',
    }}
    priority // Recommended for logo in header
  />
  Maitreyee <span style={{ color: '#D4A843' }}>Devi</span>
</a>

      {/* DESKTOP */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '0.85rem',
                     fontFamily: "var(--font-ubuntu), serif",
                    color: isActive(item.href) ? '#D4A843' : '#F0EBD6',
                    borderBottom: isActive(item.href)
                      ? '2px solid #D4A843'
                      : '2px solid transparent',
                    paddingBottom: 4,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* SOCIAL */}
          <div style={{ display: 'flex', gap: 10 }}>
            {social.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = `0 0 15px ${s.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: s.color,
                    fontSize: 15,
                  }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: 6,
              padding: '8px 14px',
              borderRadius: 12,
              border: '1px solid rgba(212,168,67,0.6)',
              color: '#F0EBD6',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          >
            Get In Touch
          </motion.a> */}
        </div>
      )}

      {/* MOBILE BUTTON */}
      {isMobile && (
        <div
          onClick={() => setNavOpen(!navOpen)}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
          <span style={{ width: 26, height: 2, background: '#F0EBD6' }} />
        </div>
      )}

      {/* MOBILE MENU (RESTORED) */}
      {isMobile && navOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68,
            right: 0,
            width: '80%',
            height: '100vh',
            background: 'rgba(26,43,28,0.95)',
            backdropFilter: 'blur(20px)',
            padding: 30,
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
                color: isActive(item.href) ? '#D4A843' : '#F0EBD6',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}

          {/* MOBILE SOCIAL */}
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {social.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: s.color,
                  }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}