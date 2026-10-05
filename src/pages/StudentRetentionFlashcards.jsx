import { Link } from 'react-router-dom'

function StudentRetentionFlashcards() {
  return (
    <main>
        <section className="content-section">
          <Link className="secondary-btn" to="/">← Back to home</Link>

          <div className="section-heading">
            <p className="eyebrow">Selected work / 02</p>
            <h1>Student Retention Flashcards</h1>
            <p className="lead">
              A C# flashcard application designed to help students retain knowledge through planned review
              instead of relying on last-minute cramming.
            </p>
          </div>

          <div className="project-meta">
            <span>02</span>
            <span>C# / Education tooling</span>
          </div>

          <div className="about-grid">
            <p>
              The application helps students turn difficult topics into repeatable review sessions. Each
              card can be revisited at the right time, keeping practice focused on the material that needs
              attention.
            </p>
            <p>
              I used the SM-2 algorithm to schedule reviews. The next interval changes according to the
              quality of each answer, so stronger recall leads to longer intervals while difficult cards
              return sooner.
            </p>
          </div>
        </section>

        <section className="content-section dark-section">
          <div className="section-heading">
            <p className="eyebrow">Project focus</p>
            <h2>Review less randomly. Remember more deliberately.</h2>
          </div>

          <div className="chip-grid">
            <span className="chip"><small>01</small>C#</span>
            <span className="chip"><small>02</small>SM-2 algorithm</span>
            <span className="chip"><small>03</small>Spaced repetition</span>
            <span className="chip"><small>04</small>Student learning</span>
          </div>
        </section>

        <section className="content-section process-section">
          <div className="section-heading">
            <p className="eyebrow">How the scheduling works</p>
            <h2>Every answer helps shape the next review.</h2>
          </div>

          <ol className="priority-list">
            <li><strong>01 / Recall</strong><span>The student answers a flashcard during a focused review session.</span></li>
            <li><strong>02 / Rate</strong><span>The answer is scored by quality, giving the scheduler a useful signal.</span></li>
            <li><strong>03 / Schedule</strong><span>SM-2 updates the repetition count, easiness factor, and next interval.</span></li>
            <li><strong>04 / Retain</strong><span>Cards that need more work return sooner while familiar material spreads out over time.</span></li>
          </ol>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Have a similar learning problem?</p>
            <h2>Let’s talk about building a tool that helps people keep going.</h2>
          </div>
          <div className="cta-group">
            <a className="primary-btn" href="mailto:nyamadorgk@gmail.com?subject=I%20want%20to%20discuss%20an%20education%20project">Discuss a project <span>↗</span></a>
            <Link className="secondary-btn" to="/">Back to home <span>↗</span></Link>
          </div>
        </section>
    </main>
  )
}

export default StudentRetentionFlashcards
