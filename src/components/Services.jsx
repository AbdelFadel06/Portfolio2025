import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICE_ACCENTS = [
    { color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20' },
    { color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
    { color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
    { color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20' },
]

const Services = () => {
    const { t }    = useTranslation('services')
    const header   = useScrollAnimation()
    const grid     = useScrollAnimation()
    const cta      = useScrollAnimation()
    const services = t('items', { returnObjects: true })

    return (
        <section id="services" className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 bg-violet-600/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    ref={header.ref}
                    className={`mb-16 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="font-mono text-indigo-500/60 text-xs tracking-widest mb-4 flex items-center gap-2">
                        <span className="text-slate-600">~/portfolio</span>
                        <span className="text-slate-700">/</span>
                        <span>03_services.tsx</span>
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">{t('title')}</h2>
                    <p className="text-slate-500 max-w-xl leading-relaxed">{t('subtitle')}</p>
                </div>

                <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                    {services.map((service, i) => {
                        const accent = SERVICE_ACCENTS[i] ?? SERVICE_ACCENTS[0]
                        return (
                            <div
                                key={i}
                                className={`group bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {/* Terminal bar */}
                                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/2">
                                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                                    <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                                    <span className={`ml-auto font-mono text-[10px] ${accent.color} opacity-60`}>service_0{i + 1}.ts</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-10 h-10 ${accent.bg} border rounded-xl flex items-center justify-center text-lg flex-shrink-0`}>
                                            {service.icon}
                                        </div>
                                        <span className={`font-mono text-4xl font-extrabold ${accent.color} opacity-10 leading-none select-none`}>0{i + 1}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>
                                    <div className={`flex items-center ${accent.color} text-xs font-mono font-semibold gap-1.5 group-hover:gap-2 transition-all`}>
                                        <span className="opacity-50">▶</span>
                                        <span>{service.learn_more}</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div
                    ref={cta.ref}
                    className={`relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-900 p-8 lg:p-10 transition-all duration-700 ${cta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 to-violet-600/8 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                        <div>
                            <p className="font-mono text-indigo-400/60 text-xs mb-2">
                                <span className="text-slate-600">$</span> run project --new
                            </p>
                            <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-1">{t('cta.title')}</h3>
                            <p className="text-slate-500 text-sm">{t('cta.description')}</p>
                        </div>
                        <a
                            href="#contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-px font-mono text-sm whitespace-nowrap"
                        >
                            {t('cta.button')} →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
