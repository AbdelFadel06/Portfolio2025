"use client";

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactDropdown() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 whitespace-nowrap transition-colors ${open ? 'text-blue-900' : 'hover:text-slate-700'}`}
      >
        {t('contact').toUpperCase()}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180 text-blue-900' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
          <a
            href="https://wa.me/22956927899"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:abdelfadelsaliou@gmail.com"
            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 transition-colors border-t border-slate-200"
          >
            Email
          </a>
        </div>
      )}
    </div>
  );
}
