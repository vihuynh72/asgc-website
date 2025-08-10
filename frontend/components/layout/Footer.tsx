import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: 'var(--asgc-primary)' }}
              >
                A
              </div>
              <div>
                <div className="text-xl font-bold">ASGC</div>
                <div className="text-sm text-gray-300">Associated Students of Grossmont College</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Representing over 20,000 students and creating opportunities that enhance your college experience. Your voice, your campus, your future.
            </p>
            
            {/* Office Hours */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <div className="text-gray-300 text-sm">
                <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
                <p>Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <div className="text-gray-300 text-sm">
                <p>Student Center, Room 110</p>
                <p>8800 Grossmont College Dr</p>
                <p>El Cajon, CA 92020</p>
                <p className="mt-2">
                  <a href="tel:619-644-7626" className="hover:text-white transition-colors">
                    (619) 644-7626
                  </a>
                </p>
                <p>
                  <a href="mailto:asgc@gcccd.edu" className="hover:text-white transition-colors">
                    asgc@gcccd.edu
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/governance/meetings" className="text-gray-300 hover:text-white transition-colors">
                  Meeting Schedule
                </Link>
              </li>
              <li>
                <Link href="/governance/minutes" className="text-gray-300 hover:text-white transition-colors">
                  Meeting Minutes
                </Link>
              </li>
              <li>
                <Link href="/funding/request" className="text-gray-300 hover:text-white transition-colors">
                  Request Funding
                </Link>
              </li>
              <li>
                <Link href="/get-involved/committees" className="text-gray-300 hover:text-white transition-colors">
                  Join a Committee
                </Link>
              </li>
              <li>
                <Link href="/elections" className="text-gray-300 hover:text-white transition-colors">
                  Elections
                </Link>
              </li>
              <li>
                <Link href="/services/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Student Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/governance/bylaws" className="text-gray-300 hover:text-white transition-colors">
                  ASGC Bylaws
                </Link>
              </li>
              <li>
                <Link href="/funding/policies" className="text-gray-300 hover:text-white transition-colors">
                  Funding Policies
                </Link>
              </li>
              <li>
                <Link href="/elections/resources" className="text-gray-300 hover:text-white transition-colors">
                  Election Resources
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.grossmont.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Grossmont College
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gcccd.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GCCCD District
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Associated Students of Grossmont College. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
