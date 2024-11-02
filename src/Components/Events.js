import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Events() {
  return (
    <>
      <Header />
      <main className="main  bg-light">
        <section id="hero4" className="hero4">
          <img src="/breadcrumb/0.breadcrumb-bg.jpg" className="img-fluid" alt="Hero Background" />
          <div className="container text-center">
            <h6>Harmoni Events</h6>
            <h3>Harmoni</h3>
            <h2>Events</h2>
          </div>
        </section>

        <div className="event1 container mt-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card p-2 mb-4">
                <a href="/PerEvent"><img src="/slider/slider-bg5.jpg" className="card-img-top" alt="Event 1" /></a>
                <div className="card-body">
                  <h5 className="card-title">Event 1</h5>
                  <p className="card-text">Surat</p>
                  <p className="card-text">₹ 200 onwards</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card p-2 mb-4">
                <a href="/PerEvent"><img src="/slider/slider-bg6.jpg" className="card-img-top" alt="Event 2" /></a>
                <div className="card-body">
                  <h5 className="card-title">Event 2</h5>
                  <p className="card-text">Ahemdabad</p>
                  <p className="card-text">₹ 300 onwards</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 5 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card p-2 mb-4">
                <a href="/PerEvent"><img src="/slider/slider-bg7.jpg" className="card-img-top" alt="Event 3" /></a>
                <div className="card-body">
                  <h5 className="card-title">Event 3</h5>
                  <p className="card-text">Rajkot</p>
                  <p className="card-text">₹ 250 onwards</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 8 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Events
