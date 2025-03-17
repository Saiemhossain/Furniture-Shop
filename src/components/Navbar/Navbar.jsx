import './Navbar.css'

import logo from '../../assets/logo.svg'
import { useEffect } from 'react';
import { handleNavToggle } from './Logic';

import { Link } from 'react-router-dom';
import { cartState } from '../../Context/Context';

function Navbar() {

  const {cart} = cartState()

  useEffect(() => {
    handleNavToggle()
  },[])
  return (
    <>
      <div className="nav-area">
        <div className="Nav wrapper">
          <div className="logo">
            <Link to={'/'}>
              {' '}
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-menu">
            <ul>
              <Link to={'/'}>Home</Link>
              <a href="#about">About</a>
              <a href="#furniture">Furnitures</a>
              <a href='#contact' >Contact</a>
            </ul>
          </div>

          <div className="icon-area">
            <div className="icon">
              <li to={'/checkOut'}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> {cart.length} </span>
              </li>
            </div>

            <div className="hamburger" id="hamburger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="menu-icon open"
              >
                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="menu-icon close"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>

              <div className="mobile-menu">
                <nav>
                  <ul>
                    <Link to={'/'}>Home</Link>
                    <a href="#about">About</a>
                    <a href="#furniture">Furnitures</a>
                    <a href='#contact' >Contact</a>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area wrapper">
          <h4>Home Office Furniture</h4>
          <h1>Stay productive and get more work done!</h1>
          <button className="hero-btn">
            Shop Collection <span>&#8594;</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar