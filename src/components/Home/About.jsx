import React from 'react'
import Imagen from '../../assets/retrato1.jpg'
import { AiOutlineCoffee } from "react-icons/ai";

export default function About() {

  return (
    <section id='about-me' className='section section--about'>
        <h2 className='section__h2'>About Me</h2>
        <div className='section__div'>
          <img src={Imagen} alt="" className='section__img' />
          <article className='section__article'>
            <p   className='section__p'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de l de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
            <p  className='section__p'>Hay muchas variaciones no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.</p>
            <p className='section__p'><a href="https://www.buymeacoffee.com/mailenmorale">Buy me a coffee <AiOutlineCoffee/></a></p>
          </article>
        </div>
    </section>
  )
}