import { useEffect } from 'react'

interface ImageModalProps {
  src: string
  alt: string
  caption: string
  onClose: () => void
}

export function ImageModal({ src, alt, caption, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal active" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} />
        <p className="modal-caption">{caption}</p>
      </div>
    </div>
  )
}
