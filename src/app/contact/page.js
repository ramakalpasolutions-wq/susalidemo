import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  ShieldAlert,
} from 'lucide-react';
import { PageHero, Eyebrow } from '@/components/Shared';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';
import RevealOnScroll from '@/components/RevealOnScroll';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'Contact SUSALI — Patient & Healthcare Network Enquiries',
  description:
    'Contact SUSALI for information about registration, referrals, hospital appointments, medical records and healthcare collaboration.',
};

export default function Contact() {
  return (
    <>
      <PageHero
        tag="GET IN TOUCH"
        title="Let's make healthcare"
        accent="more connected."
        description="Have a question about SUSALI, the referral process, available records or healthcare collaboration? Reach out through our official channels."
      />

      <section className="section-space">
        <div className="container contact-layout">
          <RevealOnScroll direction="left">
            <div className="contact-aside">
              <Eyebrow>CONTACT SUSALI</Eyebrow>
              <h2>
                Your question matters.
                <br />
                <span className="blue-text">Let's connect.</span>
              </h2>
              <p>
                Ask about patient registration, the superintendent referral
                process, hospital appointment coordination, available health
                records or partnership opportunities.
              </p>

              <div className="contact-methods">
                {site.email && (
                  <RevealOnScroll delay={0.1}>
                    <a href={'mailto:' + site.email}>
                      <span>
                        <Mail size={22} />
                      </span>
                      <div>
                        <small>EMAIL SUSALI</small>
                        <strong>{site.email}</strong>
                      </div>
                      <ArrowUpRight size={18} />
                    </a>
                  </RevealOnScroll>
                )}
                {site.phone && (
                  <RevealOnScroll delay={0.2}>
                    <a href={'tel:' + site.phone}>
                      <span>
                        <Phone size={22} />
                      </span>
                      <div>
                        <small>CALL SUSALI</small>
                        <strong>{site.phone}</strong>
                      </div>
                      <ArrowUpRight size={18} />
                    </a>
                  </RevealOnScroll>
                )}
                {site.address &&
                  (site.mapsUrl ? (
                    <RevealOnScroll delay={0.3}>
                      <a
                        href={site.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <MapPin size={22} />
                        </span>
                        <div>
                          <small>VISIT US</small>
                          <strong>{site.address}</strong>
                        </div>
                        <ArrowUpRight size={18} />
                      </a>
                    </RevealOnScroll>
                  ) : (
                    <RevealOnScroll delay={0.3}>
                      <div className="contact-method-static">
                        <span>
                          <MapPin size={22} />
                        </span>
                        <div>
                          <small>VISIT US</small>
                          <strong>{site.address}</strong>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                {site.whatsapp && (
                  <RevealOnScroll delay={0.4}>
                    <a
                      href={'https://wa.me/' + site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <MessageCircle size={22} />
                      </span>
                      <div>
                        <small>WHATSAPP</small>
                        <strong>Start a conversation</strong>
                      </div>
                      <ArrowUpRight size={18} />
                    </a>
                  </RevealOnScroll>
                )}
                {!site.email &&
                  !site.phone &&
                  !site.address &&
                  !site.whatsapp && (
                    <RevealOnScroll delay={0.2}>
                      <div className="contact-pending">
                        <Mail size={24} />
                        <strong>Official contact details coming soon</strong>
                        <p>
                          Verified SUSALI contact details can be added to{' '}
                          <code>src/data/site.js</code> before launch.
                        </p>
                      </div>
                    </RevealOnScroll>
                  )}
              </div>

              <RevealOnScroll delay={0.5}>
                <div className="contact-small-note">
                  <ShieldAlert size={17} /> For a medical emergency, contact
                  your local emergency services or the nearest emergency
                  department. This website is not for urgent medical assistance.
                </div>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="contact-form-shell">
              <div className="contact-form-heading">
                <span>SEND AN ENQUIRY</span>
                <h3>Tell us what you'd like to know.</h3>
                <p>
                  Enquire about registration, referrals, appointments, records
                  or healthcare collaboration. The form prepares a message; it
                  does not submit or store patient information.
                </p>
              </div>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}