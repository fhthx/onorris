# Ollie Norris — Portfolio

A React + Vite + Tailwind CSS gallery for Ollie Norris's photography/artwork.

## Structure

- `src/assets/photos/` — portfolio images. Drop a new `.jpg`/`.jpeg`/`.png` file
  in here and it automatically appears in the gallery (`src/data/photos.ts`
  picks them up via `import.meta.glob`).
- `src/assets/fonts/multivac/` — the Multivac typeface used for headings
  (`@font-face` declared in `src/index.css`).
- `originals/heic/` — original `.HEIC` captures kept for reference. Not part
  of the web build; convert to `.jpg`/`.png` into `src/assets/photos/` to use
  one.

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```
