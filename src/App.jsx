import './App.css'
import profileImage from '../dp_chat.png'

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
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Godwin home">
          <span className="brand-mark"><img src={profileImage} alt="" /></span>
          <span>Godwin</span>
        </a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@example.com?subject=Let%27s%20work%20together">Hire me <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero section-card" id="work">
          <div className="hero-copy">
            <p className="eyebrow">Independent software engineer <span className="eyebrow-dot">●</span> Available for select projects</p>
            <h1>Thoughtful software for <em>ambitious</em> ideas.</h1>
            <p className="lead">
              I help turn early ideas into useful, well-built digital products. Clear thinking, capable code,
              and a steady hand from the first sketch to the final deploy.
            </p>
            <div className="cta-group">
              <a className="primary-btn" href="mailto:hello@example.com?subject=I%20have%20a%20project%20for%20you">
                Start a project <span>↗</span>
              </a>
              <a className="secondary-btn" href="#projects">
                See selected work <span>↓</span>
              </a>
            </div>
            <div className="hero-note"><span>✳</span> Built with curiosity, shipped with care.</div>
          </div>

          <div className="hero-panel">
            <div className="profile-frame">
              <img className="portrait-image" src={profileImage} alt="Godwin portrait" />
            </div>
            <div className="panel-caption"><span>01</span><span>Godwin — Engineer & builder</span></div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">The short version</p>
            <h2>A technical partner who stays close to the problem.</h2>
          </div>

          <div className="about-grid">
            <p>
              Good work starts with understanding what matters. I ask the useful questions, make the
              complex parts legible, and build solutions that feel considered rather than over-engineered.
            </p>
            <p>
              My practice sits at the intersection of product thinking and engineering craft: robust
              foundations underneath, a simple experience on top, and a clear line back to your goal.
            </p>
          </div>
        </section>

        <section id="capabilities" className="content-section dark-section">
          <div className="section-heading">
            <p className="eyebrow">What I bring</p>
            <h2>Enough range to see the whole picture.</h2>
          </div>

          <div className="chip-grid">
            {capabilities.map((item, index) => (
              <span className="chip" key={item}>
                <small>0{index + 1}</small>{item}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section client-section">
          <div className="section-heading">
            <p className="eyebrow">Good company</p>
            <h2>Built for people moving something forward.</h2>
          </div>
          <div className="client-list">
            <span>Founders & small teams</span><span>Growing businesses</span><span>Creative partners</span><span>Mission-led organisations</span>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Small, useful things with solid foundations.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="mailto:hello@example.com?subject=I%20want%20to%20discuss%20a%20project">Discuss a similar project <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section review-section">
          <div className="section-heading">
            <p className="eyebrow">A few good words</p>
            <h2>The kind of collaboration I care about.</h2>
          </div>
          <div className="reviews">
            <blockquote>“Godwin brings a rare mix of patience, curiosity, and technical depth to every problem.”<cite>— Client feedback</cite></blockquote>
            <blockquote>“Clear communication, thoughtful execution, and no unnecessary drama.”<cite>— Project partner</cite></blockquote>
          </div>
        </section>

        <section id="process" className="content-section process-section">
          <div className="section-heading small-gap">
            <p className="eyebrow">How we’ll work</p>
            <h2>From first conversation to something real.</h2>
          </div>

          <ol className="priority-list">
            <li><strong>01 / Understand</strong><span>We make the goal, audience, and constraints clear.</span></li>
            <li><strong>02 / Shape</strong><span>We choose a focused direction and turn it into a buildable plan.</span></li>
            <li><strong>03 / Build</strong><span>I make the work, share progress, and keep the feedback loop short.</span></li>
            <li><strong>04 / Ship</strong><span>You leave with something useful, maintainable, and ready for its next chapter.</span></li>
          </ol>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2>Have a good idea? Let’s make it useful.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        </div>
      </footer>
    </div>
  )
}

export default App
