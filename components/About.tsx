'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Target, Sparkles } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/variants';

const stats = [
  { value: '7+', label: 'Months Experience', color: 'var(--accent)' },
  { value: 'MERN', label: 'Primary Stack', color: 'var(--accent2)' },
  { value: 'AI/ML', label: 'Currently Learning', color: 'var(--green)' },
];

const info = [
  { icon: Briefcase, label: 'Focus', value: 'MERN Stack & AI Integration' },
  { icon: GraduationCap, label: 'Degree', value: 'Diploma in Computer Eng. (2026)' },
  { icon: Sparkles, label: 'Course', value: 'Apna College AI/ML Prime Batch' },
  { icon: MapPin, label: 'Location', value: 'Gujarat, India' },
];

export function About() {
  return (
    <section id="about" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', scrollMarginTop: 80 }}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>

          <motion.p variants={fadeUp} className="eyebrow">01 — About Me</motion.p>

          <div className="about-grid">
            <div>
              <motion.h2 variants={fadeUp}
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text)', marginBottom: 24 }}>
                Curiosity turned into{' '}
                <span style={{ color: 'var(--accent)' }}>engineering passion.</span>
              </motion.h2>

              {[
                "I am a Full Stack Developer specializing in the MERN stack, with hands-on experience building real-world applications and working in a professional environment. I enjoy working on both frontend and backend, creating complete end-to-end solutions that are scalable and user-friendly.",
                "My journey in tech started out of curiosity and quickly turned into passion because I never get bored exploring new technologies. I have built multiple projects including e-commerce platforms, blog systems, and management tools, while also gaining industry experience in debugging, ad integration, and performance improvements.",
                "Currently, I am expanding my skills into AI/ML, learning tools like Python, NumPy, and Pandas through the Apna College Prime Batch. My long-term goal is to combine web development and AI to build impactful products and eventually grow a business in the tech space.",
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp}
                  style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16, fontWeight: 400 }}>
                  {text}
                </motion.p>
              ))}
            </div>

            <div>
              {/* Stats */}
              <motion.div variants={fadeUp} className="stats-row">
                {stats.map(({ value, label, color }) => (
                  <div key={label}
                    style={{ padding: '22px 14px', background: '#fff', border: '1px solid var(--border)', borderRadius: 14, textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                    <p style={{ fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 900, letterSpacing: '-0.04em', color, lineHeight: 1 }}>{value}</p>
                    <p style={{ fontSize: 10, color: 'var(--text-subtle)', marginTop: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Info */}
              <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 16px', background: '#fff', border: '1px solid var(--border)', borderRadius: 12, boxShadow: 'var(--shadow-sm)' }}>
                    <Icon size={16} style={{ color: 'var(--text-subtle)', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.07em', flexShrink: 0, width: 80 }}>{label}</span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600, flex: 1, lineHeight: 1.4 }}>{value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 36px; align-items: start; }
        .stats-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 12px; }
        @media (max-width: 880px) { .about-grid { grid-template-columns: 1fr; gap: 36px; } }
        @media (max-width: 420px) { .stats-row { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
