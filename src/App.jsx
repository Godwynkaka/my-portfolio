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
    title: 'ML Fundamentals Portfolio',
    type: 'Research / Learning platform',
    description:
      'A focused learning space for practical machine learning work, from data handling and evaluation to clear, useful experiments.',
  },
  {
    number: '02',
    title: 'Systems & Linux Practice',
    type: 'Systems / Infrastructure',
    description:
      'Hands-on work across shell scripting, SSH, networking, and infrastructure fundamentals that make software more dependable.',
  },
  {
    number: '03',
    title: 'Backend & Data Projects',
    type: 'Backend / Product engineering',
    description:
      'Small applications and API-based builds that connect Python, databases, and deployment thinking to solve practical problems.',
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
