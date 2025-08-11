// OVERHAUL START
export const theme = {
  primary: "#14532D", secondary: "#CA8A04", accent: "#0EA5E9",
  neutral900: "#111827", neutral50: "#F8FAFC",
  surface: "#FFFFFF", border: "#E5E7EB", muted: "#6B7280"
};
export const themeB = {
  primary: "#065F46", secondary: "#4338CA", accent: "#14B8A6",
  neutral900: "#0F172A", neutral50: "#F9FAFB",
  surface: "#FFFFFF", border: "#E5E7EB", muted: "#64748B"
};

export type ThemeName = 'default' | 'cool';
export const themes = { default: theme, cool: themeB } as const;

export function generateCSSVariables(themeName: ThemeName = 'default') {
  const t = themes[themeName];
  return {
    '--asgc-primary': t.primary,
    '--asgc-secondary': t.secondary,
    '--asgc-accent': t.accent,
    '--asgc-neutral-900': t.neutral900,
    '--asgc-neutral-50': t.neutral50,
    '--asgc-surface': t.surface,
    '--asgc-border': t.border,
    '--asgc-muted': t.muted,
    '--color-background': t.neutral50,
    '--color-foreground': t.neutral900,
    '--color-muted': t.muted,
    '--color-muted-foreground': t.neutral900,
    '--color-accent': t.accent,
    '--color-accent-foreground': t.neutral50,
    '--color-border': t.border,
    '--color-card': t.surface,
    '--color-card-foreground': t.neutral900,
  };
}

export function applyTheme(themeName: ThemeName = 'default') {
  if (typeof document === 'undefined') return;
  const vars = generateCSSVariables(themeName);
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  if (themeName === 'cool') root.setAttribute('data-theme', 'b');
  else root.removeAttribute('data-theme');
  try { localStorage.setItem('asgc-theme', themeName); } catch {}
}

export function getStoredTheme(): ThemeName {
  try {
    const v = localStorage.getItem('asgc-theme') as ThemeName | null;
    return v ?? 'default';
  } catch {
    return 'default';
  }
}
// OVERHAUL END
