import { useState } from 'react'
import type { Photo } from '../data/photos'
import { Lightbox } from './Lightbox'

export function Gallery({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg bg-neutral-900"
          >
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="w-full object-cover transition-opacity duration-300 hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={photos}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  )
}
