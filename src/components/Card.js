import React from 'react'
//import image from '..assets/image.png'


export default function Card({id,title,image,instructor,url}) {
    
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt="no image"/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                Instructor:<br/>{instructor}
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0'>
                Ir al sitio web
            </a>
        </div>
    </div>
    
  )
}
