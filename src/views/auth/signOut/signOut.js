// src/views/auth/signOut/SignOut.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useAuth } from 'contexts/AuthContext';
import { useAuth } from 'context/AuthContext';

const SignOut = () => {
  const history = useHistory();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    history.push('/auth/sign-in');
  }, [logout, history]);

  return null;
};

export default SignOut;
