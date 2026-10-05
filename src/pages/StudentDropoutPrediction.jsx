import { Link } from 'react-router-dom'

function StudentDropoutPrediction() {
  return (
    <main>
        <section className="content-section">
          <Link className="secondary-btn" to="/">← Back to home</Link>

          <div className="section-heading">
            <p className="eyebrow">Selected work / 01</p>
            <h1>Student Dropout Prediction</h1>
            <p className="lead">
              A Python machine learning project focused on identifying students who may be at risk of
              dropping out, so support can happen earlier and with better information.
            </p>
          </div>

          <div className="project-meta">
            <span>01</span>
            <span>Python / Machine learning</span>
          </div>

          <div className="about-grid">
            <p>
              The project explores how student data can be turned into useful signals for educators and
              support teams. The goal is not to label students, but to help surface patterns that deserve
              a closer, human conversation.
            </p>
            <p>
              I worked through the machine learning workflow from preparing the data and selecting useful
              features to evaluating the model and thinking about how its predictions should be used
              responsibly.
            </p>
          </div>
        </section>

        <section className="content-section dark-section">
          <div className="section-heading">
            <p className="eyebrow">Project focus</p>
            <h2>Useful prediction, grounded in human support.</h2>
          </div>

          <div className="chip-grid">
            <span className="chip"><small>01</small>Python</span>
            <span className="chip"><small>02</small>Data preparation</span>
            <span className="chip"><small>03</small>Feature selection</span>
            <span className="chip"><small>04</small>Model evaluation</span>
          </div>
        </section>

        <section className="content-section process-section">
          <div className="section-heading">
            <p className="eyebrow">What I learned</p>
            <h2>Prediction is only useful when the next step is clear.</h2>
          </div>

          <ol className="priority-list">
            <li><strong>01 / Prepare</strong><span>Clean and understand the student data before asking a model to learn from it.</span></li>
            <li><strong>02 / Model</strong><span>Compare useful approaches and measure how well they identify risk.</span></li>
            <li><strong>03 / Interpret</strong><span>Keep the results understandable enough to support responsible decisions.</span></li>
            <li><strong>04 / Improve</strong><span>Use evaluation and feedback to make the next version more useful.</span></li>
          </ol>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Have a similar problem?</p>
            <h2>Let’s talk about what your data could help you understand.</h2>
          </div>
          <div className="cta-group">
            <a className="primary-btn" href="mailto:nyamadorgk@gmail.com?subject=I%20want%20to%20discuss%20a%20data%20project">Discuss a project <span>↗</span></a>
            <Link className="secondary-btn" to="/">Back to home <span>↗</span></Link>
          </div>
        </section>
    </main>
  )
}

export default StudentDropoutPrediction
