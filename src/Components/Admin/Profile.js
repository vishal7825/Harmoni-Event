import React, { useState } from 'react';
import './Profile.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ChangeDetails from './ChangeDetails';

function Profile() {

  const [fullname, setFname] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const formRef = React.createRef();
  const changedetails = async (event) => {
    event.preventDefault();
    const data = { fullname, email };

    await axios
      .post("http://localhost:3046/api/v1/admin/update", data)
      .then((res) => {
        console.log(res)
        alert("Details Update Successfully");
        formRef.current.reset();
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Admin />
      <div className='mycolor pt-3'>
        <div className='userlistpro bg-white'>
          <div className='colorwhitepro'>
          </div>
        </div>
        <div className='booton mt-2 mb-3'>
          <a href='/Profile'>
            <button className='text-white bg-black'>Personal Details</button>
          </a>
          <a href='/Profilemain'>
            <button className='text-white bg-black'>Change Password</button>
          </a>
        </div>
        <div className='userlistpro'>
          <div className='addeventt bg-white text-black'>
            <h3 className='pt-3'>Personal Details</h3>
            <form ref={formRef} className='row g-3'>
              <div className='col-md-4'>
                <label htmlFor='inputPassword4' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputtext'
                  placeholder='Event Management'
                  onChange={(event) => setFname(event.target.value)}
                />
              </div>
              <div className='col-md-4 mx-5'>
                <label htmlFor='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='name@example.com'
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='col-12 text-end'>
                <button className='btn btn-primary' onClick={changedetails}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
