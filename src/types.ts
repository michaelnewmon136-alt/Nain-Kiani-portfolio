export interface PortfolioItem {
  id: string;
  title: string;
  category: 'branding' | 'certificates' | 'print' | 'social' | 'motion' | 'biotech';
  categoryLabel: string;
  thumbnail: string;
  clientOrContext: string;
  date: string;
  description: string;
  highlights: string[];
  toolsUsed: string[];
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  featured?: boolean;
  metadataDetails?: {
    label: string;
    value: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  thumbnail: string;
  skillsLearned: string[];
  description: string;
  coursesIncluded?: string[];
  accreditationBadge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreOrGpa?: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Teaching' | 'Volunteer' | 'Academic';
  responsibilities: string[];
}

export interface VideoProject {
  id: string;
  title: string;
  theme: string;
  duration: string;
  coverImage: string;
  description: string;
  tags: string[];
  scenes: {
    title: string;
    caption: string;
    visualDescription: string;
    accentColor: string;
  }[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    proficiency: number;
    level: string;
    details: string;
  }[];
}
