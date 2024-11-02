import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Footer.css';



function Footer() {
  return (
    <>
      <footer className="footer text-white">
        <div className="container py-4">
          <div className='douwant d-flex justify-content-center align-items-center'>
            <h1>Do you want to step in to the<br />future of your Upcoming Event</h1>
          </div>
          <div className='early d-flex justify-content-center align-items-center'>
            <button type="button" className="btn btn-outline-light">Request Early Access</button>
          </div>
          <div className="row">
            <div className="logo19 col-md-4">
                <img src="/logo192.png" className="logo192" alt="Hero Background" />
              <h6>Crchterwoord K12 182 DK Alknjkcb,</h6>
              <h6>All Rights Reserved</h6>
            </div>
            <div className="links col-md-4">
              <h5>Links</h5>
              <ul>
                <li><a href="#" className="text-white">Overons</a></li>
                <li><a href="#" className="text-white">Social Media</a></li>
                <li><a href="#" className="text-white">Counters</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div className="terms col-md-4">
              <h5>Company</h5>
              <ul>
                <li><a href="#" className="text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="get col-md-4">
              <h5>Get in touch</h5>
              <ul>
                <li><a href="#" className="text-white">Crchterwoord K12 182 DK Alknjkcb</a></li>
                <li><a href="#" className="text-white">085-132567</a></li>
                <li><a href="#" className="text-white">info@payme.net</a></li>
              </ul>
            </div>
          </div>
          <div className="copy d-flex justify-content-center align-items-center">
            <p>&copy; 2021 GPT-3. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer
