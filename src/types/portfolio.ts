export type SkillLevel = 'LEARNING' | 'FAMILIAR' | 'WORKING KNOWLEDGE' | 'BUILDING';

export type SkillCategory = 'programming' | 'web' | 'ai' | 'cybersecurity' | 'tools' | 'creative';

export type ProjectStatus = 'PLANNED' | 'BUILDING' | 'EXPERIMENTAL' | 'COMPLETED' | 'ARCHIVED';

export interface PersonalInfo {
  name: string;
  monogram: string;
  roles: string[];
  tagline: string;
  shortIntro: string;
  location: string;
  education: string;
  status: string;
  currentFocus: string[];
  bioParagraphs: string[];
}

export interface SystemMetrics {
  osName: string;
  osVersion: string;
  status: string;
  mode: string;
  focus: string;
  education: string;
  location: string;
  kernel: string;
  securityProtocol: string;
  currentYear: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'milestone' | 'learning' | 'future';
  badge?: string;
  isGoal?: boolean;
}

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  status: ProjectStatus;
  progressPercentage: number;
  features: string[];
  currentProgress: string;
  futurePlans: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  iconName?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
}

export interface MissionItem {
  title: string;
  currentStatus: string;
  nextTarget: string;
  category: string;
  radarAngle?: number;
  radarRadius?: number;
}

export interface VisionGoalItem {
  title: string;
  role: string;
  description: string;
  futureFocus: string;
  iconName: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  available: boolean;
}

export interface SocialLinks {
  email: string;
  whatsapp?: string;
  whatsappDisplay?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  systemMetrics: SystemMetrics;
  aboutTimeline: TimelineItem[];
  journeyTimeline: TimelineItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  missions: MissionItem[];
  visionGoals: VisionGoalItem[];
  services: ServiceItem[];
  socialLinks: SocialLinks;
}
