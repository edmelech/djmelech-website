import React from 'react'
import '../../App.css'

function Music() {
  return (
    <h1 className="music">
      <div className='Player-tracklist-container'>
        <div className='player-container'>

        <div className="mix-container">
            <iframe
              title = "Mixcloud player" 
              width="100%" 
              height="120" 
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fdj-melech-mix-march-2024%2F" 
              frameborder="0" >
            </iframe>
          </div>

          <div className="mix-container">
            <iframe 
              width="100%" 
              height="120" 
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fthe-house-of-koko-16923%2F"
              frameborder="0"
              title="DJ Melech - Live at The House of KOKO September 2023">
            </iframe>  
          </div>

          <div className="mix-container">
            <iframe 
              width="100%" 
              height="120" 
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fdj-melech-deep-melodic-house-mix-june-2023%2F"
              frameborder="0"
              title="DJ Melech Deep / Melodic House Mix June 2023">
            </iframe>  
          </div>


          
          <br/>
          <div className="mix-info">
            <p>
              To listen to my archive of mixes and radio shows, head over to the <a href="https://www.mixcloud.com/drmrllpls" target="_blank" rel="noreferrer" class="bio-link">DRM RLL PLS Mixcloud</a>  page. 
              <br/><br/>
              Follow my <a href="https://open.spotify.com/playlist/3VKFQPBeqxfEjaMrjwHhgw?si=fee7ec6a942a4941" target="_blank" rel="noreferrer" class="bio-link">Spotify Playlist</a> to keep up to date with tunes I am playing in my sets each week.
            </p>
          </div>      
        </div>
      </div>

    </h1>  
    
    
  ) 
}

export default Music