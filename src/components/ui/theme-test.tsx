"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeTest() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
} 