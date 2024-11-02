import React from 'react';
import Admin from './Admin';
import './Alluser.css';

function Alluser() {
  return (
    <>
      <Admin />
      <div className='userlist'>
        <div className='colorwhite'>
          <table className='alluser bg-white text-black'>
            <thead>
              <tr className='userheader'>
                <th>No</th>
                <th>Profile</th>
                <th className='d-none d-md-table-cell'>Name</th>
                <th>Email</th>
                <th className='d-none d-md-table-cell'>Gender</th>
                <th className='d-none d-md-table-cell'>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'Prince', email: 'p@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 2, name: 'use1', email: 'user@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 3, name: 'Aditya', email: 'aditya87@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 4, name: 'Mann', email: 'mannn5678@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 5, name: 'Prince Patel', email: 'pp07@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 6, name: 'User1', email: 'user@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 7, name: 'Prince Khant', email: 'pk56@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 8, name: 'Krishna', email: 'krishna2627@gmail.com', gender: 'female', phone: '1234567890' },
                { id: 9, name: 'Prince Chaudhary', email: 'pc@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 10, name: 'Rutvik', email: 'rutvik4092@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 11, name: 'Hello', email: 'hgelloworld@gmail.com', gender: 'male', phone: '1234567890' },
                { id: 12, name: 'Rutvik Patel', email: 'rp18@gmail.com', gender: 'male', phone: '1234567890' },
              ].map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className='icon'>
                    <img className='adminicon' src='/images1.png' alt='Profile' />
                  </td>
                  <td className='d-none d-md-table-cell'>{user.name}</td>
                  <td>{user.email}</td>
                  <td className='d-none d-md-table-cell'>{user.gender}</td>
                  <td className='d-none d-md-table-cell'>{user.phone}</td>
                  <td><button className='btn-unblock'>unblock</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Alluser;
