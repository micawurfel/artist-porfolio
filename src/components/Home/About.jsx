import Imagen from '../../assets/retrato.jpg'
import { AiOutlineCoffee } from 'react-icons/ai'

export default function About() {
  return (
    <section id="about-me" className="section section--about">
      <h2 className="section__h2">About Me</h2>
      <div className="section__div">
        <img src={Imagen} alt="" className="section__img" />
        <article className="section__article">
          <p className="section__p">
            I&#39;m Mailen, from Argentina, I&#39;ve been living in Europe for
            the last two years where I discovered my role as an artist.
          </p>
          <p className="section__p">
            The inspiration comes from the mixture of reuse and sustainability
            as well as highlighting the beauty in the discarded and overlooked.
            So my mission is to transform the forgotten into unique pieces of
            art.
          </p>
          <p className="section__p">
            The work consists of rescuing discarded works to intervene them and
            give them a new life. Making sure that the piece, which meant
            something to the person who created it in its time, is not lost and
            generating a new concept about it. The result is a fusion of the old
            and the new, the past and the present, the discarded and the
            appreciated.
          </p>
          <p className="section__p">
            <a href="https://www.buymeacoffee.com/mailenmorale">
              Buy me a coffee <AiOutlineCoffee />
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}
