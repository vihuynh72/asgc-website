import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team | ASGC',
  description: 'Meet the dedicated student leaders who make up the Associated Students of Grossmont College board.',
};

interface TeamMember {
  name: string;
  position: string;
  major: string;
  year: string;
  bio: string;
  email: string;
  goals: string[];
}

const boardMembers: TeamMember[] = [
  {
    name: "Maria Rodriguez",
    position: "ASGC President",
    major: "Political Science",
    year: "Junior",
    bio: "Maria is passionate about student advocacy and creating inclusive campus environments. She has been involved in student government for three years.",
    email: "president@asgc.edu",
    goals: ["Increase student engagement", "Improve campus sustainability", "Expand mental health resources"]
  },
  {
    name: "James Kim",
    position: "Vice President",
    major: "Business Administration",
    year: "Sophomore",
    bio: "James brings a fresh perspective to student government with his focus on innovation and technology integration.",
    email: "vicepresident@asgc.edu",
    goals: ["Modernize student services", "Enhance campus technology", "Support student entrepreneurs"]
  },
  {
    name: "Aisha Patel",
    position: "Secretary",
    major: "Communications",
    year: "Sophomore",
    bio: "Aisha is committed to transparency and effective communication between students and administration.",
    email: "secretary@asgc.edu",
    goals: ["Improve campus communication", "Increase transparency", "Support diverse student voices"]
  },
  {
    name: "Michael Chen",
    position: "Treasurer",
    major: "Accounting",
    year: "Junior",
    bio: "Michael oversees ASGC finances and ensures responsible allocation of student funds to maximize impact.",
    email: "treasurer@asgc.edu",
    goals: ["Maximize funding impact", "Financial transparency", "Support student organizations"]
  },
  {
    name: "Isabella Garcia",
    position: "Student Trustee",
    major: "Education",
    year: "Senior",
    bio: "Isabella represents student interests on the Board of Trustees and advocates for student-centered policies.",
    email: "trustee@asgc.edu",
    goals: ["Student advocacy", "Policy improvement", "Bridge student-admin gap"]
  },
  {
    name: "David Johnson",
    position: "Activities Coordinator",
    major: "Event Management",
    year: "Sophomore",
    bio: "David coordinates campus events and activities that bring the Grossmont community together.",
    email: "activities@asgc.edu",
    goals: ["Engaging campus events", "Community building", "Cultural celebration"]
  }
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          Meet Our Team
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          The dedicated student leaders who represent your voice and work tirelessly 
          to improve campus life for all Grossmont College students.
        </p>
      </div>

      {/* Board Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {boardMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile Photo Placeholder */}
            <div className="h-64 bg-gradient-to-br from-[var(--asgc-primary)] to-[var(--asgc-secondary)] flex items-center justify-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--asgc-primary)] font-semibold mb-1">
                  {member.position}
                </p>
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  <p>{member.major} • {member.year}</p>
                </div>
              </div>

              <p className="text-sm text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-[var(--color-foreground)] mb-2 text-sm">
                  Key Goals:
                </h4>
                <ul className="space-y-1">
                  {member.goals.map((goal, goalIndex) => (
                    <li 
                      key={goalIndex} 
                      className="text-xs text-[var(--color-muted-foreground)] flex items-start"
                    >
                      <span className="text-[var(--asgc-primary)] mr-2">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)]">
                <a 
                  href={`mailto:${member.email}`}
                  className="text-sm text-[var(--asgc-primary)] hover:opacity-75 transition-opacity"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">
            How We Work
          </h2>
          <div className="space-y-4 text-[var(--color-muted-foreground)]">
            <p>
              Our student government operates on principles of transparency, 
              accountability, and inclusive representation. We meet weekly to 
              discuss student concerns and work on initiatives that matter to you.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-[var(--color-foreground)]">Board Meetings:</h3>
              <p className="text-sm">
                Every Tuesday at 3:00 PM in the Student Center<br/>
                All students are welcome to attend and participate
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[var(--color-foreground)]">Office Hours:</h3>
              <p className="text-sm">
                Monday-Friday: 10:00 AM - 4:00 PM<br/>
                Building 60, Room 215
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">
            Get Involved
          </h2>
          <div className="space-y-4 text-[var(--color-muted-foreground)]">
            <p>
              Interested in joining student government or getting more involved 
              in campus leadership? We're always looking for dedicated students 
              who want to make a difference.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Committee Positions</h3>
                <p className="text-sm">Join one of our committees and help shape campus policy</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Elections</h3>
                <p className="text-sm">Run for office in our spring elections</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)]">Volunteer</h3>
                <p className="text-sm">Help with events and campus initiatives</p>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href="/get-involved" 
                className="inline-block bg-[var(--asgc-primary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">
          Have Questions or Concerns?
        </h2>
        <p className="text-[var(--color-muted-foreground)] mb-6 max-w-2xl mx-auto">
          We want to hear from you! Whether you have ideas for campus improvements, 
          concerns to address, or just want to get more involved, don't hesitate to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="bg-[var(--asgc-primary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
          <a 
            href="/governance/meetings" 
            className="border border-[var(--asgc-primary)] text-[var(--asgc-primary)] px-6 py-3 rounded-md hover:bg-[var(--asgc-primary)] hover:text-white transition-colors"
          >
            Attend a Meeting
          </a>
        </div>
      </div>
    </div>
  );
}
