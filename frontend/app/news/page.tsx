import { formatDateUTC } from '../../lib/date'

export default function NewsPage() {
  // TODO: Replace with actual API call to fetch news posts
  const mockNews = [
    {
      id: '1',
      title: 'ASGC Welcomes New Student Senate Members',
      slug: 'welcome-new-senate-members',
      excerpt: 'We are excited to announce our new Student Senate members for the 2025-26 academic year...',
      publishedAt: new Date('2025-08-09'),
      author: 'ASGC Communications',
    },
    {
      id: '2',
      title: 'New Mental Health Resources Available',
      slug: 'mental-health-resources',
      excerpt: 'ASGC has partnered with the counseling center to expand mental health support services...',
      publishedAt: new Date('2025-08-05'),
      author: 'ASGC Health Committee',
    },
    {
      id: '3',
      title: 'Student Organization Funding Applications Open',
      slug: 'funding-applications-open',
      excerpt: 'Student organizations can now apply for funding for the fall semester. Applications due August 30th...',
      publishedAt: new Date('2025-08-01'),
      author: 'ASGC Budget Committee',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">ASGC News</h1>
          <p className="text-lg text-gray-600">
            Stay informed about ASGC activities, decisions, and campus news.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Stay Updated</h2>
            <p className="text-blue-700 mb-4">
              Subscribe to our newsletter for the latest ASGC news and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              Newsletter functionality will be available after database setup.
            </p>
          </div>
        </div>

        {/* News Articles */}
        <div className="space-y-6">
          {mockNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <time dateTime={article.publishedAt.toISOString()}>
                      {formatDateUTC(article.publishedAt, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <a 
                    href={`/news/${article.slug}`} 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <a 
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center mt-8">
          <button 
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled
          >
            Load More Articles
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Additional articles will be available after database integration.
          </p>
        </div>

        {/* Archive Link */}
        <div className="bg-gray-50 border rounded-lg p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Looking for older news?</h3>
          <p className="text-gray-600 mb-4">
            Browse our archive of past announcements and news articles.
          </p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled
          >
            View Archive
          </button>
        </div>
      </div>
    </div>
  )
}
