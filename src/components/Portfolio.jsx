import React, { useState } from 'react'

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: "Plateforme E-commerce",
            description: "Site e-commerce complet avec paiement en ligne et dashboard admin",
            category: "web",
            image: "/projet-ecommerce.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            id: 2,
            title: "Application Mobile",
            description: "App de gestion de tâches avec synchronisation cloud",
            category: "mobile",
            image: "/projet-mobile.jpg",
            technologies: ["React Native", "Firebase", "Redux"],
            link: "#"
        },
        {
            id: 3,
            title: "Site Vitrine Corporate",
            description: "Site institutionnel moderne avec gestion de contenu",
            category: "web",
            image: "/projet-corporate.jpg",
            technologies: ["Next.js", "Tailwind", "Sanity CMS"],
            link: "#"
        },
        {
            id: 4,
            title: "API RESTful",
            description: "API scalable avec authentification JWT et documentation",
            category: "backend",
            image: "/projet-api.jpg",
            technologies: ["Express", "JWT", "Swagger", "PostgreSQL"],
            link: "#"
        },
        {
            id: 5,
            title: "Dashboard Analytics",
            description: "Tableau de bord avec visualisation de données en temps réel",
            category: "web",
            image: "/projet-dashboard.jpg",
            technologies: ["Vue.js", "D3.js", "Socket.io"],
            link: "#"
        },
        {
            id: 6,
            title: "Application SaaS",
            description: "Solution SaaS complète avec abonnements et multi-tenants",
            category: "web",
            image: "/projet-saas.jpg",
            technologies: ["React", "NestJS", "Redis", "Docker"],
            link: "#"
        }
    ]

    const categories = [
        { id: 'all', name: 'Tous les projets' },
        { id: 'web', name: 'Développement Web' },
        { id: 'mobile', name: 'Applications Mobile' },
        { id: 'backend', name: 'Backend & API' }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        Mes Réalisations
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Découvrez une sélection de mes projets récents où j'ai mis en œuvre
                        mes compétences en développement fullstack pour créer des solutions digitales innovantes.
                    </p>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === category.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Grille des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                        >
                            {/* Image du projet */}
                            <div className="relative overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold">{project.title}</span>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-3">
                                        <a
                                            href={project.link}
                                            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                                        >
                                            Voir le projet
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contenu du projet */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies utilisées */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Lien démo */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300 group/link"
                                >
                                    Voir les détails
                                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton Voir Plus */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                    >
                        Discutons de votre projet
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
