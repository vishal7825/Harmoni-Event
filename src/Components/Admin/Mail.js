import React, { useState } from 'react';

const Mail = () => {
  
  const [users, setUsers] = useState([
    { fullname: "demo", email: "user1@gmail.com", password: "123" },
    { fullname: "demo1", email: "user2@gmail.com", password: "123" },
    { fullname: "demo2", email: "user3@gmail.com", password: "123" },
    { fullname: "demo3", email: "user4@gmail.com", password: "123" },
    { fullname: "demo4", email: "user5@gmail.com", password: "123" },
  ]);

  return (
    <div className='userlist'>
      <div className='colorwhite'>
        <table className='alluser  bg-white text-black'>
          <thead>
            <tr className='userheader'>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.fullname}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mail;
