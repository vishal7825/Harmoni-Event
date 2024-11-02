import React from 'react'
import HeaderUser from '../HeaderUser'
import './Account.css'
import 'font-awesome/css/font-awesome.min.css';


function Account() {
  return (
   <>
    <HeaderUser/>
    <main className='acdetails'>
        <div className='acdetails1 justify-content-center'>
            <h6 className='mainhead'>Account Details</h6>
            <hr/>
            <div className='link-container'>
            <a href='/'>Home</a>
            <a className='changep' href='changepass'>Change Password</a>
            </div>
            <div className='changeacd'>
                <h6>Change Account Details</h6>
            <img src="./images4.png" className="usericon2 justify-content-center align-items-center" alt="usericon" />
            <div className='changedt'>
            <div className='changedt-item'>
                    <a href="/changedetails"><i className="fa fa-fw fa-user"></i> user1 </a>
                    <a href="/changedetails" className='edit-icon'><i className="fa fa-fw fa-pencil"></i></a>
                </div>
                <div className='changedt-item'>
                    <a href="/changedetails"><i className="fa fa-fw fa-envelope"></i>123</a>
                    <a href="/changedetails" className='edit-icon'><i className="fa fa-fw fa-pencil"></i></a>
                </div>
                <div className='changedt-item'>
                    <a href="/changedetails"><i className="fa fa-fw fa-venus"></i> female</a>
                    <a href="/changedetails" className='edit-icon'><i className="fa fa-fw fa-pencil"></i></a>
                </div>
                <div className='changedt-item'>
                    <a href="/changedetails"><i className="fa fa-fw fa-id-card"></i> 7565756565</a>
                    <a href="/changedetails" className='edit-icon'><i className="fa fa-fw fa-pencil"></i></a>
                </div>
            </div>
            </div>
        </div>
    </main>
   </>
  )
}

export default Account
