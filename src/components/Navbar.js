import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuActive, setClick] = useState(false);

  const handleClick = () => setClick(!menuActive);
  const closeMobileMenu = () => setClick(false)



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick=
          {closeMobileMenu}>
            MELECH 
          </Link>  
          <div className="menu-icon" onClick={handleClick}>
            <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'} />
          </div>  
          <ul className={menuActive ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
