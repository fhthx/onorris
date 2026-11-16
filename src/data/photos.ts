const modules = import.meta.glob<{ default: string }>(
  '../assets/photos/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
  { eager: true },
)

export interface Photo {
  src: string
  title: string
}

function titleFromPath(path: string): string {
  const filename = path.split('/').pop() ?? path
  return filename.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim()
}

export const photos: Photo[] = Object.entries(modules)
  .map(([path, mod]) => ({ src: mod.default, title: titleFromPath(path) }))
  .sort((a, b) => a.title.localeCompare(b.title))
