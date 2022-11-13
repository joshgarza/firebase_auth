import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({ createNewUser }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [userType, setUserType] = useState('Client');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      let user = await signup(emailRef.current.value, passwordRef.current.value, userType);


      navigate('/');
      createNewUser(user);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const handleChange = (event) => {
    setUserType(event.target.value)
  }

  return (
    <div className="login-container">
      <h2 className="login-title">SignUp</h2>
      {error && console.log('error', {error})}
      <form className="login-form" onSubmit={onSubmit}>
        <div className="usertype-container">
          <label className="usertype-label">
            User type
          </label>
          <select className="usertype-select" onChange={handleChange}>
            <option className="usertype-option" value="Client">Client</option>
            <option className="usertype-option" value="Coach">Coach</option>
          </select>
        </div>
        <label className="input-label-hidden">
          Email:
        </label>
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="email"
          className="login-email-input input-field"
        />
        <label className="input-label-hidden">
          Password:
        </label>
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="password"
          className="login-password-input input-field"
        />
        <label className="input-label-hidden">
          Password Confirmation:
        </label>
        <input
          type="password"
          ref={passwordConfirmRef}
          required
          placeholder="confirm password"
          className="login-password-input input-field"
        />
        <button className="login-button btn" disabled={loading} type="submit">Sign up</button>
      </form>
      <div className="signup-link-div">
        Already have an account? <Link className="signup-link" to='/login'>Log in</Link>
      </div>
    </div>
  );
};

export default SignUp;