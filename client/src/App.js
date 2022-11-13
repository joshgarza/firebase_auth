import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import SignUp from './components/Signup';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [userInfo, setUserInfo] = useState();

  const getUserData = async (user) => {
    let userData = await axios.get(`/api/login/${user.firebaseId}`, {params: user});
    console.log(userData)
    setUserInfo(userData.data);
  };

  const createNewUser = async (user) => {
    let userDataPost = await axios.post(`/api/signup/${user.firebaseId}`, {params: user});
    if (userDataPost) {
      let userData = await axios.get(`/api/login/${user.firebaseId}`, {params: user});
      setUserInfo(userData.data);
    }
  };

  const clearUserInfo = () => {
    setUserInfo(null)
  }

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard getUserData={getUserData} clearUserInfo={clearUserInfo}/>} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>
          <Route path='/signup' element={<SignUp createNewUser={createNewUser}/>} />
          <Route path='/login' element={<Login getUserData={getUserData}/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;