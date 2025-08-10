import Link from 'next/link';
import { NewsArticle } from '../../lib/content/types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const cardSize = featured ? 'col-span-2' : 'col-span-1';
  
  return (
    <article className={`asgc-card overflow-hidden hover:shadow-lg transition-shadow duration-200 ${cardSize}`}>
      {article.imageUrl && (
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <img
            src={article.imageUrl}
            alt=""
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6">
        {featured && (
          <div className="mb-3">
            <span 
              className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
              style={{ backgroundColor: 'var(--asgc-secondary)' }}
            >
              Featured
            </span>
          </div>
        )}
        
        <div className="mb-3">
          <h3 className={featured ? 'asgc-h4' : 'asgc-h5'}>
            <Link 
              href={`/news/${article.slug}`}
              className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              {article.title}
            </Link>
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author}</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </div>
        
        {article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
