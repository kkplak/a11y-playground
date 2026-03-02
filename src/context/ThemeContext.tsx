import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// The ThemeContext manages high contrast mode, text size and reduced motion preferences.
// It exposes state and toggles so components can read and adjust accessibility settings.

export type ThemeSettings = {
  theme: 'default' | 'high-contrast';
  textSize: 'normal' | 'large';
  reducedMotion: boolean;
  toggleTheme: () => void;
  toggleTextSize: () => void;
  toggleReducedMotion: () => void;
};

const ThemeContext = createContext<ThemeSettings | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'default' | 'high-contrast'>('default');
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Apply data attributes to the body so CSS can react to changes.
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.dataset.textSize = textSize;
  }, [textSize]);

  useEffect(() => {
    if (reducedMotion) {
      document.body.dataset.reducedMotion = 'true';
    } else {
      delete document.body.dataset.reducedMotion;
    }
  }, [reducedMotion]);

  // honour system `prefers-reduced-motion` as default state
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const value: ThemeSettings = {
    theme,
    textSize,
    reducedMotion,
    toggleTheme: () => setTheme((prev) => (prev === 'default' ? 'high-contrast' : 'default')),
    toggleTextSize: () => setTextSize((prev) => (prev === 'normal' ? 'large' : 'normal')),
    toggleReducedMotion: () => setReducedMotion((prev) => !prev),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeSettings => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};