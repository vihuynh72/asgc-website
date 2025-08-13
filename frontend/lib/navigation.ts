// Navigation configuration for ASGC website
// This file defines the main navigation structure used across desktop and mobile layouts

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    label: 'About Us',
    href: '/about',
    children: [
      {
        label: 'Meet Our Team',
        href: '/about/team',
        description: 'Board members and student leaders'
      },
      {
        label: 'Mission & Values',
        href: '/about/mission',
        description: 'Our purpose and core values'
      },
      {
        label: 'Constitution & Bylaws',
        href: '/governance/bylaws',
        description: 'Governing documents and policies'
      },
      {
        label: 'Contact Us',
        href: '/contact',
        description: 'Get in touch with ASGC'
      }
    ]
  },
  {
    label: 'Governance',
    href: '/governance',
    children: [
      {
        label: 'Board Meetings',
        href: '/governance/meetings',
        description: 'Upcoming and past board meetings'
      },
      {
        label: 'Agendas & Minutes',
        href: '/governance/agendas',
        description: 'Meeting agendas and minutes'
      },
      {
        label: 'Resolutions',
        href: '/governance/resolutions',
        description: 'Passed resolutions and policies'
      },
      {
        label: 'Committees',
        href: '/governance/committees',
        description: 'Board committees and working groups'
      }
    ]
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      {
        label: 'Join Us',
        href: '/get-involved/join',
        description: 'How to join ASGC'
      },
      {
        label: 'Elections',
        href: '/elections',
        description: 'ASGC elections'
      },
      {
        label: 'Volunteer Opportunities',
        href: '/get-involved/volunteer',
        description: 'Ways to volunteer on campus'
      },
      {
        label: 'Clubs & Organizations',
        href: '/get-involved/clubs',
        description: 'Student clubs and organizations'
      }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Club Resources',
        href: '/services/organizations',
        description: 'Resources for student organizations'
      },
      {
        label: 'Student Benefits',
        href: '/services/benefits',
        description: 'Discounts and benefits program'
      },
      {
        label: 'Campus Resources',
        href: '/services/resources',
        description: 'Student support resources'
      },
      {
        label: 'Academic Support',
        href: '/services/academic',
        description: 'Tutoring and assistance'
      }
    ]
  },
  {
    label: 'News & Events',
    href: '/news',
    children: [
      {
        label: 'Upcoming Events',
        href: '/services/events',
        description: 'Campus events and activities'
      },
      {
        label: 'Newsletter',
        href: '/news/newsletter',
        description: 'ASGC newsletter and updates'
      },
      {
        label: 'Gallery',
        href: '/news/gallery',
        description: 'Photos from ASGC events'
      }
    ]
  }
];

// Helper function to get navigation items for mobile or other components
export function getNavigationItems(): NavItem[] {
  return navigationConfig;
}

// Helper function to find a nav item by href
export function findNavItemByHref(href: string): NavItem | null {
  for (const item of navigationConfig) {
    if (item.href === href) return item;
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) return child;
      }
    }
  }
  return null;
}

// Helper function to get breadcrumb path
export function getBreadcrumbPath(href: string): NavItem[] {
  const breadcrumbs: NavItem[] = [];
  
  for (const item of navigationConfig) {
    if (item.href === href) {
      breadcrumbs.push(item);
      return breadcrumbs;
    }
    
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) {
          breadcrumbs.push(item, child);
          return breadcrumbs;
        }
      }
    }
  }
  
  return breadcrumbs;
}
