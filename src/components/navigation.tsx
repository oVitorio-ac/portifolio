'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    setSelectedLocale(currentLocale);
  }, [currentLocale]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#experience', label: t('experience.title') },
    { href: '#about', label: t('about.title') },
    { href: '#projects', label: t('projects.title') },
    { href: '#contact', label: t('contact.title') },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const switchLanguage = (newLocale: string) => {
    setSelectedLocale(newLocale);
    // Store language preference in localStorage
    localStorage.setItem('preferred-language', newLocale);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLocale }));

    // Navigate to the new locale
    const newPath = pathname.replace(/^\/(en|pt)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 shadow-lg animate-in slide-in-from-top duration-500">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 text-lg font-bold text-foreground hover:text-primary transition-colors">
          <img
            src="/logo.svg"
            alt="Profile"
            className="w-7 h-7 rounded-full object-cover border border-border/50"
          />
          <span>Vitorio A. Cavalheiro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "font-semibold text-sm tracking-wide hover:text-primary transition-colors cursor-pointer",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Language Switcher and Theme Toggle - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative flex items-center bg-muted/50 rounded-full p-1">
            <button
              onClick={() => switchLanguage('pt')}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 relative z-10",
                selectedLocale === 'pt'
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              PT
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 relative z-10",
                selectedLocale === 'en'
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
            {/* Sliding indicator */}
            <div
              className={cn(
                "absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out shadow-sm",
                selectedLocale === 'pt'
                  ? "left-1 right-1/2 bg-foreground"
                  : "left-1/2 right-1 bg-foreground"
              )}
            />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center bg-white dark:bg-gray-900">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block text-2xl font-semibold tracking-wide hover:text-primary transition-colors cursor-pointer text-black dark:text-white",
                  pathname === item.href ? "text-primary" : "text-gray-600 dark:text-gray-300"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-8">
              <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => switchLanguage('pt')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 relative z-10",
                    selectedLocale === 'pt'
                      ? "text-background"
                      : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  PT
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 relative z-10",
                    selectedLocale === 'en'
                      ? "text-background"
                      : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  EN
                </button>
                {/* Sliding indicator */}
                <div
                  className={cn(
                    "absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out shadow-sm",
                    selectedLocale === 'pt'
                      ? "left-1 right-1/2 bg-foreground"
                      : "left-1/2 right-1 bg-foreground"
                  )}
                />
              </div>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}