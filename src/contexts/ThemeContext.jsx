import React, { createContext, useContext } from 'react'

// Dark-only — no toggle, always dark
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    // Force dark class on mount
    React.useEffect(() => {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
    }, [])

    return (
        <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
