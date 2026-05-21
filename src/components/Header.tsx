import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/history', label: 'История' },
    { to: '/cars', label: 'Автомобили' },
    { to: '/drivers', label: 'Пилоты' },
    { to: '/gallery', label: 'Галерея' },
  ]

  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink to="/" className="logo-btn">
          <span className="logo-icon">🏁</span>
          <span className="logo-text">Rally<span>Hub</span></span>
        </NavLink>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
