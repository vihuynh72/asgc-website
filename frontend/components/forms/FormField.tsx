// OVERHAUL PLAN: Form primitives for consistent labeling, help text, and error messaging with a11y attributes.
'use client';

import { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  help?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export function FormField({ id, label, children, help, error, required, className = '' }: FormFieldProps) {
  const helpId = help ? `${id}-help` : undefined;
  const errId = error ? `${id}-error` : undefined;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-foreground)]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div aria-invalid={!!error} aria-describedby={[helpId, errId].filter(Boolean).join(' ') || undefined}>
        {children}
      </div>
      {help && (
        <p id={helpId} className="text-xs text-[var(--color-muted)]">{help}</p>
      )}
      {error && (
        <p id={errId} className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
