'use client';

import { motion } from 'framer-motion';
import { Zap, LayoutTemplate, FileCode2, BookOpen } from 'lucide-react';
import { fadeUp } from '@/lib/variants';

const principles = [
  { Icon: Zap, title: 'Highly Adaptable', tag: 'Core Value', color: 'var(--accent)', bg: 'var(--accent-light)', border: 'var(--accent-ring)', desc: 'Fast learner and highly adaptable. I embrace new technologies and quickly integrate them into production environments to stay ahead.' },
  { Icon: LayoutTemplate, title: 'Business Mindset', tag: 'Strategy', color: 'var(--accent2)', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)', desc: 'I don\'t just write code; I solve business problems. I focus on solutions that drive tangible value, like optimizing monetization streams.' },
  { Icon: FileCode2, title: 'Production Degugging', tag: 'Engineering', color: 'var(--green)', bg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.2)', desc: 'Strong debugging skills forged in production. I resolve complex frontend and backend issues under pressure for actual clients.' },
  { Icon: BookOpen, title: 'Continuous Growth', tag: 'Mindset', color: 'var(--accent3)', bg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.2)', desc: 'Always curious and exploring. I leverage AI tools to boost productivity while diving deep into Machine Learning architectures.' },
];

export function Approach() {
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', scrollMarginTop: 80 }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}>

          <motion.p variants={fadeUp} className="eyebrow">05 — Engineering Approach</motion.p>

          <motion.h2 variants={fadeUp}
            style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 44 }}>
            How I think about{' '}
            <span style={{ color: 'var(--accent)' }}>building software.</span>
          </motion.h2>

          <div className="approach-grid">
            {principles.map(({ Icon, title, tag, color, bg, border, desc }) => (
              <motion.div key={title} variants={fadeUp}
                whileHover={{ y: -4, boxShadow: 'var(--shadow)' }} transition={{ duration: 0.2 }}
                style={{ padding: '28px 24px', border: `1px solid ${border}`, borderRadius: 16, boxShadow: 'var(--shadow-sm)', position: 'relative', background: bg }}
              >
                <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 800, color, letterSpacing: '0.08em', textTransform: 'uppercase', background: `${color}18`, border: `1px solid ${color}30`, borderRadius: 100, padding: '2px 9px' }}>
                  {tag}
                </span>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.75, fontWeight: 400 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .approach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        @media (max-width: 960px) { .approach-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .approach-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
