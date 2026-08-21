"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ContactDropdown from './ContactDropdown';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="top-0 left-0 right-0 z-50 border-b border-white/10">
      <nav className="max-w-4xl mx-auto flex items-center justify-between  py-4">
        <Link href="/" className="font-bold text-xl text-blue-900">
          A. SALIOU
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm text-slate-500 items-center">
            {/* <a href="#experiences" className="hover:text-slate-700">{t('experiences').toUpperCase()}</a> */}
            <Link href="/#experiences" className="hover:text-slate-700">{t('experiences').toUpperCase()}</Link>
            {/* <a href="#projets" className="hover:text-slate-700">{t('projets').toUpperCase()}</a> */}
            <Link href="/projets" className="hover:text-slate-700">{t('projets').toUpperCase()}</Link>
            <Link href="/services" className="hover:text-slate-700">{t('services').toUpperCase()}</Link>
            <ContactDropdown />
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
