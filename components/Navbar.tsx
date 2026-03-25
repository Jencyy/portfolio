'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 64,
          display: 'flex', alignItems: 'center',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link href="/" data-hover="true"
            style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.05em', color: 'var(--text)', textDecoration: 'none' }}>
            Jency<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>

          <nav style={{ display: 'flex', gap: 2 }} className="desk-nav">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} data-hover="true"
                style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', padding: '6px 14px', borderRadius: 8, transition: 'color 0.2s, background 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-light)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="#contact" data-hover="true" className="desk-cta"
            style={{ fontSize: 13, fontWeight: 700, color: '#fff', textDecoration: 'none', padding: '9px 22px', borderRadius: 8, background: 'var(--accent)', boxShadow: '0 2px 12px rgba(37,99,235,0.3)', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.3)'; }}
          >
            Hire Me
          </Link>

          <button className="mob-ham" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '7px', display: 'none', alignItems: 'center', justifyContent: 'center', color: 'var(--text)' }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999, background: '#fff', borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow)', padding: '16px clamp(20px,5vw,72px) 24px' }}
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: 16, fontWeight: 600, color: 'var(--text-muted)', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
                {item.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMenuOpen(false)}
              style={{ display: 'inline-block', marginTop: 16, fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none', padding: '10px 24px', borderRadius: 8, background: 'var(--accent)' }}>
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 800px) {
          .desk-nav { display: none !important; }
          .desk-cta { display: none !important; }
          .mob-ham { display: flex !important; }
        }
      `}</style>
    </>
  );
}
