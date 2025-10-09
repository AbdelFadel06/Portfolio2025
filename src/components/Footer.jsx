import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
                    {/* Brand et contact */}
                    <div className="text-center lg:text-left space-y-6">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Abdel <span className="text-gray-600">SALIOU</span>
                        </h1>

                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 group hover:bg-gray-100 transition-colors duration-300">
                                <svg
                                    className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email professionnel</p>
                                <p className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">
                                    abdelfadelsaliou@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                                Navigation
                            </h3>
                            <div className="space-y-2">
                                <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    À propos
                                </a>
                                <a href="#services" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    Services
                                </a>
                                <a href="#projects" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    Projets
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                                Légal
                            </h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    Mentions légales
                                </a>
                                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    Politique de confidentialité
                                </a>
                                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                                    Conditions d'utilisation
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left space-y-4">
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                            Connectons-nous
                        </h3>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 group"
                                    title={social}
                                >
                                    <span className="text-gray-500 group-hover:text-gray-700 font-medium text-sm">
                                        {social.charAt(0)}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 my-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Abdel Saliou. Tous droits réservés.
                    </p>

                    <div className="flex items-center space-x-6 text-sm">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                        >
                            Mentions légales
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                        >
                            Politique de confidentialité
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                        >
                            Me contacter
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">
                        "Transformons vos idées en expériences digitales exceptionnelles"
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
