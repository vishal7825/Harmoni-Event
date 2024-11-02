import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Signin.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const [mobile_no, setphno] = useState();
  const [password, setpassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    const data = { mobile_no, password };

    await axios
      .post("http://localhost:3046/api/v1/users/login", data)
      .then((res) => {
        if (res.data.success) { // Check if the API response indicates success
          console.log(res);
          alert("Login Succesfully");
          setIsLoggedIn(true);
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error logging in");
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // redirect to homepage if login is successful
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="companybg row">
          <div className="companyimg1 col-12 col-md-6 mb-4 mb-md-0">
            <div className="img1-container">
              <img src="/company-age-bg.jpg" className="img-fluid background-img1" alt="bg Img" />
            </div>
          </div>
          <div className="signinform col-12 col-md-6">
            <form>
              <h3 className="text-center">Sign in</h3>

              <div className="mb-4 text-center">
                <input
                  type="text"
                  onChange={(event) => setphno(event.target.value)}
                  className="form-control small-input"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>

              <div className="mb-4 text-center">
                <input
                  type="password"
                  onChange={(event) => setpassword(event.target.value)}
                  className="form-control small-input"
                  id="pass"
                  name="pass"
                  placeholder="Password*"
                  required
                />
              </div>
              <div className="col-10 mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remamber Me</label>
              </div>
              <div className="mb-4 text-center">
                <button className="btn btn-primary" onClick={login}>Send</button>
              </div>
              <div className='forget'>
                <li className="option">
                  <a className="option1" href="#">Forgot Password ?</a>
                </li>
                <li>
                  <p className='que'>Don't have an account ?</p>
                </li>
                <li className="option">
                  <a className="option2" href="/Signup">Sign Up</a>
                </li>
                <p className='cr d-flex justify-content-center align-items-center'>Copyright &copy; Your Website 2023.</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Signin;