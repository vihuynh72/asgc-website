interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  isLast?: boolean;
}

function TimelineItem({ title, description, date, status, isLast = false }: TimelineItemProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return {
          dot: 'bg-green-500 border-green-200',
          line: 'bg-green-200',
          content: 'text-gray-600',
          title: 'text-gray-900'
        };
      case 'current':
        return {
          dot: 'bg-blue-500 border-blue-200 ring-4 ring-blue-100',
          line: 'bg-blue-200',
          content: 'text-gray-900',
          title: 'text-blue-900 font-semibold'
        };
      case 'upcoming':
        return {
          dot: 'bg-gray-300 border-gray-200',
          line: 'bg-gray-200',
          content: 'text-gray-500',
          title: 'text-gray-700'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="relative flex">
      {/* Timeline line */}
      {!isLast && (
        <div 
          className={`absolute left-6 top-12 w-0.5 h-full ${styles.line}`}
          aria-hidden="true"
        />
      )}
      
      {/* Timeline dot */}
      <div className="relative flex items-center">
        <div className={`w-12 h-12 rounded-full border-4 ${styles.dot} flex items-center justify-center`}>
          {status === 'completed' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {status === 'current' && (
            <div className="w-3 h-3 bg-white rounded-full" />
          )}
          {status === 'upcoming' && (
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="ml-6 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className={`text-lg ${styles.title}`}>
            {title}
          </h3>
          <time className="text-sm text-gray-500 md:ml-4">
            {date}
          </time>
        </div>
        <p className={`text-sm leading-relaxed ${styles.content}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: Array<{
    title: string;
    description: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
  }>;
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
