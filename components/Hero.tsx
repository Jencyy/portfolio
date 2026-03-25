'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';
import { Marquee } from './Marquee';

const HERO_TAGS = ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Git', 'Machine Learning', 'AI'];
const SHOW_PHOTO = false; // Set to true after adding /public/profile.jpg

const word: import('framer-motion').Variants = {
  hidden: { y: '105%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};
const container: import('framer-motion').Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const highlights = [
  '7 months professional MERN experience',
  'Fast learner & highly adaptable',
  'Business mindset & strong debugging',
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80, background: 'var(--bg)' }}
    >
      {/* Subtle dot pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #c8d3e8 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35, pointerEvents: 'none' }} />
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent2))', opacity: 0.8 }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="hero-grid">

            {/* ── Left: text ── */}
            <div className="hero-text">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 14px', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.22)', borderRadius: 100, marginBottom: 28 }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', boxShadow: '0 0 0 2px rgba(5,150,105,0.2)' }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--green)', letterSpacing: '0.04em' }}>Available for opportunities</span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={container} initial="hidden" animate="show" style={{ marginBottom: 24 }}>
                {['Building Scalable', 'Web Apps &', 'AI Solutions.'].map((line, i) => (
                  <div key={i} style={{ overflow: 'hidden', lineHeight: 1.08 }}>
                    <motion.h1 variants={word}
                      style={{
                        fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        display: 'block',
                        color: i === 1 ? 'var(--accent)' : 'var(--text)',
                      }}>
                      {line}
                    </motion.h1>
                  </div>
                ))}
              </motion.div>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                style={{ fontSize: 'clamp(14px,1.4vw,16px)', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 500, marginBottom: 28 }}
              >
                Hi, I'm <strong style={{ color: 'var(--text)', fontWeight: 700 }}>Jency Sodvadiya</strong> — a 
                <strong> Full Stack Developer (MERN) & Aspiring AI/ML Engineer</strong>. 
                Building scalable web applications and exploring AI-driven solutions to solve real-world problems.
              </motion.p>

              {/* Highlights */}
              <motion.ul
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95, ease: 'easeOut' }}
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 36 }}
              >
                {highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-muted)', fontWeight: 500 }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--green)', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </motion.ul>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}
              >
                <Link href="#projects" data-hover="true"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 46, padding: '0 24px', borderRadius: 8, background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  View Projects <ArrowRight size={15} />
                </Link>
                <Link href="/resume.pdf" target="_blank" data-hover="true"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 46, padding: '0 24px', borderRadius: 8, background: 'transparent', border: '1.5px solid var(--border-strong)', color: 'var(--text)', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Download size={15} /> Download CV
                </Link>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                style={{ display: 'flex', gap: 10 }}
              >
                {[
                  { href: 'https://github.com/Jencyy', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/jency-sodvadiya/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:jencysodvadiya@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <Link key={label} href={href} target="_blank" data-hover="true" title={label}
                    style={{ width: 40, height: 40, borderRadius: 9, border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s', boxShadow: 'var(--shadow-sm)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent-ring)'; e.currentTarget.style.background = 'var(--accent-light)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
                  >
                    <Icon size={17} />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* ── Right: photo or code card ── */}
            {SHOW_PHOTO ? (
              <motion.div className="hero-photo"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <div style={{ position: 'relative', width: '100%', maxWidth: 360, aspectRatio: '1', margin: '0 auto' }}>
                  <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', opacity: 0.6, zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '5px solid #fff', boxShadow: 'var(--shadow-lg)' }}>
                    <Image src="/profile.jpg" alt="Jency Sodvadiya" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: 12, right: -12, background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 16px', zIndex: 2, boxShadow: 'var(--shadow)' }}>
                    <p style={{ fontSize: 11, color: 'var(--text-subtle)', marginBottom: 2, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Experience</p>
                    <p style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)' }}>7+ months</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div className="hero-photo"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
              >
                {/* Code card */}
                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, padding: '24px 28px', fontFamily: "'Courier New', monospace", fontSize: 13.5, lineHeight: 2, boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                    {['#ef4444', '#f59e0b', '#22c55e'].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
                    <span style={{ marginLeft: 12, fontSize: 11, color: '#475569', letterSpacing: '0.05em' }}>developer.ts</span>
                  </div>
                  <p><span style={{ color: '#818cf8' }}>const</span> <span style={{ color: '#7dd3fc' }}>developer</span> <span style={{ color: '#94a3b8' }}>=</span> {'{'}</p>
                  <p style={{ marginLeft: 18 }}><span style={{ color: '#94a3b8' }}>name:</span> <span style={{ color: '#86efac' }}>'Jency Sodvadiya'</span>,</p>
                  <p style={{ marginLeft: 18 }}><span style={{ color: '#94a3b8' }}>role:</span> <span style={{ color: '#86efac' }}>'Full Stack + AI/ML'</span>,</p>
                  <p style={{ marginLeft: 18 }}><span style={{ color: '#94a3b8' }}>experience:</span> <span style={{ color: '#fdba74' }}>7</span><span style={{ color: '#94a3b8' }}>, <span style={{ color: '#475569' }}>// months</span></span></p>
                  <p style={{ marginLeft: 18 }}><span style={{ color: '#94a3b8' }}>location:</span> <span style={{ color: '#86efac' }}>'Surat, India'</span>,</p>
                  <p style={{ marginLeft: 18 }}><span style={{ color: '#94a3b8' }}>stack:</span> [<span style={{ color: '#86efac' }}>'MERN', 'AI/ML'</span>],</p>
                  <p>{'}'}</p>
                  <p style={{ marginTop: 6, color: '#475569' }}>// Eager to solve real-world problems</p>
                </div>

                {/* Stats row below card */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 12 }}>
                  {[
                    { n: '7+', l: 'Months Exp.' }, { n: '5+', l: 'Projects' }, { n: '100%', l: 'Dedication' }

                  ].map(({ n, l }) => (
                     <div key={l} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                       <p style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--accent)' }}>{n}</p>
                       <p style={{ fontSize: 10, color: 'var(--text-subtle)', marginTop: 2, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{l}</p>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', marginTop: 56, background: 'var(--bg2)' }}
        >
          <Marquee items={HERO_TAGS} speed={28} />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          padding: 48px 0 32px;
        }
        .hero-photo { display: flex; flex-direction: column; justify-content: center; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-photo { order: -1; max-width: 400px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}
