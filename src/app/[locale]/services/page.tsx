import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const t = useTranslations('services');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <h1 className="text-4xl font-bold text-blue-900">{t('title')}</h1>
          {/* <p className="text-slate-600 mt-3 text-lg">{t('subtitle')}</p> */}
        </div>

        <div>
          {items.map((service, index) => (
            <div key={index}>
              <ServiceCard title={service.title} description={service.description} />
              {index < items.length - 1 && (
                <hr className="border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
