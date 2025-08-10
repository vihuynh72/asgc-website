export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
            Your Voice, Your Campus, Your Future
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The Associated Students of Grossmont College (ASGC) represents your interests, advocates for student rights, and creates opportunities for engagement.
          </p>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="/elections" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-green-300">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-700">Run for Office</h3>
              <p className="text-slate-600 text-sm">Join student government and make a difference</p>
            </a>
            
            <a href="/funding" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-amber-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-700">Get Funding</h3>
              <p className="text-slate-600 text-sm">Apply for club and event funding</p>
            </a>
            
            <a href="/services/events" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-blue-300">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700">Find Events</h3>
              <p className="text-slate-600 text-sm">Discover campus activities and programs</p>
            </a>
            
            <a href="/contact" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 hover:border-purple-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-700">Contact Us</h3>
              <p className="text-slate-600 text-sm">Get help and ask questions</p>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Making an Impact Together</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">See how ASGC is working every day to improve student life and create opportunities for growth and success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">15,000+</div>
              <div className="text-slate-600">Students Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">$250K</div>
              <div className="text-slate-600">Funding Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-slate-600">Active Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-slate-600">Events This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Support You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From representation to resources, discover the many ways ASGC works for students every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🏛️</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Student Representation</h3>
              <p className="text-slate-600 mb-6">We advocate for student interests in college governance, policy decisions, and campus planning.</p>
              <a href="/governance" className="text-green-700 hover:text-green-800 font-medium">Learn About Governance →</a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">💼</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Funding & Resources</h3>
              <p className="text-slate-600 mb-6">Access financial support for clubs, events, and student initiatives through our allocation process.</p>
              <a href="/funding" className="text-amber-700 hover:text-amber-800 font-medium">Apply for Funding →</a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Campus Life</h3>
              <p className="text-slate-600 mb-6">Discover opportunities to get involved, meet people, and make the most of your college experience.</p>
              <a href="/get-involved" className="text-blue-700 hover:text-blue-800 font-medium">Get Involved →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
