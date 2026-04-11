import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WHATSAPP = '0156927899'

const TermBar = ({ filename }) => (
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-white/2">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="ml-auto font-mono text-[10px] text-slate-400 dark:text-slate-600">{filename}</span>
    </div>
)

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const { t }   = useTranslation('contact')
    const header  = useScrollAnimation()
    const content = useScrollAnimation()

    const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const onSubmit = e => {
        e.preventDefault()
        const text = `*Nom:* ${form.name}\n*Email:* ${form.email}\n*Sujet:* ${form.subject}\n\n*Message:*\n${form.message}`
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
        setSent(true)
        setTimeout(() => setSent(false), 5000)
    }

    const socials = [
        {
            name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdel-fadel-saliou-6858192a5',
            icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        },
        {
            name: 'GitHub', href: 'https://github.com/AbdelFadel06',
            icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        },
        {
            name: 'WhatsApp', href: `https://wa.me/${WHATSAPP}`,
            icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        },
    ]

    const inputClass = "w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 rounded-xl text-sm font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/40 transition-all duration-200"

    return (
        <section id="contact" className="relative bg-slate-50 dark:bg-slate-950 py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 dark:via-white/5 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    ref={header.ref}
                    className={`mb-14 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="font-mono text-indigo-500/70 text-xs tracking-widest mb-4 flex items-center gap-2">
                        <span className="text-slate-400 dark:text-slate-600">~/portfolio</span>
                        <span className="text-slate-300 dark:text-slate-700">/</span>
                        <span>05_contact.tsx</span>
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                        <Trans i18nKey="contact:title" components={{ 1: <span className="gradient-text" /> }} />
                    </h2>
                    <p className="text-slate-500 max-w-xl leading-relaxed">{t('subtitle')}</p>
                </div>

                <div ref={content.ref} className="grid grid-cols-1 lg:grid-cols-5 gap-5">

                    {/* Left panel */}
                    <div className={`lg:col-span-2 space-y-4 transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

                        {/* WhatsApp CTA */}
                        <a
                            href={`https://wa.me/${WHATSAPP}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 w-full bg-green-500/10 hover:bg-green-500/15 border border-green-500/20 hover:border-green-500/40 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-slate-500 text-[10px] font-mono mb-0.5">{t('whatsapp')} · Contact principal</p>
                                <p className="font-mono font-bold text-green-400 text-sm">{t('whatsapp_value')}</p>
                            </div>
                            <span className="ml-auto text-green-500/40 group-hover:text-green-400/70 transition-colors text-sm">→</span>
                        </a>

                        {/* Info card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden">
                            <TermBar filename="contact_info.json" />
                            <div className="p-5 space-y-4">
                                {[
                                    { label: t('email'),        value: t('email_value'),        href: `mailto:${t('email_value')}`, color: 'text-indigo-400' },
                                    { label: t('location'),     value: t('location_value'),     href: null,                         color: 'text-violet-400' },
                                    { label: t('availability'), value: t('availability_value'), href: null,                         color: 'text-emerald-400' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <span className={`font-mono text-[10px] ${item.color} mt-0.5 flex-shrink-0 opacity-50`}>{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <p className="font-mono text-[10px] text-slate-400 dark:text-slate-600 mb-0.5">{item.label}</p>
                                            {item.href
                                                ? <a href={item.href} className={`font-mono text-sm ${item.color} hover:opacity-80 transition-opacity break-all`}>{item.value}</a>
                                                : <p className={`font-mono text-sm ${item.color}`}>{item.value}</p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-2">
                            {socials.map(s => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.name}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white font-mono text-xs font-bold transition-all hover:-translate-y-0.5"
                                >
                                    {s.icon}
                                    <span className="hidden sm:inline text-[10px]">{s.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${content.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden">
                            <TermBar filename="new_message.ts" />
                            <form onSubmit={onSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="font-mono text-[10px] text-slate-500 dark:text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="text-indigo-500/50">const</span> {t('form.name')}
                                        </label>
                                        <input type="text" name="name" value={form.name} onChange={onChange} required placeholder={t('form.name_placeholder')} className={inputClass} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="font-mono text-[10px] text-slate-500 dark:text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="text-indigo-500/50">const</span> {t('form.email')}
                                        </label>
                                        <input type="email" name="email" value={form.email} onChange={onChange} required placeholder={t('form.email_placeholder')} className={inputClass} />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-mono text-[10px] text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                                        <span className="text-indigo-500/50">const</span> {t('form.subject')}
                                    </label>
                                    <input type="text" name="subject" value={form.subject} onChange={onChange} required placeholder={t('form.subject_placeholder')} className={inputClass} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-mono text-[10px] text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                                        <span className="text-indigo-500/50">const</span> {t('form.message')}
                                    </label>
                                    <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder={t('form.message_placeholder')} className={`${inputClass} resize-none`} />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-green-500/15 hover:bg-green-500/25 border border-green-500/30 hover:border-green-500/50 text-green-400 py-3.5 px-6 rounded-xl font-mono font-bold text-sm transition-all hover:-translate-y-0.5"
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    {sent ? '✓ WhatsApp ouvert !' : t('form.submit')}
                                </button>
                                <p className="text-center font-mono text-[10px] text-slate-400 dark:text-slate-700">{t('form.response_time')}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
