import React, { useState, useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import profile2 from '../assets/profil3.jpeg'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const { t, i18n } = useTranslation('about')

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Récupérer les compétences depuis les traductions
    const skills = t('skills.items', { returnObjects: true })

    // Couleurs fixes (ne changent pas avec la langue)
    const skillColors = [
        "from-orange-500 to-red-500",
        "from-blue-500 to-purple-500",
        "from-yellow-400 to-yellow-600",
        "from-cyan-500 to-blue-500",
        "from-blue-600 to-indigo-600",
        "from-teal-400 to-cyan-500"
    ]

    const tools = t('tools.items', { returnObjects: true })
    const stats = t('stats', { returnObjects: true })
    const journeyParagraphs = t('journey.paragraphs', { returnObjects: true })

    return (
        <section id="about" className="min-h-screen bg-gray-50 py-12 lg:py-20 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* En-tête */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        {t('title')}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        <Trans
                            i18nKey="about:main_title"
                            components={{
                                1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" />
                            }}
                        />
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Contenu principal */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Image avec effet */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
                            <img
                                className="w-full max-w-md lg:max-w-none h-auto rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                                src={profile2}
                                alt={t('title')}
                            />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Texte et compétences */}
                    <div className="w-full lg:w-3/5 space-y-12">
                        {/* Description */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                                {t('journey.title')}
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                {journeyParagraphs.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))}
                            </div>
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Compétences avec barres de progression */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                {t('skills.title')}
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-gray-800">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full bg-gradient-to-r ${skillColors[index]} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${isVisible ? skill.level : 0}%`,
                                                    transitionDelay: `${index * 100}ms`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outils */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                                {t('tools.title')}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                {tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-sm">
                                                {tool.charAt(0)}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                            {tool}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Informations supplémentaires */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                                <h4 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                    {t('languages.title')}
                                </h4>
                                <p className="text-blue-100">{t('languages.content')}</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 text-white shadow-lg">
                                <h4 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                    {t('education.title')}
                                </h4>
                                <p className="text-gray-300">{t('education.content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
