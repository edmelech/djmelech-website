import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>LIFE TO MUSIC</h1>
      <p>Latest Spotify playlist available now</p>
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LISTEN
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
