import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/users/Login';
import Profile from './components/users/Profile';
import Register from './components/users/Register';
import { getUserInfo } from './redux/users/user.action';

const App = () => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} /> 
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/profile" element={<Profile />} />
        <Route path="/users/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
    </Fragment>
  )
}

export default App