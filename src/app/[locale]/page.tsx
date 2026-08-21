import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <hr className="max-w-4xl mx-auto border-slate-200" />
      <SelectedWork />
      <hr className="max-w-4xl mx-auto border-slate-200" />
      <Experience />
      <hr className="max-w-4xl mx-auto border-slate-200" />
      <Education />
      <hr className="max-w-4xl mx-auto border-slate-200" />
      <Certifications />
    </main>
  );
}
