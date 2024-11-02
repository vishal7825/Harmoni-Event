import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from './Components/About';
import Contactus from './Components/Contactus';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Gallery from './Components/Gallery';
import Event from './Components/Event';
import Events from './Components/Events';
import PerEvent from './Components/PerEvent';
import Admin from './Components/Admin/Admin';
import Adminlogin from './Components/Admin/Adminlogin';
import Alluser from './Components/Admin/Alluser';
import Addevent from './Components/Admin/Addevent';
import Bookevent from './Components/Admin/Bookevent';
import Profile from './Components/Admin/Profile';
import Profilemain from './Components/Admin/Profilemain';
import Account from './Components/Admin/Account';
import HeaderUser from './Components/HeaderUser';
import ChangeDetails from './Components/Admin/ChangeDetails';
import ChangePass from './Components/Admin/ChangePass';
import MyBook from './Components/MyBook';
import Mail from './Components/Admin/Mail';


function app() {
  return (
    <>
   
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Event' element={<Event/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Events' element={<Events/>}></Route>
        <Route path='/PerEvent' element={<PerEvent/>}></Route>
        <Route path='/Admin' element={<Adminlogin/>}></Route>
        <Route path='/Adminlogin' element={<Admin/>}></Route>
        <Route path='/Alluser' element={<Alluser/>}></Route>
        <Route path='/Addevent' element={<Addevent/>}></Route>
        <Route path='/BookEvent' element={<Bookevent/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='Profilemain' element={<Profilemain/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/headeruser' element={<HeaderUser/>}></Route>
        <Route path='/changedetails' element={<ChangeDetails/>}></Route>
        <Route path='/changepass' element={<ChangePass/>}></Route>
        <Route path='/mybooking' element={<MyBook/>}></Route>
        <Route path='/mail' element={<Mail/>}></Route> 
              </Routes>
    
   
    </>
  );
}

export default app;