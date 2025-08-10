// Content types for ASGC website

export interface Officer {
  id: string;
  name: string;
  position: string;
  email: string;
  bio?: string;
  imageUrl?: string;
  term: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'council' | 'committee' | 'board';
  status: 'upcoming' | 'completed' | 'cancelled';
  agendaUrl?: string;
  minutesUrl?: string;
  videoUrl?: string;
}

export interface Document {
  id: string;
  title: string;
  type: 'agenda' | 'minutes' | 'bylaws' | 'resolution' | 'policy';
  date: string;
  fileUrl?: string;
  fileSize?: string;
  description?: string;
  category: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  imageUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'social' | 'academic' | 'governance' | 'service';
  registrationUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  purpose: string;
  meetingSchedule: string;
  members: string[];
  chair?: string;
  applicationOpen: boolean;
  requirements: string[];
}

export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'work-study' | 'part-time' | 'full-time' | 'internship';
  description: string;
  requirements: string[];
  payRate?: string;
  hoursPerWeek?: string;
  applicationDeadline?: string;
  contactEmail: string;
  active: boolean;
}

export interface ElectionInfo {
  id: string;
  title: string;
  description: string;
  applicationPeriod: {
    start: string;
    end: string;
  };
  campaignPeriod: {
    start: string;
    end: string;
  };
  votingPeriod: {
    start: string;
    end: string;
  };
  positions: string[];
  requirements: string[];
  resultsUrl?: string;
}

export interface FundingCategory {
  id: string;
  name: string;
  description: string;
  maxAmount: number;
  eligibility: string[];
  requiredDocuments: string[];
  reviewProcess: string;
  deadlines: string[];
}

export interface QuickAction {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent';
}
