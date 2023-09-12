import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'

export default function Inicio() {
  return (
    <>
      <section className="section">
        <h1 className="section__h1">Mailén Morale</h1>
        <h2 className="section__h2 section__h2--inicio">Artist</h2>
      </section>
      <About />
      <Gallery />
      <Contact />
    </>
  )
}
