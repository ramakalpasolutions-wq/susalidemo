import Link from 'next/link';
import {
  HeartHandshake,
  Eye,
  Target,
  ShieldCheck,
  Lightbulb,
  UsersRound,
  ArrowUpRight,
  FolderHeart,
  ClipboardCheck,
  Building2,
} from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import RevealOnScroll from '@/components/RevealOnScroll';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'About SUSALI — Mission, Vision & Healthcare Coordination',
  description:
    'Discover SUSALI’s approach to digital patient profiles, superintendent referrals, hospital coordination and continuity of medical records.',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'Patients first',
    desc: 'Every coordination process begins with the individual and their healthcare needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Clarity & accountability',
    desc: 'Well-organized referral and treatment information supports clearer communication.',
  },
  {
    icon: UsersRound,
    title: 'Meaningful collaboration',
    desc: 'Dispensaries, superintendents, care teams and hospitals have connected responsibilities.',
  },
  {
    icon: Lightbulb,
    title: 'Digital continuity',
    desc: 'A continuing patient profile helps bring available treatment records together across visits.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        tag="GET TO KNOW SUSALI"
        title="Connecting people."
        accent="Organizing care."
        description="A structured healthcare journey — from dispensary referral and hospital appointment to treatment records and continued care."
      />

      <section className="section-space">
        <div className="container about-main">
          <RevealOnScroll direction="left">
            <div>
              <Eyebrow>WHO WE ARE</Eyebrow>
              <h2>
                Healthcare is a journey.
                <br />
                <span className="blue-text">Connection matters.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div>
              <p className="lead">
                SUSALI is a healthcare coordination platform designed to bring
                essential stages of a patient's care journey into one connected
                experience.
              </p>
              <p>
                Healthcare often involves dispensary visits, authorized
                referrals, hospital appointments, consultations, investigations,
                treatment and follow-up care. SUSALI supports the coordination
                and documentation of these steps through a digital patient
                profile.
              </p>
              <p>
                After a hospital visit, authorized hospital staff upload
                relevant medical documents. For future healthcare needs,
                patients can continue using the same profile and access
                available previous records. A fresh superintendent referral is
                required for each new health issue.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="mission-section section-space">
        <div className="container mission-grid">
          <RevealOnScroll delay={0.1}>
            <TiltCard>
              <div className="mission-card">
                <span className="mission-icon">
                  <Target size={28} />
                </span>
                <span className="mission-mini">01 / OUR MISSION</span>
                <h3>Simplify the journey between referral and continued care.</h3>
                <p>
                  Support organized communication, hospital appointment
                  coordination and access to available medical information
                  through one patient profile.
                </p>
              </div>
            </TiltCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <TiltCard>
              <div className="mission-card bright">
                <span className="mission-icon">
                  <Eye size={28} />
                </span>
                <span className="mission-mini">02 / OUR VISION</span>
                <h3>Healthcare information that stays connected.</h3>
                <p>
                  Work toward a coordinated ecosystem where patients can follow
                  their care journey with greater clarity and find previous
                  medical records when needed.
                </p>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="WHAT GUIDES US"
              title="The values behind"
              accent="every connection."
              desc="Principles that shape how SUSALI approaches coordination and care information."
            />
          </RevealOnScroll>
          <div className="values-grid">
            {values.map(({ icon: Icon, ...value }, i) => (
              <RevealOnScroll key={value.title} delay={i * 0.1}>
                <TiltCard>
                  <article className="value-card">
                    <span className="value-icon">
                      <Icon size={26} />
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </article>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="susali-about-approach section-space">
        <div className="container">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="OUR APPROACH"
              title="One patient profile."
              accent="A continuing care history."
              desc="SUSALI brings together the people and information involved in a referral-based healthcare process."
            />
          </RevealOnScroll>
          <div className="susali-approach-grid">
            {[
              {
                Icon: ClipboardCheck,
                title: 'Referral process',
                desc:
                  'The patient visits the dispensary, obtains an authorized superintendent referral and submits the referral details through SUSALI.',
              },
              {
                Icon: Building2,
                title: 'Hospital coordination',
                desc:
                  'A hospital appointment is arranged. Qualified medical professionals make the clinical decisions and deliver treatment.',
              },
              {
                Icon: FolderHeart,
                title: 'Records & continuity',
                desc:
                  'Authorized hospital staff upload treatment documents to the existing patient profile, supporting future access and follow-up information.',
              },
            ].map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.12}>
                <TiltCard>
                  <article>
                    <Icon size={29} />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={0.3}>
            <p className="susali-small-disclaimer">
              SUSALI is a healthcare coordination platform, not a hospital or
              emergency treatment provider.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CTA small />
    </>
  );
}