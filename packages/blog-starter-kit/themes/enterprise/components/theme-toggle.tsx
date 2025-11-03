// components/theme-toggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 scale-100 dark:scale-0" />
      <Moon className="absolute h-5 w-5 scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}