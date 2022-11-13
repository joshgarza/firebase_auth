import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import React, { useEffect } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', {replace: true});
    }
  });

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;