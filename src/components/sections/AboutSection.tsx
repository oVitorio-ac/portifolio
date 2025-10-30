'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const t = useTranslations();
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (cert: any) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

  const getCertificateImage = (certName: string) => {
    const imageMap: { [key: string]: string } = {
      'Administração': 'adminstração.png',
      'Montagem e Manutenção de Notebooks': 'Montagem e Manutenção de Notebooks.png',
      'Montagem eManutenção de Micros': 'Montagem eManutenção de Micros.png',
      'Design Gráfico': 'Design Gráfico.png',
      'Informática Básica II': 'Informática Básica II.png',
      'Segurança Cibernética Fundamental': 'Segurança Cibernética Fundamental.png'
    };
    return imageMap[certName] || null;
  };

  const getCertificateUrl = (certName: string) => {
    const urlMap: { [key: string]: string } = {
      'Administração': 'https://www.credly.com/badges/a25309a9-0880-4069-9706-138e0a509431/linked_in_profile',
      'Montagem e Manutenção de Notebooks': 'https://www.credly.com/badges/5169cdca-ff99-4367-921f-af620cd7b384?source=linked_in_profile',
      'Montagem eManutenção de Micros': 'https://www.credly.com/badges/f9186426-ba0c-476b-a6c1-b4978fb92f4f/linked_in_profile',
      'Design Gráfico': 'https://www.credly.com/badges/f9186426-ba0c-476b-a6c1-b4978fb92f4f/linked_in_profile',
      'Informática Básica II': 'https://www.credly.com/badges/f9186426-ba0c-476b-a6c1-b4978fb92f4f/linked_in_profile',
      'Segurança Cibernética Fundamental': 'https://www.credly.com/badges/f9186426-ba0c-476b-a6c1-b4978fb92f4f/linked_in_profile'
    };
    return urlMap[certName] || null;
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left mb-12 fade-in-up">
          {t('about.title')}
        </h2>
        {/* Profile Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 text-left slide-in-left">
              <div className="w-64 h-64 rounded-lg mx-0 mb-6 overflow-hidden shadow-lg">
                <img
                  src="/foto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-left slide-in-right">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Vitorio A. Cavalheiro</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Full Stack Developer & Data Engineer specializing in scalable systems and ETL pipelines.
              </p>
              <div className="text-xl text-muted-foreground whitespace-pre-line text-justify">
                {t('about.description')}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-left mb-8 fade-in-up">{t('about.certifications.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: t('about.certifications.items.0.name'),
                issuer: t('about.certifications.items.0.issuer'),
                date: t('about.certifications.items.0.date'),
                skills: t('about.certifications.items.0.skills')
              },
              {
                name: t('about.certifications.items.1.name'),
                issuer: t('about.certifications.items.1.issuer'),
                date: t('about.certifications.items.1.date'),
                skills: t('about.certifications.items.1.skills')
              },
              {
                name: t('about.certifications.items.2.name'),
                issuer: t('about.certifications.items.2.issuer'),
                date: t('about.certifications.items.2.date'),
                skills: t('about.certifications.items.2.skills')
              },
              {
                name: t('about.certifications.items.3.name'),
                issuer: t('about.certifications.items.3.issuer'),
                date: t('about.certifications.items.3.date'),
                skills: t('about.certifications.items.3.skills')
              },
              {
                name: t('about.certifications.items.4.name'),
                issuer: t('about.certifications.items.4.issuer'),
                date: t('about.certifications.items.4.date'),
                skills: t('about.certifications.items.4.skills')
              },
              {
                name: t('about.certifications.items.5.name'),
                issuer: t('about.certifications.items.5.issuer'),
                date: t('about.certifications.items.5.date'),
                skills: t('about.certifications.items.5.skills')
              },
              {
                name: t('about.certifications.items.6.name'),
                issuer: t('about.certifications.items.6.issuer'),
                date: t('about.certifications.items.6.date'),
                skills: t('about.certifications.items.6.skills')
              },
              {
                name: t('about.certifications.items.7.name'),
                issuer: t('about.certifications.items.7.issuer'),
                date: t('about.certifications.items.7.date'),
                skills: t('about.certifications.items.7.skills')
              },
              {
                name: t('about.certifications.items.8.name'),
                issuer: t('about.certifications.items.8.issuer'),
                date: t('about.certifications.items.8.date'),
                skills: t('about.certifications.items.8.skills')
              }
            ].map((cert: any, index: number) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(cert)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? '#ffffff' : '#263138';
                  const allTextElements = e.currentTarget.querySelectorAll('*');
                  allTextElements.forEach(el => {
                    if (el instanceof HTMLElement) {
                      el.style.color = theme === 'dark' ? '#000000' : 'white';
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  const allTextElements = e.currentTarget.querySelectorAll('*');
                  allTextElements.forEach(el => {
                    if (el instanceof HTMLElement) {
                      el.style.color = '';
                    }
                  });
                }}
              >
                <h4 className="font-semibold text-foreground text-base mb-1">{cert.name}</h4>
                <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                {cert.skills && (
                  <p className="text-sm text-primary">{cert.skills}</p>
                )}
                <div className="mt-2 text-xs text-primary">
                  Ver certificado →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-left mb-8 fade-in-up">{t('about.education.title')}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                degree: t('about.education.items.0.degree'),
                institution: t('about.education.items.0.institution'),
                period: t('about.education.items.0.period'),
                skills: t('about.education.items.0.skills')
              },
              {
                degree: t('about.education.items.1.degree'),
                institution: t('about.education.items.1.institution'),
                period: t('about.education.items.1.period'),
                skills: t('about.education.items.1.skills')
              }
            ].map((edu: any, index: number) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-foreground text-lg mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium text-base mb-2">{edu.institution}</p>
                <p className="text-muted-foreground mb-3">{edu.period}</p>
                {edu.skills && (
                  <p className="text-primary text-sm">{edu.skills}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{selectedCert.name}</h3>
                  <button
                    onClick={closeModal}
                    className="text-muted-foreground hover:text-foreground text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {getCertificateImage(selectedCert.name) ? (
                  <img
                    src={`/certificados/${getCertificateImage(selectedCert.name)}`}
                    alt={selectedCert.name}
                    className="w-full h-auto rounded-lg"
                  />
                ) : getCertificateUrl(selectedCert.name) ? (
                  <iframe
                    src={getCertificateUrl(selectedCert.name)!}
                    className="w-full h-[600px] rounded-lg"
                    title={selectedCert.name}
                  />
                ) : (
                  <iframe
                    src={`https://www.credly.com/badges/${selectedCert.credlyId || 'search'}`}
                    className="w-full h-[600px] rounded-lg"
                    title={selectedCert.name}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}