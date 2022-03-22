import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import smartEd from '../assets/images/SmartEd.jpg'
import melechSmile from '../assets/images/melech-smile_lowres.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Listen to my latest DJ mixes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={smartEd}
              text='Listen to my latest disco mix'
              label='Disco'
              path='/music' 
            />
            <CardItem
              src={melechSmile}
              text='Listen to my latest house mix'
              label='House'
              path='/music' 
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

