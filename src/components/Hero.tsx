"use client";
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const CV_FILES = {
  fr: '/cv/Abdel_Fadel_SALIOU_CV_FR.pdf',
  en: '/cv/Abdel_Fadel_SALIOU_CV_EN.pdf',
};

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const cvHref = CV_FILES[locale as keyof typeof CV_FILES] ?? CV_FILES.fr;

  return (
    <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-10 md:gap-12">

        {/* Colonne texte */}
        <div className="order-2 md:order-1 flex-1 text-center md:text-left">
          <p className="text-blue-900 text-lg mb-2">{t('greeting')}</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
            {t('firstname')} <span >{t('lastname')}</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-xl mx-auto md:mx-0">
            {t('title')}
          </p>

          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto md:mx-0">
            {t('tags')}
          </p>

          <p className="text-blue-900 text-sm mt-2 max-w-xl mx-auto md:mx-0">
            {t('highlights')}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

             <Link href="/projets"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-sm hover:bg-blue-950 transition-colors"
            >
              {t('ctaWork')}
            </Link>

             <a href="#contact"
              className="border border-slate-300 px-6 py-3 font-semibold text-slate-500 hover:border-blue-900 hover:text-blue-900 rounded-sm transition-all duration-200 ease-in-out"
            >
              {t('ctaContact')}
            </a>

            <a href={cvHref}
              download
              className="flex items-center gap-2 border border-slate-300 px-6 py-3 font-semibold text-slate-500 hover:border-blue-900 hover:text-blue-900 rounded-sm transition-all duration-200 ease-in-out"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              {t('ctaCv')}
            </a>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start text-sm text-slate-400">
            <a href="https://github.com/AbdelFadel06/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              {t('github')}
            </a>
            <a href="https://www.linkedin.com/in/abdel-fadel-saliou-6858192a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              {t('linkedin')}
            </a>
          </div>
        </div>

        {/* Photo ronde */}
        <div className="order-1 md:order-2 flex-shrink-0 self-center">
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-slate-700">
            <Image
              src="/projects/pp1.jpeg"
              alt="Photo de profil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
