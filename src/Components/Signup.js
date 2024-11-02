import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Signup.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [fullName, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile_no, setphno] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const register = async (event) => {
        event.preventDefault()
        const data = { fullName, email, mobile_no, password }

        await axios
            .post("http://localhost:3046/api/v1/users/register", data)
            .then((res1) => {
                if (res1.data.success) { // Check if the API response indicates success
                    alert("Registration Successfully");
                    navigate('/Signin'); // redirect to login page if registration is successful
                } else {
                    alert("Registration failed. Please try again.");
                }
            })
            .catch((err) => {
                alert("Error: " + err.message);
            })
    }

    return (
        <>
            <Header />
            <main className="main">
                <div className="company2 row">
                    <div className="companyimg2 col-12 col-md-6 mb-4 mb-md-0">
                        <div className="img2-container">
                            <img src="/company-bg-2.jpg" className="img-fluid background-img2" alt="bg Img" />
                        </div>
                    </div>
                    <div className="signupform col-12 col-md-6">
                        <form>
                            <h3 className="text-center">Sign Up</h3>
                            <div className="mb-4 text-center">
                                <input type="text"
                                    onChange={(event) => setname(event.target.value)}
                                    className="form-control small-input" id="fname" name="fname" placeholder="Name*" required />
                            </div>
                            <div className="mb-4 text-center">

                                <input type="text"
                                    onChange={(event) => setemail(event.target.value)}
                                    className="form-control small-input" id="email" name="email" placeholder="Email*" required />
                            </div>
                            <div className="rdobtn  text-center ">

                                <li><input type="radio" className="radiobtn" id="male" name="rdo" required /><label>Male</label></li>
                                <li><input type="radio" className="radiobtn" id="female" name="rdo" required /><label>Female</label></li>
                                <li><input type="radio" className="radiobtn" id="other" name="rdo" required /><label>Other</label></li>

                            </div>
                          
                            <div className="mb-4 text-center">

                                <input type="text"
                                    onChange={(event) => setphno(event.target.value)}
                                    className="form-control small-input" id="phn" name="phn" placeholder="Phone Number*" required />
                            </div>
                            <div className="mb-4 text-center">
                                <input type="password"
                                    onChange={(event) => setpassword(event.target.value)}
                                    className="form-control small-input" id="pass" name="pass" autoComplete="new-password" placeholder="Password*" required />
                            </div>
                            <div className="mb-4 text-center">
                                <input type="password" className="form-control small-input" id="conpass" name="conpass" placeholder="Confirm Password*" required />
                            </div>
                            <div className="col-10 mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remamber Me</label>
                            </div>
                            <div className="mb-4 text-center">
                                <button  onClick={register} className="btn btn-primary" >Send</button>
                            </div>
                            <div className='alrdy'>
                                <li>
                                    <p className='que1'>Already have an account ?</p>
                                </li>
                                <li className="options">
                                    <a className="option3" href="/Signin">Sign In</a>
                                </li>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Signup;