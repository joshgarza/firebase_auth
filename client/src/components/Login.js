import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ getUserData }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setError('');
      setLoading(true);
      const user = await login(emailRef.current.value, passwordRef.current.value);
      if (user) {
        navigate('/');
        getUserData(user);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log in</h2>
      {error && console.log('error', {error})}
      <form className="login-form" onSubmit={onSubmit}>
        <label className="login-email-label input-label-hidden">
          Email:
        </label>
        <input
          type="email"
          ref={emailRef}
          placeholder="email"
          className="login-email-input input-field"
        />
        <label className="login-password-label input-label-hidden">
          Password:
        </label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="password"
          className="login-password-input input-field"
        />
        <button className="login-button btn" disabled={loading} type="submit">Log in</button>
      </form>
      <div className="forgot-password-div">
        <Link className="forgot-password-link" to='/forgot-password'>Forgot password?</Link>
      </div>
      <div className="signup-link-div">
        Need an account? <Link className="signup-link" to='/signup'>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;

