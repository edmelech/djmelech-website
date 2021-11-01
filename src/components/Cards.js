import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='src/images/melech-smile.jpg'
              text="Listen to my latest mix of disco music."
              label='DJ Mixes'
              path='/music' 
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

