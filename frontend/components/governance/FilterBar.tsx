// OVERHAUL PLAN: Sticky filter bar for governance lists with council, semester and search; non-blocking UI, a11y-first.
'use client';
import { useState } from 'react';

export interface FilterValues {
  query: string;
  council: string;
  semester: string;
}

interface FilterBarProps {
  onChange?: (values: FilterValues) => void;
  initial?: Partial<FilterValues>;
  className?: string;
}

export function FilterBar({ onChange, initial, className = '' }: FilterBarProps) {
  const [values, setValues] = useState<FilterValues>({
    query: initial?.query ?? '',
    council: initial?.council ?? '',
    semester: initial?.semester ?? '',
  });

  const update = (patch: Partial<FilterValues>) => {
    const next = { ...values, ...patch };
    setValues(next);
    onChange?.(next);
  };

  return (
    <div className={`sticky top-[calc(var(--header-height)+8px)] z-30 bg-[var(--color-background)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-xl p-3 md:p-4 ${className}`} role="region" aria-label="Filters">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="gov-search" className="sr-only">Search documents</label>
          <input
            id="gov-search"
            type="search"
            value={values.query}
            onChange={(e)=>update({query:e.target.value})}
            placeholder="Search by title or keyword"
            className="form-input"
          />
        </div>
        <div className="grid grid-cols-2 md:flex md:items-center gap-3">
          <label className="sr-only" htmlFor="gov-council">Council</label>
          <select id="gov-council" value={values.council} onChange={(e)=>update({council:e.target.value})} className="form-input py-2">
            <option value="">All councils</option>
            <option value="general">General Assembly</option>
            <option value="senate">Student Senate</option>
            <option value="budget">Budget Committee</option>
            <option value="judiciary">Judiciary Committee</option>
          </select>
          <label className="sr-only" htmlFor="gov-semester">Semester</label>
          <select id="gov-semester" value={values.semester} onChange={(e)=>update({semester:e.target.value})} className="form-input py-2">
            <option value="">All semesters</option>
            {/* TODO: question: Confirm semester options source (dynamic vs static)? */}
            <option value="fall-2025">Fall 2025</option>
            <option value="spring-2025">Spring 2025</option>
            <option value="fall-2024">Fall 2024</option>
          </select>
        </div>
      </div>
    </div>
  );
}
