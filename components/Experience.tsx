'use client';

import { motion } from 'framer-motion';
import { Layers, TrendingUp, GitMerge, Code2, Calendar, MapPin, Building2, CheckCircle2, Briefcase } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/variants';

const experiences = [
  {
    company: "Atmiya Infosoft",
    role: "Web Developer",
    period: "Sep 2024 – Present",
    location: "On-site",
    type: "Full-time",
    duration: "~9+ months",
    current: true,
    description: "Developing scalable front-end and back-end applications, integrating third-party systems, and improving overall performance.",
    bullets: [
      { Icon: Layers, badge: 'Client Work', text: 'Worked on multiple real-world client projects, handling complex debugging tasks and feature developments.' },
      { Icon: TrendingUp, badge: 'Monetization', text: 'Implemented and optimized Google Ads placement and ad systems for better revenue and UX.' },
      { Icon: GitMerge, badge: 'Performance', text: 'Improved website performance and actively fixed frontend and backend issues.' },
      { Icon: Code2, badge: 'Production', text: 'Gained hands-on, practical experience in handling and resolving production-level constraints.' },
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', scrollMarginTop: 80 }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={stagger}>

          <motion.p variants={fadeUp} className="eyebrow">03 — Professional Journey</motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeUp} style={{ position: 'relative' }}>
                {/* Header for each experience */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 20,
                  paddingBottom: 24,
                  borderBottom: '1px solid var(--border)',
                  marginBottom: 32
                }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text)' }}>
                        {exp.role}
                      </h2>
                      {exp.current && (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '4px 12px',
                          borderRadius: 100,
                          background: 'rgba(5,150,105,0.08)',
                          border: '1px solid rgba(5,150,105,0.2)',
                          fontSize: 11,
                          fontWeight: 700,
                          color: 'var(--green)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                          Current Role
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Building2 size={16} style={{ color: 'var(--accent)' }} />
                        <span style={{ fontWeight: 600, color: 'var(--text)' }}>{exp.company}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Briefcase size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', color: 'var(--text)', fontWeight: 700, fontSize: 14 }}>
                      <Calendar size={16} style={{ color: 'var(--accent)' }} />
                      {exp.period}
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 500 }}>Duration: {exp.duration}</p>
                  </div>
                </div>

                {/* Bullets grid */}
                <div className="exp-grid">
                  {exp.bullets.map((bullet, i) => (
                    <motion.div key={i}
                      whileHover={{ borderColor: 'var(--accent-ring)', boxShadow: 'var(--shadow)' }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: 'flex',
                        gap: 16,
                        padding: '24px',
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 16,
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'var(--accent-light)',
                        border: '1px solid var(--accent-ring)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <bullet.Icon size={20} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <span style={{
                          display: 'inline-block',
                          fontSize: 10,
                          fontWeight: 800,
                          color: 'var(--accent)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: 8,
                          background: 'var(--accent-light)',
                          padding: '2px 10px',
                          borderRadius: 6
                        }}>
                          {bullet.badge}
                        </span>
                        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 450 }}>
                          {bullet.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .exp-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 16px; 
        }
        @media (max-width: 850px) { 
          .exp-grid { grid-template-columns: 1fr; } 
        }
        @media (max-width: 600px) {
          .section-pad { padding: 60px 0; }
          div[style*="justify-content: space-between"] {
            flex-direction: column;
            align-items: flex-start !important;
          }
          div[style*="text-align: right"] {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
