"use client";

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/10 py-6 px-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Abdel Fadel SALIOU — {t('rights')}
    </footer>
  );
}
