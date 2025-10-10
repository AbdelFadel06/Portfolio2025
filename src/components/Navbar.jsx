import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('fr')
    const { t, i18n } = useTranslation('navbar')
    const dropdownRef = useRef(null)

    // Mettre à jour l'état local quand la langue change
    useEffect(() => {
        setCurrentLanguage(i18n.language)

        // Debug
        console.log('Current i18n language:', i18n.language)
        console.log('All languages:', i18n.languages)
    }, [i18n.language])

    // Fermer le dropdown quand on clique ailleurs
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLanguageOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const navLinks = [
        { key: 'home', href: '#home' },
        { key: 'about', href: '#about' },
        { key: 'services', href: '#services' },
        { key: 'projects', href: '#projects' },
        { key: 'contact', href: '#contact' },
    ]

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
    ]

    const changeLanguage = async (lng) => {
        console.log('Attempting to change language to:', lng)
        try {
            await i18n.changeLanguage(lng)
            setCurrentLanguage(lng)
            console.log('Language changed successfully to:', lng)
        } catch (error) {
            console.error('Error changing language:', error)
        }
        setIsLanguageOpen(false)
        setIsMenuOpen(false)
    }

    const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0]

    return (
        <header className='shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <a
                        href="#home"
                        className='text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300'
                    >
                        Abdel <span className='text-blue-600 dark:text-blue-400'>Saliou</span>
                    </a>

                    {/* Liens de navigation - Desktop */}
                    <div className='hidden md:flex items-center space-x-8 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-3 rounded-3xl text-sm font-medium'>
                        {navLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group'
                            >
                                {t(item.key)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Boutons droite - Desktop */}
                    <div className='hidden md:flex items-center space-x-4'>
                        {/* Sélecteur de langue */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <span className="text-lg">{currentLangData.flag}</span>
                                <span className="text-xs uppercase">{currentLangData.code}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown langue */}
                            {isLanguageOpen && (
                                <div className="absolute top-12 right-0 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => changeLanguage(language.code)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                                                currentLanguage === language.code
                                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                    : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                        >
                                            <span className="text-lg">{language.flag}</span>
                                            <span className="flex-1 font-medium">{language.name}</span>
                                            {currentLanguage === language.code && (
                                                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Bouton Contact */}
                        <a
                            href="#contact"
                            className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-3xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        >
                            {t('contact_button')}
                        </a>
                    </div>

                    {/* Menu Burger - Mobile */}
                    <button
                        className='md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none z-60'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></span>
                    </button>
                </div>

                {/* Menu Mobile - version simplifiée */}
                <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className='flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800'>
                            <a
                                href="#home"
                                className='text-2xl font-bold text-gray-800 dark:text-white'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Abdel <span className='text-blue-600 dark:text-blue-400'>Saliou</span>
                            </a>
                            <button
                                className='flex flex-col space-y-1.5 w-6 h-6 focus:outline-none'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className='block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 rotate-45 translate-y-2'></span>
                                <span className='block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 -rotate-45 -translate-y-2'></span>
                            </button>
                        </div>

                        <div className='p-6 space-y-6'>
                            {navLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='block text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-3 border-b border-gray-100 dark:border-gray-800'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(item.key)}
                                </a>
                            ))}
                        </div>

                        {/* Sélecteur de langue mobile */}
                        <div className='p-6 border-t border-gray-100 dark:border-gray-800'>
                            <div className="flex space-x-2">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => changeLanguage(language.code)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg flex-1 justify-center ${
                                            currentLanguage === language.code
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        <span className="text-lg">{language.flag}</span>
                                        <span className="text-sm font-medium">{language.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0 p-6 bg-gray-50 dark:bg-gray-800'>
                            <a
                                href="#contact"
                                className='block bg-blue-600 text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('contact_button')}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
