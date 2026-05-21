import { useState } from 'react'
import { galleryItems } from '../data/gallery'
import { ImageModal } from '../components/ImageModal'

export function Gallery() {
  const [selected, setSelected] = useState<{ src: string; alt: string; caption: string } | null>(null)

  return (
    <div className="page">
      <h2 className="section-title">📸 Галерея моментов</h2>

      <div className="gallery-grid">
        {galleryItems.map(item => (
          <div
            className="gallery-item"
            key={item.src}
            onClick={() => setSelected(item)}
          >
            <div className="card-img">
              <img src={item.src} alt={item.alt} />
            </div>
            <p>{item.caption}</p>
          </div>
        ))}
      </div>

      {selected && (
        <ImageModal
          src={selected.src}
          alt={selected.alt}
          caption={selected.caption}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
