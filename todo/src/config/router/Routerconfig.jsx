// Routerconfig.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../screens/login/Login';
import Home from '../../screens/home/Home';
import Register from '../../screens/register/Register';
import Navbar from '../../components/navbar';

const Routerconfig = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routerconfig;