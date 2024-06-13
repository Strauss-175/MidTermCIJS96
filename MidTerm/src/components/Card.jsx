import React from 'react'
import "./card.css"
function Card({img, moviewName, description, episode}) {
  return (
    <div className='movieCard'>
      <section className='subMovieCard'>
        <p className='episode'>Episode {episode}</p>
        <img src={img} />
      </section>
      <h3>{moviewName}</h3>
    </div>
  )
}

export default Card