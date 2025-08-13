import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | ASGC',
  description: 'Learn about the Associated Students of Grossmont College, our mission, and how we serve the student body.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          About ASGC
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          The Associated Students of Grossmont College represents the voice of our diverse 
          student body and works to enhance the college experience for all students.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Mission & Purpose */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Our Mission</h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
              The Associated Students of Grossmont College (ASGC) serves as the official voice 
              of the student body, advocating for student rights, interests, and welfare. We are 
              committed to fostering an inclusive, supportive, and engaging campus environment 
              that promotes academic success and personal growth.
            </p>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              Through democratic governance, programming, and advocacy, we work to bridge the 
              gap between students and college administration, ensuring that student perspectives 
              are heard and considered in all campus decisions.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🏛️ Student Advocacy</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Represent student interests to college administration</li>
                  <li>• Advocate for policy changes that benefit students</li>
                  <li>• Address student concerns and grievances</li>
                  <li>• Promote student welfare and rights</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">💰 Resource Allocation</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Manage student activity funds</li>
                  <li>• Provide funding for student organizations</li>
                  <li>• Support campus events and activities</li>
                  <li>• Ensure transparent budget processes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🎯 Campus Programming</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Organize campus-wide events</li>
                  <li>• Coordinate cultural celebrations</li>
                  <li>• Host educational workshops</li>
                  <li>• Facilitate student engagement activities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🤝 Leadership Development</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• Provide leadership training opportunities</li>
                  <li>• Mentor emerging student leaders</li>
                  <li>• Foster civic engagement</li>
                  <li>• Build transferable professional skills</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Our Core Values</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[var(--asgc-primary)] pl-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Inclusivity & Diversity</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  We celebrate and embrace the diverse backgrounds, perspectives, and experiences 
                  of all Grossmont College students.
                </p>
              </div>
              
              <div className="border-l-4 border-[var(--asgc-secondary)] pl-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Transparency & Accountability</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  We operate with openness and are accountable to the students we serve, 
                  maintaining clear communication and ethical practices.
                </p>
              </div>
              
              <div className="border-l-4 border-[var(--asgc-accent)] pl-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Innovation & Excellence</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  We strive for continuous improvement and seek innovative solutions 
                  to enhance the student experience.
                </p>
              </div>
              
              <div className="border-l-4 border-[var(--asgc-primary)] pl-6">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Collaboration & Service</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  We work together with students, faculty, staff, and community partners 
                  to create positive change and serve the greater good.
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Our History</h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
              Founded in 1961 alongside Grossmont College, the Associated Students organization 
              has been an integral part of campus life for over six decades. From our humble 
              beginnings as a small student council to today's comprehensive student government, 
              we have continuously evolved to meet the changing needs of our diverse student body.
            </p>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              Throughout the years, ASGC has been at the forefront of major campus initiatives, 
              from establishing the current student activity fee structure to advocating for 
              improved facilities and services. Our legacy is built on the dedicated service 
              of thousands of student leaders who have worked tirelessly to make Grossmont 
              College a better place for all students.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Quick Links</h2>
            <div className="space-y-3">
              <Link 
                href="/about/team" 
                className="block text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
              >
                Meet Our Team →
              </Link>
              <Link 
                href="/governance/bylaws" 
                className="block text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
              >
                Constitution & Bylaws →
              </Link>
              <Link 
                href="/governance/meetings" 
                className="block text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
              >
                Board Meetings →
              </Link>
              <Link 
                href="/contact" 
                className="block text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">By the Numbers</h2>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--asgc-primary)]">15,000+</div>
                <div className="text-sm text-[var(--color-muted-foreground)]">Students Represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--asgc-primary)]">50+</div>
                <div className="text-sm text-[var(--color-muted-foreground)]">Student Organizations Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--asgc-primary)]">$500K+</div>
                <div className="text-sm text-[var(--color-muted-foreground)]">Annual Budget Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--asgc-primary)]">100+</div>
                <div className="text-sm text-[var(--color-muted-foreground)]">Events Hosted Annually</div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-[var(--asgc-primary)]">Get Involved</h2>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
              Ready to make a difference on campus? There are many ways to get involved 
              with ASGC and student leadership.
            </p>
            <div className="space-y-2">
              <Link 
                href="/get-involved/join" 
                className="block w-full bg-[var(--asgc-primary)] text-white py-2 px-4 rounded-md text-center text-sm hover:opacity-90 transition-opacity"
              >
                Join Student Government
              </Link>
              <Link 
                href="/get-involved/volunteer" 
                className="block w-full border border-[var(--asgc-primary)] text-[var(--asgc-primary)] py-2 px-4 rounded-md text-center text-sm hover:bg-[var(--asgc-primary)] hover:text-white transition-colors"
              >
                Volunteer Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
