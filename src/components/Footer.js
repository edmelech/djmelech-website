import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


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
              <Link to='/'>Mixcloud</Link>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Resident Advisor</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Melech <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Melech © 2020</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
