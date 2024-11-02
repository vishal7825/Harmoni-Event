import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './About.css';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
    <Header/>
      <main className="main">
        <section id="hero1" className="hero1">
          <img src="/breadcrumb/0.breadcrumb-bg.jpg" className="img-fluid" alt="Hero Background" />
          <div className="container">
            <h6 className="center-content">
              All You need to <br /> know
            </h6>
            <h3 className="d-flex justify-content-center align-items-center">About</h3>
            <h2 className="d-flex justify-content-center align-items-center">Harmoni</h2>
            <div className="links d-flex justify-content-center align-items-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                <li className="list-inline-item"><a href="/About" className="text-white">About us</a></li>
              </ul>
            </div>
          </div>
        </section>
        <div className='aboutm row'>
          <div className='about4 col-12 col-md-4 mb-4 mb-md-0 '>
            <p>We are harmoni</p>
            <h3>No.1 Events<br />Management</h3>
            <p>get started!</p>
          </div>
          <div className='about4 col-12 col-md-4 mb-4 mb-md-0'>
            <h3>Our mission</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.</p>
            <p className='sec'><i>Lorem Ipsum is The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested.</i></p>
          </div>
          <div className='about4 col-12 col-md-4'>
            <h3>Our vision</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.</p>
            <p className='sec'><i>Lorem Ipsum is The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested.</i></p>
          </div>
        </div>
        <div className="achive row">
  <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
    <div className="image-container">
      <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background Image" />
      <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay Image" />
    </div>
  </div>
  <div className="award col-12 col-md-6">
    <h3>Our Winning Awards</h3>
    <div className="year">
      <h2>AUG 2015</h2>
      <div className="which mb-3">
        <h4>1st Place htmlFor Unique Events 2018</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested.</p>
      </div>
      <h2>MAY 2014</h2>
      <div className="which mb-3">
        <h4>1st Winner Best New Year Events</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below htmlFor those interested.</p>
      </div>
      <h2>DEC 2013</h2>
      <div className="which">
        <h4>1st Place International Events Awards</h4>
      </div>
    </div>
  </div>
</div>
<div className="container my-2">
        <div className="row g-2">
            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 g-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Study With Us </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


      </main>
      <Footer/>

    </>
  );
}

export default About
