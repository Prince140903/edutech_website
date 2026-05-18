export type Program = {
  title: string;
  duration: string;
  fee?: string;
  category: string;
};

export type Stream = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  longDesc: string;
  programs: string[];
  specializations: { title: string; duration: string; desc: string }[];
  eligibility: string[];
  exam: string;
  accred: string;
  collegesMumbai: string[];
  collegesPune: string[];
  gradient: string;
  accent: string;
};

export type University = {
  name: string;
  accred: string;
  mode: string;
  accent: string;
};

export const onlinePrograms: Program[] = [
  { title: 'BBA', duration: '3 years', fee: '₹35,000/yr', category: 'Management' },
  { title: 'MBA', duration: '2 years', fee: '₹45,000/yr', category: 'Management' },
  { title: 'MBA-ACCA', duration: '2 years', fee: '₹55,000/yr', category: 'Management' },
  { title: 'BCA', duration: '3 years', fee: '₹35,000/yr', category: 'Computer Applications' },
  { title: 'BCA (TCS) Data Analytics', duration: '3 years', fee: '₹40,000/yr', category: 'Computer Applications' },
  { title: 'MCA', duration: '2 years', fee: '₹45,000/yr', category: 'Computer Applications' },
  { title: 'MCA (TCS) ML / AR-VR', duration: '2 years', fee: '₹50,000/yr', category: 'Computer Applications' },
  { title: 'B.Com', duration: '3 years', fee: '₹35,000/yr', category: 'Commerce' },
  { title: 'B.Com-ACCA', duration: '3 years', fee: '₹45,000/yr', category: 'Commerce' },
  { title: 'M.Com-FM', duration: '2 years', fee: '₹45,000/yr', category: 'Commerce' },
  { title: 'BA', duration: '3 years', fee: '₹35,000/yr', category: 'Arts & Media' },
  { title: 'BA-JMC', duration: '3 years', fee: '₹40,000/yr', category: 'Arts & Media' },
  { title: 'MA-JMC / Psychology', duration: '2 years', fee: '₹45,000/yr', category: 'Arts & Media' },
  { title: 'M.Sc Data Science', duration: '2 years', fee: '₹50,000/yr', category: 'Data & Tech' },
];

export const distancePrograms: Program[] = [
  { title: 'BA', duration: '3 years', category: 'Undergraduate' },
  { title: 'B.Com', duration: '3 years', category: 'Undergraduate' },
  { title: 'BBA', duration: '3 years', category: 'Undergraduate' },
  { title: 'BCA', duration: '3 years', category: 'Undergraduate' },
  { title: 'BA-JMC', duration: '3 years', category: 'Undergraduate' },
  { title: 'BA-Vernacular', duration: '3 years', category: 'Undergraduate' },
  { title: 'MA', duration: '2 years', category: 'Postgraduate' },
  { title: 'M.Com', duration: '2 years', category: 'Postgraduate' },
  { title: 'MBA', duration: '2 years', category: 'Postgraduate' },
  { title: 'MCA', duration: '2 years', category: 'Postgraduate' },
  { title: 'M.Sc', duration: '2 years', category: 'Postgraduate' },
  { title: 'M.Sc-IT', duration: '2 years', category: 'Postgraduate' },
  { title: 'MA-JMC', duration: '2 years', category: 'Postgraduate' },
  { title: 'MA-PPG', duration: '2 years', category: 'Postgraduate' },
  { title: 'PGDBM', duration: '1 year', category: 'Diploma' },
  { title: 'PGDCA', duration: '1 year', category: 'Diploma' },
];

export const vocationalPrograms: Program[] = [
  { title: 'Medical Lab Technology', duration: '1 year', category: 'Healthcare' },
  { title: 'X-Ray Technology', duration: '1 year', category: 'Healthcare' },
  { title: 'Radiology & Medical Imaging', duration: '1 year', category: 'Healthcare' },
  { title: 'Optometry Technology', duration: '1 year', category: 'Healthcare' },
  { title: 'Patient Care Management', duration: '1 year', category: 'Healthcare' },
  { title: 'Hospital Management', duration: '1 year', category: 'Healthcare' },
  { title: 'Geriatric Care Aide (GCA)', duration: '1 year', category: 'Healthcare' },
  { title: 'Dietetics & Nutrition', duration: '1 year', category: 'Healthcare' },
  { title: 'Front Office Operations', duration: '1 year', category: 'Hospitality' },
  { title: 'Food & Beverage', duration: '1 year', category: 'Hospitality' },
  { title: 'Food Production', duration: '1 year', category: 'Hospitality' },
  { title: 'Graphics Designing', duration: '1 year', category: 'Creative Arts' },
  { title: 'Animation & VFX', duration: '1 year', category: 'Creative Arts' },
  { title: 'Fashion Designing', duration: '1 year', category: 'Creative Arts' },
  { title: 'Hair Dressing', duration: '1 year', category: 'Beauty & Wellness' },
  { title: 'Beauty Therapy', duration: '1 year', category: 'Beauty & Wellness' },
  { title: 'Makeup Artistry', duration: '1 year', category: 'Beauty & Wellness' },
  { title: 'Pre-Primary Teachers (Montessori)', duration: '1 year', category: 'Education' },
];

export const streams: Stream[] = [
  {
    slug: 'engineering',
    name: 'Engineering',
    tag: 'Engineering',
    blurb: 'B.Tech, M.Tech & Diplomas in CS, Mechanical, Electronics & Communication.',
    longDesc:
      'Industry-aligned engineering education with AICTE-approved programs at top NIRF-ranked institutes. Specialize in cutting-edge fields like AI/ML, IoT, robotics and embedded systems with hands-on lab work and internships.',
    programs: ['B.Tech (4 yrs)', 'M.Tech', 'Diploma', 'AI / ML / Data Science'],
    specializations: [
      {
        title: 'Computer Science',
        duration: '4 years',
        desc: 'Specializations in AI, ML, Data Science and Software Engineering.',
      },
      {
        title: 'Mechanical Engineering',
        duration: '4 years',
        desc: 'Focus on robotics, automation, and manufacturing technologies.',
      },
      {
        title: 'Electronics & Communication',
        duration: '4 years',
        desc: 'Study embedded systems, IoT, and communication networks.',
      },
    ],
    eligibility: [
      'Class 12th with Physics, Chemistry, Mathematics as core subjects',
      '50–75% in qualifying examination (varies by institute)',
      'JEE Main, JEE Advanced, or State-level CETs',
    ],
    exam: 'JEE Main · JEE Advanced · State CETs',
    accred: 'AICTE',
    collegesMumbai: [
      'IIT Bombay',
      'Institute of Chemical Technology',
      'VJTI',
      'SPIT',
      'MPSTME',
    ],
    collegesPune: [
      'College of Engineering Pune (COEP)',
      'PICT',
      'IIIT Pune',
      'MIT-WPU',
      'Symbiosis Institute of Technology',
    ],
    gradient: 'from-[#3B82F6] to-[#0B1F4D]',
    accent: '#3B82F6',
  },
  {
    slug: 'medical',
    name: 'Medical',
    tag: 'Medical',
    blurb: 'MBBS (5.5 yrs incl. internship) and MD programs at NMC-approved institutions.',
    longDesc:
      'Comprehensive medical education across NMC-approved Indian institutions and select overseas partners. Includes hospital rotations, hands-on clinical experience and advanced research opportunities.',
    programs: ['MBBS (5.5 yrs)', 'MD', 'Clinical rotations', 'India + Overseas'],
    specializations: [
      {
        title: 'MBBS',
        duration: '5.5 years',
        desc: '5-year undergraduate medical degree followed by a 1-year internship with theory and practical training.',
      },
      {
        title: 'MD',
        duration: '3 years',
        desc: 'Doctor of Medicine — postgraduate specialization across disciplines.',
      },
      {
        title: 'Allied Health & Research',
        duration: 'Varies',
        desc: 'Modern infrastructure, experienced faculty and emphasis on clinical exposure.',
      },
    ],
    eligibility: [
      '50% in 10+2 with Physics, Chemistry, Biology',
      'NEET qualification mandatory',
      'Hospital rotations and clinical experience built into the curriculum',
    ],
    exam: 'NEET (mandatory) · 10+2 with PCB',
    accred: 'NMC',
    collegesMumbai: [
      'D.Y. Patil Medical College',
      'NMIMS Medical College',
      'AMITY Medical School',
    ],
    collegesPune: [
      'LNCT University',
      'RKDF University',
      'D.Y. Patil Medical College, Pune',
    ],
    gradient: 'from-[#E7B94C] to-[#F3D27A]',
    accent: '#E7B94C',
  },
  {
    slug: 'management',
    name: 'Management',
    tag: 'Management',
    blurb: 'BBA, MBA & MBA-ACCA with Marketing, Finance and HR specializations.',
    longDesc:
      'AICTE-approved business programs that prepare future leaders. Choose between regular, online and distance MBA paths with specializations across marketing, finance, HR and global accounting.',
    programs: ['BBA', 'MBA (2 yrs)', 'MBA-ACCA', 'PGDBM'],
    specializations: [
      {
        title: 'Marketing Management',
        duration: '2 years',
        desc: 'Specializations in Digital Marketing, Brand Management, and Market Research.',
      },
      {
        title: 'Finance Management',
        duration: '2 years',
        desc: 'Focus on Investment Banking, Financial Analysis, and Risk Management.',
      },
      {
        title: 'HR Management',
        duration: '2 years',
        desc: 'Study Talent Management, Organizational Development, and Employee Relations.',
      },
    ],
    eligibility: [
      'Graduation in any discipline with minimum 50% marks',
      'CAT, MAT, XAT, or University-specific entrance tests',
      'Written Test, Group Discussion, and Personal Interview',
    ],
    exam: 'CAT · MAT · XAT · University tests',
    accred: 'AICTE',
    collegesMumbai: [
      'NMIMS School of Business Management',
      'JBIMS',
      'SPJIMR',
      'K.J. Somaiya Institute of Management',
    ],
    collegesPune: [
      'Symbiosis Institute of Business Management (SIBM)',
      'IIM Pune',
      'MIT School of Business',
      'D.Y. Patil Institute of Management',
    ],
    gradient: 'from-[#1e3a8a] to-[#3B82F6]',
    accent: '#3B82F6',
  },
  {
    slug: 'law',
    name: 'Law',
    tag: 'Law',
    blurb: 'BA LLB, LLB and LLM with Corporate, Criminal and Constitutional tracks.',
    longDesc:
      'BCI-recognised legal education from leading law schools. Cover the full landscape — from corporate law and M&A to criminal justice, constitutional and human rights law.',
    programs: ['BA LLB (5 yrs)', 'LLB (3 yrs)', 'LLM', 'Corporate / Criminal'],
    specializations: [
      {
        title: 'Corporate Law',
        duration: '3 years',
        desc: 'Specializations in Business Law, Mergers & Acquisitions, and Securities Law.',
      },
      {
        title: 'Criminal Law',
        duration: '3 years',
        desc: 'Focus on Criminal Justice, Forensics, and Criminal Procedure.',
      },
      {
        title: 'Constitutional Law',
        duration: '3 years',
        desc: 'Study Public Law, Administrative Law, and Human Rights.',
      },
    ],
    eligibility: [
      '10+2 with minimum 50% marks for BA LLB',
      'Graduation for LLB',
      'CLAT, LSAT, University-specific entrance tests',
      'Written Test, Personal Interview, and Past Academic Record',
    ],
    exam: 'CLAT · LSAT · University tests',
    accred: 'BCI',
    collegesMumbai: [
      'D.Y. Patil School of Law',
      'Amity Law School Mumbai',
      'GLC Mumbai',
      'NMIMS Kirit P. Mehta School of Law',
      'Pravin Gandhi College of Law',
    ],
    collegesPune: [
      'D.Y. Patil Law College',
      'Amity Law School Pune',
      'ILS Law College',
      'Symbiosis Law School',
      'MIT WPU Faculty of Law',
    ],
    gradient: 'from-[#0B1F4D] to-[#1e3a8a]',
    accent: '#3B82F6',
  },
  {
    slug: 'education',
    name: 'Education',
    tag: 'Education',
    blurb: 'B.Ed, M.Ed and B.P.Ed — pedagogy, leadership and physical education tracks.',
    longDesc:
      'NCTE-approved teacher education programs with comprehensive pedagogical training. Build a career in classroom teaching, educational leadership and physical education.',
    programs: ['B.Ed (2 yrs)', 'M.Ed (2 yrs)', 'B.P.Ed', 'Pre-Primary (Montessori)'],
    specializations: [
      {
        title: 'B.Ed',
        duration: '2 years',
        desc: 'Bachelor of Education with comprehensive pedagogical training and teaching practice.',
      },
      {
        title: 'M.Ed',
        duration: '2 years',
        desc: 'Master of Education for advanced specialization in educational leadership and research.',
      },
      {
        title: 'B.P.Ed',
        duration: '2 years',
        desc: 'Bachelor of Physical Education for sports and physical education teaching careers.',
      },
    ],
    eligibility: [
      'Graduation in any discipline with minimum 50% marks',
      'State-level CETs or University-specific entrance tests',
      'Written Test, Teaching Aptitude Test, and Personal Interview',
    ],
    exam: 'State CETs · Teaching Aptitude Test',
    accred: 'NCTE',
    collegesMumbai: [
      'D.Y. Patil College of Education, Mumbai',
      'Amity School of Education Mumbai',
      'St. Xavier’s Institute of Education',
      'SNDT College of Education',
      'K.J. Somaiya College of Education',
    ],
    collegesPune: [
      'D.Y. Patil College of Education, Pune',
      'Amity School of Education Pune',
      'MIT School of Education & Research',
      'Symbiosis School of Education',
      'Tilak College of Education',
    ],
    gradient: 'from-[#F3D27A] to-[#E7B94C]',
    accent: '#E7B94C',
  },
  {
    slug: 'pharmacy',
    name: 'Pharmacy',
    tag: 'Pharmacy',
    blurb: 'B.Pharm & M.Pharm with Clinical, Research and Industrial Pharmacy paths.',
    longDesc:
      'PCI-approved pharmacy education aligned to industry needs. Specialize across clinical practice, pharmaceutical research and industrial manufacturing.',
    programs: ['B.Pharm (4 yrs)', 'M.Pharm', 'Clinical Pharmacy', 'Pharma Research'],
    specializations: [
      {
        title: 'Clinical Pharmacy',
        duration: '4 years',
        desc: 'Focus on patient care, drug therapy, and clinical research.',
      },
      {
        title: 'Pharmaceutical Research',
        duration: '4 years',
        desc: 'Specialization in drug development and pharmaceutical research.',
      },
      {
        title: 'Industrial Pharmacy',
        duration: '4 years',
        desc: 'Study pharmaceutical manufacturing and quality control.',
      },
    ],
    eligibility: [
      '10+2 with PCM/PCB with minimum 50% marks',
      'GPAT, NIPER JEE, State-level entrance tests',
      'Written Test, Personal Interview, and Academic Record',
    ],
    exam: 'GPAT · NIPER JEE · State tests',
    accred: 'PCI',
    collegesMumbai: [
      'D.Y. Patil College of Pharmacy',
      'Amity Institute of Pharmacy',
      'Bombay College of Pharmacy',
      'NMIMS School of Pharmacy',
      'K.M. Kundnani Pharmacy College',
    ],
    collegesPune: [
      'D.Y. Patil Institute of Pharmacy',
      'Amity School of Pharmacy',
      'Poona College of Pharmacy',
      'MIT Institute of Pharmacy',
      'AISSMS College of Pharmacy',
    ],
    gradient: 'from-[#3B82F6] to-[#60A5FA]',
    accent: '#3B82F6',
  },
];

export const universities: University[] = [
  {
    name: 'DY Patil University',
    accred: 'NAAC A++',
    mode: 'Online · Distance · Regular',
    accent: '#3B82F6',
  },
  {
    name: 'NMIMS University',
    accred: 'NAAC A+',
    mode: 'Online · Regular',
    accent: '#E7B94C',
  },
  {
    name: 'AMITY University',
    accred: 'NAAC A+',
    mode: 'Online · Distance · Regular',
    accent: '#3B82F6',
  },
  {
    name: 'Tilak Maharashtra University',
    accred: 'UGC Approved',
    mode: 'Distance · UGC-DEB',
    accent: '#E7B94C',
  },
  {
    name: 'BOSSE University',
    accred: 'COBSC Approved',
    mode: 'Vocational',
    accent: '#3B82F6',
  },
  {
    name: 'LNCT University',
    accred: 'UGC · NAAC',
    mode: 'Medical · Research',
    accent: '#E7B94C',
  },
  {
    name: 'RKDF University',
    accred: 'UGC · NAAC',
    mode: 'Medical · Allied',
    accent: '#3B82F6',
  },
];

export const contact = {
  phone: '+91 74001 40759',
  phoneHref: 'tel:+917400140759',
  email: 'info@glideeducation.in',
  emailHref: 'mailto:info@glideeducation.in',
  address: {
    line1: 'C-202, Second Floor, Eastern Business District (EBD)',
    line2: 'Neptune Magnet Mall, LBS Road',
    line3: 'Bhandup (W), Mumbai – 400078',
  },
};

export const navLinks = [
  { label: 'Online', href: '/online' },
  { label: 'Distance', href: '/distance' },
  { label: 'Vocational', href: '/vocational' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Universities', href: '/universities' },
  { label: 'Contact', href: '/contact' },
];
