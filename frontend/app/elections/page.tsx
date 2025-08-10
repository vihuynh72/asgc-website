import { Breadcrumbs } from "../../components/nav/Breadcrumbs";
import { Timeline } from "../../components/elections/Timeline";

export default function ElectionsPage() {
  // Mock election timeline data
  const electionTimeline = [
    {
      title: "Candidate Information Session",
      description: "Learn about the roles, responsibilities, and campaign requirements. All interested students welcome to attend.",
      date: "January 15, 2024",
      status: 'completed' as const
    },
    {
      title: "Nomination Period Opens",
      description: "Students can submit their nomination forms and begin collecting required signatures from fellow students.",
      date: "January 22, 2024", 
      status: 'completed' as const
    },
    {
      title: "Campaign Period",
      description: "Approved candidates may begin campaigning. All campaign materials must follow ASGC guidelines.",
      date: "February 5-19, 2024",
      status: 'current' as const
    },
    {
      title: "Voting Period", 
      description: "Students vote online through the secure ASGC election portal. Voting closes at 11:59 PM.",
      date: "February 20-22, 2024",
      status: 'upcoming' as const
    },
    {
      title: "Results Announcement",
      description: "Election results will be announced and new officers will be introduced to the campus community.",
      date: "February 26, 2024",
      status: 'upcoming' as const
    },
    {
      title: "Officer Transition",
      description: "Newly elected officers begin their terms and participate in comprehensive orientation training.",
      date: "March 1, 2024",
      status: 'upcoming' as const
    }
  ];

  const currentCandidates = [
    {
      name: "Maria Rodriguez",
      position: "President",
      year: "Junior",
      major: "Political Science",
      platform: "Expanding mental health resources and improving campus sustainability initiatives"
    },
    {
      name: "James Chen", 
      position: "President",
      year: "Senior",
      major: "Business Administration",
      platform: "Enhancing student services and creating more internship opportunities"
    },
    {
      name: "Sarah Williams",
      position: "Vice President",
      year: "Sophomore", 
      major: "Communications",
      platform: "Strengthening campus community through events and improved student engagement"
    },
    {
      name: "Alex Thompson",
      position: "Treasurer",
      year: "Junior",
      major: "Accounting",
      platform: "Transparent budget management and expanding funding for student organizations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              ASGC Elections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your voice matters. Participate in student government by voting for candidates who will represent your interests and improve campus life.
            </p>
          </div>

          {/* Election Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              2024 Spring Election Timeline
            </h2>
            <div className="bg-card rounded-lg p-8 border">
              <Timeline items={electionTimeline} />
            </div>
          </section>

          {/* Current Candidates */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Current Candidates
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {currentCandidates.map((candidate, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {candidate.name}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {candidate.position}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {candidate.year} • {candidate.major}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {candidate.platform}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Voting Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              How to Vote
            </h2>
            <div className="bg-card rounded-lg p-8 border">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    1. Verify Eligibility
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Must be enrolled in at least 6 units and in good academic standing
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    2. Access Portal
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Log in with your student ID through the secure election portal
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 0v10l-2-2m2 2l2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    3. Cast Your Vote
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Review candidates and submit your ballot before the deadline
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-accent/50 rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Questions About Elections?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact the ASGC Elections Committee for assistance with the voting process, candidate information, or election rules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:elections@asgc.edu"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Email Elections Committee
                </a>
                <a 
                  href="/contact"
                  className="bg-background text-foreground px-6 py-3 rounded-lg font-medium border hover:bg-accent transition-colors"
                >
                  Visit ASGC Office
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
