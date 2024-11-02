import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Header.js'
import Footer from './Footer';
import Header from './Header.js';

function Gallery() {
    return (
        <>
        <Header/>
            <main className="main">
                <section id="hero2" className="hero2">
                    <img src="/breadcrumb/0.breadcrumb-bg.jpg" className="img-fluid" alt="Hero Background" />
                    <div className="container ">
                        <h6 className="center-content">
                            Harmoni Events
                        </h6>
                        <h3 className="d-flex justify-content-center align-items-center">Harmoni</h3>
                        <h2 className="d-flex justify-content-center align-items-center">Gallery</h2>
                        <div className="links d-flex justify-content-center align-items-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                                <li className="list-inline-item"><a href="/Gallery" className="text-white">Harmoni Gallery</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className='heading'>
                    <h3 className='text-center'>Our Gallery</h3>
                </div>
                <div className="gallery row row-cols-1 row-cols-md-2">
                    <div className="pic1 col ">
                        <div className="card ">
                            <img src="/gallery/1.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/2.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/3.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/4.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/5.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/6.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/7.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                    <div className="pic1 col">
                        <div className="card">
                            <img src="/gallery/8.image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hii There</h5>
                                <p className="card-text">shello there</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='maps1'>
                    <div className='heading2'>
                        <h3 className='text-center'>Your Location</h3>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842400278!2d72.41492542452876!3d23.02047410440972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721372707025!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <section id="hero3" className="hero3">
                    <img src="/special-offer-bg.png" className="pic2 img-fluid" alt="Hero Background" />
                    <div className="container">
                        <div className='boffer'>
                        <h4 className="d-flex justify-content-center align-items-center">30%Off In June~July htmlFor Birthday Events  </h4>
                        </div>
                        <div className='boffbtn'>
                        <div className='makebtn  d-flex justify-content-center align-items-center'>
                <button type="button" className="btn btn-primary">Make an event now</button>
              </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Gallery
