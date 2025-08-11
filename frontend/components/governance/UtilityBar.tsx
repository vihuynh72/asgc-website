// Sticky utility bar for governance pages with primary actions
'use client';

import Link from 'next/link';

interface UtilityBarProps {
  publicCommentHref?: string;
  downloadHref?: string;
  className?: string;
}

export function UtilityBar({
  publicCommentHref = '/contact#public-comment',
  downloadHref = '/governance/agendas',
  className = '',
}: UtilityBarProps) {
  return (
    <div
      className={`sticky top-[calc(var(--header-height)+8px)] z-30 bg-[var(--color-background)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-xl ${className}`}
      role="region"
      aria-label="Governance actions"
    >
      <div className="px-3 py-2 md:px-4 md:py-3 flex items-center justify-between gap-3">
        <div className="text-sm text-[var(--color-muted)]">
          Participate in the process: submit a public comment or download the meeting packet.
        </div>
        <div className="flex items-center gap-2">
          <Link href={publicCommentHref} className="btn-ghost text-sm">
            Public Comment
          </Link>
          <Link href={downloadHref} className="btn-primary text-sm">
            Download Packet
          </Link>
        </div>
      </div>
    </div>
  );
}
