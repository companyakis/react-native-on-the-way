import React from 'react'

function Card({picture, info}) {
  return (
    <div className='card'>
        <img className='card-img' src={picture} alt="" />
        <p className='card-txt'>{info}</p>
        <button className='card-btn'>More Info</button>
    </div>
  )
}

export default Card
