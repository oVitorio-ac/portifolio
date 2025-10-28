'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

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
    // Store language preference in localStorage
    localStorage.setItem('preferred-language', newLocale);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLocale }));
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
        <div className="flex space-x-8">
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
        <div className="flex items-center space-x-1">
          <button
            onClick={() => switchLanguage('pt')}
            className={cn(
              "px-3 py-1.5 rounded text-xs font-bold transition-all duration-200",
              currentLocale === 'pt'
                ? "bg-[#263138] text-white shadow-sm"
                : "text-muted-foreground hover:bg-muted/50"
            )}
          >
            PT
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={cn(
              "px-3 py-1.5 rounded text-xs font-bold transition-all duration-200",
              currentLocale === 'en'
                ? "bg-[#263138] text-white shadow-sm"
                : "text-muted-foreground hover:bg-muted/50"
            )}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}