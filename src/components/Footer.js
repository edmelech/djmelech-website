import React from 'react'
import { Button } from './Button'
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join my newsletter to be updated with playlist, mixes and news on upcoming releases and gigs.
          </p>
          <p classname="footer-subscription-text">
            You can unsibscribe at any time.
          </p>
          <div className="inpput-areas">
            <form>
              <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wraper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to='/sign-up'>Soundcloud</Link>
              <link to='/'>Mixcloud</link>
              <link to='/'>Instagram</link>
              <link to='/'>Resident Advisor</link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
