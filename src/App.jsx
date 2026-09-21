import './App.css'

const learningAreas = [
  'Machine Learning',
  'Python',
  'Rust',
  'Linux',
  'Databases',
  'Backend Engineering',
  'Mathematics',
  'Systems',
]

const focusAreas = [
  'Software Engineering',
  'AI & ML',
  'Systems & Infrastructure',
  'Data & Databases',
  'Research & Experimentation',
]

const projectCards = [
  {
    title: 'ML Fundamentals Portfolio',
    description:
      'A project-focused learning space for practical machine learning work, covering data handling, model evaluation, and real-world experimentation.',
  },
  {
    title: 'Systems & Linux Practice',
    description:
      'Hands-on exploration of Linux workflows, shell scripting, SSH, networking, and infrastructure fundamentals that build a stronger engineering base.',
  },
  {
    title: 'Backend & Data Projects',
    description:
      'Small applications and API-based builds that use Python, databases, and deployment thinking to turn theory into working software.',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand">Godwin</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#learning">Learning</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science & Engineering • Aspiring ML Engineer • Builder</p>
            <h1>Hi, I’m Godwin.</h1>
            <p className="lead">
              I’m a Computer Science & Engineering student focused on building a strong foundation in
              software, mathematics, systems, and machine learning while turning knowledge into real,
              practical projects.
            </p>
            <div className="cta-group">
              <a className="primary-btn" href="#projects">
                View projects
              </a>
              <a className="secondary-btn" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="profile-frame">
              <img src="/dp.jpg" alt="Godwin portrait" />
            </div>
            <div className="panel-badge">Now — September 2026</div>
            <ul>
              <li>Building strong foundations in ML and software engineering</li>
              <li>Learning Rust, Linux, and systems thinking</li>
              <li>Turning concepts into projects that solve real problems</li>
            </ul>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Building. Learning. Experimenting.</h2>
          </div>

          <div className="about-grid">
            <p>
              I enjoy understanding how technology works from the ground up. My interests sit across
              software engineering, machine learning, systems, Linux, mathematics, networking,
              databases, and infrastructure. I’m still learning, but I’m serious about becoming the
              kind of engineer who can take an idea, understand the technical problems behind it, and
              build a working solution.
            </p>
            <p>
              I learn best by building. I like to learn, break things, debug them, understand why they
              failed, and improve the next version. My goal is not just to know technologies, but to
              become a strong engineer who can reason through problems and design systems with clarity.
            </p>
          </div>
        </section>

        <section id="learning" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Currently learning</p>
            <h2>My focus is deep learning with practical application.</h2>
          </div>

          <div className="chip-grid">
            {learningAreas.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="info-columns">
            <div>
              <h3>Machine Learning</h3>
              <p>
                I’m rebuilding my foundations in Python, mathematics, data handling, model evaluation,
                deep learning, and deployment so I can move from learning theory toward building useful
                ML systems.
              </p>
            </div>
            <div>
              <h3>Rust & Systems</h3>
              <p>
                I’m learning Rust to strengthen my understanding of ownership, memory, performance,
                concurrency, and how software behaves closer to the machine.
              </p>
            </div>
            <div>
              <h3>Linux & Infrastructure</h3>
              <p>
                I want the terminal to feel natural and powerful, so I’m exploring Bash, Vim, SSH,
                networking, servers, virtualization, and system administration.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Areas of interest</p>
            <h2>Technology is the path, but the real goal is understanding.</h2>
          </div>

          <div className="chip-grid soft-grid">
            {focusAreas.map((item) => (
              <span className="chip soft" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Building real work, not just tutorials.</h2>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-tag">Active</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">My approach</p>
            <h2>Learn → Build → Break → Debug → Understand → Repeat</h2>
          </div>

          <div className="approach-box">
            <p>
              I don’t want to just collect tutorials and certificates. I want to grow by solving real
              problems, reading good documentation, experimenting with tools, and building software that
              reflects real understanding.
            </p>
          </div>
        </section>

        <section id="now" className="content-section">
          <div className="section-heading small-gap">
            <p className="eyebrow">What I’m focused on now</p>
            <h2>Machine Learning, software engineering, mathematics, and systems.</h2>
          </div>

          <ol className="priority-list">
            <li>
              <strong>01 — Machine Learning:</strong> Build serious foundations and work toward being
              employable in ML-focused engineering.
            </li>
            <li>
              <strong>02 — Software Engineering:</strong> Improve my ability to write, debug, and design
              reliable software.
            </li>
            <li>
              <strong>03 — Mathematics:</strong> Strengthen the math needed for ML, computing, and
              engineering.
            </li>
            <li>
              <strong>04 — Systems:</strong> Develop confidence with Linux, networking, infrastructure, and
              computers at a deeper level.
            </li>
          </ol>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2>Building my future one project at a time.</h2>
        </div>
        <div className="contact-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
