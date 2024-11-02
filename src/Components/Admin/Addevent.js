import React, { useState } from 'react';
import './Addevent.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

function Addevent() {

    const [title,settitle]=useState();
    const [s_date,sets_date]=useState();
    const [e_date,sete_date]=useState();
    const [s_time,sets_time]=useState();
    const [e_time,sete_time]=useState();
    const navigate =useNavigate();

    const formRef = React.createRef();

    const addevent =async(event)=>{
      event.preventDefault();
    const data={title,s_date,e_date,s_time,e_time}

    await axios
    .post("http://localhost:3046/api/v1/admin/addevent", data)
    .then((res)=>{
      console.log(res)
      alert("Event Added Successfully")
      formRef.current.reset();

    })
    .catch((err)=>console.log(err))
    }
      return (
    <>
      <Admin />   
      <div className='userlist'>
        <div className='colorwhite'>
          <div className='addevent text-center bg-white text-black'>
            <h3 className='pt-2'>Post Event</h3>
            <form ref={formRef} className='eventforms'>
              <div className="col-sm-6 mx-auto">
                <div className="mb-1">
                  <input className="form-control bg-primary text-white p-2" type="file" id="formFileMultiple" multiple />
                </div>
                <div className="col mb-1">
                  <input type="text"
                  onChange={(event)=>settitle(event.target.value)}
                  className="form-control" placeholder="Title*" aria-label="Title*" />
                </div>
                <div className="col mb-1">
                  <input type="date" 
                  onChange={(event)=>sets_date(event.target.value)}
                  className="form-control" name="date" />
                </div>
                <div className="col mb-1">
                  <input type="date"
                  onChange={(event)=>sete_date(event.target.value)}
                  className="form-control" name="date" />
                </div>
                <div className="col mb-1">
                  <input type="time"
                  onChange={(event)=>sets_time(event.target.value)}
                  className="form-control" name="time" />
                </div>
                <div className="col mb-1">
                  <input type="time"
                  onChange={(event)=>sete_time(event.target.value)}
                  className="form-control" name="time" />
                </div>
                <div className="col mb-1">
                  <input type="text" className="form-control" placeholder="Price" aria-label="Price*" />
                </div>
                <select className="form-select mb-1" id="specificSizeSelect">
                  <option selected>Select Category</option>
                  <option value="1">Party</option>
                  <option value="2">Navratri</option>
                  <option value="3">Birthday</option>
                  <option value="2">Music</option>
                  <option value="3">Standup Comedy</option>
                </select>
                <div className="col mb-1">
                  <input type="text" className="form-control" placeholder="Location*" aria-label="Location*" />
                </div>
                <div className="mb-1">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description'></textarea>
                </div>
                <div className="">
                  <button onClick={addevent} className="btn btn-primary form-control">POST</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addevent;
