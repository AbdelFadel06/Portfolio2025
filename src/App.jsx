import { useEffect } from 'react'
import './App.css'
import './i18n'
import Home from './pages/Home'

function App() {
    useEffect(() => {
        const el = document.getElementById('loader')
        if (!el) return
        el.classList.add('hide')
        const t = setTimeout(() => el.remove(), 500)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Home />
        </div>
    )
}

export default App
