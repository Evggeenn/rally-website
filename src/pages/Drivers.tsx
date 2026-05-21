import { useState } from 'react'
import { drivers } from '../data/drivers'

const filters = ['all', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']

export function Drivers() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? drivers : drivers.filter(d => d.era === filter)

  return (
    <div className="page drivers-page">
      <div className="hero hero--small">
        <div className="hero-content">
          <h1>Легендарные <span>пилоты</span></h1>
          <p>Чемпионы и герои всех эпох WRC — от Жан-Клод Андрюе до Калле Рованперя</p>
        </div>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'Все' : f}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filtered.map(driver => (
          <div className="card" key={driver.name} data-era={driver.era}>
            <div className="card-img">
              {driver.image ? (
                <img src={driver.image} alt={driver.name} />
              ) : (
                <div className="car-placeholder">
                  <span className="car-emoji">🏎️</span>
                  <span className="car-name">{driver.name}</span>
                </div>
              )}
            </div>
            <div className="card-content">
              <span className="card-badge">{driver.badge}</span>
              <h3>{driver.name}</h3>
              <p><strong>{driver.titles}</strong></p>
              <p>{driver.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
