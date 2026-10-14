// SUSALI website content — review draft. Keep patient data out of this public site.
export const site = {
  brand: 'SUSALI',
  tagline: 'Your healthcare journey. One connected platform.',
  description: 'Healthcare coordination from authorized referrals and hospital appointments to treatment documentation and continued care.',
  // Replace ONLY with approved contact channels. Empty values are not shown publicly.
  email: '',
  phone: '',
  whatsapp: '',
  address: '',
  mapsUrl: '',
  // Optional link to the SEPARATE SUSALI patient platform, after official URL is confirmed:
  patientPortalUrl: '',
};

export const services = [
  {
    id: '01', icon: 'UserRoundPlus', title: 'Patient Registration & Profile', tag: 'One patient profile',
    desc: 'Register with SUSALI and use one digital healthcare profile across future visits and referrals.',
    detail: 'Your existing profile connects previous treatment history with new healthcare episodes.',
    features: ['Individual patient profile', 'Available medical history', 'Continue with the same account'],
  },
  {
    id: '02', icon: 'ClipboardCheck', title: 'Digital Referral Submission', tag: 'Structured referrals',
    desc: 'After receiving a referral from the superintendent, log in and submit the required referral details.',
    detail: 'A separate new health issue requires a fresh superintendent referral, not a new patient profile.',
    features: ['Dispensary and superintendent pathway', 'Referral form submission', 'Fresh referral for each new health issue'],
  },
  {
    id: '03', icon: 'CalendarCheck2', title: 'Hospital Appointment Coordination', tag: 'Connected appointments',
    desc: 'SUSALI coordinates the hospital appointment following an authorized referral submission.',
    detail: 'Appointment information helps patients prepare for their hospital visit.',
    features: ['Referral-linked appointments', 'Coordinated hospital visit', 'Appointment details'],
  },
  {
    id: '04', icon: 'Building2', title: 'Hospital Consultation & Treatment', tag: 'Professional care',
    desc: 'Patients attend their hospital visit for OPD, IPD, investigations or surgery when medically advised.',
    detail: 'Diagnosis, clinical decisions and treatment remain the responsibility of qualified hospital professionals.',
    features: ['OPD consultation', 'IPD admission where needed', 'Doctor-recommended procedures and tests'],
  },
  {
    id: '05', icon: 'FolderHeart', title: 'Digital Medical Records', tag: 'Connected health history',
    desc: 'Authorized hospital staff upload prescriptions, lab and scan reports, and relevant treatment details after care.',
    detail: 'Patients can access documents available in their existing SUSALI profile for future healthcare visits.',
    features: ['Prescriptions and available reports', 'Hospital-uploaded documents', 'Previous treatment history'],
  },
  {
    id: '06', icon: 'RefreshCcw', title: 'Follow-up & Continued Care', tag: 'Beyond one visit',
    desc: 'Keep doctor-recommended follow-up information connected with earlier treatment and records.',
    detail: 'A new condition needs a new referral. The referral requirement for follow-ups for the same condition is being confirmed.',
    features: ['Follow-up information', 'Previous visit documents', 'Ongoing health history'],
  },
];

export const journey = [
  { num: '01', title: 'Register with SUSALI', short: 'Registration', icon: 'UserRoundPlus', desc: 'Create a digital healthcare profile once, then return to the same profile for future healthcare needs.' },
  { num: '02', title: 'Visit the dispensary', short: 'Dispensary', icon: 'Stethoscope', desc: 'When a health issue arises, visit the dispensary and follow the initial healthcare process.' },
  { num: '03', title: 'Obtain a referral', short: 'Superintendent referral', icon: 'ClipboardCheck', desc: 'The authorized superintendent issues the necessary hospital referral.' },
  { num: '04', title: 'Submit referral online', short: 'Submit referral', icon: 'FileText', desc: 'Log in to your existing SUSALI profile and enter the referral and required patient details.' },
  { num: '05', title: 'Hospital appointment', short: 'Appointment', icon: 'CalendarCheck2', desc: 'The hospital appointment is coordinated and its details are shared with the patient.' },
  { num: '06', title: 'Hospital treatment', short: 'Hospital care', icon: 'Building2', desc: 'Attend the hospital for OPD, IPD, investigations or a surgical procedure if advised by the treating doctor.' },
  { num: '07', title: 'Hospital uploads records', short: 'Records uploaded', icon: 'FileUp', desc: 'Authorized hospital personnel upload relevant prescriptions, lab reports, scans and treatment documents after care.' },
  { num: '08', title: 'Follow-up & future visits', short: 'Continued care', icon: 'RefreshCcw', desc: 'Review uploaded records and follow-up details in the same profile. A new health issue needs a new superintendent referral.' },
];

export const recordTypes = [
  { icon: 'FileText', title: 'Doctor prescriptions', desc: 'Available prescriptions uploaded by the hospital.' },
  { icon: 'TestTube', title: 'Laboratory reports', desc: 'Reports from recommended tests, when uploaded.' },
  { icon: 'ScanLine', title: 'Scan reports', desc: 'Available reports from medical imaging investigations.' },
  { icon: 'ClipboardCheck', title: 'Treatment information', desc: 'Relevant treatment documents from hospital visits.' },
  { icon: 'FileCheck2', title: 'Discharge summaries', desc: 'Discharge documents where applicable and provided.' },
  { icon: 'CalendarCheck2', title: 'Follow-up information', desc: 'Return-visit recommendations and related details.' },
];

export const networkGroups = [
  { icon: 'HeartHandshake', title: 'Patients', desc: 'Register, submit referral information, receive appointments and view available uploaded records.' },
  { icon: 'Stethoscope', title: 'Dispensaries', desc: 'The first point of contact when patients seek support for a new health concern.' },
  { icon: 'ClipboardCheck', title: 'Superintendents', desc: 'Provide the authorized hospital referrals required by the SUSALI process.' },
  { icon: 'UsersRound', title: 'Coordination teams', desc: 'Help organize referral processing, appointment arrangements and communication.' },
  { icon: 'Building2', title: 'Hospitals', desc: 'Provide clinical care and have authorized staff upload the relevant treatment records.' },
];

export const faqs = [
  { category: 'General', q: 'What is SUSALI?', a: 'SUSALI is a healthcare coordination platform that brings together patient referrals, hospital appointments, treatment documentation and access to available digital medical records.' },
  { category: 'General', q: 'Is SUSALI a hospital?', a: 'No. SUSALI supports healthcare coordination. Medical examinations, diagnosis and treatment are carried out by qualified healthcare professionals at the relevant hospitals.' },
  { category: 'General', q: 'Who can register with SUSALI?', a: 'SUSALI is intended for patients eligible for its referral and healthcare coordination process. Exact eligibility and required registration documents should be confirmed through official channels.' },
  { category: 'Registration', q: 'How do I register with SUSALI?', a: 'Begin by creating a patient profile through the designated SUSALI registration process. The official patient-platform link will be published once confirmed.' },
  { category: 'Registration', q: 'Do I have to register again for a new health issue?', a: 'No. You continue using your existing SUSALI patient profile. For a different new health issue, however, you must obtain a fresh referral from the superintendent.' },
  { category: 'Referrals', q: 'How do I obtain a hospital referral?', a: 'When you have a health issue, visit the dispensary. The authorized superintendent then issues the required hospital referral as applicable.' },
  { category: 'Referrals', q: 'Can I submit my referral online?', a: 'Yes. After receiving the referral, log in to your SUSALI profile and complete the referral form with the required details.' },
  { category: 'Referrals', q: 'Does every new health issue require another referral?', a: 'Yes. A new health issue requires a new referral from the superintendent. Your existing SUSALI profile and previously uploaded treatment history remain connected to your account.' },
  { category: 'Appointments', q: 'How is my hospital appointment arranged?', a: 'After you submit the required referral details, the hospital appointment is coordinated and appointment information is communicated through the applicable SUSALI process.' },
  { category: 'Appointments', q: 'Does a follow-up visit for the same illness need a new referral?', a: 'The referral requirement for a doctor-recommended follow-up for the same health issue is awaiting final confirmation. Follow the instructions provided by your superintendent or SUSALI coordination team.' },
  { category: 'Treatment', q: 'What happens when I reach the hospital?', a: 'The treating hospital evaluates your condition and provides the medically appropriate care, which may involve OPD consultation, IPD admission, tests, scans or a procedure.' },
  { category: 'Treatment', q: 'Does SUSALI itself perform operations or offer treatment?', a: 'No. Clinical assessments and medical treatment, including operations, are performed by qualified healthcare professionals at hospitals. SUSALI supports coordination and information flow.' },
  { category: 'Medical Records', q: 'Who uploads my prescription and reports?', a: 'Authorized hospital staff upload relevant medical documents after treatment, including prescriptions, laboratory reports, scans and treatment details where applicable.' },
  { category: 'Medical Records', q: 'What medical documents can I view?', a: 'You can access documents available in your SUSALI profile, such as uploaded prescriptions, lab reports, scan reports, treatment details and follow-up information.' },
  { category: 'Medical Records', q: 'Can I use my previous records during another hospital visit?', a: 'Yes. Previously uploaded records remain associated with your existing SUSALI profile and can be accessed through your account, subject to the platform’s access permissions.' },
  { category: 'Network', q: 'What is the SUSALI healthcare network?', a: 'It describes the participants supporting a coordinated patient journey, including dispensaries, superintendents, coordination teams and participating hospitals. Confirmed partners will be listed only with approval.' },
  { category: 'Network', q: 'How can a healthcare institution contact SUSALI?', a: 'Healthcare organizations can reach out through the official contact details once published on the SUSALI website.' },
  { category: 'General', q: 'Can this website help with a medical emergency?', a: 'No. This is an informational website, not an emergency medical service. For emergencies, contact local emergency services or the nearest emergency department.' },
];
