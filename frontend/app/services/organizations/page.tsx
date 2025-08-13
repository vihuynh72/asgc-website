import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Club and Student Organization Resources | ASGC',
  description: 'Resources, funding, and support for student clubs and organizations at Grossmont College.',
};

export default function OrganizationResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          Club and Student Organization Resources
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          Everything you need to start, manage, and grow your student organization at Grossmont College.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Funding Section */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Funding Opportunities</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--asgc-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Student Organization Funding</h3>
                <p className="text-[var(--color-muted-foreground)] mt-2">
                  General funding for registered student organizations to support activities, 
                  events, and operational needs.
                </p>
                <div className="mt-3 space-y-1 text-sm text-[var(--color-muted-foreground)]">
                  <p><strong className="text-[var(--color-foreground)]">Maximum Award:</strong> $5,000 per semester</p>
                  <p><strong className="text-[var(--color-foreground)]">Application Deadline:</strong> 4th Friday of each month</p>
                  <p><strong className="text-[var(--color-foreground)]">Review Period:</strong> 2-3 weeks</p>
                </div>
              </div>

              <div className="border-l-4 border-[var(--asgc-secondary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Event Funding</h3>
                <p className="text-[var(--color-muted-foreground)] mt-2">
                  Specific funding for student-organized events that benefit the broader 
                  campus community.
                </p>
                <div className="mt-3 space-y-1 text-sm text-[var(--color-muted-foreground)]">
                  <p><strong className="text-[var(--color-foreground)]">Maximum Award:</strong> $2,000 per event</p>
                  <p><strong className="text-[var(--color-foreground)]">Application Deadline:</strong> 30 days before event</p>
                  <p><strong className="text-[var(--color-foreground)]">Requirements:</strong> Open to all students</p>
                </div>
              </div>

              <div className="border-l-4 border-[var(--asgc-accent)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Conference & Travel</h3>
                <p className="text-[var(--color-muted-foreground)] mt-2">
                  Support for students attending academic conferences, competitions, 
                  or educational travel.
                </p>
                <div className="mt-3 space-y-1 text-sm text-[var(--color-muted-foreground)]">
                  <p><strong className="text-[var(--color-foreground)]">Maximum Award:</strong> $1,500 per student</p>
                  <p><strong className="text-[var(--color-foreground)]">Application Deadline:</strong> 45 days before travel</p>
                  <p><strong className="text-[var(--color-foreground)]">Requirements:</strong> Academic relevance required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Starting Your Organization</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Form Your Group</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Gather at least 10 interested students and identify faculty advisor. 
                    Define your organization's purpose and mission.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Submit Application</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Complete the Student Organization Registration form with constitution, 
                    officer list, and advisor agreement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Get Approved</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    ASGC will review your application within 2 weeks. Once approved, 
                    you'll gain access to campus resources and funding opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Organization Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-[var(--color-foreground)]">Event Planning</h3>
                <ul className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                  <li>• Room reservation assistance</li>
                  <li>• Marketing and promotion support</li>
                  <li>• Equipment and AV setup</li>
                  <li>• Catering coordination</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-[var(--color-foreground)]">Administrative Support</h3>
                <ul className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                  <li>• Leadership training workshops</li>
                  <li>• Financial management guidance</li>
                  <li>• Record keeping assistance</li>
                  <li>• Officer transition support</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-[var(--color-foreground)]">Communication Tools</h3>
                <ul className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                  <li>• Official email accounts</li>
                  <li>• Website development support</li>
                  <li>• Social media guidance</li>
                  <li>• Newsletter inclusion</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-[var(--color-foreground)]">Networking</h3>
                <ul className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                  <li>• Monthly org meetings</li>
                  <li>• Collaborative event opportunities</li>
                  <li>• Inter-club council participation</li>
                  <li>• Campus fair participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Quick Actions</h2>
            <div className="space-y-3">
              <Link 
                href="/funding/request" 
                className="block w-full bg-[var(--asgc-primary)] text-white py-3 px-4 rounded-md text-center hover:opacity-90 transition-opacity"
              >
                Apply for Funding
              </Link>
              
              <Link 
                href="/get-involved/clubs" 
                className="block w-full bg-[var(--asgc-secondary)] text-white py-3 px-4 rounded-md text-center hover:opacity-90 transition-opacity"
              >
                Register New Organization
              </Link>
              
              <Link 
                href="/contact" 
                className="block w-full border border-[var(--color-border)] text-[var(--color-foreground)] py-3 px-4 rounded-md text-center hover:bg-[var(--color-muted)] transition-colors"
              >
                Contact ASGC
              </Link>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Important Dates</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Next Funding Deadline:</span>
                <span className="font-medium text-[var(--color-foreground)]">Aug 30, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Org Registration Due:</span>
                <span className="font-medium text-[var(--color-foreground)]">Sep 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Fall Activities Fair:</span>
                <span className="font-medium text-[var(--color-foreground)]">Sep 20, 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Resources</h2>
            <div className="space-y-2">
              <a href="#" className="block text-[var(--asgc-primary)] hover:opacity-75 text-sm">
                📄 Organization Handbook (PDF)
              </a>
              <a href="#" className="block text-[var(--asgc-primary)] hover:opacity-75 text-sm">
                📊 Budget Template (Excel)
              </a>
              <a href="#" className="block text-[var(--asgc-primary)] hover:opacity-75 text-sm">
                📋 Registration Form (PDF)
              </a>
              <a href="#" className="block text-[var(--asgc-primary)] hover:opacity-75 text-sm">
                📝 Constitution Template
              </a>
            </div>
          </div>

          <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--asgc-primary)] mb-2">Need Help?</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm mb-3">
              Contact the Student Organization Coordinator for assistance.
            </p>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              <p>Email: organizations@asgc.edu</p>
              <p>Office Hours: Mon-Fri 9AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
