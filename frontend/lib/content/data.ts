import { 
  Officer, Meeting, Document, NewsArticle, Event, Committee, 
  Job, ElectionInfo, FundingCategory, QuickAction 
} from './types';

// Mock data for ASGC website

export const officers: Officer[] = [
  {
    id: '1',
    name: 'Maria Rodriguez',
    position: 'President',
    email: 'president@asgc.edu',
    bio: 'Computer Science major passionate about student advocacy and campus sustainability.',
    term: '2024-2025',
  },
  {
    id: '2',
    name: 'James Chen',
    position: 'Vice President',
    email: 'vicepresident@asgc.edu',
    bio: 'Business Administration student focused on improving campus resources and student services.',
    term: '2024-2025',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    position: 'Secretary',
    email: 'secretary@asgc.edu',
    bio: 'Communications major dedicated to transparency and student engagement.',
    term: '2024-2025',
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'Treasurer',
    email: 'treasurer@asgc.edu',
    bio: 'Accounting student committed to fiscal responsibility and budget transparency.',
    term: '2024-2025',
  },
];

export const upcomingMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Student Council Meeting',
    date: '2025-08-15',
    time: '2:00 PM',
    location: 'Student Center, Room 203',
    type: 'council',
    status: 'upcoming',
    agendaUrl: '/documents/agenda-08-15-2025.pdf',
  },
  {
    id: '2',
    title: 'Budget Committee Meeting',
    date: '2025-08-20',
    time: '3:30 PM',
    location: 'Administration Building, Conference Room A',
    type: 'committee',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Board of Trustees Student Representative Meeting',
    date: '2025-08-25',
    time: '10:00 AM',
    location: 'Board Room, Administration Building',
    type: 'board',
    status: 'upcoming',
  },
];

export const recentDocuments: Document[] = [
  {
    id: '1',
    title: 'Student Council Meeting Minutes - July 18, 2025',
    type: 'minutes',
    date: '2025-07-18',
    fileUrl: '/documents/minutes-07-18-2025.pdf',
    fileSize: '245 KB',
    category: 'Council',
  },
  {
    id: '2',
    title: 'ASGC Bylaws - Updated 2025',
    type: 'bylaws',
    date: '2025-07-01',
    fileUrl: '/documents/asgc-bylaws-2025.pdf',
    fileSize: '1.2 MB',
    category: 'Governance',
  },
  {
    id: '3',
    title: 'Resolution 2025-04: Campus Sustainability Initiative',
    type: 'resolution',
    date: '2025-06-30',
    fileUrl: '/documents/resolution-2025-04.pdf',
    fileSize: '180 KB',
    category: 'Resolutions',
  },
];

export const featuredNews: NewsArticle[] = [
  {
    id: '1',
    title: 'ASGC Launches New Mental Health Support Initiative',
    slug: 'mental-health-support-initiative',
    excerpt: 'New program provides 24/7 counseling support and wellness resources for all students.',
    content: 'The Associated Students of Grossmont College is proud to announce...',
    publishedAt: '2025-08-05',
    author: 'ASGC Communications',
    tags: ['mental health', 'student services', 'wellness'],
    featured: true,
  },
  {
    id: '2',
    title: 'Fall 2025 Student Elections: Nominations Now Open',
    slug: 'fall-2025-elections-nominations',
    excerpt: 'Students can now apply for leadership positions in ASGC for the 2025-2026 academic year.',
    content: 'Nomination packets are now available...',
    publishedAt: '2025-08-01',
    author: 'Elections Committee',
    tags: ['elections', 'leadership', 'applications'],
    featured: true,
  },
  {
    id: '3',
    title: 'Record-Breaking Funding Approved for Student Organizations',
    slug: 'record-funding-student-organizations',
    excerpt: '$125,000 allocated to support 45 student clubs and organizations this semester.',
    content: 'The ASGC Budget Committee has approved...',
    publishedAt: '2025-07-28',
    author: 'Budget Committee',
    tags: ['funding', 'clubs', 'organizations'],
    featured: false,
  },
];

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Welcome Week 2025',
    description: 'Join us for a week of activities, club fairs, and social events to kick off the new semester.',
    date: '2025-08-26',
    time: '10:00 AM - 4:00 PM',
    location: 'Griffin Quad',
    category: 'social',
    featured: true,
  },
  {
    id: '2',
    title: 'Transfer Student Workshop',
    description: 'Learn about transfer requirements and get guidance on your academic journey.',
    date: '2025-08-30',
    time: '2:00 PM - 3:30 PM',
    location: 'Student Success Center',
    category: 'academic',
    registrationUrl: '/events/register/transfer-workshop',
    featured: false,
  },
  {
    id: '3',
    title: 'Student Government Open Forum',
    description: 'Have your voice heard! Share ideas and concerns with ASGC representatives.',
    date: '2025-09-05',
    time: '12:00 PM - 1:00 PM',
    location: 'Student Center, Main Lounge',
    category: 'governance',
    featured: false,
  },
];

export const committees: Committee[] = [
  {
    id: '1',
    name: 'Budget Committee',
    description: 'Reviews and approves funding requests from student organizations.',
    purpose: 'Ensure responsible allocation of student activity fees and support campus organizations.',
    meetingSchedule: 'Every other Tuesday at 3:30 PM',
    members: ['David Kim (Chair)', 'Maria Rodriguez', 'Jennifer Wu', 'Alex Thompson'],
    chair: 'David Kim',
    applicationOpen: true,
    requirements: [
      'Must be enrolled in at least 6 units',
      'Minimum 2.5 GPA',
      'Available for regular meeting attendance'
    ],
  },
  {
    id: '2',
    name: 'Student Life Committee',
    description: 'Plans campus events and addresses student life concerns.',
    purpose: 'Enhance the overall student experience through programming and advocacy.',
    meetingSchedule: 'Mondays at 4:00 PM',
    members: ['Sarah Johnson (Chair)', 'Michael Davis', 'Emma Wilson'],
    chair: 'Sarah Johnson',
    applicationOpen: true,
    requirements: [
      'Must be enrolled in at least 6 units',
      'Interest in event planning',
      'Strong communication skills'
    ],
  },
];

export const activeJobs: Job[] = [
  {
    id: '1',
    title: 'Student Assistant - ASGC Office',
    department: 'Associated Students',
    type: 'work-study',
    description: 'Provide administrative support, assist with events, and help with student services.',
    requirements: [
      'Current Grossmont College student',
      'Work-study eligibility preferred',
      'Strong communication skills',
      'Microsoft Office proficiency'
    ],
    payRate: '$17.00/hour',
    hoursPerWeek: '15-20 hours',
    applicationDeadline: '2025-08-30',
    contactEmail: 'jobs@asgc.edu',
    active: true,
  },
  {
    id: '2',
    title: 'Campus Events Coordinator Intern',
    department: 'Student Life',
    type: 'internship',
    description: 'Support planning and execution of campus events and student activities.',
    requirements: [
      'Event management or communications major preferred',
      'Previous event planning experience helpful',
      'Creative problem-solving skills',
      'Flexible schedule'
    ],
    hoursPerWeek: '10-15 hours',
    applicationDeadline: '2025-09-15',
    contactEmail: 'studentlife@asgc.edu',
    active: true,
  },
];

export const currentElection: ElectionInfo = {
  id: '1',
  title: 'Fall 2025 ASGC Elections',
  description: 'Elections for Student Council representatives and executive positions.',
  applicationPeriod: {
    start: '2025-08-01',
    end: '2025-08-20',
  },
  campaignPeriod: {
    start: '2025-08-21',
    end: '2025-09-05',
  },
  votingPeriod: {
    start: '2025-09-06',
    end: '2025-09-08',
  },
  positions: [
    'Student Council Representative (5 positions)',
    'Senator-at-Large (3 positions)',
    'Committee Positions (Various)',
  ],
  requirements: [
    'Must be enrolled at Grossmont College',
    'Minimum 2.0 GPA',
    'Enrolled in at least 5 units',
    'Complete nomination packet',
  ],
};

export const fundingCategories: FundingCategory[] = [
  {
    id: '1',
    name: 'Student Organization Events',
    description: 'Funding for club events, workshops, and activities.',
    maxAmount: 2500,
    eligibility: [
      'Recognized student organization',
      'Event must benefit Grossmont College students',
      'Submit request at least 3 weeks in advance'
    ],
    requiredDocuments: [
      'Event proposal form',
      'Detailed budget breakdown',
      'Organization roster',
      'Event timeline'
    ],
    reviewProcess: 'Applications reviewed bi-weekly by Budget Committee',
    deadlines: ['1st and 15th of each month'],
  },
  {
    id: '2',
    name: 'Conference and Travel',
    description: 'Support for students attending academic conferences and competitions.',
    maxAmount: 1000,
    eligibility: [
      'Currently enrolled at Grossmont College',
      'Presenting research or representing the college',
      'Academic relevance to student\'s program'
    ],
    requiredDocuments: [
      'Conference registration proof',
      'Academic justification letter',
      'Budget breakdown',
      'Faculty recommendation'
    ],
    reviewProcess: 'Individual review by Budget Committee chair',
    deadlines: ['Submit 4 weeks before travel date'],
  },
];

export const quickActions: QuickAction[] = [
  {
    title: 'Apply to a Committee',
    description: 'Join an ASGC committee and make a difference on campus',
    href: '/get-involved/committees',
    icon: 'users',
    color: 'primary',
  },
  {
    title: 'View Meeting Minutes',
    description: 'Stay informed about student government decisions',
    href: '/governance/minutes',
    icon: 'document-text',
    color: 'secondary',
  },
  {
    title: 'Request Funding',
    description: 'Get financial support for your student organization',
    href: '/funding/request',
    icon: 'currency-dollar',
    color: 'accent',
  },
];

// Helper functions
export function getOfficerByPosition(position: string): Officer | undefined {
  return officers.find(officer => officer.position.toLowerCase() === position.toLowerCase());
}

export function getUpcomingMeetings(limit?: number): Meeting[] {
  const upcoming = upcomingMeetings
    .filter(meeting => meeting.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getFeaturedNews(limit?: number): NewsArticle[] {
  const featured = featuredNews
    .filter(article => article.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  return limit ? featured.slice(0, limit) : featured;
}

export function getUpcomingEvents(limit?: number): Event[] {
  const upcoming = upcomingEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}
