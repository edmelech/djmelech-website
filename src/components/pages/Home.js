import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'


function Home () {
  return (
    <>
      <HeroSection />
      <div className='home-video'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1nt_b1U2CoY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Cards />
    </>
  )
}

export default Home