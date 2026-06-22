'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp } from '@/lib/variants';

const projects = [
  {
    num: '01', title: 'MockMate (AI Interview Preparation App)',
    desc: 'AI-powered mock interview platform with role-specific questions, scoring, and feedback.',
    problem: 'Wanted a realistic interview practice tool that generates unique questions and actually evaluates answers — not just shows sample Q&As.',
    solution: 'Built with Next.js and Google Gemini API for dynamic question generation, NextAuth for OAuth login, and MongoDB to store user history and results.',
    tech: ['Next.js', 'NextAuth', 'MongoDB', 'Google Gemini API', 'Tailwind CSS'],
    live: 'https://mockmate-theta.vercel.app/',
    github: 'https://github.com/Jencyy/Mockmate', 
    accent: 'var(--accent3)', borderc: 'rgba(37,99,235,0.18)',
  },
  {
    num: '02', title: 'Amysho (E-commerce Platform)',
    desc: 'Full-stack e-commerce store with functional authentication and product management.',
    problem: 'Needed a scalable functional online store with robust authentication and product management capabilities.',
    solution: 'Developed frontend and backend integrating Firebase for real-time database management and authentication flows.',
    tech: ['React / Vite', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Jencyy/Amysho',
    accent: 'var(--accent)', borderc: 'rgba(37,99,235,0.18)',
  },
  {
    num: '03', title: 'Full-Featured Blog Panel',
    desc: 'Complete blogging system for creating, managing, and interacting with blog posts securely.',
    problem: 'Users required a centralized system to create, manage, and read blogs with secure authentication.',
    solution: 'Built a complete CRUD blogging system featuring user authentication (Passport.js), comments, and image uploads.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js'],
    github: 'https://github.com/Jencyy/BlogPanel',
    accent: 'var(--accent2)', borderc: 'rgba(124,58,237,0.18)',
  },
  {
    num: '04', title: 'B2B Inventory Management',
    desc: 'Robust inventory management system designed for businesses with full admin control panels.',
    problem: 'Businesses needed a simple, reliable way to manage active stock levels and perform detailed filtering.',
    solution: 'Developed a comprehensive stock management system with advanced filtering algorithms and admin controls.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN)'],
     github: 'https://github.com/Jencyy/B2Binventory',
    accent: 'var(--green)', borderc: 'rgba(5,150,105,0.18)',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)', scrollMarginTop: 80 }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

          <motion.p variants={fadeUp} className="eyebrow">04 — Selected Work</motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: 480 }}>
              Projects driving{' '}
              <span style={{ color: 'var(--accent)' }}>business value.</span>
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-subtle)', maxWidth: 240, lineHeight: 1.6 }}>Real-world problems solved with code.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {projects.map(({ num, title, desc, problem, solution, tech, live, github, accent, borderc }) => (
              <motion.div key={num} variants={fadeUp}
                whileHover={{ borderColor: borderc, boxShadow: 'var(--shadow)' }} transition={{ duration: 0.2 }}
                style={{ padding: 'clamp(22px,3vw,32px)', background: '#fff', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--shadow-sm)' }}
              >
                {/* Header */}
                <div className="proj-head">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: accent, marginTop: 3, fontFamily: 'monospace' }}>{num}</span>
                    <div>
                      <h3 style={{ fontSize: 'clamp(15px,2vw,18px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 4 }}>{title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <Link href={github} target="_blank" data-hover="true"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 7, transition: 'all 0.2s', background: '#fff' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <Github size={13} /> Source
                    </Link>
                    {live && (
                      <Link href={live} target="_blank" data-hover="true"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: '#fff', textDecoration: 'none', padding: '6px 12px', background: accent, borderRadius: 7, transition: 'opacity 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        <ExternalLink size={13} /> Live
                      </Link>
                    )}
                  </div>
                </div>

                {/* Problem / Solution */}
                <div className="proj-body">
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 800, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Problem</p>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{problem}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 800, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Solution</p>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{solution}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                  {tech.map(t => (
                    <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 100, padding: '3px 11px' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .proj-head { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px; margin-bottom: 18px; }
        .proj-body { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
        @media (max-width: 580px) { .proj-body { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
