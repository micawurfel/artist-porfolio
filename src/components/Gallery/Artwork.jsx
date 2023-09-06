import React from 'react'
import {Link} from 'react-router-dom'
import { useWorkContext } from '../../context/WorkContext'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Artwork({work}) {
  AOS.init();

  const {scrollToTop} = useWorkContext()

  const title = work.name.split(' ').join('-').toLowerCase()

  return (
      <div className='div' data-aos="fade-up" data-aos-duration="1000">
        <Link to={title} onClick={scrollToTop}>
          <img src={work.img} className='div__img div__img--filter' alt=''/>
        </Link>
      </div>
  )
}