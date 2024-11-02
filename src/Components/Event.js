import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Event.css';
import Header from './Header';
import Footer from './Footer';

function Event() {
    return (
        <>
            <Header />
            <main className="main">
                <section id="hero4" className="hero4">
                    <img src="/breadcrumb/0.breadcrumb-bg.jpg" className="img-fluid" alt="Hero Background" />
                    <div className="container">
                        <h6 className="center-content">
                            Harmoni Events
                        </h6>
                        <h3 className="d-flex justify-content-center align-items-center">Harmoni</h3>
                        <h2 className="d-flex justify-content-center align-items-center">Events</h2>
                        <div className="links d-flex justify-content-center align-items-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                                <li className="list-inline-item"><a href="/Event" className="text-white">Harmoni Events</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="row g-1">
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/6.event-grid.jpg" className="card-img-top" alt="Navratri" /></a>
                           
                                <p className='text-center'>Navratri</p>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/5.event-grid.jpg" className="card-img-top" alt="Party" /></a>
                           
                                <p className='text-center'>Party</p>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/4.event-grid.jpg" className="card-img-top" alt="Birthday" /></a>
                           
                                <p className='text-center'>Birthday</p>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/3.event-grid.jpg" className="card-img-top" alt="StandUpComedy" /></a>
                            
                                <p className='text-center'>StandUpComedy</p>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/7.event-grid.jpg" className="card-img-top" alt="
                        Wedding" /></a>
                                <p className='text-center'>Wedding</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 g-1">
                        <div className="p-1 border bg-dark">
                        <a href="/Events"><img src="/event/8.event-grid.jpg" className="card-img-top" alt="singing" /></a>
                                <p className='text-center'>Singing</p>
                        </div>
                    </div>
                </div>


            </main>~!
            <Footer />
        </>
    );
}

export default Event
