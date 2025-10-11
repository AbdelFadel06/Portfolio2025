import React from 'react'
import { useTranslation } from 'react-i18next'
import profile1 from '../assets/profil2.jpeg'

const Me = () => {
    const { t } = useTranslation('hero')

    return (
        <section className="max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center py-6 sm:py-10 px-4 sm:px-6">
            <div className="text-center space-y-4 sm:space-y-5">
                <img
                    src={profile1}
                    className="w-24 h-24 sm:w-30 sm:h-30 rounded-full mx-auto border-2 border-gray-100 dark:border-gray-700"
                    alt="Profile"
                />
                <h1 className="text-lg  text-gray-800 dark:text-white sm:text-xl">
                    {t('greeting')} {t('name')} <span className="text-blue-500 dark:text-blue-400">{t('surname')}</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[600px] mx-auto font-bold px-4 text-gray-900 dark:text-white">
                    {t('title')}
                </h2>
                <p className="text-gray-700 dark:text-white text-xs sm:text-sm max-w-[500px] mx-auto px-4 leading-relaxed">
                    {t('description')}
                </p>

                <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-8 text-sm mt-6 sm:mt-10">
                    <a
                        href="#contact"
                        className="block sm:inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-3xl text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                    >
                        {t('contact_button')}
                    </a>
                    <a
                        href="/resume"
                        className="block sm:inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-gray-700 dark:text-gray-300 border border-gray-500 dark:border-gray-400 rounded-3xl text-xs sm:text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                    >
                        {t('resume_button')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Me
