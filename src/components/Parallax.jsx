'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Parallax wrapper component
 * @param {number} speed - Vertical offset range in px (e.g., -60 to 60)
 * @param {boolean} smooth - Physics-based smoothing (default true)
 * @param {string} className - Additional CSS classes
 */
export default function Parallax({
  children,
  speed = 40,
  smooth = true,
  className = '',
  style = {},
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const ySmooth = useSpring(yRange, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y: smooth ? ySmooth : yRange }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}