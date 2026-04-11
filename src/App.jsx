import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './i18n'

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
