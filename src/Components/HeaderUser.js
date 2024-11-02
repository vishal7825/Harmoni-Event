import React from 'react'
import './Header.css'
import './HeaderUser.css'


function HeaderUser() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/1.site-logo.png" className="logo img-fluid" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Event">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contactus">Contact</a>
                </li>
              </ul>

            </div>
            <div className='usericon1'>
              <img className='usericon rounded' src='/images5.png' alt='Admin Icon' />
              <span>user1</span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/account">Account</a>
                <a className="dropdown-item" href="/mybooking">My Booking</a>
                <a className="dropdown-item" href="/Signin">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default HeaderUser
