import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
    { key: 'home',     href: '#home',     num: '01' },
    { key: 'about',    href: '#about',    num: '02' },
    { key: 'services', href: '#services', num: '03' },
    { key: 'projects', href: '#projects', num: '04' },
    { key: 'contact',  href: '#contact',  num: '05' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen]           = useState(false)
    const [currentLng, setCurrentLng]       = useState('fr')
    const [scrolled, setScrolled]           = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const { t, i18n } = useTranslation('navbar')

    useEffect(() => { setCurrentLng(i18n.language) }, [i18n.language])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onScroll = () => {
            const THRESHOLD = 120
            let current = NAV_LINKS[0].key
            for (const { key, href } of NAV_LINKS) {
                const el = document.querySelector(href)
                if (el && el.getBoundingClientRect().top <= THRESHOLD) current = key
            }
            setActiveSection(current)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const changeLang = async lng => {
        try { await i18n.changeLanguage(lng) } catch {}
        setCurrentLng(lng)
        setMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-white/95 dark:bg-slate-950/92 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none'
                : 'bg-transparent'
        }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* ── Logo ── */}
                    <a href="#home" className="flex items-baseline gap-1 group">
                        <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:opacity-80 transition-opacity">A.</span>
                        <span className="text-xl font-black tracking-tight text-indigo-500 group-hover:text-indigo-400 transition-colors">SALIOU</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mb-0.5 ml-0.5 group-hover:bg-indigo-400 transition-colors animate-glow-pulse" />
                    </a>

                    {/* ── Desktop nav ── */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {NAV_LINKS.map(item => {
                            const isActive = activeSection === item.key
                            return (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    className="relative flex items-baseline gap-1 px-3.5 py-2 rounded-lg group transition-all duration-200 hover:bg-slate-100 dark:hover:bg-white/5"
                                >
                                    <span className={`font-mono text-[10px] leading-none transition-colors duration-200 ${
                                        isActive ? 'text-indigo-500' : 'text-indigo-500/50 group-hover:text-indigo-500'
                                    }`}>
                                        {item.num}.
                                    </span>
                                    <span className={`text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'text-slate-900 dark:text-white'
                                            : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                                    }`}>
                                        {t(item.key)}
                                    </span>
                                    {/* Active underline — animated */}
                                    <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-500 rounded-full transition-all duration-300 ${
                                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                                    }`} style={{ transformOrigin: 'left' }} />
                                </a>
                            )
                        })}
                    </div>

                    {/* ── Right actions ── */}
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle />

                        {/* Language toggle */}
                        <button
                            onClick={() => changeLang(currentLng === 'fr' ? 'en' : 'fr')}
                            className="px-3 py-[7px] text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl transition-all duration-200 w-10 text-center"
                        >
                            {currentLng === 'fr' ? 'FR' : 'EN'}
                        </button>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-px font-mono"
                        >
                            {t('contact_button')} ↗
                        </a>
                    </div>

                    {/* ── Mobile right ── */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                        >
                            <span className={`block w-4 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-4 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-4 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* ── Mobile menu ── */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-4 space-y-1 border-t border-slate-200 dark:border-white/5 mt-0.5">
                        {NAV_LINKS.map(item => {
                            const isActive = activeSection === item.key
                            return (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                                        isActive
                                            ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 border-l-2 border-indigo-500 pl-3'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                                    }`}
                                >
                                    <span className={`font-mono text-[10px] transition-colors ${
                                        isActive ? 'text-indigo-500' : 'text-indigo-500/50 group-hover:text-indigo-500'
                                    }`}>{item.num}.</span>
                                    <span className="text-sm font-medium">{t(item.key)}</span>
                                </a>
                            )
                        })}

                        <div className="px-4 pt-3">
                            <button
                                onClick={() => changeLang(currentLng === 'fr' ? 'en' : 'fr')}
                                className="w-full py-2.5 font-mono font-bold text-sm uppercase text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl transition-all duration-200"
                            >
                                {currentLng === 'fr' ? 'FR → EN' : 'EN → FR'}
                            </button>
                        </div>

                        <div className="px-4 pt-2">
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-mono font-semibold text-sm transition-colors"
                            >
                                {t('contact_button')} ↗
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
