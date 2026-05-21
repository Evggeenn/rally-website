import { useState } from 'react'
import { cars, carEra, carBadge } from '../data/cars'
import { CarModal } from '../components/CarModal'
import { CarData } from '../types'

const filters = ['all', '1970s', 'group-b', 'group-a', 'wrc', 'rally1']

export function Cars() {
  const [filter, setFilter] = useState('all')
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null)

  const filtered = filter === 'all' ? cars : cars.filter(c => carEra[c.name] === filter)

  return (
    <div className="page">
      <div className="hero hero--small">
        <div className="hero-content">
          <h1>Знаменитые <span>автомобили</span></h1>
          <p>Легендарные болиды всех эпох WRC — от Alpine A110 до GR Yaris Rally1</p>
        </div>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'Все' : f === 'group-b' ? 'Group B' : f === 'group-a' ? 'Group A' : f === 'wrc' ? 'WRC' : f === 'rally1' ? 'Rally1' : f}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filtered.map(car => (
          <div className="card" key={car.name} data-era={carEra[car.name]} onClick={() => setSelectedCar(car)}>
            <div className="card-img">
              {car.image ? (
                <img src={car.image} alt={car.name} />
              ) : (
                <div className="car-placeholder">
                  <span className="car-emoji">🏎️</span>
                  <span className="car-name">{car.name}</span>
                </div>
              )}
            </div>
            <div className="card-content">
              <span className="card-badge">{carBadge[car.name]}</span>
              <h3>{car.name}</h3>
              <p>{car.engine}, {car.power}, {car.drive}</p>
            </div>
          </div>
        ))}
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  )
}
