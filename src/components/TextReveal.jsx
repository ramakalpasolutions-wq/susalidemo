'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <span ref={ref} className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={isInView ? { y: '0%' } : { y: '110%' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}