'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send } from 'lucide-react';
import Link from 'next/link';
import { Marquee } from './Marquee';
import { fadeUp } from '@/lib/variants';

const socials = [
  { icon: Github, label: 'GitHub', sub: 'github.com/Jencyy', href: 'https://github.com/Jencyy' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'in/jency-sodvadiya', href: 'https://www.linkedin.com/in/jency-sodvadiya/' },
  { icon: Mail, label: 'Email', sub: 'jencysodvadiya@gmail.com', href: 'mailto:jencysodvadiya@gmail.com' },
];
const ticker = ['Open to Work', 'MERN Stack Dev', 'Available Now', 'Based in India', 'Let\'s Connect', 'Hire Me'];

export function Contact() {
  return (
    <section id="contact" className="section-pad"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)', position: 'relative', overflow: 'hidden', scrollMarginTop: 80 }}>

      {/* Top-right accent blob */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 340, height: 340, background: 'radial-gradient(circle at 80% 20%, rgba(37,99,235,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}
        >
          <motion.p variants={fadeUp} className="eyebrow" style={{ justifyContent: 'center' }}>06 — Contact</motion.p>
          <motion.p className="eyebrow"></motion.p>

          <motion.h2 variants={fadeUp}
            style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.1, marginBottom: 18 }}>
            Let's Build Something{' '}
            <span style={{ color: 'var(--accent)' }}>Exceptional.</span>
          </motion.h2>

          <motion.p variants={fadeUp}
            style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 36, fontWeight: 400 }}>
            I'm actively seeking new opportunities and open to collaborations.
            Whether you have a project in mind, a role to fill, or just want to connect — reach out. I respond fast.
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginBottom: 40 }}>
            <Link href="mailto:jencysodvadiya@gmail.com" data-hover="true"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 700, color: '#fff', textDecoration: 'none', padding: '14px 36px', borderRadius: 10, background: 'var(--accent)', boxShadow: '0 6px 24px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Send size={17} /> Say Hello
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="social-grid">
            {socials.map(({ icon: Icon, label, sub, href }) => (
              <Link key={label} href={href} target="_blank" data-hover="true"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: '#fff', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-ring)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={19} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{label}</p>
                  <p style={{ fontSize: 11, color: 'var(--text-subtle)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</p>
                </div>
                <ArrowUpRight size={14} style={{ color: 'var(--text-subtle)', flexShrink: 0 }} />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginTop: 80, padding: '14px 0', background: '#fff' }}>
        <Marquee items={ticker} direction="right" speed={22} />
      </div>

      <style>{`
        .social-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        @media (max-width: 600px) { .social-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
