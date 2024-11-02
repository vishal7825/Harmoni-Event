import React, { useState } from 'react';
import './Admin.css';
import 'font-awesome/css/font-awesome.min.css';

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="mainn bg-primary p-3 d-flex justify-content-between align-items-center">
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </button>
        <span className='p-2'>admin</span>
        <div>
          <a href='/Profile'>
            <img className='adminicon' src='/adminpfp.png' alt='Admin Icon' />
          </a>
          <span>Event Management</span>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'} bg-white text-black`}>
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          <i className="fa fa-close"></i>
        </button>
        <hr />
        <a href="/Alluser"><i className="fa fa-fw fa-list"></i> User List</a>
        <a href="/Addevent"><i className="fa fa-fw fa-calendar"></i> Event Post</a>
        <a href="/Bookevent"><i className="fa fa-fw fa-bookmark"></i> Book Event</a>
        <a href="/Bookevent"><i className="fa fa-fw fa-plus"></i> Post Category</a>
        <hr />
        <p className='text-center'>Authentication</p>
        <a href="/Admin"><i className="fa fa-fw fa-arrow-right"></i> Logout</a>
      </div>
    </>
  );
}

export default Admin;
