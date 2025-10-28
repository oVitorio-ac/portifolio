'use client';

import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Navigation } from '@/components/navigation';
import HomePage from './(locale)/page';

export default function RootPage() {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [messages, setMessages] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferred-language');
    const defaultLang = storedLang && ['en', 'pt'].includes(storedLang) ? storedLang : 'en';
    setCurrentLocale(defaultLang);

    // Load messages for the current locale
    import(`../messages/${defaultLang}.json`).then((msgs) => {
      setMessages(msgs.default);
    });
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail;
      setCurrentLocale(newLang);
      // Reload messages
      import(`../messages/${newLang}.json`).then((msgs) => {
        setMessages(msgs.default);
      });
    };

    const handleStorageChange = () => {
      const storedLang = localStorage.getItem('preferred-language');
      if (storedLang && ['en', 'pt'].includes(storedLang)) {
        setCurrentLocale(storedLang);
        // Reload messages
        import(`../messages/${storedLang}.json`).then((msgs) => {
          setMessages(msgs.default);
        });
      }
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!mounted || Object.keys(messages).length === 0) {
    return null; // Prevent flash of wrong content
  }

  return (
    <NextIntlClientProvider messages={messages} locale={currentLocale}>
      <Navigation />
      <HomePage />
    </NextIntlClientProvider>
  );
}