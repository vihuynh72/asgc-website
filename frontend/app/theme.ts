// Modern theme system for ASGC website
// Inspired by clean, accessible design patterns

export const theme = {
  // Primary brand colors (fallback - replace with official ASGC brand colors)
  primary: "#14532D",   // griffin green (fallback)
  primaryLight: "#166534",
  primaryDark: "#0F3B21",
  
  // Secondary accent colors
  secondary: "#CA8A04", // gold/amber (fallback)
  secondaryLight: "#EAB308",
  secondaryDark: "#A16207",
  
  // Interaction colors
  accent: "#0EA5E9",    // sky blue (links/CTAs)
  accentLight: "#38BDF8",
  accentDark: "#0284C7",
  
  // Neutral palette
  neutral900: "#111827",
  neutral800: "#1F2937",
  neutral700: "#374151",
  neutral600: "#4B5563",
  neutral500: "#6B7280",
  neutral400: "#9CA3AF",
  neutral300: "#D1D5DB",
  neutral200: "#E5E7EB",
  neutral100: "#F3F4F6",
  neutral50: "#F8FAFC",
  
  // Semantic colors
  success: "#059669",
  warning: "#D97706",
  error: "#DC2626",
  info: "#0EA5E9"
};

// Theme B (cool variant) for A/B testing
export const themeB = {
  primary: "#065F46",   // deep emerald
  primaryLight: "#047857",
  primaryDark: "#064E3B",
  
  secondary: "#4338CA", // indigo
  secondaryLight: "#5B21B6",
  secondaryDark: "#3730A3",
  
  accent: "#14B8A6",    // teal
  accentLight: "#2DD4BF",
  accentDark: "#0F766E",
  
  neutral900: "#0F172A",
  neutral800: "#1E293B",
  neutral700: "#334155",
  neutral600: "#475569",
  neutral500: "#64748B",
  neutral400: "#94A3B8",
  neutral300: "#CBD5E1",
  neutral200: "#E2E8F0",
  neutral100: "#F1F5F9",
  neutral50: "#F9FAFB",
  
  success: "#059669",
  warning: "#D97706",
  error: "#DC2626",
  info: "#14B8A6"
};

export type ThemeName = 'default' | 'cool';

export const themes = {
  default: theme,
  cool: themeB
} as const;

// CSS custom properties for runtime theme switching
export function generateCSSVariables(themeName: ThemeName = 'default') {
  const selectedTheme = themes[themeName];
  
  return {
    '--asgc-primary': selectedTheme.primary,
    '--asgc-primary-light': selectedTheme.primaryLight,
    '--asgc-primary-dark': selectedTheme.primaryDark,
    '--asgc-secondary': selectedTheme.secondary,
    '--asgc-secondary-light': selectedTheme.secondaryLight,
    '--asgc-secondary-dark': selectedTheme.secondaryDark,
    '--asgc-accent': selectedTheme.accent,
    '--asgc-accent-light': selectedTheme.accentLight,
    '--asgc-accent-dark': selectedTheme.accentDark,
    '--asgc-neutral-900': selectedTheme.neutral900,
    '--asgc-neutral-800': selectedTheme.neutral800,
    '--asgc-neutral-700': selectedTheme.neutral700,
    '--asgc-neutral-600': selectedTheme.neutral600,
    '--asgc-neutral-500': selectedTheme.neutral500,
    '--asgc-neutral-400': selectedTheme.neutral400,
    '--asgc-neutral-300': selectedTheme.neutral300,
    '--asgc-neutral-200': selectedTheme.neutral200,
    '--asgc-neutral-100': selectedTheme.neutral100,
    '--asgc-neutral-50': selectedTheme.neutral50,
    '--asgc-success': selectedTheme.success,
    '--asgc-warning': selectedTheme.warning,
    '--asgc-error': selectedTheme.error,
    '--asgc-info': selectedTheme.info,
    
    // Light theme variables
    '--color-background': selectedTheme.neutral50,
    '--color-foreground': selectedTheme.neutral900,
    '--color-muted': selectedTheme.neutral100,
    '--color-muted-foreground': selectedTheme.neutral600,
    '--color-accent': selectedTheme.accent,
    '--color-accent-foreground': selectedTheme.neutral50,
    '--color-border': selectedTheme.neutral200,
    '--color-card': selectedTheme.neutral50,
    '--color-card-foreground': selectedTheme.neutral900
  };
}

// Apply theme to document
export function applyTheme(themeName: ThemeName = 'default') {
  if (typeof document !== 'undefined') {
    const variables = generateCSSVariables(themeName);
    const root = document.documentElement;
    
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // Store theme preference
    localStorage.setItem('asgc-theme', themeName);
  }
}

// Get stored theme preference
export function getStoredTheme(): ThemeName {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('asgc-theme');
    return (stored as ThemeName) || 'default';
  }
  return 'default';
}
