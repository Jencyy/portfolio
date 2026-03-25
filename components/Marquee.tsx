'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export function Marquee({ items, direction = 'left', speed = 25 }: MarqueeProps) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'inline-flex', gap: 48 }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 24,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', fontSize: 18 }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
