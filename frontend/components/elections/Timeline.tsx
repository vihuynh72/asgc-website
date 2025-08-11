// OVERHAUL START
interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  isLast?: boolean;
}

function TimelineItem({ title, description, date, status, isLast = false }: TimelineItemProps) {
  const state = {
    completed: {
      dot: 'bg-green-600 border-green-200',
      line: 'bg-green-200',
      title: 'text-[var(--asgc-neutral-900)]',
      content: 'text-[var(--asgc-muted)]',
    },
    current: {
      dot: 'bg-[var(--asgc-accent)] border-[var(--asgc-accent)]/30 ring-4 ring-[var(--asgc-accent)]/10',
      line: 'bg-[var(--asgc-accent)]/30',
      title: 'text-[var(--asgc-neutral-900)]',
      content: 'text-[var(--asgc-neutral-900)]',
    },
    upcoming: {
      dot: 'bg-[var(--asgc-neutral-50)] border-[var(--asgc-border)]',
      line: 'bg-[var(--asgc-border)]',
      title: 'text-[var(--asgc-muted)]',
      content: 'text-[var(--asgc-muted)]',
    },
  } as const;
  const styles = state[status];

  return (
    <li className="relative flex flex-col md:flex-row md:items-start">
      {/* Connector line: vertical on sm, horizontal on md+ */}
      {!isLast && (
        <>
          <div className={`absolute left-6 top-12 w-0.5 h-[calc(100%_-_3rem)] md:hidden ${styles.line}`} aria-hidden="true" />
          <div className={`hidden md:block absolute top-6 left-12 right-0 h-0.5 ${styles.line}`} aria-hidden="true" />
        </>
      )}

      {/* Dot */}
      <div className="relative z-10 flex items-center md:items-start">
        <div className={`w-12 h-12 rounded-full border-4 ${styles.dot} flex items-center justify-center`}> 
          {status === 'completed' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {status === 'current' && <div className="w-3 h-3 bg-white rounded-full" />}
          {status === 'upcoming' && <div className="w-2 h-2 bg-[var(--asgc-muted)] rounded-full" />}
        </div>
      </div>

      {/* Content */}
      <div className="md:ml-6 mt-3 md:mt-0 md:min-w-[18rem]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-3 mb-2">
          <h3 className={`text-base md:text-lg ${styles.title}`}>{title}</h3>
          <time className="text-sm text-[var(--asgc-muted)]">{date}</time>
        </div>
        <p className={`text-sm leading-relaxed ${styles.content}`}>{description}</p>
      </div>
    </li>
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
    <ol className="relative md:flex md:items-start md:gap-12 md:justify-between">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
      ))}
    </ol>
  );
}
// OVERHAUL END
