import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, FolderHeart, ClipboardCheck } from 'lucide-react';
import { services, journey, recordTypes } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import { PageHero, SectionTitle, Journey, CTA } from '@/components/Shared';

export const metadata = { title: 'Our Services — Referrals, Appointments & Medical Records', description: 'Explore SUSALI patient registration, new superintendent referrals, hospital appointment coordination, treatment documentation and follow-up support.' };

export default function Services() {
  return <>
    <PageHero tag="WHAT WE DO" title="Connected services" accent="for every stage of care." description="From creating a patient profile to accessing hospital-uploaded medical records, SUSALI supports an organized healthcare journey." />
    <section className="section-space"><div className="container"><SectionTitle eyebrow="OUR SIX SERVICE AREAS" title="Designed to connect" accent="the entire journey." desc="SUSALI supports referral administration, hospital coordination and information continuity. Medical decisions remain with treating healthcare professionals."/><div className="service-detail-grid">{services.map(item=><article className="service-detail" key={item.id}><div className="detail-top"><span className="service-icon"><DynamicIcon name={item.icon} size={30}/></span><span className="detail-no">{item.id} / 06</span></div><span className="og-kicker susali-card-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p><ul className="susali-feature-list">{item.features.map(feature=><li key={feature}><CheckCircle2 size={15}/>{feature}</li>)}</ul><div className="detail-foot"><CheckCircle2 size={17}/><span>{item.detail}</span></div></article>)}</div></div></section>
    <section className="process-light section-space"><div className="container"><SectionTitle eyebrow="HOW SUSALI WORKS" title="Eight stages." accent="One connected journey." desc="From first registration and dispensary referral to hospital care, records upload and continued access."/><Journey/><div className="susali-journey-note"><ClipboardCheck size={18}/><span>Each separate new health issue requires a fresh superintendent referral, while the patient keeps the same SUSALI profile.</span></div></div></section>
    <section className="susali-records section-space"><div className="container"><SectionTitle eyebrow="AFTER YOUR HOSPITAL VISIT" title="Medical documents" accent="connected to your profile." desc="Authorized hospital personnel upload relevant treatment documents after care. Patients can view the documents made available to their SUSALI account."/><div className="susali-records-grid">{recordTypes.map(record=><article className="susali-record-card" key={record.title}><span className="susali-record-icon"><DynamicIcon name={record.icon} size={25}/></span><h3>{record.title}</h3><p>{record.desc}</p></article>)}</div><p className="susali-small-disclaimer">The availability of individual reports depends on what documents have been prepared and uploaded by the treating hospital.</p></div></section>
    <CTA small/>
  </>;
}
