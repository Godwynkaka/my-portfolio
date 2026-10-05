import profileImage from '../../dp_chat.png'

function Hero() {
  return (
    <section className="hero section-card" id="work">
      <div className="hero-copy">
        <p className="eyebrow">Independent software engineer <span className="eyebrow-dot">●</span> Available for select projects</p>
        <h1>Thoughtful software for <em>ambitious</em> ideas.</h1>
        <p className="lead">
          I help turn early ideas into useful, well-built digital products. Clear thinking, capable code,
          and a steady hand from the first sketch to the final deploy.
        </p>
        <div className="cta-group">
          <a className="primary-btn" href="mailto:nyamadorgk@gmail.com?subject=I%20have%20a%20project%20for%20you">
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
  )
}

export default Hero
