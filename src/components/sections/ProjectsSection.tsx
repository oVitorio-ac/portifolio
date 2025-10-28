'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface Repo {
  name: string;
  url: string;
  description: string;
  language: string;
}

const cardColors = ['#445964', '#DFDFDF', '#263138'];

const getRandomColor = () => {
  return cardColors[Math.floor(Math.random() * cardColors.length)];
};

export default function ProjectsSection() {
  const t = useTranslations();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/repos');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  const languages = ['All', ...Array.from(new Set(repos.map(repo => repo.language).filter(lang => lang !== 'N/A')))];

  const filteredRepos = selectedLanguage === 'All'
    ? repos
    : repos.filter(repo => repo.language === selectedLanguage);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-left mb-12 fade-in-up">
          <div className="flex flex-col leading-tight">
            <span className="text-[#263138] text-2xl md:text-3xl font-bold">Meus</span>
            <span className="text-[#445964] text-4xl md:text-5xl font-black">Projetos</span>
          </div>
        </h2>
        <p className="text-lg text-muted-foreground text-left mb-8 fade-in-up">
          {t('projects.description')}
        </p>

        {/* Language Filter Menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedLanguage === language
                  ? 'text-white shadow-lg'
                  : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              style={selectedLanguage === language ? { backgroundColor: '#263138' } : {}}
            >
              {language}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadingRepos ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg animate-pulse">
                <div className="w-full h-48 bg-muted rounded-lg mb-4"></div>
                <div className="h-6 bg-muted rounded mb-3"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                  <div className="h-6 bg-muted rounded-full w-20"></div>
                </div>
              </div>
            ))
          ) : filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => {
              const cardColor = getRandomColor();
              const isLightCard = cardColor === '#DFDFDF';
              const textColor = isLightCard ? '#263138' : 'white';
              const secondaryTextColor = isLightCard ? '#263138' : 'rgb(229 231 235)'; // gray-200

              return (
                <div
                  key={`${repo.name}-${index}`}
                  className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 fade-in-up"
                  style={{ backgroundColor: cardColor }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: textColor }}>{repo.name}</h3>
                  <p className="mb-3 line-clamp-2" style={{ color: secondaryTextColor }}>
                    {repo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {repo.language !== 'N/A' && (
                      <span
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: isLightCard ? 'rgba(38, 49, 56, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                          color: textColor
                        }}
                      >
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-colors text-sm font-medium hover:opacity-80"
                    style={{ color: textColor }}
                  >
                    View on GitHub →
                  </a>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">📂</div>
              <h3 className="text-xl font-semibold mb-2">No repositories found</h3>
              <p className="text-muted-foreground">Check your GitHub token configuration</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}