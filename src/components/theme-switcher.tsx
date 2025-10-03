'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const themes = [
  { value: 'classic', label: '🎯 Classique', description: 'Professionnel & sobre' },
  { value: 'cyberpunk', label: '⚡ Cyberpunk', description: 'Électrique & néon' },
  { value: 'matrix', label: '🟢 Matrix', description: 'Terminal vert' },
  { value: 'neon', label: '💖 Neon', description: 'Rose & bleu' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Évite le hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Thème..." />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select value={theme || 'cyberpunk'} onValueChange={setTheme}>
      <SelectTrigger className="w-[180px] bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-primary)]">
        <SelectValue placeholder="Choisir un thème" />
      </SelectTrigger>
      <SelectContent className="bg-[var(--bg-card)] border-[var(--border)]">
        {themes.map((t) => (
          <SelectItem
            key={t.value}
            value={t.value}
            className="text-[var(--text-secondary)] hover:bg-[var(--bg-light)] focus:bg-[var(--bg-light)] cursor-pointer"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold">{t.label}</span>
              <span className="text-xs text-[var(--text-muted)]">{t.description}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
