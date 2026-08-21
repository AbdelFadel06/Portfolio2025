"use client";

import { useTranslations } from 'next-intl';

type ExperienceItem = {
  start: string;
  end: string;
  position: string;
  company: string;
  mode: 'onsite' | 'remote' | 'hybrid';
  description: string;
};

export default function Experience() {
  const t = useTranslations('experience');
  const items = t.raw('items') as ExperienceItem[];

  return (
    <section id="experiences" className="py-20 max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">{t('title')}</h2>
        {/* <p className="text-slate-400 mt-2">{t('subtitle')}</p> */}
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-6 py-8">
              {/* Dates à gauche */}
              <div className="md:w-1/4 flex-shrink-0">
                <p className="text-slate-400 text-sm font-mono">
                  {item.start} — {item.end === 'now' ? t('now') : item.end}
                </p>
              </div>

              {/* Contenu à droite */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-blue-900 font-semibold text-lg">{item.position}</h3>
                  <span className="text-xs text-blue-900 border border-blue-400/30 rounded-full px-3 py-1">
                    {t(item.mode)}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-3">{item.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
            {/* {index < items.length - 1 && <hr className="border-slate-800" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
