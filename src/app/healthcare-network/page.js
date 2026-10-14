import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  HeartPulse,
  CheckCircle2,
  ClipboardCheck,
  FileUp,
  CalendarCheck2,
} from 'lucide-react';
import { networkGroups } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import RevealOnScroll from '@/components/RevealOnScroll';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'Healthcare Network — Connected Care Pathways',
  description:
    'Learn how SUSALI connects patients, dispensaries, superintendents, coordination teams and participating hospitals across the referral and treatment journey.',
};

const pathways = [
  {
    icon: HeartPulse,
    title: 'Outpatient (OPD)',
    desc: 'Consultation and care without inpatient admission, as advised by the hospital.',
  },
  {
    icon: Building2,
    title: 'Inpatient (IPD)',
    desc: 'Admission and treatment where the treating medical team recommends hospitalization.',
  },
  {
    icon: ClipboardCheck,
    title: 'Investigations & procedures',
    desc: 'Doctor-recommended lab tests, scans or surgical procedures conducted by the hospital.',
  },
  {
    icon: CalendarCheck2,
    title: 'Follow-up visits',
    desc: 'Continued-care recommendations documented as part of the patient journey.',
  },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        tag="OUR HEALTHCARE ECOSYSTEM"
        title="Connecting people,"
        accent="processes and hospitals."
        description="Structured communication across dispensaries, referral authorities, coordination teams and hospitals helps patients navigate the healthcare journey."
      />

      <section className="section-space">
        <div className="container network-intro">
          <RevealOnScroll direction="left">
            <div>
              <Eyebrow>OUR NETWORK APPROACH</Eyebrow>
              <h2>
                Better connections{' '}
                <span className="blue-text">throughout care.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div>
              <p className="lead">
                A patient's journey involves more than one person or
                institution.
              </p>
              <p>
                SUSALI supports an organized flow from the dispensary and
                superintendent referral to the hospital appointment, treatment
                records and future access through the patient's existing SUSALI
                profile.
              </p>
              <p className="small-muted">
                Partner hospital names, logos, locations and any network
                statistics will appear only after official verification and
                approval.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="container">
          <div className="network-groups susali-network-groups">
            {networkGroups.map((group, i) => (
              <RevealOnScroll key={group.title} delay={i * 0.1}>
                <TiltCard>
                  <article className="network-group">
                    <span>
                      <DynamicIcon name={group.icon} size={26} />
                    </span>
                    <h3>{group.title}</h3>
                    <p>{group.desc}</p>
                  </article>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="network-highlight section-space">
        <div className="container network-highlight-grid">
          <RevealOnScroll direction="left">
            <div className="connect-art" aria-hidden="true">
              <span className="connect-main">S</span>
              <span className="connect-ring r1" />
              <span className="connect-ring r2" />
              <span className="connect-bubble b1">
                <Building2 size={22} />
              </span>
              <span className="connect-bubble b2">
                <HeartPulse size={22} />
              </span>
              <span className="connect-bubble b3">
                <FileUp size={22} />
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div>
              <Eyebrow light>THE CONNECTED PROCESS</Eyebrow>
              <h2>
                Different roles.
                <br />
                <span>One coordinated journey.</span>
              </h2>
              <p>
                Patients submit authorized referrals, appointments are
                coordinated, hospitals provide clinical care and hospital
                personnel upload the associated medical documents.
              </p>
              <div className="highlight-checks">
                <span>
                  <CheckCircle2 /> Superintendent-issued referrals
                </span>
                <span>
                  <CheckCircle2 /> Hospital appointment coordination
                </span>
                <span>
                  <CheckCircle2 /> Hospital-uploaded treatment records
                </span>
                <span>
                  <CheckCircle2 /> One continuing patient profile
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="HOSPITAL CARE PATHWAYS"
              title="Different healthcare needs."
              accent="One connected history."
              desc="The type of hospital care depends on the treating healthcare professional's assessment and the participating facility's services."
            />
          </RevealOnScroll>
          <div className="susali-pathway-grid">
            {pathways.map(({ icon: Icon, ...item }, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.12}>
                <TiltCard>
                  <article className="susali-pathway-card">
                    <Icon size={29} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="susali-collaboration section-space">
        <div className="container">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="HEALTHCARE COLLABORATION"
              title="Interested in"
              accent="connecting with SUSALI?"
              desc="Healthcare organizations can enquire about SUSALI's coordination model and potential opportunities to collaborate."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <TiltCard>
              <div className="partnership-panel">
                <div>
                  <h3>Let's explore better healthcare connections.</h3>
                  <p>
                    Reach out for information about the SUSALI healthcare
                    network and its structured patient journey.
                  </p>
                </div>
                <MagneticButton>
                  <Link className="btn btn-primary" href="/contact">
                    Contact SUSALI <ArrowUpRight size={18} />
                  </Link>
                </MagneticButton>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </section>

      <CTA small />
    </>
  );
}