"use client";

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Sun className="h-full w-full text-neutral-600" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="w-full h-full flex items-center justify-center"
    >
      {resolvedTheme === 'dark' ? (
        <Moon className="h-full w-full text-neutral-300" />
      ) : (
        <Sun className="h-full w-full text-neutral-600" />
      )}
    </button>
  );
} 