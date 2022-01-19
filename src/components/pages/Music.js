import React from 'react'
import '../../App.css'

function Music() {
  return (
    <h1 className="music">
      <div className='Player-tracklist-container'>
        <div className='player-container'>
          <div className="mix-container">
          <iframe 
            width="90%" 
            height="120" 
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FDJMelech%2Fmelech-disco-mix-jan-2022%2F" 
            frameborder="0"
            title="DJ Melech Disco Mix January 2022">
          </iframe>  
          </div>
          
          <br/>
          <div className="mix-info">
            <p>Welcome to my music page. Above is my latest mix which I made to go with the launch of this site. It features a load of music from my DJ sets over the past few weeks.</p>
            <br></br> 
            <p>I'm working on a house mix and will get that online soon. I'm also working on my own original music so watch this space.</p>
            <br></br>
            <p>
            To listen to my archive of mixes and radio shows, head over to the <a href="https://www.mixcloud.com/drmrllpls" target="_blank" rel="noreferrer" class="bio-link">DRM RLL PLS Mixcloud</a>  page. All future mixes will be available on this page.
            </p>
          </div>      
        </div>
        <div className='tracklist'>
        <p>
          <strong>Melech Disco Mix - Jan 2022</strong>
          <br></br>
          <br></br>Baris K - Aheste
          <br></br>MMT* - Sevmek Istiyorum
          <br></br>Chuck Brown and The Soul Searchers - Bustin' Loose
          <br></br>Pamela Nivens - It's You I Love (Instrumental Mix)
          <br></br>Candi Staton - When You Wake Up Tomorrow
          <br></br>Sylvester - Tell Me (Remix)
          <br></br>Evo - Din Don (Instrumental)
          <br></br>T Connection - At Midnight
          <br></br>Nu Genea - Je Vulesse
          <br></br>Pellegrino & Zodyaco - Amaremai
          <br></br>Claudja Barry - Sweet Dynamite (Todd Terje edit)
          <br></br>Japan - Life In Tokyo
          <br></br>Schatzi Edits - A2 Schatzi 007
          <br></br>Pigeon - Yagana
          <br></br>Schatzi Edits - A1 Schatzi 009
          <br></br>The Vision - Heaven
          <br></br>D.C La Rue - Cathedrals (Jamie 3:26 Extended Disco Dub)
          <br></br>Tom Moulton - Small Circle of Friends
          <br></br>Christopher Cross - Ride Like The Wind (Joey Negro Extended Disco Mix)
          <br></br>Asso - Do It Again</p>
        </div>
      </div>

    </h1>  
    
    
  ) 
}

export default Music