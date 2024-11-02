import React from 'react';
import './Bookevent.css';
import Admin from './Admin';

function Bookevent() {
  const images = [
    '/event/event-3.jpg',
    '/event/event-1.jpg',
    '/event/2.hall.png',
    '/event/event-4.jpg',
    '/event/1.hall.png',
  ];

  return (
    <>
      <Admin />
      <div className='userlist'>
        <div className='colorwhite'>
          <div className='addevent text-center bg-white text-black'>
            <h3 className='pt-3'>Post Category</h3>
            <form className='eventforms'>
              <div className="col-sm-6 mx-auto">
                <div className="mb-3 bg-primary">
                  <input className="form-control bg-primary text-white p-2" type="file" id="formFileMultiple" multiple />
                </div>
                <div className="col mb-3">
                  <input type="text" className="form-control" placeholder="Category Name*" aria-label="Title*" />
                </div>
                <div className="">
                  <button type="submit" className="btn btn-primary form-control mb-5">POST</button>
                </div>
              </div>
            </form>
          </div>
          <table className='alluser bg-white text-black'>
            <thead>
              <tr className='userheader'>
                <th>No</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'Party', image: images[0] },
                { id: 2, name: 'Navratry', image: images[1] },
                { id: 3, name: 'Standup Comedy', image: images[2] },
                { id: 4, name: 'Music', image: images[3] },
                { id: 5, name: 'Standup Comedy', image: images[4] },
              ].map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className='icon'>
                    <img className='adminicon' src={user.image} alt='Profile' />
                  </td>
                  <td>{user.name}</td>
                  <td className='icon'>
                    <i className="fa fa-fw fa-clipboard"></i>
                    <i className="fa fa-fw fa-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bookevent;
