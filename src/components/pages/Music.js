import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import ReactPlayer from 'react-player';

function Music() {
  return (
    <h1 className="music">
      <div className='player-container'>
        {/* <ReactPlayer
          className='react-player'
          url="https://soundcloud.com/djmelech/april-2021-dj-mix"
          width='300px'
          height='190px'
        /> */}

        {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1025532784&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <div style={{fontSize: '10px', color: '#cccccc',lineBreak: 'anywhere',wordBreak: 'normal',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',fontWeight: 100}}>
          <a href="https://soundcloud.com/djmelech" title="Melech" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Melech</a> · <a href="https://soundcloud.com/djmelech/april-2021-dj-mix" title="April 2021 DJ Mix" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>April 2021 DJ Mix</a></div>
         */}

        <iframe 
          width="90%" 
          height="120" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FDJMelech%2Fmelech-disco-mix-jan-2022%2F" 
          frameborder="0"
          ></iframe>          
        <br/>
        <iframe width="90%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdrmrllpls%2Fmelechtric-mix-february-2018%2F" frameborder="0" ></iframe>

       
      </div>
    </h1>  
    
    
  ) 
}

export default Music