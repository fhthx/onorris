import { useEffect, useCallback } from 'react'
import type { Photo } from '../data/photos'

interface LightboxProps {
  photos: Photo[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const goTo = useCallback(
    (delta: number) => {
      onNavigate((index + delta + photos.length) % photos.length)
    },
    [index, photos.length, onNavigate],
  )

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') goTo(1)
      if (event.key === 'ArrowLeft') goTo(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, goTo])

  const photo = photos[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-3xl text-white/80 hover:text-white"
      >
        &times;
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={(event) => {
          event.stopPropagation()
          goTo(-1)
        }}
        className="absolute left-4 text-3xl text-white/80 hover:text-white"
      >
        &#8249;
      </button>

      <img
        src={photo.src}
        alt={photo.title}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button
        type="button"
        aria-label="Next photo"
        onClick={(event) => {
          event.stopPropagation()
          goTo(1)
        }}
        className="absolute right-4 text-3xl text-white/80 hover:text-white"
      >
        &#8250;
      </button>
    </div>
  )
}
