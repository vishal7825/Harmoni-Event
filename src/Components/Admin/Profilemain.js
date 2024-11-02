import React, { useState } from 'react'
import './Profile.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profilemain() {
  const [password,setpassword]=useState();
  const [newpassword,setnewpassword]=useState()
  const navigate=useNavigate()
      
  const formRef = React.createRef();
  const changepass= async(event)=>{
    event.preventDefault();
    const data ={password,newpassword};

    await axios
    .post("http://localhost:3046/api/v1/admin/passwordchange", data)
    .then((res) => {
      console.log(res);
      alert("Password Change Succesfully")
      formRef.current.reset();
      
    })
    .catch((err) =>console.log(err))
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
          <a href='/profilemain'>
         <button className='text-white bg-black' > Change Password</button>
         </a>
        </div>
        <div className='userlistpro '>

          <div className='addeventt  bg-white text-black'>

            <h3 className='pt-3'>change Password</h3>
            <form ref={formRef} class="row g-3 ">
              <div class="col-md-3 mx-3">
                <label htmlFor="inputPassword4" class="form-label" onChange={(event)=>setpassword(event.target.value)}>Old Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-md-3 mx-3 ">
                <label htmlFor="inputPassword4" class="form-label" onChange={(event)=>setnewpassword(event.target.value)}>New Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-md-3 mx-3">
                <label htmlFor="inputPassword4" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>

              <div class="col-12 text-end">
                <button type="submit" class="btn btn-primary" onClick={changepass}>Change Password</button>
              </div>
            </form>
          </div>
        </div>

      </div>
   </>
  )
}

export default Profilemain