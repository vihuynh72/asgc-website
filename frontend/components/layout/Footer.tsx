import Link from 'next/link';

export function Footer() {
  return (
  <footer className="bg-[var(--asgc-neutral-900)] text-[var(--asgc-neutral-100)] border-t border-[var(--asgc-neutral-800)]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--asgc-primary)] text-white font-bold text-lg">
                A
              </div>
              <div>
                <div className="text-xl font-bold text-white">ASGC</div>
                <div className="text-sm text-[var(--asgc-neutral-400)]">Associated Students of Grossmont College</div>
              </div>
            </div>
            <p className="text-[var(--asgc-neutral-200)] mb-6 max-w-md leading-relaxed">
              Representing over 20,000 students and creating opportunities that enhance your college experience. Your voice, your campus, your future.
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Office Hours</h3>
                <div className="text-[var(--asgc-neutral-200)] text-sm space-y-1">
                  <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p>Friday: 8:00 AM - 4:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Location</h3>
                <div className="text-[var(--asgc-neutral-200)] text-sm space-y-1">
                  <p>Student Center, Room 110</p>
                  <p>8800 Grossmont College Dr</p>
                  <p>El Cajon, CA 92020</p>
                  <p className="mt-2">
                    <a 
                      href="tel:619-644-7626" 
                      className="link-primary text-[var(--asgc-accent)] hover:text-[var(--asgc-accent-light)]"
                    >
                      (619) 644-7626
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:asgc@gcccd.edu" 
                      className="link-primary text-[var(--asgc-accent)] hover:text-[var(--asgc-accent-light)]"
                    >
                      asgc@gcccd.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2 text-sm">
              <li>
  <Link href="/governance/meetings" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Meeting Schedule
                </Link>
              </li>
              <li>
  <Link href="/governance/minutes" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Meeting Minutes
                </Link>
              </li>
              <li>
  <Link href="/funding" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Request Funding
                </Link>
              </li>
              <li>
  <Link href="/get-involved" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
  <Link href="/elections" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Elections
                </Link>
              </li>
              <li>
  <Link href="/services/jobs" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Student Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/governance/bylaws" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  ASGC Bylaws
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.grossmont.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  Grossmont College
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gcccd.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  GCCCD District
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--asgc-neutral-800)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-[var(--asgc-neutral-300)] mb-4 md:mb-0">
              © {new Date().getFullYear()} Associated Students of Grossmont College. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/accessibility" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Accessibility
              </Link>
              <Link href="/privacy" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[var(--asgc-neutral-100)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
