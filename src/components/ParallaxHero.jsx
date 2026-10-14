'use client';

import Parallax from './Parallax';

export default function ParallaxHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white px-6">
      
      {/* 1. Background Layer (Moves Slower - speed: -80) */}
      <Parallax speed={-80} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
      </Parallax>

      {/* 2. Middle Layer (Text & Core Heading - speed: -20) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <Parallax speed={-30}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 rounded-full backdrop-blur-md">
            Architectural & Glazing Solutions
          </span>
        </Parallax>

        <Parallax speed={-15}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Crafting Clarity with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-blue-500">
              Modern Glass Precision
            </span>
          </h1>
        </Parallax>

        <Parallax speed={0}>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Experience premium bespoke glass design, architectural glazing, and custom installations tailored for Cairns and beyond.
          </p>
        </Parallax>
      </div>

      {/* 3. Foreground Floating Glass Cards (Move Faster - speed: 60 and -60) */}
      <Parallax speed={60} className="absolute hidden lg:block bottom-16 left-12 z-20">
        <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-64 text-left">
          <p className="text-xs text-cyan-300 font-semibold uppercase">Premium Finish</p>
          <p className="text-sm font-medium text-white mt-1">Frosted & Toughened Glass</p>
        </div>
      </Parallax>

      <Parallax speed={-70} className="absolute hidden lg:block top-24 right-16 z-20">
        <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-64 text-left">
          <p className="text-xs text-sky-300 font-semibold uppercase">Engineered for Safety</p>
          <p className="text-sm font-medium text-white mt-1">Cyclone Rated Durability</p>
        </div>
      </Parallax>

    </section>
  );
}