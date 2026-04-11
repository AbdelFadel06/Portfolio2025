import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TerminalWidget = ({ visible }) => (
    <div
        className={`hidden lg:block absolute right-6 xl:right-16 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: '700ms' }}
    >
        <div className={`w-56 rounded-2xl overflow-hidden shadow-2xl animate-float
            bg-white dark:bg-slate-900/80
            border border-slate-200 dark:border-white/10
            shadow-slate-300/60 dark:shadow-black/50
            backdrop-blur-sm`}
        >
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/3">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-auto text-[10px] font-mono text-slate-400 dark:text-slate-600">stack.tsx</span>
            </div>
            {/* Code */}
            <div className="p-4 font-mono text-[11px] leading-6 space-y-0.5">
                <p><span className="text-slate-300 dark:text-slate-600 select-none">1 </span><span className="text-violet-600 dark:text-violet-400">const</span> <span className="text-blue-600 dark:text-blue-300">stack</span> <span className="text-slate-400 dark:text-white/50">=</span> <span className="text-slate-500 dark:text-white/70">{'{'}</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">2 </span>  <span className="text-cyan-600 dark:text-cyan-300">frontend</span><span className="text-slate-400 dark:text-white/40">:</span> <span className="text-green-600 dark:text-green-400">[</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">3 </span>    <span className="text-amber-600 dark:text-amber-300">"React"</span><span className="text-slate-400 dark:text-white/40">,</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">4 </span>    <span className="text-amber-600 dark:text-amber-300">"TypeScript"</span><span className="text-slate-400 dark:text-white/40">,</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">5 </span>    <span className="text-amber-600 dark:text-amber-300">"Tailwind"</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">6 </span>  <span className="text-green-600 dark:text-green-400">]</span><span className="text-slate-400 dark:text-white/40">,</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">7 </span>  <span className="text-cyan-600 dark:text-cyan-300">backend</span><span className="text-slate-400 dark:text-white/40">:</span> <span className="text-green-600 dark:text-green-400">[</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">8 </span>    <span className="text-amber-600 dark:text-amber-300">"Python"</span><span className="text-slate-400 dark:text-white/40">,</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">9 </span>    <span className="text-amber-600 dark:text-amber-300">"Django"</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">10</span>  <span className="text-green-600 dark:text-green-400">]</span></p>
                <p><span className="text-slate-300 dark:text-slate-600 select-none">11</span><span className="text-slate-500 dark:text-white/70">{'}'}</span></p>
            </div>
            {/* Cursor */}
            <div className="px-4 pb-4 font-mono text-[11px]">
                <span className="text-indigo-500 dark:text-indigo-400">▶ </span>
                <span className="text-slate-400 dark:text-slate-500">ready to build</span>
                <span className="inline-block w-2 h-3.5 bg-indigo-500 ml-0.5 animate-pulse align-middle" />
            </div>
        </div>

        {/* Badge */}
        <div className="mt-4 flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-lg
            bg-white dark:bg-slate-900/70
            border border-slate-200 dark:border-white/10
            backdrop-blur">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Disponible · Cotonou, Bénin</span>
        </div>
    </div>
)

const Me = () => {
    const { t } = useTranslation('hero')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const id = setTimeout(() => setMounted(true), 80)
        return () => clearTimeout(id)
    }, [])

    const fade = (delay = 0) => ({
        className: `transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`,
        style: { transitionDelay: `${delay}ms` }
    })

    return (
        <section id="home" className="relative min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 hero-dots-light dark:hero-dots opacity-100 pointer-events-none" />
            <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-500/5 dark:bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/4 dark:bg-violet-600/6 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            <TerminalWidget visible={mounted} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pb-24">
                <div className="max-w-3xl xl:max-w-4xl">

                    <div {...fade(100)}>
                        <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm tracking-[0.2em] mb-6 lg:mb-8 flex items-center gap-3">
                            <span className="text-slate-400 dark:text-slate-600">// </span>
                            {t('greeting')}
                            <span className="w-12 h-px bg-indigo-500/40" />
                        </p>
                    </div>

                    <div {...fade(200)}>
                        <h1 className="font-black tracking-tighter leading-[0.9] mb-6">
                            <span className="block text-[clamp(48px,8vw,112px)] text-slate-900 dark:text-white">
                                {t('name').toUpperCase()}
                            </span>
                            <span className="block text-[clamp(48px,8vw,112px)] text-transparent"
                                style={{
                                    WebkitTextStroke: '2px rgba(99,102,241,0.55)',
                                    textShadow: '0 0 60px rgba(99,102,241,0.2)'
                                }}
                            >
                                {t('surname').toUpperCase()}
                                <span className="text-indigo-500" style={{ WebkitTextStroke: 0 }}>.</span>
                            </span>
                        </h1>
                    </div>

                    <div {...fade(350)}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-indigo-500/60 to-transparent flex-1 max-w-[180px]" />
                            <span className="font-mono text-xs text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Full Stack Developer</span>
                            <div className="h-px bg-slate-200 dark:bg-white/5 flex-1" />
                        </div>
                    </div>

                    <div
                        className={`flex flex-col sm:flex-row items-start gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: '450ms' }}
                    >
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                            {t('description')}
                        </p>
                        <div className="flex flex-col sm:items-start gap-4 sm:ml-auto sm:text-right">
                            <a
                                href="#projects"
                                className="font-mono text-sm font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-white border-b-2 border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors duration-200 pb-0.5 whitespace-nowrap"
                            >
                                EXPLORE MY WORK →
                            </a>
                            <a
                                href="#contact"
                                className="font-mono text-xs text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200 whitespace-nowrap"
                            >
                                {t('contact_button')} ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '900ms' }}
            >
                <div className="w-5 h-8 border border-slate-300 dark:border-white/15 rounded-full flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default Me
