import { useTranslation } from 'react-i18next'

const WHATSAPP = '2290156927899'

const Footer = () => {
    const year = new Date().getFullYear()
    const { t } = useTranslation('footer')

    return (
        <footer className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="space-y-5">
                        <a href="#home" className="inline-flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white tracking-tight">A.</span>
                            <span className="text-2xl font-black text-indigo-500 tracking-tight">SALIOU</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mb-0.5 ml-0.5" />
                        </a>
                        <p className="font-mono text-xs text-slate-600 leading-relaxed max-w-xs">
                            <span className="text-slate-700">// </span>
                            Développeur Full Stack · Cotonou, Bénin
                        </p>
                        <div className="space-y-2.5">
                            <a
                                href={`https://wa.me/${WHATSAPP}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-slate-600 hover:text-green-400 transition-colors text-xs font-mono group"
                            >
                                <span className="text-green-500/60 group-hover:text-green-400">▶</span>
                                +229 01 56 92 78 99
                            </a>
                            <a
                                href="mailto:abdelfadelsaliou@gmail.com"
                                className="flex items-center gap-2.5 text-slate-600 hover:text-indigo-400 transition-colors text-xs font-mono group"
                            >
                                <span className="text-indigo-500/60 group-hover:text-indigo-400">▶</span>
                                abdelfadelsaliou@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-5">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-700">{t('navigation')}</p>
                        <div className="space-y-2.5">
                            {[
                                { label: t('links.about'),    href: '#about' },
                                { label: t('links.services'), href: '#services' },
                                { label: t('links.projects'), href: '#projects' },
                                { label: t('links.contact'),  href: '#contact' },
                            ].map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="flex items-center gap-2 text-slate-600 hover:text-white transition-colors text-xs font-mono group"
                                >
                                    <span className="text-slate-800 group-hover:text-indigo-500 transition-colors">→</span>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Stack */}
                    <div className="space-y-5">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-700">Stack</p>
                        <div className="bg-slate-900 border border-white/5 rounded-xl p-4 font-mono text-xs">
                            <p className="text-slate-700 mb-1">const <span className="text-cyan-400">stack</span> <span className="text-slate-600">=</span> [</p>
                            {['React', 'TypeScript', 'Python', 'Django', 'Tailwind', 'Git'].map((tech, i, arr) => (
                                <p key={tech} className="ml-4 text-amber-300/80">
                                    "{tech}"{i < arr.length - 1 ? <span className="text-slate-700">,</span> : ''}
                                </p>
                            ))}
                            <p className="text-slate-700">]</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="font-mono text-[10px] text-slate-700">© {year} — Abdel Fadel Saliou</p>
                    <p className="font-mono text-[10px] text-slate-800">Built with React + Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
