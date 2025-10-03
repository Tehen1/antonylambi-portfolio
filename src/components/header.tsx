'use client';

import * as React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-card)]/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-height)' }}
    >
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors relative group"
        >
          AL
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full neon-border" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Theme Switcher + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--text-primary)] transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-card)]/98 backdrop-blur-md border-b border-[var(--border)] shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--border)]">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
