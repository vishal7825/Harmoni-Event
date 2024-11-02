import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './PerEvent.css';

function PerEvent() {
  return (
   <>
   <Header/>
    <main className="main">
                <section id="herop" className="herop">
                    <img src="/slider/slider-bg-8.jpg" className="img-fluid" alt="Hero Background" />
                    </section>
                    <section className='bg-light text-black'>
                        <div className='details'>
                        <h3>Birthday</h3>
                        <p>abc | Hindi | 12yrs+ | 18:45-15:50</p>
                        <hr/>
                        <p>2024-02-03 2024-02-16   |  Surat | ₹200 onwards</p>
                        </div>
                    </section>
                    </main>
                    <Footer/>
   </>
  )
}

export default PerEvent
