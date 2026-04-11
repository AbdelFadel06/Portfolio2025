import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // Only switch to light if user explicitly chose it before
        const saved = localStorage.getItem('theme')
        if (saved === 'light') setIsDark(false)
    }, [])

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
            root.setAttribute('data-theme', 'dark')
        } else {
            root.classList.remove('dark')
            root.removeAttribute('data-theme')
        }
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(prev => {
            const next = !prev
            localStorage.setItem('theme', next ? 'dark' : 'light')
            return next
        })
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
