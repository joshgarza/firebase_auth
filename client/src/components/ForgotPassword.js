import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions')
    } catch(err){
      setError(err)
    }
    setLoading(false);
  }

  return (
    <>
      <h2>Password Reset</h2>
      {error && console.log('error', {error})}
      {message && console.log('success', {message})}
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
          />
        </label>
        <button disabled={loading} type="submit">Reset Password</button>
      </form>
      <div>
        Have an account? <Link to='/login'>Log in</Link>
      </div>
      <div>
        Need an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  )
}

export default ForgotPassword;