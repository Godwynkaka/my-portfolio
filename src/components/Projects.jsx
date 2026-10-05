import { Link } from 'react-router-dom'

function Projects({ items }) {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Small, useful things with solid foundations.</h2>
      </div>

      <div className="project-grid">
        {items.map((project) => (
          <Link className="project-card" key={project.title} to={`/projects/${project.slug}`}>
            <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>View project <span>↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
