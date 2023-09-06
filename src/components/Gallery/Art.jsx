import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { ApiService } from '../../services/ApiService'
import { useWorkContext } from '../../context/WorkContext'

export default function Art() {

  const {scrollToTop} = useWorkContext()

  const apiService = new ApiService()

  const [art, setArt] = useState({})
  const {name} = useParams()

  async function getArt(){
    const response = await apiService.getWorks()
    response.works.forEach(art => {
      const title = art.name.split(' ').join('-').toLowerCase()
      if(name == title){
          setArt(art)
      }
    })
  }

  useEffect(()=>{
    getArt()
  },[name])

  return (
    <article className='article'>
      <img src={art.img}  className='article__img' alt=""/>
      <div className='article__div'>
          <h3 className='article__h3'>{art.name}</h3>
          <p className='article__p'>{art.description}</p>
          <p className='article__p'>{`${art.widht}cm x ${art.hight}cm `}</p>
          <p className='article__p'>{art.date}</p>
          <div>
            <a className='article__button' href={`mailto:info@mailenmorale.com?subject=${art.name}`}>Email for enquiries about this piece</a>
            <Link to={'/gallery'} onClick={scrollToTop}>
              <button className='article__button'>Back to the gallery</button>
            </Link>
          </div>
          
      </div>
     </article>
  )
}
