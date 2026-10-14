'use client';
import { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { faqs } from '@/data/site';

export default function FaqExplorer({ limit = 0 }) {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(null);
  const categories = ['All', ...new Set(faqs.map(item => item.category))];
  const featured = [
    'What is SUSALI?',
    'Does every new health issue require another referral?',
    'Who uploads my prescription and reports?',
    'Can I use my previous records during another hospital visit?',
  ];
  const items = limit
    ? featured.map(question => faqs.find(item => item.q === question)).filter(Boolean).slice(0, limit)
    : faqs.filter(item => (active === 'All' || item.category === active) && `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase().trim()));

  return <div className="faq-explorer">
    {!limit && <>
      <label className="susali-faq-search"><Search size={19}/><span className="sr-only">Search FAQs</span><input type="search" placeholder="Search registration, referrals, records..." value={query} onChange={event => { setQuery(event.target.value); setOpened(null); }}/></label>
      <div className="faq-filters" role="group" aria-label="Filter FAQ topics">{categories.map(category => <button type="button" key={category} aria-pressed={active === category} className={active === category ? 'selected' : ''} onClick={() => { setActive(category); setOpened(null); }}>{category}</button>)}</div>
    </>}
    <div className="faq-list">{items.length === 0 && <p className="susali-faq-empty">No questions match that search. Try another term or choose a different topic.</p>}{items.map(item => <div key={item.q} className={'faq-item ' + (opened === item.q ? 'faq-open' : '')}><button type="button" aria-expanded={opened === item.q} aria-controls={'faq-answer-' + faqs.indexOf(item)} onClick={() => setOpened(opened === item.q ? null : item.q)}><span>{item.q}</span><span className="faq-toggle">{opened === item.q ? <Minus size={18}/> : <Plus size={18}/>}</span></button>{opened === item.q && <div className="faq-answer" id={'faq-answer-' + faqs.indexOf(item)}><p>{item.a}</p></div>}</div>)}</div>
  </div>;
}
