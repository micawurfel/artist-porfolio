import { useEffect } from 'react'
import Artwork from '../Gallery/Artwork'
import { Link } from 'react-router-dom'
import { useWorkContext } from '../../context/WorkContext'

export default function Gallery() {
  const { works, getWorks, scrollToTop } = useWorkContext()

  useEffect(() => {
    getWorks()
  })

  const destacated = works.slice(0, 3)

  return (
    <section id="gallery" className="section section--gallery">
      <h2 className="section__h2">Gallery</h2>
      <div className="section__div section__div--gallery">
        {destacated.map(work => (
          <Artwork key={work.id} work={work} />
        ))}
      </div>
      <Link to={'/gallery'} onClick={scrollToTop}>
        <button className="section__button"> Show more</button>
      </Link>
    </section>
  )
}
