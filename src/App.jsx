import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import BrowseSurfboards from './pages/BrowseSurfboard';
import BookingPage from './pages/BookingPage';
import AccountPage from './pages/AccountPage';

const App = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={LoginPage}/>
      <Route path='/auth/register' element={CreateAccount}/>
      <Route path='/auth/:id' element={AccountPage}/>
      <Route path='/surfboards' element={BrowseSurfboards}/>
      <Route path='/bookings' element={BookingPage}/>
    </Routes>
  )
}

export default App;
