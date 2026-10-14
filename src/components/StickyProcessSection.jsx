'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ClipboardCheck,
  CalendarCheck2,
  Hospital,
  FolderHeart,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Get referred',
    icon: ClipboardCheck,
    desc: 'A superintendent or authorized referral authority initiates the hospital coordination process through SUSALI.',
  },
  {
    num: '02',
    title: 'Book hospital visit',
    icon: CalendarCheck2,
    desc: 'The coordination team arranges your hospital appointment and ensures your profile is ready for the visit.',
  },
  {
    num: '03',
    title: 'Receive hospital care',
    icon: Hospital,
    desc: 'Hospital staff access your connected profile and deliver treatment with full context of your care history.',
  },
  {
    num: '04',
    title: 'Access your records',
    icon: FolderHeart,
    desc: 'Prescriptions, lab reports and treatment documents are uploaded to your single SUSALI profile for future care.',
  },
];

export default function StickyProcessSection() {
  const containerRef = useRef(null);

  // Track scroll through the tall wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth the raw scroll value for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // ── Per-step reveal transforms ──────────────────────────
  // Each step fades in and slides up within its own scroll window.
  // Windows: [0→0.2], [0.15→0.4], [0.35→0.6], [0.55→0.8]
  const stepRanges = [
    [0, 0.18],
    [0.15, 0.38],
    [0.35, 0.58],
    [0.55, 0.78],
  ];

  const stepOpacities = stepRanges.map(([start, end]) =>
    useTransform(smoothProgress, [start, end], [0, 1])
  );
  const stepYs = stepRanges.map(([start, end]) =>
    useTransform(smoothProgress, [start, end], [60, 0])
  );
  const stepScales = stepRanges.map(([start, end]) =>
    useTransform(smoothProgress, [start, end], [0.92, 1])
  );

  // ── Heading parallax ────────────────────────────────────
  const headingY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.1, 0.85, 1], [1, 1, 1, 0.4]);

  // ── Horizontal progress bar ─────────────────────────────
  const progressWidth = useTransform(smoothProgress, [0.05, 0.82], ['0%', '100%']);

  // ── CTA reveal at the end ───────────────────────────────
  const ctaOpacity = useTransform(smoothProgress, [0.78, 0.92], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.78, 0.92], [30, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '350vh' }}>
      {/* ── Sticky viewport container ──────────────────── */}
      <div
        className="sticky top-0 flex items-center justify-center overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Background glow that intensifies with scroll */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: useTransform(
              smoothProgress,
              [0, 1],
              [
                'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(54,165,170,0.04) 0%, transparent 70%)',
                'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(54,165,170,0.10) 0%, transparent 70%)',
              ]
            ),
          }}
        />

        <div className="container relative z-10 mx-auto px-6">
          {/* ── Section heading ──────────────────────── */}
          <motion.div
            style={{ y: headingY, opacity: headingOpacity }}
            className="mb-12 text-center"
          >
            <span className="og-kicker">03 / HOW IT WORKS</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              A clear path to <em>connected care.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
              Scroll to walk through each moment of the SUSALI patient journey.
            </p>
          </motion.div>

          {/* ── Progress track ───────────────────────── */}
          <div className="relative mx-auto mb-10 h-[2px] max-w-3xl rounded-full bg-slate-200/60">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: progressWidth,
                background: 'linear-gradient(90deg, #36A5AA, #619CAF)',
              }}
            />
            {/* Step dots on the track */}
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  left: `${(i / (steps.length - 1)) * 100}%`,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: useTransform(
                    smoothProgress,
                    [stepRanges[i][0], stepRanges[i][1]],
                    ['#cbd5e1', '#36A5AA']
                  ),
                  border: '2px solid white',
                  boxShadow: '0 0 0 2px rgba(54,165,170,0.15)',
                }}
              />
            ))}
          </div>

          {/* ── Step cards ───────────────────────────── */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  style={{
                    opacity: stepOpacities[i],
                    y: stepYs[i],
                    scale: stepScales[i],
                  }}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg"
                >
                  {/* Step number watermark */}
                  <span className="absolute right-4 top-3 text-5xl font-extrabold text-slate-100 select-none">
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#36A5AA]/15 to-[#619CAF]/10 text-[#36A5AA]">
                    <Icon size={22} />
                  </div>

                  {/* Copy */}
                  <h3 className="relative text-lg font-semibold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── CTA that fades in at the end ─────────── */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="mt-10 text-center"
          >
            <Link
              href="/services"
              className="og-pill-button og-pill-primary inline-flex items-center gap-2"
            >
              See the complete patient journey <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}