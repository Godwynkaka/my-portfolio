import './App.css'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Projects from './components/Projects'
import Reviews from './components/Reviews'

const capabilities = [
  'Web applications',
  'Backend systems',
  'AI & machine learning',
  'Data-driven products',
  'APIs & integrations',
  'Linux & infrastructure',
]

const projects = [
  {
    number: '01',
    title: 'Student Dropout Prediction Model',
    type: 'Python / Machine learning',
    description:
      'A Python machine learning project that uses student data to identify dropout risk and support earlier, better-informed intervention.',
  },
  {
    number: '02',
    title: 'Student Retention Flashcards',
    type: 'C# / Education tooling',
    description:
      'A C# flashcard application designed to help students strengthen retention through spaced review rather than last-minute cramming.',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Capabilities items={capabilities} />
        <Clients />
        <Projects items={projects} />
        <Reviews />
        <Process />
      </main>

      <Footer />
    </div>
  )
}

export default App
