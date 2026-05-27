/**
 * Countries we help students apply to for MBBS Abroad and Study Abroad.
 * `code` is ISO 3166-1 alpha-2 (used to look up the flag SVG component
 * from `country-flag-icons/react/3x2`).
 */
export type AbroadUniversity = {
  name: string;
  city?: string;
  tag?: string;
};

export type AbroadCountry = {
  code: string;
  name: string;
  blurb: string;
  universities: AbroadUniversity[];
};

export const mbbsAbroad: AbroadCountry[] = [
  {
    code: 'RU',
    name: 'Russia',
    blurb: 'WHO-listed, NMC-recognised medical universities with low tuition.',
    universities: [
      { name: 'Bashkir State Medical University', city: 'Ufa', tag: 'WHO · NMC' },
      { name: 'Kazan Federal University', city: 'Kazan', tag: 'WHO · NMC' },
      { name: 'Crimea Federal University', city: 'Simferopol', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'GE',
    name: 'Georgia',
    blurb: 'English-medium MBBS in Europe, no entrance exam required.',
    universities: [
      { name: 'Tbilisi State Medical University', city: 'Tbilisi', tag: 'WHO · WFME' },
      { name: 'New Vision University', city: 'Tbilisi', tag: 'WHO · NMC' },
      { name: 'David Tvildiani Medical University', city: 'Tbilisi', tag: 'WHO · WFME' },
    ],
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    blurb: 'Affordable MBBS at NMC-recognised state medical universities.',
    universities: [
      { name: 'Kazakh National Medical University', city: 'Almaty', tag: 'WHO · NMC' },
      { name: 'Astana Medical University', city: 'Astana', tag: 'WHO · NMC' },
      { name: 'South Kazakhstan Medical Academy', city: 'Shymkent', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    blurb: 'Budget-friendly MBBS with strong Indian student community.',
    universities: [
      { name: 'Osh State Medical University', city: 'Osh', tag: 'WHO · NMC' },
      { name: 'Kyrgyz National University', city: 'Bishkek', tag: 'WHO · NMC' },
      { name: 'Asian Medical Institute', city: 'Kant', tag: 'WHO · NMC' },
      { name: 'Jalal-Abad State Medical University', city: 'Jalal-Abad', tag: 'WHO · NMC' },
      { name: 'Eurasian International Medical University', city: 'Bishkek', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'EG',
    name: 'Egypt',
    blurb: 'Historic medical schools at ancient universities — English instruction.',
    universities: [
      { name: 'Cairo University Faculty of Medicine', city: 'Cairo', tag: 'WHO · WFME' },
      { name: 'Alexandria University', city: 'Alexandria', tag: 'WHO · WFME' },
      { name: 'Ain Shams University', city: 'Cairo', tag: 'WHO · WFME' },
    ],
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    blurb: 'Modern campuses with internships at top Tashkent hospitals.',
    universities: [
      { name: 'Tashkent Medical Academy', city: 'Tashkent', tag: 'WHO · NMC' },
      { name: 'Samarkand State Medical University', city: 'Samarkand', tag: 'WHO · NMC' },
      { name: 'Andijan State Medical Institute', city: 'Andijan', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'PH',
    name: 'Philippines',
    blurb: 'American-pattern curriculum, English-only instruction, US-style USMLE prep.',
    universities: [
      { name: 'University of Perpetual Help System DALTA', city: 'Las Piñas', tag: 'WHO · NMC' },
      { name: 'AMA School of Medicine', city: 'Makati', tag: 'WHO · NMC' },
      { name: 'Davao Medical School Foundation', city: 'Davao', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    blurb: 'NMC-recognised colleges with curriculum aligned to Indian MBBS.',
    universities: [
      { name: 'Dhaka Medical College', city: 'Dhaka', tag: 'WHO · NMC' },
      { name: 'Sylhet MAG Osmani Medical College', city: 'Sylhet', tag: 'WHO · NMC' },
      { name: 'Chittagong Medical College', city: 'Chittagong', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'NP',
    name: 'Nepal',
    blurb: 'NMC-recognised colleges close to home with Indian-pattern MBBS.',
    universities: [
      { name: 'Kathmandu Medical College', city: 'Kathmandu', tag: 'WHO · NMC' },
      { name: 'B.P. Koirala Institute of Health Sciences', city: 'Dharan', tag: 'WHO · NMC' },
      { name: 'Manipal College of Medical Sciences', city: 'Pokhara', tag: 'WHO · NMC' },
    ],
  },
  {
    code: 'AM',
    name: 'Armenia',
    blurb: 'European MBBS with low tuition and FAIMER-accredited universities.',
    universities: [
      { name: 'Yerevan State Medical University', city: 'Yerevan', tag: 'WHO · NMC' },
      { name: 'University of Traditional Medicine', city: 'Yerevan', tag: 'WHO · NMC' },
    ],
  },
];

export const studyAbroad: AbroadCountry[] = [
  {
    code: 'US',
    name: 'USA',
    blurb: 'Ivy League + top public research universities for STEM, MBA & liberal arts.',
    universities: [
      { name: 'Harvard University', city: 'Cambridge, MA', tag: 'Ivy' },
      { name: 'Massachusetts Institute of Technology', city: 'Cambridge, MA', tag: 'STEM' },
      { name: 'Stanford University', city: 'Stanford, CA', tag: 'STEM · Business' },
      { name: 'Columbia University', city: 'New York, NY', tag: 'Ivy' },
    ],
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    blurb: 'Russell Group universities — Oxbridge plus world-class research powerhouses.',
    universities: [
      { name: 'University of Oxford', city: 'Oxford', tag: 'Russell Group' },
      { name: 'University of Cambridge', city: 'Cambridge', tag: 'Russell Group' },
      { name: 'Imperial College London', city: 'London', tag: 'STEM' },
      { name: 'University College London', city: 'London', tag: 'Russell Group' },
    ],
  },
  {
    code: 'CA',
    name: 'Canada',
    blurb: 'Post-graduation work permits + pathways to PR for international students.',
    universities: [
      { name: 'University of Toronto', city: 'Toronto', tag: 'U15' },
      { name: 'McGill University', city: 'Montréal', tag: 'U15' },
      { name: 'University of British Columbia', city: 'Vancouver', tag: 'U15' },
      { name: 'University of Waterloo', city: 'Waterloo', tag: 'STEM' },
    ],
  },
  {
    code: 'AU',
    name: 'Australia',
    blurb: 'Group of Eight universities with strong post-study work rights.',
    universities: [
      { name: 'University of Melbourne', city: 'Melbourne', tag: 'Go8' },
      { name: 'University of Sydney', city: 'Sydney', tag: 'Go8' },
      { name: 'Monash University', city: 'Melbourne', tag: 'Go8' },
      { name: 'Australian National University', city: 'Canberra', tag: 'Go8' },
    ],
  },
  {
    code: 'DE',
    name: 'Germany',
    blurb: 'Public universities with low or zero tuition. English-taught Masters.',
    universities: [
      { name: 'TU Munich', city: 'Munich', tag: 'TU9' },
      { name: 'Heidelberg University', city: 'Heidelberg', tag: 'Top 50' },
      { name: 'RWTH Aachen', city: 'Aachen', tag: 'STEM' },
    ],
  },
  {
    code: 'IE',
    name: 'Ireland',
    blurb: 'Two-year stay-back visa post Masters · English-speaking · EU access.',
    universities: [
      { name: 'Trinity College Dublin', city: 'Dublin', tag: 'Top 100' },
      { name: 'University College Dublin', city: 'Dublin', tag: 'Top 200' },
      { name: 'University of Galway', city: 'Galway', tag: 'Top 300' },
    ],
  },
  {
    code: 'SG',
    name: 'Singapore',
    blurb: 'Asia-Pacific hub with top global rankings + strong industry placements.',
    universities: [
      { name: 'National University of Singapore', city: 'Singapore', tag: 'Top 10' },
      { name: 'Nanyang Technological University', city: 'Singapore', tag: 'Top 20' },
    ],
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    blurb: 'Three-year post-study work visa · safe study destination.',
    universities: [
      { name: 'University of Auckland', city: 'Auckland', tag: 'Top 100' },
      { name: 'University of Otago', city: 'Dunedin', tag: 'Top 200' },
    ],
  },
];
