import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import createError from 'http-errors'
import Login from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import BrowseSurfboards from './pages/BrowseSurfboard';
import BookingPage from './pages/BookingPage';
import AccountPage from './pages/AccountPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/surfboards/all' element={<BrowseSurfboards/>}/>
        {/* <Route path='/auth/register' element={CreateAccount}/>
        <Route path='/auth/:id' element={AccountPage}/>
        
        <Route path='/bookings' element={BookingPage}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
