import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value))
    }

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate('/')
      })
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {currentUser &&
        <>
          <h2>Update Profile</h2>
          {error && console.log('error', {error})}
          <form onSubmit={onSubmit}>
            <label>
              Email:
              <input
                type="email"
                ref={emailRef}
                defaultValue={currentUser.email}
                placeholder={currentUser.email}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </label>
            <label>
              Password Confirmation:
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </label>
            <button disabled={loading} type="submit">Update Profile</button>
          </form>
          <div>
            <Link to='/'>Cancel</Link>
          </div>
        </>
      }
    </>
  )
}

export default UpdateProfile;