import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Network,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FolderHeart,
  ClipboardCheck,
  Hospital,
  FileUp,
  MessageCircleQuestion,
} from 'lucide-react';
import { HeroVisual } from '@/components/OmbreExperience';
import { services } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import StickyProcessSection from '@/components/StickyProcessSection';
import RevealOnScroll from '@/components/RevealOnScroll';
import TiltCard from '@/components/TiltCard';
import TextReveal from '@/components/TextReveal';
import ScrollProgress from '@/components/ScrollProgress';
import MagneticButton from '@/components/MagneticButton';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'Connected Healthcare — Welcome to SUSALI',
  description:
    'Discover SUSALI and explore dedicated pages covering our story, referral coordination, hospital network, FAQs and contact details.',
};

const highlights = [
  {
    title: 'One patient profile',
    icon: FolderHeart,
    description:
      'Your available healthcare history stays connected to your existing profile.',
  },
  {
    title: 'Structured referrals',
    icon: ClipboardCheck,
    description:
      'A superintendent referral starts the hospital coordination process.',
  },
  {
    title: 'Hospital records',
    icon: FileUp,
    description:
      'Hospital staff upload relevant prescriptions, reports and treatment documents.',
  },
];

export default function Home() {
  return (
    <>
      {/* Global scroll progress bar */}
      <ScrollProgress />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="og-hero">
        <div className="og-hero-glow glow-a" />
        <div className="og-hero-glow glow-b" />
        <div className="og-hero-inner container">
          <RevealOnScroll delay={0.1}>
            <span className="og-hero-badge">
              <ShieldCheck size={16} /> CONNECTED HEALTHCARE • ONE PATIENT
              PROFILE
            </span>
          </RevealOnScroll>

          <h1>
            <TextReveal delay={0.2}>Your healthcare journey.</TextReveal>
            <br />
            <TextReveal delay={0.4}>
              <span>One connected platform.</span>
            </TextReveal>
          </h1>

          <RevealOnScroll delay={0.6}>
            <p>
              From authorized referrals and hospital appointments to treatment
              records and continued care, SUSALI helps bring your healthcare
              journey together.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.7}>
            <div className="og-hero-actions">
              <MagneticButton>
                <Link
                  href="/services"
                  className="og-pill-button og-pill-primary"
                >
                  Explore services <ArrowUpRight size={19} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about" className="og-pill-button og-pill-soft">
                  About SUSALI <ArrowRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.9}>
            <HeroVisual />
          </RevealOnScroll>

          <RevealOnScroll delay={1.1}>
            <div className="og-hero-footnote">
              <span>
                <span className="og-status-dot" /> ONE PROFILE • CONTINUITY OF
                CARE
              </span>
              <a href="#discover">
                SCROLL TO DISCOVER <span>↓</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Stats Bar (CountUp) ──────────────────────────────── */}
      <section className="section-space py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 500, suffix: '+', label: 'Patients Connected' },
              { value: 12, suffix: '', label: 'Partner Hospitals' },
              { value: 98, suffix: '%', label: 'Care Continuity' },
              { value: 24, suffix: '/7', label: 'Coordination Support' },
            ].map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl font-extrabold text-[#36A5AA] md:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 / INTRODUCING SUSALI ──────────────────────────── */}
      <section className="og-intro section-space" id="discover">
        <div className="container og-intro-layout">
          <RevealOnScroll direction="left" className="og-intro-art">
            <div className="og-intro-orb">
              <HeartHandshake size={112} strokeWidth={1.05} />
              <div className="og-intro-halo halo-one" />
              <div className="og-intro-halo halo-two" />
            </div>
            <div className="og-intro-floating">
              <span className="og-mini-icon mint">
                <CheckCircle2 size={19} />
              </span>
              <div>
                <strong>Care, connected</strong>
                <small>Across every stage</small>
              </div>
            </div>
            <span className="og-intro-bottom-pill">
              <Sparkles size={15} /> Care. Clarity. Connection.
            </span>
          </RevealOnScroll>

          <div className="og-intro-copy">
            <RevealOnScroll delay={0.1}>
              <span className="og-kicker">01 / INTRODUCING SUSALI</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h2>
                Healthcare works better <em>when it connects.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <p className="og-lead">
                One organized approach to referrals, hospital coordination and
                access to available medical records.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <p>
                SUSALI connects patients, referral authorities, coordination
                teams and hospitals throughout the healthcare journey.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.5}>
              <MagneticButton>
                <Link href="/about" className="og-text-link">
                  Read our story <ArrowUpRight size={19} />
                </Link>
              </MagneticButton>
            </RevealOnScroll>
            <RevealOnScroll delay={0.6}>
              <div className="og-intro-traits">
                <span>
                  <ShieldCheck size={19} /> Coordination
                </span>
                <span>
                  <FolderHeart size={19} /> Continuity
                </span>
                <span>
                  <Network size={19} /> Connection
                </span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── 02 / SERVICES (with 3D Tilt Cards) ──────────────── */}
      <section className="og-services section-space">
        <div className="container">
          <RevealOnScroll>
            <div className="og-section-heading">
              <div>
                <span className="og-kicker">02 / OUR SERVICES</span>
                <h2>
                  Thoughtful support at <em>every stage.</em>
                </h2>
              </div>
              <p>
                Discover how SUSALI connects the most important steps in a
                patient's care journey.
              </p>
            </div>
          </RevealOnScroll>

          <div className="og-services-grid susali-home-service-grid">
            {services.slice(0, 3).map((service, i) => (
              <RevealOnScroll key={service.id} delay={i * 0.15}>
                <TiltCard>
                  <Link
                    href="/services"
                    className={'og-service-card og-service-' + i}
                  >
                    <span className="og-service-icon">
                      <DynamicIcon name={service.icon} size={27} />
                    </span>
                    <span className="og-service-number">
                      {service.id} / 06
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <span className="og-service-arrow">
                      <ArrowUpRight size={21} />
                    </span>
                  </Link>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="og-section-bottom">
              <span>Explore all six service areas on their own page.</span>
              <MagneticButton>
                <Link href="/services" className="og-text-link">
                  View the Services page <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 03 / Sticky Scroll Process ───────────────────────── */}
      <StickyProcessSection />

      {/* ── 04 / DIGITAL HEALTH HISTORY ──────────────────────── */}
      <section className="susali-home-record-highlight section-space">
        <div className="container susali-home-record-panel">
          <div>
            <RevealOnScroll delay={0.1}>
              <span className="og-kicker">04 / DIGITAL HEALTH HISTORY</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h2>
                Your medical records, <em>connected.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <p>
                Authorized hospital staff upload available prescriptions, lab
                and scan reports, and other treatment documents to the patient's
                existing SUSALI profile.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <MagneticButton>
                <Link href="/services" className="og-text-link">
                  Explore medical records <ArrowUpRight size={19} />
                </Link>
              </MagneticButton>
            </RevealOnScroll>
          </div>
          <RevealOnScroll direction="right" delay={0.2}>
            <div
              className="susali-home-record-visual"
              aria-hidden="true"
            >
              <div>
                <FolderHeart size={60} strokeWidth={1.4} />
                <span>One patient profile</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 05 / HEALTHCARE NETWORK ──────────────────────────── */}
      <section className="og-network-section section-space">
        <div className="container og-network-layout">
          <div>
            <RevealOnScroll delay={0.1}>
              <span className="og-kicker">05 / HEALTHCARE NETWORK</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h2>
                Better connections for <em>better continuity.</em>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <p className="og-lead">
                Patients, dispensaries, superintendents, coordination teams and
                hospitals each play a role.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <p>
                Explore the participants and processes behind SUSALI's
                coordinated healthcare journey.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.5}>
              <MagneticButton>
                <Link
                  href="/healthcare-network"
                  className="og-pill-button og-pill-primary"
                >
                  Visit Healthcare Network <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="right" delay={0.3}>
            <div className="og-network-art">
              <div className="og-network-ring ring-a" />
              <div className="og-network-ring ring-b" />
              <div className="og-network-core">
                <Network size={48} />
                <strong>SUSALI</strong>
                <small>Connected care</small>
              </div>
              <span className="og-network-node nn1">
                <HeartHandshake size={25} />
                <small>Patients</small>
              </span>
              <span className="og-network-node nn2">
                <Network size={25} />
                <small>Teams</small>
              </span>
              <span className="og-network-node nn3">
                <Hospital size={25} />
                <small>Hospitals</small>
              </span>
              <span className="og-network-node nn4">
                <ShieldCheck size={25} />
                <small>Referrals</small>
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 06 / FAQ & CONTACT (with Tilt Cards) ─────────────── */}
      <section className="susali-home-final-links section-space">
        <div className="container susali-home-final-grid">
          <RevealOnScroll delay={0.1}>
            <TiltCard>
              <Link href="/faqs" className="susali-home-nav-card">
                <span>
                  <MessageCircleQuestion size={28} />
                </span>
                <h3>Have questions?</h3>
                <p>
                  Find answers about registration, referrals, appointments and
                  hospital-uploaded records.
                </p>
                <strong>
                  Read FAQs <ArrowUpRight size={18} />
                </strong>
              </Link>
            </TiltCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <TiltCard>
              <Link href="/contact" className="susali-home-nav-card">
                <span>
                  <HeartHandshake size={28} />
                </span>
                <h3>Let's connect.</h3>
                <p>
                  Get information about SUSALI or enquire about healthcare
                  collaboration.
                </p>
                <strong>
                  Contact Us <ArrowUpRight size={18} />
                </strong>
              </Link>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}