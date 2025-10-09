import React from 'react'

const Services = () => {
    const services = [
        {
            title: "Développement Frontend",
            description: "Création d'interfaces utilisateur modernes et réactives avec React, Next.js et Tailwind CSS. J'assure une expérience utilisateur fluide et accessible sur tous les appareils.",
            icon: "🎨"
        },
        {
            title: "Développement Backend",
            description: "Conception d'APIs robustes et sécurisées avec Node.js, Express et bases de données. Architecture scalable pour vos applications web et mobiles.",
            icon: "⚙️"
        },
        {
            title: "Applications Full Stack",
            description: "Développement de solutions complètes from scratch to deployment. Intégration de toutes les briques techniques pour votre projet digital.",
            icon: "🚀"
        },
        {
            title: "Consulting Tech",
            description: "Accompagnement technique et conseils pour optimiser vos projets existants ou démarrer de nouvelles initiatives digitales avec les bonnes technologies.",
            icon: "💡"
        }
    ]

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    return (
        <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center space-y-6 mb-16">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                        Mes Compétences
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Mes Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Développeur Full Stack béninois passionné, je transforme vos idées en solutions digitales performantes.
                        De la conception à la mise en production, je vous accompagne dans la réalisation de vos projets web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <div className="flex-shrink-0 min-h-[80px] flex items-start">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                                {truncateText(service.description, 50)}
                            </p>
                            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                <span>En savoir plus</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Prêt à donner vie à votre projet ?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Discutons de comment je peux vous aider à concrétiser vos ambitions digitales avec des solutions sur mesure.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        Commençons un projet
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services
