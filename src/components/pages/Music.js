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
          url="https://soundcloud.com/djmelech/april-2021-dj-mix"
          width='300px'
          height='190px'
        />

        {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1025532784&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <div style={{fontSize: '10px', color: '#cccccc',lineBreak: 'anywhere',wordBreak: 'normal',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',fontWeight: 100}}>
          <a href="https://soundcloud.com/djmelech" title="Melech" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Melech</a> · <a href="https://soundcloud.com/djmelech/april-2021-dj-mix" title="April 2021 DJ Mix" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>April 2021 DJ Mix</a></div>
         */}
        <br/>
        <ReactPlayer
          className='react-player'
          url="https://soundcloud.com/drmrllpls/melechtric-mix-feb-2018?si=a758dabc2b0f45bf87a99a492f05284b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width='300px'
          height='190px'
        />
      </div>
    </h1>  
    
    
  ) 
}

export default Music