import { Gallery } from './components/Gallery'
import { photos } from './data/photos'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="px-6 py-12 text-center">
        <h1 className="font-display text-5xl tracking-wide sm:text-6xl">
          Ollie Norris
        </h1>
        <p className="font-display-alt mt-2 text-sm tracking-[0.3em] text-white/60 uppercase">
          Portfolio
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <Gallery photos={photos} />
      </main>
    </div>
  )
}

export default App
