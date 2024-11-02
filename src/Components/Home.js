import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Home.css';
import Header from './Header';
import Footer from './Footer';


function Home() {
  return (
    <>
    <Header/>
      <main className="main"> 
        <section id="hero" className="hero">
          <img src="/event/abstract-1846226.jpg" className="img-fluid" />
          <div className="container">
            <h1>One Stop Event <br />Planner</h1>
            <br />
            <p>
              Yet bed any htmlFor travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
              <br /><br />
              Every event should be Perfect
            </p>
            <br /><br />
            <input type="email" className="email" placeholder="Your Email Address" />
            <button type="button" className="getStarted">Get Started</button>
            <br /><br />

            <p>
              1,600 people requested access a visit in last 24 hours</p>
          </div>
        </section>
        <section id='about' className='info bg-dark p-3'>
          <div className='links'>
            <img src="/links/google.png" className="img-fluid" />
            <img src="/links/slack.png" className="img-fluid" />
            <img src="/links/atlassian.png" className="img-fluid" />
            <img src="/links/dropbox.png" className="img-fluid" />
            <img src="/links/shopify.png" className="img-fluid" />
          </div>
          <div className='maininfo p-3'>
            <div className='what row'>
              <div className='whattt col-12 col-md-6 text-white'>
                <h4>What is Harmoni<br /> Event</h4>
              </div>
              <div className='we col-12 col-md-6 text-white p-2'>
                <p>We so opinion Yet bed any htmlFor travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
              </div>
            </div>
            <div className='event row'>
              <div className='your col-12 col-md-6'>
                <h3>Your Events Will be Beyond your <br />imagination</h3>
              </div>
              <div className='explore col-12 col-md-6'>
                <p className='text-end'>
                  Explore the library
                </p>
              </div>
            </div>
            <div className='menus row'>
              <div className='dec1 col-12 col-md-4'>
                <span>Chatbots</span>
                <br />
                <p>We so opinion friend me maj as delight whole front do plate heard oh ought</p>
              </div>
              <div className='dec2 col-12 col-md-4'>
                <span>Knowledgebase</span>
                <br />
                <p>At jointure ladyship an insisted so humanity whole front do plate heard oh ought. As part impossible ow apartments b</p>
              </div>
              <div className='dec3 col-12 col-md-4'>
                <span>Education</span>
                <br />
                <p>We so opinion friend me maj as delight whole front do plate heard oh ought. As part impossible ow apartments b</p>
              </div>
            </div>
          </div>
          <div className='abouth row'>
            <div className='about1 col-12 col-md-4'>
              <h4>We so opinion Yet bed any htmlFor travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of....</h4>
              <p>request Early Access to Get Started</p>
            </div>
            <div className='about2 col-12 col-md-4'>
              <h3>Photography</h3>
              <h3>Cinematography or Videography service</h3>
              <h3>Full Venue Decoration Service</h3>
              <h3>Home decoration</h3>
            </div>
            <div className='about3 col-12 col-md-4'>
              <p>We so opinion friend me maj as delight whole front do b</p>
              <p>We so opinion friend me maj as delight whole front do plate heard oh</p>
              <p>We so opinion friend me maj as delight whole front do plate heard oh ought as part</p>
              <p>We so opinion friend me maj as delight whole front do plate heart impossible ow apartments b</p>
            </div>
          </div>
          <div className='getstarted1 rounded p-3'>
            <div className='request row'>
              <div className='req col-12 col-md-8 mb-3 mb-md-0'>
                <p className='mb-2 h5 h-md4'>Request Early Access to Get Started</p>
                <h3 className='h4 h-md-3'>Register Today & Start Exploring the Endless Possibilities.</h3>
              </div>
              <div className='getbtn col-12 col-md-4 d-flex justify-content-center align-items-center'>
                <button type="button" className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Home
