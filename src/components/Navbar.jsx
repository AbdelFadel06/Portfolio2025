import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { link: 'Accueil', href: '#home' },
        { link: 'À propos', href: '#about' },
        { link: 'Services', href: '#services' },
        { link: 'Projets', href: '#projects' },
        { link: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <header className='shadow-sm bg-white sticky top-0 z-50'>
                <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        {/* Logo */}
                        <a
                            href="#home"
                            className='text-2xl font-bold text-gray-800 hover:text-gray-900 transition-colors duration-300'
                        >
                            Abdel <span className='text-blue-600'>Saliou</span>
                        </a>

                        {/* Liens de navigation - Desktop */}
                        <div className='hidden md:flex items-center space-x-8 bg-gray-50/80 backdrop-blur-sm px-8 py-3 rounded-3xl text-sm font-medium'>
                            {navLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group'
                                >
                                    {item.link}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Bouton Contact - Desktop */}
                        <div className='hidden md:block'>
                            <a
                                href="#contact"
                                className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-3xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            >
                                Me Contacter
                            </a>
                        </div>

                        {/* Menu Burger - Mobile */}
                        <button
                            className='md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none z-60'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></span>
                        </button>
                    </div>

                    {/* Overlay et Menu Mobile Plein Écran */}
                    <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        {/* Overlay */}
                        <div
                            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                            onClick={() => setIsMenuOpen(false)}
                        ></div>

                        {/* Menu Mobile */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            {/* Header du menu mobile */}
                            <div className='flex justify-between items-center p-6 border-b border-gray-100'>
                                <a
                                    href="#home"
                                    className='text-2xl font-bold text-gray-800'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Abdel <span className='text-blue-600'>Saliou</span>
                                </a>
                                <button
                                    className='flex flex-col space-y-1.5 w-6 h-6 focus:outline-none'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className='block w-6 h-0.5 bg-gray-600 rotate-45 translate-y-2'></span>
                                    <span className='block w-6 h-0.5 bg-gray-600 -rotate-45 -translate-y-2'></span>
                                </button>
                            </div>

                            {/* Liens de navigation */}
                            <div className='p-6 space-y-8'>
                                {navLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className='block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 py-3'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.link}
                                    </a>
                                ))}
                            </div>

                            {/* Bouton Contact en bas */}
                            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gray-50'>
                                <a
                                    href="#contact"
                                    className='block bg-blue-600 text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Me Contacter
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
