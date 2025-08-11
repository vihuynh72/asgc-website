// OVERHAUL PLAN: Step indicator for funding multi-step form; numeric steps with current state.
'use client';

interface StepIndicatorProps {
  steps: string[];
  current: number; // 0-based index
}

export function StepIndicator({ steps, current }: StepIndicatorProps) {
  return (
    <ol className="flex items-center gap-3" aria-label="Progress">
      {steps.map((label, idx) => {
        const isActive = idx === current;
        const isCompleted = idx < current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold border ${
                isActive
                  ? 'bg-[var(--asgc-primary)] text-white border-transparent'
                  : isCompleted
                  ? 'bg-green-100 text-green-800 border-green-200'
                  : 'bg-[var(--color-card)] text-[var(--color-muted)] border-[var(--color-border)]'
              }`}
              aria-current={isActive ? 'step' : undefined}
            >
              {idx + 1}
            </span>
            <span className={`text-sm ${isActive ? 'text-[var(--color-foreground)] font-medium' : 'text-[var(--color-muted)]'}`}>{label}</span>
            {idx < steps.length - 1 && <span className="w-6 h-px bg-[var(--color-border)]" aria-hidden />}
          </li>
        );
      })}
    </ol>
  );
}
