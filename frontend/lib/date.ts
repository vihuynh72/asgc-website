// Small UTC-safe date formatting helpers to avoid SSR/CSR hydration mismatches
// caused by timezone differences when formatting bare YYYY-MM-DD strings.

export type DateInput = string | number | Date;

// Parses common inputs and formats in UTC by default
export function formatDateUTC(
  input: DateInput,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
  locale: string = 'en-US'
): string {
  const date = input instanceof Date ? input : new Date(input);
  return new Intl.DateTimeFormat(locale, { timeZone: 'UTC', ...options }).format(date);
}

export function formatWeekdayShortUTC(input: DateInput, locale: string = 'en-US'): string {
  return formatDateUTC(input, { weekday: 'short', month: 'short', day: 'numeric' }, locale);
}
