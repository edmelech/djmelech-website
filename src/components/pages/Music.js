import React from 'react'
import '../../App.css'

function Music() {
  return (
    <h1 className="music">
      <div className='player-container'>
        <div className="mix-container">
        <iframe 
          width="90%" 
          height="120" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FDJMelech%2Fmelech-disco-mix-jan-2022%2F" 
          frameborder="0"
          tite="DJ Melech Disco Mix January 2022">
        </iframe>  
        </div>
                
        <br/>
        <div className="mix-info">
          <p>Welcome to my music page. Above is my latest mix which I made to go with the launch of this site. It features a load of music from my DJ sets in bars and pubs around London. I'm working on a house mix and will get that online soon. I'm also working on my own original music so watch this space.</p> 
          <br></br>
          <p>
          To listen to my archive of mixes and radio shows, head over to the <a href="https://www.mixcloud.com/drmrllpls" target="_blank" rel="noreferrer" class="bio-link">DRM RLL PLS Mixcloud</a>  page. All future mixes will be available on this page.
          </p>
        </div>
               
      </div>
    </h1>  
    
    
  ) 
}

export default Music