import React from 'react'
import profile1 from '../assets/profil2.jpeg'

const Me = () => {
    return (
        <section className="max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center py-6 sm:py-10 px-4 sm:px-6">
            <div className="text-center space-y-4 sm:space-y-5">
                <img
                    src={profile1}
                    className="w-24 h-24 sm:w-30 sm:h-30 rounded-full mx-auto"
                    alt="Profile"
                />
                <h1 className="text-lg sm:text-xl text-gray-800">
                    Hi, my name is Abdel Fadel <span className="text-blue-500">SALIOU</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[600px] mx-auto font-bold px-4">
                    Full Stack Developer based in Cotonou
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm max-w-[500px] mx-auto px-4 leading-relaxed">
                    Passionné par la création de solutions digitales innovantes, je transforme vos
                    idées en expériences web exceptionnelles avec les technologies modernes.
                </p>

                <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-8 text-sm mt-6 sm:mt-10">
                    <a
                        href="/contact"
                        className="block sm:inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-3xl text-xs sm:text-sm"
                    >
                        Me Contacter
                    </a>
                    <a
                        href="/resume"
                        className="block sm:inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-gray-700 border border-gray-500 rounded-3xl text-xs sm:text-sm"
                    >
                        Voir mon CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Me
