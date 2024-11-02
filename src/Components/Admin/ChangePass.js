import React from 'react'
import HeaderUser from '../HeaderUser'

function ChangePass() {
  return (
   
   <>
   <HeaderUser/>
   <main className="main">
                <div className="company2 row">
                    <div className="companyimg2 col-12 col-md-6 mb-4 mb-md-0">
                        <div className="img2-container">
                            <img src="/company-bg-5.jpg" className="img-fluid background-img2" alt="bg Img" />
                        </div>
                    </div>
                    <div className="signupform col-12 col-md-6">
                        <form action="/submit-form" method="post">
                            <h3 className="text-center">Change Password</h3>
                            <div className="mb-4 text-center">
                                <input type="text" className="form-control small-input" id="fname" name="fname" placeholder="Current Password *" required />
                            </div>
                            
                            <div className="mb-4 text-center">

                                <input type="tel" className="form-control small-input" id="phn" name="phn" placeholder="New Password *" required />
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

export default ChangePass
