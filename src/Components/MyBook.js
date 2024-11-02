import React from 'react'
import HeaderUser from './HeaderUser'
import './Mybook.css';

function MyBook() {
  return (
    <>
   <HeaderUser/>
   <main className='mybook'>
   <div className="row bg-light">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card g-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="paytm.png" className="img-fluid rounded-start" alt="Image description" />
          <button type="button" className="btn btn-primary">Download</button>
        </div>
        <div className="col-md-8">
          <div className="card-body bg-light-subtle">

            <div className="row">
              <div className="col-6 text-black"><strong>Ticket ID:</strong> 123456</div>
              <div className="col-6 text-black"><strong>Date & Time:</strong> 2024-08-07 18:00</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Location:</strong> City Center</div>
              <div className="col-6 text-black"><strong>Booking Date:</strong> 2024-08-01</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Price:</strong> ₹100</div>
              <div className="col-6 text-black"><strong>Title:</strong> Concert Event</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
  
  <div className="col-sm-6">
    <div className="card g-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="paytm.png" className="img-fluid rounded-start" alt="Image description" />
          <button type="button" className="btn btn-primary">Download</button>
        </div>
        <div className="col-md-8">
          <div className="card-body bg-light-subtle">

            <div className="row">
              <div className="col-6 text-black"><strong>Ticket ID:</strong> 123457</div>
              <div className="col-6 text-black"><strong>Date & Time:</strong> 2024-08-08 19:00</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Location:</strong> Downtown</div>
              <div className="col-6 text-black"><strong>Booking Date:</strong> 2024-08-02</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Price:</strong> ₹120</div>
              <div className="col-6 text-black"><strong>Title:</strong> Sports Event</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card g-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="paytm.png" className="img-fluid rounded-start" alt="Image description" />
          <button type="button" className="btn btn-primary">Download</button>
        </div>
        <div className="col-md-8">
          <div className="card-body bg-light-subtle">

            <div className="row">
              <div className="col-6 text-black"><strong>Ticket ID:</strong> 123458</div>
              <div className="col-6 text-black"><strong>Date & Time:</strong> 2024-08-08 22:00</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Location:</strong> Downtown</div>
              <div className="col-6 text-black"><strong>Booking Date:</strong> 2024-08-02</div>
            </div>
            <div className="row">
              <div className="col-6 text-black"><strong>Price:</strong> ₹120</div>
              <div className="col-6 text-black"><strong>Title:</strong> Sports Event</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
   </>
  )
}

export default MyBook
