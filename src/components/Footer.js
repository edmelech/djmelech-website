import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className="footer-links">
          <div className="footer-link-wraper">
            <div className="footer-link-items">
              <Link to='/sign-up'>Ⓒ DJ Melech 2025</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
