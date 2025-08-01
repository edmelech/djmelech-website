import React, { useEffect } from 'react';
import '../../App.css'

function Music() {

  useEffect(() => {
    const container = document.querySelector('.mix-scroll-table');
    if (!container) return;
  
    const handleHover = () => {
      const currentScroll = container.scrollTop;
      container.scrollTop = currentScroll + 1;
  
      setTimeout(() => {
        container.scrollTop = currentScroll;
      }, 150);
    };
  
    container.addEventListener('mouseenter', handleHover);
    return () => container.removeEventListener('mouseenter', handleHover);
  }, []);

  return (
    <div className="music">
      <div className='Player-tracklist-container'>
        <div className='player-container'>
          <div className="mix-scroll-table">

          <div className="mix-container">
              <iframe
                title = "DJ Melech mix 2024" 
                width="100%" 
                height="120" 
                frameborder="0"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fdj-melech-voices-radio-4725%2F"
              >
              </iframe>
            </div>

            <div className="mix-container">
              <iframe
                title = "DJ Melech mix 2024" 
                width="100%" 
                height="120" 
                frameborder="0"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fnye-2024-chiltern-firehouse-disco-set%2F">
              </iframe>
            </div>

            <div className="mix-container">
              <iframe
                title = "DJ Melech mix 2024" 
                width="100%" 
                height="120" 
                frameborder="0"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDJMelech%2Fdj-melech-mix-march-2024%2F">
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
                To listen to my archive of mixes and radio shows, head over to the <a href="https://www.mixcloud.com/drmrllpls" target="_blank" rel="noreferrer" className="bio-link">DRM RLL PLS Mixcloud</a>  page. 
                <br/><br/>
                Follow my <a href="https://open.spotify.com/playlist/3VKFQPBeqxfEjaMrjwHhgw?si=fee7ec6a942a4941" target="_blank" rel="noreferrer" className="bio-link">Spotify Playlist</a> to keep up to date with tunes I am playing in my sets each week.
              </p>
            </div>
          </div>      
        </div>
      </div>

    </div>  
    
    
  ) 
}

export default Music