import { PortfolioItem, Certification, EducationItem, ExperienceItem, VideoProject, SkillCategory } from '../types';

// Asset paths
export const PORTRAIT_IMAGE = new URL('../assets/images/nain_fatima_portrait_1789843735415.jpg', import.meta.url).href;
export const BZ_BRAND_IMAGE = new URL('../assets/images/bz_brand_identity_1789843752859.jpg', import.meta.url).href;
export const LINGOPULSE_CERT_IMAGE = new URL('../assets/images/lingopulse_cert_1789843768011.jpg', import.meta.url).href;
export const BZ_CARD_IMAGE = new URL('../assets/images/bz_business_card_1789843784246.jpg', import.meta.url).href;
export const HK_THUMB_IMAGE = new URL('../assets/images/hk_youtube_thumb_1789843798348.jpg', import.meta.url).href;
export const AYLA_INVITATION_IMAGE = new URL('../assets/images/ayla_invitation_1789843810806.jpg', import.meta.url).href;
export const MS_OFFICE_IMAGE = new URL('../assets/images/ms_office_infographic_1789843823917.jpg', import.meta.url).href;
export const BIOTECH_ETHICS_IMAGE = new URL('../assets/images/biotech_ethics_cert_1789843837210.jpg', import.meta.url).href;
export const FUTURE_OF_AI_IMAGE = new URL('../assets/images/future_of_ai_thumb_1789843849925.jpg', import.meta.url).href;
export const SAVE_PLANET_IMAGE = new URL('../assets/images/save_planet_thumb_1789843866049.jpg', import.meta.url).href;
export const DIGITAL_SKILLS_IMAGE = new URL('../assets/images/digital_skills_thumb_1789843878896.jpg', import.meta.url).href;

export const PERSONAL_INFO = {
  name: 'Nain Fatima',
  fullName: 'Nain Fatima Kiani',
  title: 'Biotechnology Undergraduate & Digital Visual Designer',
  tagline: 'Bridging Molecular Life Sciences with Precision Visual Communication & Digital Media',
  location: 'Islamabad, Pakistan',
  phone: '+92 315 0452700',
  email: 'nainkeyani01@gmail.com',
  linkedin: 'linkedin.com/in/nain-fatima-kiani',
  linkedinUrl: 'https://linkedin.com/in/nain-fatima-kiani',
  university: 'International Islamic University, Islamabad (IIUI)',
  currentGpa: '3.92 / 4.0 (90.5%)',
  aboutBio: `BS Biotechnology student at International Islamic University, Islamabad, combining rigorous hands-on laboratory experience in DNA extraction, genomics, and genetic disorders with professional digital design expertise. Certified in research ethics, Coursera Canva Essentials (13 courses), and Generative AI, with proven communication and pedagogical leadership from classroom teaching to community public health drives.`,
  seekingStatement: 'Seeking to apply laboratory techniques, scientific communication, and creative digital capabilities in a research or biotechnology-focused internship.',
  languages: [
    { name: 'English', proficiency: 'Fluent / Professional' },
    { name: 'Urdu', proficiency: 'Native / Fluent' }
  ]
};

export const QUICK_METRICS = [
  { label: 'Academic CGPA', value: '3.92', subtext: 'out of 4.0 (90.5% grade at IIUI)', icon: 'GraduationCap' },
  { label: 'Professional Certifications', value: '6+', subtext: 'Including 13 Coursera Canva modules', icon: 'Award' },
  { label: 'DNA & Lab Competencies', value: '100%', subtext: 'Extraction, Genomics & Ethics certified', icon: 'Dna' },
  { label: 'Classroom & Community Impact', value: '300+', subtext: 'Students mentored & patients screened', icon: 'Users' }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'bz-collection-identity',
    title: "B'z Collection — Brand Identity & Vector Emblem",
    category: 'branding',
    categoryLabel: 'Brand Identity',
    thumbnail: BZ_BRAND_IMAGE,
    clientOrContext: "B'z Collection Apparel",
    date: '2026',
    description: "Complete visual brand identity for an Islamabad-based contemporary clothing line. Crafted a minimalist geometric honey bee emblem flanked by modular honeycomb hexagons in vibrant amber gold (#FFB800) against rich carbon noir.",
    highlights: [
      'Geometric vector icon engineering with golden ratio curves',
      'Dual-contrast yellow and white hexagon frame modules',
      'Scalable apparel logo system adaptable from silk tags to storefront signage',
      'Comprehensive brand typography and negative space calibration'
    ],
    toolsUsed: ['Canva Magic Studio', 'Vector Design', 'Color Theory', 'Brand Guidelines'],
    aspectRatio: '16:9',
    featured: true,
    metadataDetails: [
      { label: 'Industry', value: 'Fashion & Apparel' },
      { label: 'Palette', value: 'Carbon Noir, Bumblebee Gold, Crisp White' },
      { label: 'Deliverables', value: 'Emblem, Wordmark, Pattern System' }
    ]
  },
  {
    id: 'lingopulse-certificate',
    title: 'LingoPulse Academy — Spoken English Course Certificate',
    category: 'certificates',
    categoryLabel: 'Credential Design',
    thumbnail: LINGOPULSE_CERT_IMAGE,
    clientOrContext: 'LingoPulse Academy',
    date: 'June 2026',
    description: 'Official academic graduation certificate designed for LingoPulse Academy. Blends a sleek vertical grosgrain ribbon banner, embossed golden seal medallion, and balanced serif/script typography for a prestigious institutional look.',
    highlights: [
      'High-contrast luxury layout with dual-tone black and gold accents',
      'Embossed metallic gold seal medallion with notched ribbons',
      'Bespoke calligraphy signature integration for Director & Instructor',
      'Print-ready vector export calibrated for heavy archival paper stock'
    ],
    toolsUsed: ['Typography Mastery', 'Canva Pro', 'Document Layout', 'Print Production'],
    aspectRatio: '4:3',
    featured: true,
    metadataDetails: [
      { label: 'Awarded For', value: '3-Month Spoken English Course' },
      { label: 'Signatories', value: 'Director Saad Ali, Instructor Fatima Noor' },
      { label: 'Format', value: 'Formal Archival Certificate' }
    ]
  },
  {
    id: 'bz-business-card',
    title: "B'z Collection — Executive Business Stationery",
    category: 'print',
    categoryLabel: 'Stationery & Print',
    thumbnail: BZ_CARD_IMAGE,
    clientOrContext: "B'z Collection Clothing Brand",
    date: '2026',
    description: 'Premium two-sided corporate business card and stationery system. Incorporates custom iconography for direct phone, verified business email, website portal, and retail address at MK Plaza, F-7/2 Islamabad.',
    highlights: [
      'Balanced typographic hierarchy for seamless legibility at 3.5" x 2" scale',
      'Custom vector contact glyphs aligned along golden honeycomb corner accents',
      'Consistent brand continuity matching the primary B\'z Collection logo system',
      'Includes physical storefront coordinates at F-7/2 Islamabad'
    ],
    toolsUsed: ['Canva Essentials', 'Print Layout', 'Stationery Systems', 'Brand Alignment'],
    aspectRatio: '16:9',
    featured: false,
    metadataDetails: [
      { label: 'Storefront', value: '2nd Floor, MK Plaza, F-7/2, Islamabad' },
      { label: 'Digital Channel', value: 'www.beezcollection.com' },
      { label: 'Print Specs', value: 'Matte Soft-Touch UV Spot Finish' }
    ]
  },
  {
    id: 'hk-creative-thumbnail',
    title: 'HK_Creative Skills — YouTube Video Thumbnail & Social Banner',
    category: 'social',
    categoryLabel: 'Social Media & YouTube',
    thumbnail: HK_THUMB_IMAGE,
    clientOrContext: 'HK_Creative Skills Channel',
    date: '2026',
    description: 'Eye-catching educational YouTube thumbnail designed for high click-through rates (CTR). Features an open spiral-bound grid workbook announcing "BATCH #10 Day 1: Art Fundamentals" surrounded by tangible artist tools.',
    highlights: [
      'Optimized for mobile YouTube feed visibility and instant recognition',
      'Tactile workspace staging with geometric compass, ruler, pencils, and sticky notes',
      'High-contrast "Like & Subscribe" notification bell banner in YouTube signature red',
      'Clean typography with strong contrast against light concrete background'
    ],
    toolsUsed: ['Canva Magic Studio', 'CTR Optimization', 'Composition Theory', 'Social Graphic Design'],
    aspectRatio: '16:9',
    featured: true,
    metadataDetails: [
      { label: 'Channel', value: 'HK_Creative Skills' },
      { label: 'Series', value: 'Batch #10 • Day 1: Art Fundamentals' },
      { label: 'Purpose', value: 'Video Click-Through Rate & Brand Recall' }
    ]
  },
  {
    id: 'ayla-birthday-invitation',
    title: "Ayla's 20th Birthday — Luxury Celebration Invitation",
    category: 'print',
    categoryLabel: 'Event & Invitation Design',
    thumbnail: AYLA_INVITATION_IMAGE,
    clientOrContext: 'Private Client (TreeHouse Cafe, Islamabad)',
    date: 'July 2026',
    description: 'Bespoke celebratory event invitation featuring a delicate champagne cream palette, floating metallic 3D balloons, gold foil ribbons, and fluid calligraphy typography for an exclusive gathering at TreeHouse Cafe.',
    highlights: [
      'Warm champagne and pearlescent gold color harmonization',
      '3D balloon depth styling with soft lighting gradients',
      'Complete event schedule, venue coordinates (F-7/2 Islamabad), and RSVP channel',
      'Optimized for both high-resolution digital WhatsApp sharing and physical print'
    ],
    toolsUsed: ['Canva Pro', 'Typography Pairing', 'Event Stationery', 'Color Palette Harmony'],
    aspectRatio: '3:4',
    featured: false,
    metadataDetails: [
      { label: 'Event Date', value: '19th July, 2026 • 06:00 PM' },
      { label: 'Venue', value: 'TreeHouse Cafe, F-7/2 Islamabad' },
      { label: 'Style', value: 'Warm Modern Luxury Celebration' }
    ]
  },
  {
    id: 'ms-office-skills-infographic',
    title: 'MS Office Mastery — Professional Capabilities Infographic',
    category: 'branding',
    categoryLabel: 'Infographics & Collateral',
    thumbnail: MS_OFFICE_IMAGE,
    clientOrContext: 'Professional Skill Showcase',
    date: '2026',
    description: 'Comprehensive infographic breakdown showcasing practical expertise across Microsoft Word, Microsoft Excel, and Microsoft PowerPoint. Pairs realistic device mockups with categorized deliverables and 4 core operational pillars.',
    highlights: [
      'Word: Document Creation, Formatting, Professional Scientific Reports',
      'Excel: Data Entry, Mathematical Formulas & Calculations, Dynamic Charts & Graphs',
      'PowerPoint: Academic Presentations, Slide Design, Animated Transitions',
      'Four Core Values: Accurate (Error-free), Efficient (On time), Creative (Impactful), Reliable (Consistent)'
    ],
    toolsUsed: ['Infographic Design', 'MS Office Suite', 'Device Mockup Composition', 'Data Visualization'],
    aspectRatio: '16:9',
    featured: true,
    metadataDetails: [
      { label: 'Applications', value: 'Word, Excel, PowerPoint' },
      { label: 'Pillars', value: 'Accurate, Efficient, Creative, Reliable' },
      { label: 'Application', value: 'Scientific & Business Reporting' }
    ]
  },
  {
    id: 'biotech-squad-ethics-cert',
    title: 'Biotech Squad — Research Ethics Certificate of Participation',
    category: 'biotech',
    categoryLabel: 'Academic & Ethics',
    thumbnail: BIOTECH_ETHICS_IMAGE,
    clientOrContext: 'Biotech Squad & Department of Biological Sciences, IIUI',
    date: 'August 20, 2026',
    description: 'Official credential from the high-level scientific webinar on "Research Ethics: Building Academic Integrity & Credibility in Scientific Research", co-signed by Dr. Sadaf Anwar (Assistant Professor, DBS, IIUI) and Habiba Noor (CEO, Biotech Squad).',
    highlights: [
      'Rigorous training in experimental ethics, author citation standards, and data integrity',
      'Endorsed by faculty of the Department of Biological Sciences at IIUI',
      'Reinforces ethical stewardship in biotechnology research and laboratory protocol execution',
      'Complements hands-on DNA extraction and genomics coursework'
    ],
    toolsUsed: ['Scientific Ethics', 'Academic Integrity', 'DBS IIUI', 'Peer Credibility'],
    aspectRatio: '4:3',
    featured: true,
    metadataDetails: [
      { label: 'Session Length', value: '2-Hour Intensive Research Webinar' },
      { label: 'Keynote Speaker', value: 'Dr. Sadaf Anwar (Asst. Prof, DBS, IIUI)' },
      { label: 'Webinar Host', value: 'Habiba Noor (CEO & Founder, Biotech Squad)' }
    ]
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'future-of-ai',
    title: 'The Future of AI: Synergy of Human & Machine Intellect',
    theme: 'Technology & Artificial Intelligence',
    duration: '0:18',
    coverImage: FUTURE_OF_AI_IMAGE,
    description: 'A dynamic, high-energy motion graphics presentation examining the expanding frontiers of artificial intelligence and its transformative convergence with human industry.',
    tags: ['AI & Robotics', 'Motion Graphics', 'Fintech & SaaS', 'Healthcare', 'Canva Magic Studio'],
    scenes: [
      {
        title: 'Prologue: The Convergence',
        caption: 'FUTURE OF AI — Human touch meeting robotic precision in a radiant spark of energy.',
        visualDescription: 'Cybernetic and biological hands reaching together with quantum data circuits and neon light filaments.',
        accentColor: 'from-blue-600 to-indigo-600'
      },
      {
        title: 'Core Ecosystem Hub',
        caption: 'Artificial Intelligence brain nexus driving 6 key industries.',
        visualDescription: 'Pulsing neural brain icon connecting Manufacturing, Fintech, SaaS, eCommerce, Healthcare, and Cloud Infrastructure.',
        accentColor: 'from-cyan-500 to-blue-700'
      },
      {
        title: 'The Partnership',
        caption: 'A firm handshake between a corporate executive and an intelligent robot.',
        visualDescription: 'Digital holographic HUD rings spinning around the handshake, displaying the tagline: "The future is intelligent".',
        accentColor: 'from-indigo-600 to-teal-500'
      },
      {
        title: 'Conclusion & Call to Action',
        caption: 'Clean, elegant signoff thanking the audience.',
        visualDescription: 'Minimalist deep navy backdrop with stylized white typography: "Thank you for watching".',
        accentColor: 'from-slate-900 to-indigo-950'
      }
    ]
  },
  {
    id: 'save-our-planet',
    title: 'Save Our Planet: Plant a Tree Today, Protect Our Tomorrow',
    theme: 'Environmental & Biodiversity Advocacy',
    duration: '0:24',
    coverImage: SAVE_PLANET_IMAGE,
    description: 'An emotional environmental awareness video highlighting forest ecology, oxygen production, clean air, wildlife preservation, and community tree planting.',
    tags: ['Ecology', 'Conservation', 'Biotechnology & Nature', 'Public Awareness', 'Video Storyboarding'],
    scenes: [
      {
        title: 'The Breath of the Earth',
        caption: 'Sunbeams piercing through a pristine primeval forest canopy.',
        visualDescription: 'Golden morning light filtering through tall green trees: "Trees give us the oxygen we breathe".',
        accentColor: 'from-emerald-600 to-lime-600'
      },
      {
        title: 'Global Climate Balance',
        caption: 'A fragile glass sphere reflecting Earth resting on fertile moss.',
        visualDescription: 'Macro shot of moss and dew drops: "Clean our air and cool our planet".',
        accentColor: 'from-teal-600 to-emerald-700'
      },
      {
        title: 'Sanctuary for Wildlife',
        caption: 'Vibrant songbirds perched peacefully on leafy branches.',
        visualDescription: 'Diverse plumage of birds sharing a limb: "Homes for wildlife and protect nature".',
        accentColor: 'from-amber-500 to-emerald-600'
      },
      {
        title: 'Generation for Tomorrow',
        caption: 'A young child smiling warmly while planting a green tree sapling with rich soil.',
        visualDescription: 'Direct call to individual responsibility: "Plant a tree today, protect our tomorrow".',
        accentColor: 'from-lime-600 to-emerald-800'
      },
      {
        title: 'United Movement',
        caption: 'Clean green signoff with rotating globe emojis.',
        visualDescription: '"Together, we can save our planet" with kinetic typography animations.',
        accentColor: 'from-emerald-800 to-teal-950'
      }
    ]
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills: Learn, Adapt, Grow',
    theme: 'Educational Literacy & Youth Empowerment',
    duration: '0:20',
    coverImage: DIGITAL_SKILLS_IMAGE,
    description: 'A vibrant educational campaign video inspiring students and youth to build digital competencies, master collaborative tools, and unlock career opportunities.',
    tags: ['Digital Literacy', 'Education', 'Student Empowerment', 'Tech Skills', 'Motion Design'],
    scenes: [
      {
        title: 'The Connected Universe',
        caption: 'Desktop workstation radiating interconnected web & social media platforms.',
        visualDescription: 'Icons of Facebook, Instagram, YouTube, LinkedIn, Chrome, and WhatsApp orbiting a glowing digital globe.',
        accentColor: 'from-purple-600 to-indigo-600'
      },
      {
        title: 'Collaborative Youth Work',
        caption: 'Diverse students collaborating energetically with laptops in a digital era.',
        visualDescription: 'Young learners coding, analyzing data, and sharing ideas under global tech icons.',
        accentColor: 'from-violet-600 to-fuchsia-600'
      },
      {
        title: 'Learn, Adapt, Grow',
        caption: 'Desktop monitor displaying core digital competencies.',
        visualDescription: 'Surrounding badges for global literacy, ideas, education, career, and growth: "Digital skills open doors to knowledge, opportunities and success".',
        accentColor: 'from-indigo-600 to-purple-800'
      },
      {
        title: 'Call to Action',
        caption: 'Clean sky-blue typographic motivation.',
        visualDescription: '"Start building your digital skills today — your future starts now!".',
        accentColor: 'from-sky-500 to-blue-700'
      }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'canva-essentials',
    title: 'Canva Essentials Professional Certificate (13 Courses)',
    issuer: 'Coursera & Industry Professionals',
    issueDate: 'August 20, 2026',
    credentialId: '23FEIS39HQFS',
    verificationUrl: 'https://coursera.org/verify/professional-cert/23FEIS39HQFS',
    thumbnail: BZ_BRAND_IMAGE,
    accreditationBadge: '13-Course Specialization',
    skillsLearned: [
      'Canva Magic Studio AI',
      'Typography & Color Theory',
      'Brand Identity Systems',
      'Social Media Campaign Strategy',
      'Video Content Creation',
      'Interactive Documents',
      'Marketing Collateral Design',
      'Portfolio Development'
    ],
    description: 'Comprehensive professional certification covering design fundamentals, typography, branding, social media campaigns, presentations, videos, and interactive documents. Explored AI-powered design with Canva Magic Studio and developed end-to-end client portfolios.',
    coursesIncluded: [
      'Canva Design Fundamentals',
      'Typography and Color Theory in Design with Canva',
      'Brand Identity Design in Canva',
      'Social Media Content Creation with Canva',
      'Presentation Design Mastery in Canva',
      'Marketing Material Design in Canva',
      'Video Content Creation in Canva',
      'Interactive Document Design in Canva',
      'Event Marketing Design in Canva',
      'AI-Powered Design with Canva Magic Studio',
      'Advanced Branding in Canva',
      'Portfolio Development in Canva',
      'Event Video & Social Media Experience Design in Canva'
    ]
  },
  {
    id: 'dna-genomics',
    title: 'DNA, Genome and Genetic Disorders',
    issuer: 'EDUCBA via Coursera',
    issueDate: 'July 23, 2026',
    credentialId: 'ONXIN661L5BV',
    verificationUrl: 'https://coursera.org/verify/ONXIN661L5BV',
    thumbnail: BIOTECH_ETHICS_IMAGE,
    accreditationBadge: 'Biotechnology Core',
    skillsLearned: [
      'DNA Structure & Molecular Biology',
      'Genomic Sequencing Principles',
      'Chromosomal Abnormalities',
      'Single-Gene & Polygenic Disorders',
      'Genetic Screening & Diagnostics'
    ],
    description: 'In-depth coursework in molecular genetics, structural DNA dynamics, human genomic architecture, and the pathophysiological mechanisms of genetic and hereditary disorders.'
  },
  {
    id: 'intro-generative-ai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud via Coursera',
    issueDate: 'June 26, 2026',
    credentialId: 'SSWTBKGMT3PU',
    verificationUrl: 'https://coursera.org/verify/SSWTBKGMT3PU',
    thumbnail: FUTURE_OF_AI_IMAGE,
    accreditationBadge: 'Google Cloud Verified',
    skillsLearned: [
      'Large Language Models (LLMs)',
      'Generative Image & Multimodal Models',
      'Prompt Design Principles',
      'Responsible AI & Bias Mitigation',
      'Google Cloud Vertex AI & AI Ecosystems'
    ],
    description: 'Authorized by Google Cloud Training. Covers the fundamentals of generative artificial intelligence, transformer model architectures, prompt engineering, and ethical AI deployment.'
  },
  {
    id: 'research-ethics',
    title: 'Research Ethics: Building Academic Integrity & Credibility in Scientific Research',
    issuer: 'Biotech Squad & Department of Biological Sciences, IIUI',
    issueDate: 'August 20, 2026',
    thumbnail: BIOTECH_ETHICS_IMAGE,
    accreditationBadge: 'Academic & Institutional',
    skillsLearned: [
      'Scientific Publication Ethics',
      'Academic Integrity & Plagiarism Standards',
      'Data Integrity & Experimental Reproducibility',
      'Ethics of Bioethics & Laboratory Compliance'
    ],
    description: 'Official credential recognizing participation in a rigorous 2-hour webinar led by Dr. Sadaf Anwar (Assistant Professor, Department of Biological Sciences, IIUI) and Habiba Noor (CEO & Founder, Biotech Squad).'
  },
  {
    id: 'cybersecurity-awareness',
    title: 'Cybersecurity Awareness: Workshop Certificate',
    issuer: 'Institutional Workshop',
    issueDate: '2025',
    thumbnail: DIGITAL_SKILLS_IMAGE,
    accreditationBadge: 'IT & Digital Safety',
    skillsLearned: [
      'Data Privacy & Digital Footprint',
      'Phishing & Social Engineering Defense',
      'Secure Communication Channels',
      'Password Hygiene & Multi-Factor Authentication'
    ],
    description: 'Completed practical workshop covering operational cybersecurity, online data protection, and safety protocols for digital communicators.'
  },
  {
    id: 'ms-excel-basics',
    title: 'MS Excel Basics & Analytical Spreadsheets',
    issuer: 'Professional Workshop Series',
    issueDate: '2025',
    thumbnail: MS_OFFICE_IMAGE,
    accreditationBadge: 'Data & Productivity',
    skillsLearned: [
      'Spreadsheet Data Entry & Hygiene',
      'Mathematical & Statistical Formulas',
      'Dynamic Charting & Graphs',
      'Tabular Data Summaries'
    ],
    description: 'Hands-on training in Microsoft Excel formula computation, data manipulation, sorting/filtering, and visual chart generation for academic and commercial reports.'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BS in Biotechnology',
    institution: 'International Islamic University, Islamabad (IIUI)',
    location: 'Islamabad, Pakistan',
    period: '2025 – Present',
    scoreOrGpa: 'Current GPA: 3.92 / 4.0 (90.5%)',
    details: [
      'Pursuing comprehensive undergraduate curriculum spanning Molecular Biology, Biochemistry, Genetics, and Microbiology.',
      'Hands-on wet lab experience in DNA extraction protocols, spectrophotometric quantification, and agarose gel electrophoresis.',
      'Active coursework in genomics, genetic disorders, and research ethics with sustained academic honors.'
    ]
  },
  {
    degree: 'FSc Pre-Medical',
    institution: 'Federal Board of Intermediate and Secondary Education (FBISE)',
    location: 'Islamabad, Pakistan',
    period: '2022 – 2024',
    scoreOrGpa: 'Pre-Medical Division with Distinction',
    details: [
      'Specialized curriculum in Advanced Biology, Chemistry, Physics, and English.',
      'Developed rigorous foundations in cellular biology, organic chemistry mechanisms, and physiology.'
    ]
  },
  {
    degree: 'Matriculation (Secondary School Certificate)',
    institution: 'Federal Board of Intermediate and Secondary Education (FBISE)',
    location: 'Islamabad, Pakistan',
    period: '2020 – 2022',
    scoreOrGpa: 'Science Subjects Honors',
    details: [
      'Core subjects: Biology, Chemistry, Physics, and Mathematics.',
      'Maintained consistent top-tier academic ranking across all STEM disciplines.'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Teacher',
    organization: 'Read Foundation School',
    location: 'Bugna, Muzaffarabad',
    period: 'Apr 2025 – Aug 2025',
    type: 'Teaching',
    responsibilities: [
      'Delivered daily structured lesson plans across core subjects to a full classroom of eager students.',
      'Adapted instructional techniques to accommodate diverse learning paces and student aptitudes.',
      'Assessed student progress regularly through quizzes and constructive feedback, communicating transparent performance updates to school administration and parents.'
    ]
  },
  {
    role: 'Teacher',
    organization: 'Hudaya Montessori',
    location: 'Bahria Phase VII, Islamabad',
    period: 'Nov 2024 – Jan 2025',
    type: 'Teaching',
    responsibilities: [
      'Planned and facilitated early-childhood learning activities focused on foundational literacy, creativity, and motor skills.',
      'Strengthened interpersonal communication, patience, empathy, and classroom group management capabilities.'
    ]
  },
  {
    role: 'Volunteer: Community Health Screening Drive',
    organization: 'Al-Khidmat Foundation (in partnership with Baseera Trust)',
    location: 'Alipur, Islamabad',
    period: '2025',
    type: 'Volunteer',
    responsibilities: [
      'Supported on-ground logistics, queue management, and patient intake coordination for a large-scale community health screening drive.',
      'Assisted medical volunteers with patient record organization and communicated health guidance with empathy to local community members.'
    ]
  },
  {
    role: 'Volunteer: School Community',
    organization: 'Hudaya Montessori',
    location: 'Bahria Phase VII, Islamabad',
    period: '2024 – 2025',
    type: 'Volunteer',
    responsibilities: [
      'Assisted school events, parent-teacher coordination, and educational material preparation to support the learning community.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Laboratory & Biotechnology',
    subtitle: 'Wet lab protocols, molecular biology & genetic analysis',
    iconName: 'Dna',
    skills: [
      { name: 'DNA Extraction', proficiency: 92, level: 'Advanced Lab', details: 'Hands-on tissue/cell lysis, alcohol precipitation, purification and quantification' },
      { name: 'Genomics Fundamentals', proficiency: 88, level: 'Certified (Coursera)', details: 'Gene mapping, sequence structure, transcription, and mutation identification' },
      { name: 'Genetic Disorders', proficiency: 86, level: 'Coursework Certified', details: 'Mendelian inheritance, chromosomal anomalies, and diagnostic pathways' },
      { name: 'Research Ethics & Integrity', proficiency: 95, level: 'Webinar Certified', details: 'Academic authorship standards, peer review integrity, and biosafety protocols' }
    ]
  },
  {
    title: 'Design & Visual Media',
    subtitle: 'Canva Magic Studio, brand identity & motion creation',
    iconName: 'Palette',
    skills: [
      { name: 'Canva Magic Studio (AI)', proficiency: 96, level: '13-Course Certified', details: 'AI-assisted generation, brand kits, background removal, and vector styling' },
      { name: 'Brand Identity & Logos', proficiency: 92, level: 'Portfolio Proven', details: 'B\'z Collection apparel branding, geometric iconography, and style guides' },
      { name: 'Typography & Color Theory', proficiency: 90, level: 'Certified', details: 'Font pairing, kerning, contrast ratios, and psychological color harmony' },
      { name: 'Social Media & YouTube Graphics', proficiency: 94, level: 'CTR Optimized', details: 'High-engagement YouTube thumbnails, Instagram carousel decks, and banners' }
    ]
  },
  {
    title: 'Productivity & Digital Tools',
    subtitle: 'Microsoft Office suite & modern generative AI',
    iconName: 'Laptop',
    skills: [
      { name: 'Microsoft Word', proficiency: 95, level: 'Expert Formatter', details: 'Complex academic reports, tables, scientific references, and clean document layouts' },
      { name: 'Microsoft Excel', proficiency: 88, level: 'Workshop Certified', details: 'Mathematical formulas, automated spreadsheets, dynamic chart generation' },
      { name: 'Microsoft PowerPoint', proficiency: 94, level: 'Advanced Designer', details: 'Dynamic visual slide decks, custom transitions, scientific seminar presentations' },
      { name: 'Generative AI & LLMs', proficiency: 90, level: 'Google Cloud Certified', details: 'Prompt engineering, research summarization, workflow acceleration' }
    ]
  },
  {
    title: 'Professional & Communication',
    subtitle: 'Pedagogical delivery, bilingual fluency & community leadership',
    iconName: 'MessageSquare',
    skills: [
      { name: 'Scientific Communication', proficiency: 92, level: 'Core Strength', details: 'Translating complex molecular concepts into clear visual and written formats' },
      { name: 'Classroom Instruction', proficiency: 90, level: 'Experienced Teacher', details: 'Delivered daily curriculum at Read Foundation School and Hudaya Montessori' },
      { name: 'Bilingual Fluency', proficiency: 98, level: 'English & Urdu', details: 'Fluent verbal and written communication in English and Urdu' },
      { name: 'Community Health Logistics', proficiency: 88, level: 'Al-Khidmat Volunteer', details: 'Coordinated patient intake and logistics for Baseera Trust health screening drive' }
    ]
  }
];

export const BIOTECH_DNA_STEPS = [
  {
    stepNumber: '01',
    title: 'Cell Lysis & Disruption',
    description: 'Mechanical and chemical disruption of the cell membranes using lysis buffers containing detergents (e.g., SDS or CTAB) to release genomic DNA from the nucleus.',
    keyReagents: 'Lysis Buffer, Proteinase K, EDTA'
  },
  {
    stepNumber: '02',
    title: 'Protein & Cellular Debris Removal',
    description: 'Enzymatic digestion of cellular proteins with Proteinase K, followed by salt precipitation (potassium acetate or phenol-chloroform) to separate denatured proteins.',
    keyReagents: 'Proteinase K, Chloroform:Isoamyl Alcohol (24:1)'
  },
  {
    stepNumber: '03',
    title: 'DNA Precipitation',
    description: 'Addition of ice-cold isopropanol or 100% ethanol in the presence of monovalent cations (Na+) to precipitate high-molecular-weight DNA strings out of the aqueous phase.',
    keyReagents: 'Ice-cold Isopropanol / Ethanol, Sodium Acetate'
  },
  {
    stepNumber: '04',
    title: 'Washing & Elution',
    description: 'Pellet washing with 70% ethanol to remove residual salts, air drying, and final resuspension in sterile TE buffer or nuclease-free water for downstream PCR/spectrophotometry.',
    keyReagents: '70% Ethanol, TE Buffer (pH 8.0)'
  }
];
