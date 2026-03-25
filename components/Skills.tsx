'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/variants';

const groups = [
  {
    cat: 'Frontend', Icon: Monitor,
    bg: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.18)', iconColor: 'var(--accent)',
    items: ['React (Vite)', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery'],
  },
  {
    cat: 'Backend', Icon: Server,
    bg: 'rgba(124,58,237,0.05)', border: 'rgba(124,58,237,0.18)', iconColor: 'var(--accent2)',
    items: ['Node.js', 'Express.js', 'REST APIs', 'OOP', 'C', 'DSA (Basic)'],
  },
  {
    cat: 'Database & Learning', Icon: Database,
    bg: 'rgba(5,150,105,0.05)', border: 'rgba(5,150,105,0.18)', iconColor: 'var(--green)',
    items: ['MongoDB', 'Firebase', 'SQL (Basic)'],
  },
  {
    cat: 'Tools & AI/ML', Icon: Sparkles,
    bg: 'rgba(8,145,178,0.05)', border: 'rgba(8,145,178,0.18)', iconColor: 'var(--accent3)',
    items: ['Python', 'NumPy', 'Pandas', 'Git & GitHub', 'VS Code', 'Postman'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)', scrollMarginTop: 80 }}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>

          <motion.p variants={fadeUp} className="eyebrow">02 — Technical Skills</motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: 480 }}>
              My core stack,{' '}
              <span style={{ color: 'var(--accent)' }}>and what I\'m exploring.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-subtle)', maxWidth: 260, lineHeight: 1.6 }}>
              Tools applied in real projects and continuous learning.
            </p>
          </motion.div>

          <div className="skills-grid">
            {groups.map(({ cat, Icon, bg, border, iconColor, items }) => (
              <motion.div key={cat} variants={fadeUp}
                whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                style={{ padding: '24px', background: '#fff', border: `1px solid ${border}`, borderRadius: 16, boxShadow: 'var(--shadow-sm)', backgroundColor: bg }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: `${iconColor}15`, border: `1px solid ${iconColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={17} style={{ color: iconColor }} />
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{cat}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {items.map((skill) => (
                    <span key={skill}
                      style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', background: '#fff', border: '1px solid var(--border)', borderRadius: 100, padding: '4px 12px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; }
        @media (max-width: 680px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
