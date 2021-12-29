import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import ReactPlayer from 'react-player';

function Music() {
  return (
    <h1 className="music">
      <div className='player-container'>
        <ReactPlayer
          className='react-player'
          url="https://soundcloud.com/djmelech/april-2021-dj-mix?si=3a579859e22b4815a269a0d782a36fb9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width='600px'
          height='190px'
        />
        <br/>
        <ReactPlayer
          className='react-player'
          url="https://soundcloud.com/drmrllpls/melechtric-mix-feb-2018?si=a758dabc2b0f45bf87a99a492f05284b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width='600px'
          height='190px'
        />
      </div>
    </h1>  
    
    
  ) 
}

export default Music