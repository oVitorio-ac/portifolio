'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section id="hero" className="flex items-center justify-center min-h-screen px-4 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="text-center lg:text-left fade-in-up">
          <p className="text-lg text-[#263138] mb-4 font-medium">
            {t('hero.welcome')}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#263138] mb-4">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          <div className="flex flex-col items-center lg:items-start space-y-100">
            <button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#263138] text-white px-8 py-4 rounded-lg hover:bg-[#263138]/90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('hero.cta')}
            </button>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-white/80 hover:text-white transition-colors">
                <img src="/Git.svg" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" className="text-white/80 hover:text-white transition-colors">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" className="text-white/80 hover:text-white transition-colors">
                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center slide-in-right">
          <img
            src="/fundo_home_pagge.png"
            alt="Programming character"
            className="w-full h-auto max-h-screen object-contain"
          />
        </div>
      </div>
    </section>
  );
}