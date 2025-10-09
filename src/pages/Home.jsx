import React from 'react'
import Navbar from '../components/Navbar'
import Me from '../components/Me'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Me/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
