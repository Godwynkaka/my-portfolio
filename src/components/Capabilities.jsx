function Capabilities({ items }) {
  return (
    <section id="capabilities" className="content-section dark-section">
      <div className="section-heading">
        <p className="eyebrow">What I bring</p>
        <h2>Enough range to see the whole picture.</h2>
      </div>

      <div className="chip-grid">
        {items.map((item, index) => (
          <span className="chip" key={item}>
            <small>0{index + 1}</small>{item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Capabilities
