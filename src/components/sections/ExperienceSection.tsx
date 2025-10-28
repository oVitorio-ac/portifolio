'use client';

import { useTranslations } from 'next-intl';

export default function ExperienceSection() {
  const t = useTranslations();

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left mb-12 fade-in-up">
          {t('experience.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-left mb-12 fade-in-up">
          {t('experience.description')}
        </p>
        <div className="space-y-8">
          {[
            {
              title: t('experience.items.0.title'),
              company: t('experience.items.0.company'),
              period: t('experience.items.0.period'),
              location: t('experience.items.0.location'),
              description: t('experience.items.0.description'),
              skills: t('experience.items.0.skills')
            },
            {
              title: t('experience.items.1.title'),
              company: t('experience.items.1.company'),
              period: t('experience.items.1.period'),
              location: t('experience.items.1.location'),
              description: t('experience.items.1.description'),
              skills: t('experience.items.1.skills')
            },
            {
              title: t('experience.items.2.title'),
              company: t('experience.items.2.company'),
              period: t('experience.items.2.period'),
              location: t('experience.items.2.location'),
              description: t('experience.items.2.description'),
              skills: t('experience.items.2.skills')
            }
          ].map((item: any, index: number) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-lg fade-in-up">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-primary font-medium">{item.company}</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              {item.skills && (
                <p className="text-sm text-primary font-medium">{item.skills}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}