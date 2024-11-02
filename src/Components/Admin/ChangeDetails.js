import React from 'react'
import HeaderUser from '../HeaderUser'

function ChangeDetails() {
  return (
    <>
      <HeaderUser/>
      <main className="main">
                <div className="company2 row">
                    <div className="companyimg2 col-12 col-md-6 mb-4 mb-md-0">
                        <div className="img2-container">
                            <img src="/company-bg-4.jpg" className="img-fluid background-img2" alt="bg Img" />
                        </div>
                    </div>
                    <div className="signupform col-12 col-md-6">
                        <form action="/submit-form" method="post">
                            <h3 className="text-center">Change User Details</h3>
                            <div className="mb-4 text-center">
                                <input type="text" className="form-control small-input" id="fname" name="fname" placeholder="Name*" required />
                            </div>
                            <div className="mb-4 text-center">

                                <input type="email" className="form-control small-input" id="email" name="email" placeholder="Email*" required />
                            </div>
                            <div className="rdobtn  text-center ">
                               
                                <li><input type="radio" className="radiobtn" id="male" name="rdo"  required /><label>Male</label></li>
                                <li><input type="radio" className="radiobtn" id="male" name="rdo"  required /><label>Female</label></li>
                                <li><input type="radio" className="radiobtn" id="male" name="rdo"  required /><label>Other</label></li>
                              
                            </div>
                            
                            <div className="mb-4 text-center">

                                <input type="text" className="form-control small-input" id="phn" name="phn" placeholder="Phone Number*" required />
                            </div>
                           
                            <div className="col-10 mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" htmlFor="exampleCheck1">Remamber Me</label>
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="btn btn-primary">Change</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </main>
      </>
  )
}

export default ChangeDetails
