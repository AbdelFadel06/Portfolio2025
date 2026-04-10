import { Trans, useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ToolIcon = ({ name }) => {
    const icons = {
        "VS Code": (
            <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#0078D4" d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 19.88V4.12a1.5 1.5 0 00-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
        ),
        "GitHub": (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-200" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        ),
        "Git": (
            <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
        ),
        "Figma": (
            <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                <path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
            </svg>
        ),
        "Postman": (
            <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#FF6C37" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.858.858 0 10-1.207-1.208l-4.453 4.453-.308-.307 4.453-4.453a.858.858 0 10-1.207-1.208l-4.972 4.975-.307-.308 1.24-1.24a.856.856 0 10-1.207-1.208l-1.243 1.243a3.431 3.431 0 000 4.853l1.943 1.943a3.431 3.431 0 004.853 0l5.782-5.782a.856.856 0 00-.621-1.462z"/></svg>
        ),
        "Vercel": (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
        ),
    }
    return icons[name] ?? <span className="text-indigo-400 font-bold text-sm font-mono">{name[0]}</span>
}

const skillColors = [
    'from-orange-500 to-red-500',
    'from-amber-400 to-yellow-500',
    'from-blue-500 to-indigo-600',
    'from-cyan-400 to-blue-500',
    'from-blue-700 to-blue-900',
    'from-green-500 to-emerald-600',
    'from-teal-400 to-cyan-500',
    'from-orange-600 to-red-700',
]

const TermBar = ({ filename }) => (
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-auto font-mono text-[10px] text-slate-600">{filename}</span>
    </div>
)

const About = () => {
    const { t }    = useTranslation('about')
    const header   = useScrollAnimation()
    const colLeft  = useScrollAnimation()
    const colRight = useScrollAnimation()

    const skills            = t('skills.items',        { returnObjects: true })
    const tools             = t('tools.items',         { returnObjects: true })
    const stats             = t('stats',               { returnObjects: true })
    const journeyParagraphs = t('journey.paragraphs',  { returnObjects: true })

    return (
        <section id="about" className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/4 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    ref={header.ref}
                    className={`mb-20 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="font-mono text-indigo-500/60 text-xs tracking-widest mb-4 flex items-center gap-2">
                        <span className="text-slate-600">~/portfolio</span>
                        <span className="text-slate-700">/</span>
                        <span>02_about.tsx</span>
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                        <Trans i18nKey="about:main_title" components={{ 1: <span className="gradient-text" /> }} />
                    </h2>
                    <p className="text-slate-500 max-w-xl leading-relaxed">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                    {/* Left col */}
                    <div
                        ref={colLeft.ref}
                        className={`lg:col-span-2 space-y-4 transition-all duration-700 ${colLeft.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        {/* Stats */}
                        <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
                            <TermBar filename="stats.json" />
                            <div className="p-5 font-mono text-sm">
                                <p className="text-slate-600 mb-2">{'{'}</p>
                                {stats.map((stat, i) => (
                                    <p key={i} className="ml-4 mb-1">
                                        <span className="text-cyan-400">"{stat.label}"</span>
                                        <span className="text-slate-500">: </span>
                                        <span className="text-amber-300 font-bold">"{stat.number}"</span>
                                        {i < stats.length - 1 && <span className="text-slate-600">,</span>}
                                    </p>
                                ))}
                                <p className="text-slate-600">{'}'}</p>
                            </div>
                        </div>

                        {/* Languages & Education */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-indigo-600/80 to-violet-600/80 border border-indigo-500/30 rounded-2xl p-5 text-white">
                                <p className="font-mono text-[10px] text-indigo-200/60 mb-2 uppercase tracking-widest">{t('languages.title')}</p>
                                <p className="text-sm leading-relaxed text-indigo-100">{t('languages.content')}</p>
                            </div>
                            <div className="bg-slate-900 border border-white/5 rounded-2xl p-5">
                                <p className="font-mono text-[10px] text-slate-500 mb-2 uppercase tracking-widest">{t('education.title')}</p>
                                <p className="text-sm leading-relaxed text-slate-300">{t('education.content')}</p>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="bg-slate-900 border border-white/5 rounded-2xl p-5">
                            <p className="font-mono text-[10px] text-violet-400/70 mb-4 flex items-center gap-2">
                                <span className="text-slate-600">//</span> {t('tools.title')}
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                                {tools.map((tool, i) => (
                                    <div
                                        key={i}
                                        className="group flex flex-col items-center gap-2 p-3 bg-slate-800/60 border border-white/5 rounded-xl hover:border-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                                    >
                                        <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ToolIcon name={tool} />
                                        </div>
                                        <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-300 text-center transition-colors">
                                            {tool}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right col */}
                    <div
                        ref={colRight.ref}
                        className={`lg:col-span-3 space-y-4 transition-all duration-700 delay-200 ${colRight.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        {/* Journey */}
                        <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
                            <TermBar filename="journey.md" />
                            <div className="p-6">
                                <p className="font-mono text-[10px] text-slate-600 mb-4 flex items-center gap-2">
                                    <span className="text-indigo-500">#</span> {t('journey.title')}
                                </p>
                                <div className="space-y-3.5 text-sm text-slate-400 leading-relaxed">
                                    {journeyParagraphs.map((p, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="font-mono text-slate-700 text-xs select-none mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                            <p dangerouslySetInnerHTML={{ __html: p }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
                            <p className="font-mono text-[10px] text-emerald-400/70 mb-6 flex items-center gap-2">
                                <span className="text-slate-600">//</span> {t('skills.title')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {skills.map((skill, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-mono text-slate-300">{skill.name}</span>
                                            <span className="text-xs font-mono text-indigo-400/70 tabular-nums">{skill.level}%</span>
                                        </div>
                                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full bg-gradient-to-r ${skillColors[i] ?? 'from-indigo-500 to-violet-500'} skill-bar-fill`}
                                                style={{
                                                    width: colRight.isVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${i * 80 + 300}ms`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
