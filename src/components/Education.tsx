"use client";

import { useTranslations } from 'next-intl';

type EducationItem = {
  year: string;
  degree: string;
  school: string;
  city: string;
};

export default function Education() {
  const t = useTranslations('education');
  const items = t.raw('items') as EducationItem[];

  return (
    <section id="formation" className="py-20 max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">{t('title')}</h2>
        {/* <p className="text-slate-400 mt-2">{t('subtitle')}</p> */}
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-6 py-8">
              <div className="md:w-1/4 flex-shrink-0">
                <p className="text-slate-400 text-sm font-mono">{item.year}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-slate-700 font-semibold text-lg">{item.degree}</h3>
                {(item.school || item.city) && (
                  <p className="text-slate-400 text-sm mt-1">
                    {[item.school, item.city].filter(Boolean).join(' — ')}
                  </p>
                )}
              </div>
            </div>
            {/* {index < items.length - 1 && <hr className="border-slate-800" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
