"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ContactDropdown from './ContactDropdown';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="top-0 left-0 right-0 z-50 border-b border-white/10">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Mobile : logo centré, nav complète centrée en dessous */}
        <div className="flex sm:hidden flex-col items-center gap-3">
          <Link href="/" className="font-bold text-lg text-blue-900">
            A. SALIOU
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <Link href="/#experiences" className="hover:text-slate-700">{t('experiences').toUpperCase()}</Link>
            <Link href="/projets" className="hover:text-slate-700">{t('projets').toUpperCase()}</Link>
            <Link href="/services" className="hover:text-slate-700">{t('services').toUpperCase()}</Link>
            <ContactDropdown />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Desktop : une seule ligne */}
        <div className="hidden sm:flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-blue-900">
            A. SALIOU
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 md:gap-8 text-sm text-slate-500 items-center">
              <Link href="/#experiences" className="hover:text-slate-700">{t('experiences').toUpperCase()}</Link>
              <Link href="/projets" className="hover:text-slate-700">{t('projets').toUpperCase()}</Link>
              <Link href="/services" className="hover:text-slate-700">{t('services').toUpperCase()}</Link>
              <ContactDropdown />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
