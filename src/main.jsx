import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext'

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
)

// Hide the inline CSS loader once React has painted
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        if (typeof window.__hideLoader === 'function') window.__hideLoader()
    })
})
