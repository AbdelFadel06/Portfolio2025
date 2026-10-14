"use client";

import { useTranslations } from 'next-intl';

type WorkItem = {
  name: string;
  description: string;
  problem: string;
  impact: string;
  link?: string;
};

export default function SelectedWork() {
  const t = useTranslations('selectedWork');
  const items = t.raw('items') as WorkItem[];

  return (
    <section id="selected-work" className="py-20 max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">{t('title')}</h2>
        {/* <p className="text-slate-400 mt-2 ">{t('subtitle')}</p> */}
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-6 py-8">
              {/* Nom à gauche */}
              <div className="md:w-1/4 flex-shrink-0">
                <h3 className="text-blue-900 font-semibold text-lg">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                    >
                      {item.name}
                      <span aria-hidden="true" className="text-sm">↗</span>
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
              </div>

              {/* Contenu à droite */}
              <div className="flex-1">
                <p className=" text-sm text-slate-400 mb-6">{item.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-blue-950 mb-1 font-bold">
                      {t('problemLabel')}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-blue-950 mb-1 font-bold">
                      {t('impactLabel')}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed ">{item.impact}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {index < items.length - 1 && <hr className="border-slate-800" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
