import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Header.css'

function Header() {
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
          </div>
          <div className='signinbtn'>
                  <a className="btn" href="/Signin" role="button">Signin</a>
              </div>
        </nav>
      </div>
    </>
  )
}

export default Header
