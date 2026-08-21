"use client";

import { useTranslations } from 'next-intl';

type CertificationItem = {
  year: string;
  name: string;
  link: string;
};

export default function Certifications() {
  const t = useTranslations('certifications');
  const items = t.raw('items') as CertificationItem[];

  return (
    <section id="certifications" className="py-20 max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">{t('title')}</h2>
        {/* <p className="text-slate-400 mt-2">{t('subtitle')}</p> */}
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-8">
              <div className="md:w-1/4 flex-shrink-0">
                <p className="text-slate-400 text-sm font-mono">{item.year}</p>
              </div>
              <div className="flex-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-blue-900 font-semibold text-sm">{item.name}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-800 hover:underline"
                >
                  {t('viewLink')} →
                </a>
              </div>
            </div>
            {/* {index < items.length - 1 && <hr className="border-slate-800" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
