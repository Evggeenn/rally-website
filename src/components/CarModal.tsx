import { useEffect } from 'react'
import { CarData } from '../types'

interface CarModalProps {
  car: CarData | null
  onClose: () => void
}

export function CarModal({ car, onClose }: CarModalProps) {
  useEffect(() => {
    if (!car) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [car, onClose])

  if (!car) return null

  return (
    <div className="modal active car-modal" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content car-modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>
        {car.image && (
          <img src={car.image} alt={car.name} className="car-modal-img" />
        )}
        <div className="car-modal-header">
          <h2>{car.name}</h2>
          <span className="car-year">{car.year}</span>
        </div>
        <div className="car-modal-specs">
          <div className="spec-item">
            <span className="spec-label">Двигатель</span>
            <span className="spec-value">{car.engine}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Мощность</span>
            <span className="spec-value">{car.power}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Привод</span>
            <span className="spec-value">{car.drive}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Победы</span>
            <span className="spec-value">{car.wins}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Титулы</span>
            <span className="spec-value">{car.titles}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
