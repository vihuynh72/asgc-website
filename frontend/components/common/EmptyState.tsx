// OVERHAUL PLAN: Reusable empty state with icon and action link; aligns with minimalist aesthetic.
import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-16 border border-dashed border-[var(--color-border)] rounded-2xl">
      <div className="mx-auto h-12 w-12 text-[var(--color-muted)] mb-4">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">{title}</h3>
      {description && <p className="text-[var(--color-muted)] mb-4 max-w-md mx-auto">{description}</p>}
      {action && (
        <Link href={action.href} className="btn-primary inline-flex">
          {action.label}
        </Link>
      )}
    </div>
  );
}
