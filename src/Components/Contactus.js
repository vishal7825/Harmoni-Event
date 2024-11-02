import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Contactus.css';
import Footer from './Footer';
import Header from './Header';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Contactus() {
    const [fullname, setfullname] = useState()
    const [email,setemail]=useState()
    const [mobile_no,setmno]=useState()
    const [message,setmassage]=useState()
    const navigate=useNavigate()

    const contact=async(event)=>{
        event.preventDefault()
        const data={fullname,email,mobile_no,message}

        await axios
        .post("http://localhost:3046/api/v1/contact/sendmessage", data)
        .then((res2) => {
            
          
            console.log(res2)
            alert("Message Sent Succesfully");
        })
        .catch((err) => console.log(err))
        
    }

    return (
        <>
            <Header />
            <main className="main">
                <section id="hero2" className="hero2">
                    <img src="/breadcrumb/0.breadcrumb-bg.jpg" className="img-fluid" alt="Hero Background" />
                    <div className="container">
                        <h6 className="center-content">
                            Contact us now
                        </h6>
                        <h3 className="d-flex justify-content-center align-items-center"> Keep <span> In touch</span></h3>
                        <div className="links d-flex justify-content-center align-items-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                                <li className="list-inline-item"><a href="/Contactus" className="text-white">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="company row">
                    <div className="companyimg col-12 col-md-6 mb-4 mb-md-0">
                        <div className="img-container">
                            <img src="/company-bg-2.jpg" className="img-fluid background-img" alt="bg Img" />
                        </div>
                    </div>
                    <div className="contactform col-12 col-md-6">
                        <form>
                            <h3 className="text-center">Contact Us</h3>
                            <div className="mb-4 text-center">
                                <input type="text"
                                onChange={(event)=>setfullname(event.target.value)}
                                className="form-control small-input" id="fname" name="fname" placeholder="Name*" required />
                            </div>
                            <div className="mb-4 text-center">

                                <input type="text" 
                                onChange={(event)=>setemail(event.target.value)}
                                className="form-control small-input" id="email" name="email" placeholder="Email*" required />
                            </div>
                            <div className="mb-4 text-center">

                                <input type="text" className="form-control small-input" id="country" name="country" placeholder="Country*" required />
                            </div>
                            <div className="mb-4 text-center">

                                <input type="text" 
                                onChange={(event)=>setmno(event.target.value)}
                                className="form-control small-input" id="phn" name="phn" placeholder="Phone Number*" required />
                            </div>
                            <div className="mb-4 text-center">
                                <input type="text" 
                                onChange={(event)=>setmassage(event.target.value)}
                                className="form-control small-input" id="pass" name="pass" placeholder="Massage*" required />
                            </div>
                            <div className="mb-4 text-center">
                                <button type="submit" className="btn btn-primary" onClick={contact}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='maps'>
                    <div className='heading'>
                        <h3 className='text-center'>Your Location</h3>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842400278!2d72.41492542452876!3d23.02047410440972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721372707025!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contactus
