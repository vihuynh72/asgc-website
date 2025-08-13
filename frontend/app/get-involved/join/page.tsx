import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Us | ASGC',
  description: 'Learn how to join ASGC and become a student leader at Grossmont College.',
};

export default function JoinUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          Join Student Government
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          Make a difference on campus and develop leadership skills that will last a lifetime. 
          ASGC offers multiple ways to get involved in student government.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Ways to Join */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-6 text-[var(--color-foreground)]">Ways to Get Involved</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--asgc-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Run for Office</h3>
                <p className="text-[var(--color-muted-foreground)] mb-3">
                  Campaign for one of our elected board positions during our spring elections. 
                  Lead major initiatives and represent the student body.
                </p>
                <div className="space-y-1 text-sm text-[var(--color-muted-foreground)]">
                  <p><strong className="text-[var(--color-foreground)]">Positions Available:</strong> President, Vice President, Secretary, Treasurer, Student Trustee</p>
                  <p><strong className="text-[var(--color-foreground)]">Next Elections:</strong> March 2026</p>
                  <p><strong className="text-[var(--color-foreground)]">Requirements:</strong> 2.5 GPA, 6+ enrolled units</p>
                </div>
              </div>

              <div className="border-l-4 border-[var(--asgc-secondary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Join a Committee</h3>
                <p className="text-[var(--color-muted-foreground)] mb-3">
                  Participate in specialized committees that focus on specific areas of campus life 
                  and student services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <div>• Budget Committee</div>
                  <div>• Activities Committee</div>
                  <div>• Academic Affairs Committee</div>
                  <div>• Campus Safety Committee</div>
                  <div>• Sustainability Committee</div>
                  <div>• Diversity & Inclusion Committee</div>
                </div>
              </div>

              <div className="border-l-4 border-[var(--asgc-accent)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Volunteer Opportunities</h3>
                <p className="text-[var(--color-muted-foreground)] mb-3">
                  Help with events, campaigns, and special projects without a formal commitment. 
                  Perfect for getting a feel for student government.
                </p>
                <div className="space-y-1 text-sm text-[var(--color-muted-foreground)]">
                  <p>• Event planning and setup</p>
                  <p>• Campus outreach and tabling</p>
                  <p>• Social media and communications</p>
                  <p>• Research and policy analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">How to Apply</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Meet Requirements</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Ensure you meet eligibility requirements: enrolled student, good academic standing, 
                    and commitment to serving fellow students.
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
                    Complete the online application form with your background, experience, 
                    and goals for serving in student government.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Interview Process</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Participate in an informal interview with current board members to discuss 
                    your interest and how you can contribute.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Get Started</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Attend orientation, meet your mentor, and begin making a positive impact 
                    on campus immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Why Join ASGC?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🎓 Leadership Development</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Develop public speaking skills</li>
                  <li>• Learn meeting facilitation</li>
                  <li>• Practice project management</li>
                  <li>• Build consensus and teamwork</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🌟 Resume Building</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Demonstrate leadership experience</li>
                  <li>• Show community involvement</li>
                  <li>• Develop transferable skills</li>
                  <li>• Network with professionals</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🤝 Make an Impact</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Improve campus life for all students</li>
                  <li>• Advocate for student needs</li>
                  <li>• Create lasting positive change</li>
                  <li>• Be a voice for your peers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🎯 Personal Growth</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Build confidence and communication</li>
                  <li>• Expand your campus network</li>
                  <li>• Gain insider campus knowledge</li>
                  <li>• Develop civic responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Apply Now</h2>
            <div className="space-y-4">
              <p className="text-sm text-[var(--color-muted-foreground)]">
                Ready to get started? Applications are currently open for committee positions 
                and volunteer opportunities.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/contact" 
                  className="block w-full bg-[var(--asgc-primary)] text-white py-3 px-4 rounded-md text-center hover:opacity-90 transition-opacity"
                >
                  Submit Application
                </Link>
                
                <Link 
                  href="/governance/meetings" 
                  className="block w-full border border-[var(--asgc-primary)] text-[var(--asgc-primary)] py-3 px-4 rounded-md text-center hover:bg-[var(--asgc-primary)] hover:text-white transition-colors"
                >
                  Attend a Meeting
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Current Opportunities</h2>
            <div className="space-y-3">
              <div className="p-3 bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-md">
                <h3 className="font-semibold text-[var(--asgc-primary)] mb-1">Committee Positions</h3>
                <p className="text-xs text-[var(--color-muted-foreground)]">Multiple openings available</p>
              </div>
              
              <div className="p-3 bg-[var(--color-muted)] rounded-md">
                <h3 className="font-semibold text-[var(--color-muted-foreground)] mb-1">Board Elections</h3>
                <p className="text-xs text-[var(--color-muted-foreground)]">Applications open March 2026</p>
              </div>
              
              <div className="p-3 bg-[var(--asgc-neutral-50)] border border-[var(--asgc-secondary)] rounded-md">
                <h3 className="font-semibold text-[var(--asgc-secondary)] mb-1">Event Volunteers</h3>
                <p className="text-xs text-[var(--color-muted-foreground)]">Always accepting applications</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Contact Information</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">ASGC Office</h3>
                <p className="text-[var(--color-muted-foreground)]">Building 60, Room 215</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Office Hours</h3>
                <p className="text-[var(--color-muted-foreground)]">Monday-Friday: 10:00 AM - 4:00 PM</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Email</h3>
                <p className="text-[var(--color-muted-foreground)]">asgc@gcccd.edu</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Phone</h3>
                <p className="text-[var(--color-muted-foreground)]">(619) 644-7626</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--asgc-primary)] mb-2">Questions?</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm mb-3">
              Still have questions about joining ASGC? We're here to help!
            </p>
            <Link 
              href="/contact" 
              className="text-sm text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
