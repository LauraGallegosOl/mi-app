import React from 'react'
import Card from './Card'
import image from '../assets/image.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

const cards = [
    {
        id:1,
        title:'NGINX',
        image: image,
        instructor:'Humberto Dorantes',
        url: 'https://www.nginx.com/'
    },
    {
        id:2,
        title:'Python',
        image: image1,
        instructor:'Samuel Lopez',
        url:'https://www.python.org/'
    },
    {
        id:3,
        title:'Java',
        image: image2,
        instructor:'Angela Rios',
        url:'https://www.java.com/es/'
    }
]

export default function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map( c => (
                    <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}
                    url={c.url}
                    />
                    </div>

                ))
            }

        </div>
        <card></card>
    </div>
  )
}
