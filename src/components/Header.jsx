import profileImage from '../../dp_chat.png'

function Header() {
  return (
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
  )
}

export default Header
