import { useState } from 'react'
import { eras } from '../data/eras'
import { cars } from '../data/cars'

const carImages: Record<string, string | undefined> = {
  ...Object.fromEntries(cars.map(c => [c.name, c.image])),
}

export function History() {
  const [activeEra, setActiveEra] = useState('1973')
  const current = eras.find(e => e.id === activeEra)!

  return (
    <div className="page">
      <div className="hero hero--small">
        <div className="hero-content">
          <h1>История <span>WRC</span></h1>
          <p>От первого сезона 1973 года до гибридной эры Rally1 — полная хронология Чемпионата мира по ралли</p>
        </div>
      </div>

      <div className="era-selector">
        {eras.map(era => (
          <button
            key={era.id}
            className={`era-btn ${activeEra === era.id ? 'active' : ''}`}
            onClick={() => setActiveEra(era.id)}
          >
            <span className="era-year">{era.id}</span>
            <span className="era-name">{era.badge.split('-')[0].trim()}</span>
          </button>
        ))}
      </div>

      <div className="era-content">
        <div className="era-panel active" key={current.id}>
          <div className="era-header">
            <span className="era-badge">{current.badge}</span>
            <h2>{current.title}</h2>
          </div>

          <div className="era-visual">
            <div className="car-showcase">
              {current.cars.map(car => (
                  <div className="car-card" key={car.name}>
                    {carImages[car.name] ? (
                      <img src={carImages[car.name]} alt={car.name} className="car-image" />
                    ) : (
                      <div className="car-emoji">🏎️</div>
                    )}
                    <div className="car-name">{car.name}</div>
                    <div className="car-year">{car.year}</div>
                  </div>
              ))}
            </div>
          </div>

          <div className="era-grid">
            <div className="era-info">
              {current.info.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="era-stats">
              {current.stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="era-highlights">
            <h3>Ключевые моменты</h3>
            <div className="highlight-grid">
              {current.highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <span className="highlight-year">{h.year}</span>
                  <p dangerouslySetInnerHTML={{ __html: h.text }} />
                </div>
              ))}
            </div>
          </div>

          <div className="era-teams">
            <h3>Знаковые автомобили</h3>
            <div className="team-grid">
              {current.teams.map(t => (
                <div className="team-card" key={t.name}>
                  <h4>{t.name}</h4>
                  <p>{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
