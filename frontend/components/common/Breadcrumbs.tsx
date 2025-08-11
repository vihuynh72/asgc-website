// OVERHAUL PLAN: Breadcrumbs for inner pages; simple, accessible trail with tokens.
import Link from 'next/link';

interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items }: { items?: Crumb[] }) {
  // TODO: question: Should breadcrumbs be auto-derived from pathname or passed from pages?
  const pathItems = items ?? [
    { label: 'Home', href: '/' },
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-muted)]" role="navigation">
      <ol className="flex items-center gap-2">
        {pathItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--asgc-primary)] focus-ring rounded">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--color-foreground)]">{item.label}</span>
            )}
            {idx < pathItems.length - 1 && (
              <span aria-hidden className="text-[var(--color-muted)]">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
