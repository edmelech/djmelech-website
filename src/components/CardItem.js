import React from 'react'

function CardItem() {
  return (
    <>
      <li className="cards__item">
        <link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img src="/" alt="Travel Image"
            className="cards__item__img"/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text' />
          </div>
        </link>
      </li>
    </>
  )
}

export default CardItem
