import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import ReactPlayer from 'react-player';

function Music() {
  return (
    <h1 className="music">
      <div>
      <ReactPlayer
        url="https://soundcloud.com/djmelech/april-2021-dj-mix?si=3a579859e22b4815a269a0d782a36fb9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"/>
      </div>
    </h1>  
    
    
  ) 
}

export default Music