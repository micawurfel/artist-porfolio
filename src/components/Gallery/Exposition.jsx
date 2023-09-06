import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useWorkContext } from '../../context/WorkContext'

export default function Exposition() {
    
    const {works, getWorks, scrollToTop} = useWorkContext()

    useEffect(()=>{
        getWorks()
    })

    return (
        <article className='article--gallery'>
            <h2 className='article__h2'>Gallery</h2>
            <div className='article__div--gallery'>
                {works.map(work => 
                    <Link to={`/${work.name.split(' ').join('-').toLowerCase()}`} onClick={scrollToTop}>
                        <img src={work.img} key={work.id} className='article__img--gallery'/>
                    </Link>  
                )}
            </div>
       </article>
    )
}
