'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { site } from '@/data/site';

const types = [
  'General enquiry',
  'Patient registration information',
  'Referral process information',
  'Hospital appointment information',
  'Medical records information',
  'Healthcare partnership',
  'Other enquiry',
];

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', type: 'General enquiry', message: '' });
  const [copied, setCopied] = useState(false);
  const content = `SUSALI enquiry\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || 'Not supplied'}\nEnquiry: ${values.type}\n\n${values.message}`;

  async function submit(event) {
    event.preventDefault();
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('SUSALI — ' + values.type)}&body=${encodeURIComponent(content)}`;
      return;
    }
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3500);
    } catch {
      window.location.href = `mailto:?subject=${encodeURIComponent('SUSALI enquiry')}&body=${encodeURIComponent(content)}`;
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid"><label>Full name <span>*</span><input required maxLength={120} value={values.name} onChange={event => setValues({...values, name: event.target.value})} placeholder="Your full name" autoComplete="name"/></label><label>Email address <span>*</span><input required type="email" maxLength={200} value={values.email} onChange={event => setValues({...values, email: event.target.value})} placeholder="you@example.com" autoComplete="email"/></label></div>
    <label>Phone number (optional)<input type="tel" maxLength={24} value={values.phone} onChange={event => setValues({...values, phone: event.target.value})} placeholder="Your contact number" autoComplete="tel"/></label>
    <label>I'm enquiring about<select value={values.type} onChange={event => setValues({...values, type: event.target.value})}>{types.map(type => <option key={type}>{type}</option>)}</select></label>
    <label>Your message <span>*</span><textarea rows={6} required minLength={10} maxLength={2500} value={values.message} onChange={event => setValues({...values, message: event.target.value})} placeholder="Please share a general enquiry only — do not include personal medical information."/></label>
    <p className="susali-privacy-reminder">Please do not enter diagnoses, prescriptions, laboratory reports, patient ID numbers or other sensitive medical information in this public enquiry form.</p>
    <button className="btn btn-primary submit-btn" type="submit">{site.email ? 'Prepare email enquiry' : copied ? 'Enquiry copied' : 'Copy enquiry'} {copied ? <Check size={18}/> : site.email ? <ArrowUpRight size={18}/> : <Copy size={18}/>}</button>
    <p className="form-disclaimer">{site.email ? 'This opens your email application with the message prepared. Nothing is submitted or stored on the website.' : 'An official recipient has not been configured. The form copies your message; it does not send or store an enquiry.'}</p>
  </form>;
}
