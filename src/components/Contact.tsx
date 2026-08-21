"use client";

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">{t('title')}</h2>
      <p className="text-gray-500 mt-2">{t('subtitle')}</p>
    </section>
  );
}
