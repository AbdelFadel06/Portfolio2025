import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CARD_ACCENTS = [
    { border: 'hover:border-blue-300 dark:hover:border-blue-500/30',     label: 'text-blue-600 dark:text-blue-400',     num: 'text-blue-500/10' },
    { border: 'hover:border-emerald-300 dark:hover:border-emerald-500/30', label: 'text-emerald-600 dark:text-emerald-400', num: 'text-emerald-500/10' },
    { border: 'hover:border-violet-300 dark:hover:border-violet-500/30', label: 'text-violet-600 dark:text-violet-400', num: 'text-violet-500/10' },
    { border: 'hover:border-orange-300 dark:hover:border-orange-500/30', label: 'text-orange-600 dark:text-orange-400', num: 'text-orange-500/10' },
    { border: 'hover:border-cyan-300 dark:hover:border-cyan-500/30',     label: 'text-cyan-600 dark:text-cyan-400',     num: 'text-cyan-500/10' },
]

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const { t }  = useTranslation('projects')
    const header = useScrollAnimation()
    const grid   = useScrollAnimation()

    const projects   = t('items',   { returnObjects: true })
    const categories = t('filters', { returnObjects: true })

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section id="projects" className="relative bg-slate-50 dark:bg-slate-950 py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/3 dark:bg-indigo-600/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div ref={header.ref} className={`mb-14 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="font-mono text-indigo-500/70 text-xs tracking-widest mb-4 flex items-center gap-2">
                        <span className="text-slate-400 dark:text-slate-600">~/portfolio</span>
                        <span className="text-slate-300 dark:text-slate-700">/</span>
                        <span>04_projects.tsx</span>
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                        <Trans i18nKey="projects:title" components={{ 1: <span className="gradient-text" /> }} />
                    </h2>
                    <p className="text-slate-500 max-w-xl leading-relaxed">{t('subtitle')}</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 border ${
                                activeFilter === cat.id
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20'
                                    : 'bg-white dark:bg-white/3 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/8 hover:border-indigo-300 dark:hover:border-white/15 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            {activeFilter === cat.id && <span className="mr-1.5 opacity-60">▶</span>}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {filtered.map((project, i) => {
                        const accent = CARD_ACCENTS[i % CARD_ACCENTS.length]
                        return (
                            <div
                                key={project.id}
                                className={`group bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 shadow-sm dark:shadow-none card-glow-light card-glow ${accent.border} ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                {/* Terminal bar */}
                                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/2">
                                    <span className="w-2 h-2 rounded-full bg-red-400" />
                                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <span className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className={`ml-auto font-mono text-[10px] ${accent.label} opacity-60`}>
                                        {project.title.toLowerCase().replace(/\s+/g, '_')}.ts
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-xs font-mono font-semibold ${accent.label} bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 px-2.5 py-1 rounded-md`}>
                                            {project.category}
                                        </span>
                                        <span className={`font-mono text-5xl font-extrabold ${accent.num} leading-none select-none`}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.technologies.map((tech, j) => (
                                            <span key={j} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-mono rounded border border-slate-200 dark:border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="#contact" className={`inline-flex items-center ${accent.label} text-xs font-mono font-semibold gap-1.5 hover:gap-2.5 transition-all duration-200 opacity-70 hover:opacity-100`}>
                                        <span>▶</span>
                                        {project.view_details}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 font-mono text-sm font-bold text-slate-700 dark:text-white border border-slate-300 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 bg-white dark:bg-white/3 hover:bg-indigo-50 dark:hover:bg-indigo-600/10 px-6 py-3 rounded-xl transition-all duration-250 hover:-translate-y-px shadow-sm dark:shadow-none"
                    >
                        <span className="text-indigo-500 opacity-70">$</span>
                        {t('cta_button')}
                        <span className="text-slate-400 dark:text-slate-500">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
