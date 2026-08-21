"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="text-xs sm:text-sm text-blue-900 border border-white/20 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 hover:bg-blue-900 hover:text-white transition-colors"
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
