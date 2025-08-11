import Link from 'next/link';

export function Footer() {
  return (
  <footer className="bg-[var(--asgc-neutral-900)] text-[var(--asgc-neutral-50)] border-t border-[color:rgba(255,255,255,0.12)]
    [&_p]:text-[color:rgba(255,255,255,0.82)] [&_p]:text-sm [&_p]:leading-6
    [&_li]:text-[color:rgba(255,255,255,0.88)] [&_li]:text-sm">
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
            <p className="mb-6 max-w-md leading-relaxed">
              Representing Grossmont College students and creating opportunities that enhance your college experience. Your voice, your campus, your future.
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Office Hours</h3>
                <div className="text-sm space-y-1">
                  <p>Hours may vary by term and holidays.</p>
                  <p>Please check the official Grossmont College website for current hours.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Location</h3>
                <div className="text-sm space-y-1">
                  <p>8800 Grossmont College Dr</p>
                  <p>El Cajon, CA 92020</p>
                  <p className="mt-2 text-[color:rgba(255,255,255,0.82)] text-sm">
                    Refer to the official directory at grossmont.edu for phone contacts.
                  </p>
                  <p>
                    <a 
                      href="https://www.grossmont.edu/" 
                      target="_blank" rel="noopener noreferrer"
                      className="link-primary text-[var(--asgc-accent)] hover:text-[var(--asgc-accent-light)]"
                    >
                      Contact via grossmont.edu
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
  <Link href="/governance/meetings" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Meeting Schedule
                </Link>
              </li>
              <li>
  <Link href="/governance/minutes" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Meeting Minutes
                </Link>
              </li>
              <li>
  <Link href="/funding" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Funding & Grants
                </Link>
              </li>
              <li>
  <Link href="/get-involved" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
  <Link href="/elections" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  Elections
                </Link>
              </li>
              <li>
  <Link href="/services/jobs" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
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
                <Link href="/governance/bylaws" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  ASGC Bylaws
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
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
        <div className="border-t border-[color:rgba(255,255,255,0.12)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-[color:rgba(255,255,255,0.75)] mb-4 md:mb-0">
              © {new Date().getFullYear()} Associated Students of Grossmont College. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/accessibility" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Accessibility
              </Link>
              <Link href="/privacy" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[color:rgba(255,255,255,0.92)] hover:text-white hover:underline underline-offset-4 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
