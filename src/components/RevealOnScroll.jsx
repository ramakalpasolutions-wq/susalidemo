'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Wraps any element and reveals it when scrolled into view.
 * @param {string} direction - 'up' | 'down' | 'left' | 'right'
 * @param {number} delay - Stagger delay in seconds
 * @param {number} duration - Animation duration
 * @param {boolean} once - Only animate once (true) or every time (false)
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offset.y, x: offset.x, filter: 'blur(6px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: offset.y, x: offset.x, filter: 'blur(6px)' }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}