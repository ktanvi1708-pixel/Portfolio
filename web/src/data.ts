export type WorkEntry = {
  company: string;
  date: string;
  role: string;
  desc: string;
};

export const workEntries: WorkEntry[] = [
  {
    company: 'Adani Enterprises',
    date: 'Oct 2024 — Present',
    role: "UI/UX Designer — CTO's Office",
    desc: 'Designing for 30 million users. Leading UX across 4 verticals — AI Labs (Sirius DigiTech), Cyber Security, Adani Digital Labs (Adani One), and Tech Business Development. Delivered 5 enterprise platforms and 3 SaaS dashboards, driving a 15% increase in site visits and client acquisition. Built a WCAG-compliant design system used across all digital touchpoints.',
  },
  {
    company: 'Green Dot Agro',
    date: 'May — Oct 2024',
    role: 'Creative Associate & Management Trainee',
    desc: 'Sole designer. Built the entire brand identity system from zero — logo, colour, typography, packaging, and visual language. Managed IP registration and trademark filing independently.',
  },
  {
    company: 'Hekate Industries',
    date: 'Feb — Apr 2024',
    role: 'Packaging Designer & Creative Consultant',
    desc: 'Defined the visual language and brand-aligned design system across 5 SKUs. Validated 8 design concepts through prototyping and iterative stakeholder feedback.',
  },
  {
    company: 'N.K. Proteins (Olixir Oils)',
    date: 'Jan — Jul 2022',
    role: 'Product Packaging & Artwork Designer',
    desc: 'Full packaging pipeline across 20+ SKUs and 4 product ranges — 3D bottle modelling, dieline development, and 80+ print-ready label variants. Improved brand engagement by 12%.',
  },
];

export type FilterKey =
  | 'all'
  | 'ux-research'
  | 'service-design'
  | 'ui-ux'
  | 'branding'
  | 'packaging';

export const filterTabsBase: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Work' },
  { key: 'ux-research', label: 'UX Research' },
  { key: 'service-design', label: 'Service Design' },
  { key: 'ui-ux', label: 'UI/UX' },
  { key: 'branding', label: 'Branding' },
  { key: 'packaging', label: 'Packaging' },
];

export type Project = {
  id: string;
  tags: FilterKey[];
  domain: string;
  /** Short name shown in the Selected Work hover list. */
  shortTitle: string;
  /** Full name shown in the tilted preview card and elsewhere. */
  title: string;
  desc: string;
  meta: string;
  cta: string;
  /** Path under public/ to a real project screenshot, if one exists yet. */
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'proj-crushcup',
    tags: ['service-design', 'ux-research'],
    domain: 'Service Design · Research',
    shortTitle: 'Crush Cup',
    title: 'Crush Cup: Revival of the Terracotta',
    desc: 'Redesigning takeaway coffee culture in the UK through a sustainable terracotta cup service system. Masters thesis. CEA Prize winner.',
    meta: 'GSA, Scotland · 2023',
    cta: '7 min read →',
  },
  {
    id: 'proj-nexushift',
    tags: ['service-design', 'ux-research'],
    domain: 'Service Design · Fintech',
    shortTitle: 'NexuShift',
    title: 'NexuShift: Fair Finance in the UK',
    desc: 'A service design intervention addressing financial exclusion for underserved communities in the UK. System mapping, co-design workshops.',
    meta: 'UK · 2023',
    cta: '9 min read →',
    image: '/work/nexushift.png',
  },
  {
    id: 'proj-adanione',
    tags: ['ux-research'],
    domain: 'UX Research · Usability Study',
    shortTitle: 'AdaniOne',
    title: 'AdaniOne — UX Research & Usability Study',
    desc: "End-to-end usability research for India's largest airport super-app across 5 archetypes.",
    meta: 'India · 2024',
    cta: '8 min read →',
    image: '/work/adanione.png',
  },
  {
    id: 'proj-noir',
    tags: ['ui-ux'],
    domain: 'UI/UX · Web Design',
    shortTitle: 'Noir Beauty',
    title: 'Noir Beauty',
    desc: 'A minimalist beauty webpage redefining luxury through clean graphics, soft pastels, and deliberate negative space.',
    meta: 'Web · 2024',
    cta: 'View Prototype →',
    image: '/work/noir-beauty.png',
  },
  {
    id: 'proj-pricegenius',
    tags: ['ui-ux'],
    domain: 'UI/UX · B2B · Enterprise',
    shortTitle: 'PriceGenius.AI',
    title: 'PriceGenius.AI — Sirius DigiTech',
    desc: 'Live product webpage for an enterprise AI procurement forecaster. Contributed to a 15% increase in client acquisition.',
    meta: 'Web · 2024',
    cta: 'View Live →',
    image: '/work/pricegenius-ai.png',
  },
  {
    id: 'proj-sirius',
    tags: ['ui-ux'],
    domain: 'UI/UX · Industrial AI',
    shortTitle: 'Sirius DigiTech',
    title: 'Sirius DigiTech — Homepage',
    desc: 'Flagship homepage unifying 7 enterprise-scale AI products for energy, aviation, and industrial operations.',
    meta: 'Web · 2024',
    cta: 'View Live →',
    image: '/work/sirius-digitech.png',
  },
  {
    id: 'proj-alife',
    tags: ['packaging'],
    domain: 'Packaging Design',
    shortTitle: 'Alife',
    title: 'Alife — Soap & Hand Sanitiser',
    desc: 'Packaging identity rooted in clean living and minimal material waste.',
    meta: '2022',
    cta: '5 min read →',
    image: '/work/alife.png',
  },
  {
    id: 'proj-vedas',
    tags: ['packaging'],
    domain: 'Packaging Design',
    shortTitle: 'The Vedas',
    title: 'The Vedas — Green Tea',
    desc: 'Packaging design drawing from ancient Indian philosophy and botanical illustration.',
    meta: '2022',
    cta: '4 min read →',
    image: '/work/the-vedas.png',
  },
  {
    id: 'proj-greendot',
    tags: ['branding'],
    domain: 'Branding · Identity',
    shortTitle: 'Green Dot Agro',
    title: 'Green Dot Agro Pvt. Ltd.',
    desc: 'Brand identity for an agritech company — balancing trust, modernity, and agricultural rootedness.',
    meta: '2022',
    cta: '4 min read →',
    image: '/work/green-dot-agro.png',
  },
  {
    id: 'proj-xlr8',
    tags: ['branding'],
    domain: 'Branding · Aerospace',
    shortTitle: 'XLR8 Aerospace',
    title: 'XLR8 Aerospace',
    desc: 'Brand identity for an aerospace startup — precision, ambition, and futurism.',
    meta: '2023',
    cta: '3 min read →',
    image: '/work/xlr8-aerospace.png',
  },
];

export type SkillDomain = {
  title: string;
  pills: string[];
};

export const skillDomains: SkillDomain[] = [
  {
    title: 'UX Research & Design',
    pills: [
      'User Research & Usability Testing',
      'Design Systems',
      'Wireframing & Prototyping',
      'Journey Mapping',
      'Information Architecture',
      'Service Blueprinting',
      'Design Thinking',
      'WCAG & Accessibility',
    ],
  },
  {
    title: 'Service Design',
    pills: [
      'System Mapping',
      'Service Blueprinting',
      'Touchpoint Design',
      'Behaviour Change',
      'Co-design',
      'NPD Journey Mapping',
    ],
  },
  {
    title: 'Branding & Packaging',
    pills: ['Brand Identity', 'Visual Systems', 'Packaging Design', 'Typography', 'Illustration'],
  },
  {
    title: 'Design Tools',
    pills: ['Figma', 'Figma Make', 'Adobe Photoshop', 'Maze', 'Hotjar', 'Miro', 'Notion', 'Adobe Suite'],
  },
  {
    title: 'AI Tools',
    pills: ['Google AI Studio', 'Google Stitch', 'ChatGPT', 'Claude', 'Midjourney', 'Runway ML'],
  },
];

export const aboutStats = [
  { value: '3', label: 'Continents of inspiration — UK, India, Indonesia' },
  { value: '847', label: 'Post-its that gave their life' },
  { value: '528', label: 'Stickers bought for serotonin' },
  { value: '48', label: 'Times screamed "It\'s not working!!"' },
];
