import React from 'react'
import '../../App.css'
import Cards from '../Cards';

function Music() {
  return (
    <h1 className="music">
      <div className='player-container'>
        <iframe 
          width="90%" 
          height="120" 
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FDJMelech%2Fmelech-disco-mix-jan-2022%2F" 
          frameborder="0"
          tite="DJ Melech Disco Mix January 2022"
          ></iframe>          
        <br/>
        <iframe
           width="90%" 
           height="120" 
           src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdrmrllpls%2Fmelechtric-mix-february-2018%2F" 
           frameborder="0" 
           tite="DJ Melech Mix February 2021"
           ></iframe>

       
      </div>
    </h1>  
    
    
  ) 
}

export default Music