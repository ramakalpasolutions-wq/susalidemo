import Link from 'next/link';
import { ArrowUpRight, MessageCircleQuestion } from 'lucide-react';
import { PageHero, SectionTitle, CTA } from '@/components/Shared';
import FaqExplorer from '@/components/FaqExplorer';
import RevealOnScroll from '@/components/RevealOnScroll';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'FAQs — Registration, Referrals & Medical Records',
  description:
    'Answers about SUSALI registration, superintendent referrals, hospital appointments, follow-ups and hospital-uploaded medical records.',
};

export default function Faqs() {
  return (
    <>
      <PageHero
        tag="HELP & INFORMATION"
        title="Your questions."
        accent="Clear answers."
        description="Find information about patient registration, new referrals, hospital treatment, uploaded medical records and continued care."
      />

      <section className="section-space">
        <div className="container faq-page-layout">
          <RevealOnScroll direction="left">
            <div className="faq-page-intro">
              <SectionTitle
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Everything you"
                accent="need to know."
                desc="Search a question or browse by topic. Where a process is still awaiting confirmation, we say so clearly."
              />
              <TiltCard>
                <div className="help-box">
                  <MessageCircleQuestion size={27} />
                  <h3>Still have a question?</h3>
                  <p>
                    Contact SUSALI through its official support channels once
                    they are published. Please do not share sensitive medical
                    records through public enquiry forms.
                  </p>
                  <MagneticButton>
                    <Link href="/contact" className="text-link">
                      Contact us <ArrowUpRight size={17} />
                    </Link>
                  </MagneticButton>
                </div>
              </TiltCard>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <FaqExplorer />
          </RevealOnScroll>
        </div>
      </section>

      <CTA small />
    </>
  );
}