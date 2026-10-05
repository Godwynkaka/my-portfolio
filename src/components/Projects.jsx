function Projects({ items }) {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Small, useful things with solid foundations.</h2>
      </div>

      <div className="project-grid">
        {items.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="mailto:nyamadorgk@gmail.com?subject=I%20want%20to%20discuss%20a%20project">Discuss a similar project <span>↗</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
