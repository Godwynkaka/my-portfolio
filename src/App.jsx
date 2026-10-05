import './App.css'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import StudentDropoutPrediction from './pages/StudentDropoutPrediction'
import StudentRetentionFlashcards from './pages/StudentRetentionFlashcards'

const scrollPositions = {}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  useEffect(() => {
    const savedPosition = scrollPositions[pathname]

    window.scrollTo(0, savedPosition ?? 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="portfolio-shell">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/student-dropout-prediction" element={<StudentDropoutPrediction />} />
        <Route path="/projects/student-retention-flashcards" element={<StudentRetentionFlashcards />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
