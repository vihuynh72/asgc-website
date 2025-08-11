// OVERHAUL PLAN: Consistent document row with type badge, title, date and action affordances; accessible and tokenized.
import Link from 'next/link';
import { formatDateUTC } from '../../lib/date';

export interface DocRowProps {
  title: string;
  date: string;
  href?: string;
  type?: 'agenda' | 'minutes' | 'bylaw' | 'resolution' | 'packet' | 'other';
  actions?: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost' }>;
}

const typeStyles: Record<NonNullable<DocRowProps['type']>, string> = {
  agenda: 'bg-blue-100 text-blue-800',
  minutes: 'bg-green-100 text-green-800',
  bylaw: 'bg-neutral-100 text-neutral-800',
  resolution: 'bg-purple-100 text-purple-800',
  packet: 'bg-amber-100 text-amber-800',
  other: 'bg-gray-100 text-gray-800',
};

export function DocRow({ title, date, href, type = 'other', actions = [] }: DocRowProps) {
  const content = (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${typeStyles[type]}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          <time className="text-xs text-[var(--color-muted)]" dateTime={date}>
            {formatDateUTC(date)}
          </time>
        </div>
        <div className="text-[var(--color-foreground)] font-medium truncate">{title}</div>
      </div>
      {actions.length > 0 && (
        <div className="flex items-center gap-2 flex-shrink-0">
          {actions.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className={
                a.variant === 'primary'
                  ? 'btn-primary px-3 py-2 text-sm'
                  : a.variant === 'secondary'
                  ? 'btn-secondary px-3 py-2 text-sm'
                  : 'inline-flex items-center px-3 py-2 text-sm rounded-lg hover:bg-[var(--asgc-neutral-50)] border border-[var(--color-border)]'
              }
            >
              {a.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block asgc-card p-4 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {content}
      </Link>
    );
  }

  return <div className="asgc-card p-4">{content}</div>;
}
