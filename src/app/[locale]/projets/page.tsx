"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ProjectRow from '@/components/ProjectRow';

type Project = {
  title: string;
  description: string;
  category: 'web' | 'mobile';
  image: string;
  technologies: string[];
  link?: string;
};

export default function ProjetsPage() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Project[];
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const filteredItems = filter === 'all'
    ? items
    : items.filter((item) => item.category === filter);

  const filters: { key: 'all' | 'web' | 'mobile'; label: string }[] = [
    { key: 'all', label: t('filters.all') },
    { key: 'web', label: t('filters.web') },
    { key: 'mobile', label: t('filters.mobile') },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h1 className="text-4xl font-bold text-blue-900">{t('title')}</h1>
          {/* <p className="text-slate-400 mt-3 text-lg">{t('subtitle')}</p> */}
        </div>

        {/* Filtres */}
        <div className="flex gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors ${
                filter === f.key
                  ? 'bg-blue-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Liste des projets */}
        <div>
          {filteredItems.map((project, index) => (
            <div key={index}>
              <ProjectRow
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
              {index < filteredItems.length - 1 && (
                <hr className="border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
