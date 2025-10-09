import React, { useState, useEffect } from 'react'
import profile2 from '../assets/profil3.jpeg'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const skills = [
        { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Python", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Tailwind", level: 90, color: "from-teal-400 to-cyan-500" },
    ];

    const tools = ["VSCode", "Figma", "GitHub", "Postman",  "Vercel"];

    const stats = [
        { number: "10+", label: "Projets Réalisés" },
        { number: "3+", label: "Années d'Expérience" },
        { number: "15+", label: "Technologies Maîtrisées" },
        { number: "100%", label: "Satisfaction Client" }
    ];

    return (
        <section id="about" className="min-h-screen bg-gray-50 py-12 lg:py-20 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* En-tête */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        À Propos de Moi
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Passionné par le <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Développement Digital</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Développeur Full Stack créatif transformant des idées en expériences digitales exceptionnelles
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
                                alt="Développeur Full Stack Béninois"
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
                                Mon Parcours
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    <strong>Développeur Full Stack passionné</strong> originaire du Bénin, je mets mon expertise
                                    technique au service de projets innovants. Avec une solide expérience dans les technologies modernes,
                                    je crée des solutions digitales qui allient performance et élégance.
                                </p>
                                <p>
                                    Mon approche combine <strong>créativité et rigueur technique</strong>, me permettant de transformer
                                    des concepts complexes en interfaces intuitives et expériences utilisateur fluides.
                                </p>
                                <p>
                                    Toujours en veille technologique, j'aime relever de nouveaux défis et participer à des projets
                                    qui repoussent les limites du possible dans l'écosystème digital africain et au-delà.
                                </p>
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
                                Mes Compétences Techniques
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
                                                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
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
                                Mes Outils de Travail
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
                                    Langues
                                </h4>
                                <p className="text-blue-100">Français (Natif), Anglais (Courant)</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 text-white shadow-lg">
                                <h4 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                    Formation
                                </h4>
                                <p className="text-gray-300">Bachelor en Informatique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
