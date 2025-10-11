import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './i18n'
import { useTheme } from './contexts/ThemeContext'

function App() {
    // const { isDark } = useTheme();
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
