import '../styles/globals.css'

export const metadata = {
  title: 'ASGC - Associated Students of Grossmont College',
  description: 'Official website of the Associated Students of Grossmont College',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <div className="mr-4 hidden md:flex">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <span className="hidden font-bold sm:inline-block text-xl">
                    ASGC
                  </span>
                </a>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <div className="relative group">
                    <a href="/governance" className="hover:text-blue-600 transition-colors">Governance</a>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <a href="/governance/meetings" className="block px-4 py-2 text-sm hover:bg-gray-50">Meetings</a>
                      <a href="/governance/agendas" className="block px-4 py-2 text-sm hover:bg-gray-50">Agendas</a>
                      <a href="/governance/minutes" className="block px-4 py-2 text-sm hover:bg-gray-50">Minutes</a>
                      <a href="/governance/bylaws" className="block px-4 py-2 text-sm hover:bg-gray-50">Bylaws</a>
                      <a href="/governance/resolutions" className="block px-4 py-2 text-sm hover:bg-gray-50">Resolutions</a>
                    </div>
                  </div>
                  <a href="/elections" className="hover:text-blue-600 transition-colors">Elections</a>
                  <a href="/funding" className="hover:text-blue-600 transition-colors">Funding</a>
                  <div className="relative group">
                    <a href="/services/events" className="hover:text-blue-600 transition-colors">Services</a>
                    <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <a href="/services/events" className="block px-4 py-2 text-sm hover:bg-gray-50">Events</a>
                      <a href="/services/jobs" className="block px-4 py-2 text-sm hover:bg-gray-50">Jobs</a>
                    </div>
                  </div>
                  <a href="/news" className="hover:text-blue-600 transition-colors">News</a>
                  <a href="/get-involved" className="hover:text-blue-600 transition-colors">Get Involved</a>
                </nav>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <span className="font-bold text-xl">ASGC</span>
                </a>
              </div>
              
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <a href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                  Contact
                </a>
                {/* TODO: Add auth button when NextAuth is configured */}
                <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
