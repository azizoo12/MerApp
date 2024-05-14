import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Redirect to the main Taskify app upon successful login
        history.push('/taskify');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };
  ;

  return (
    <div className='container'>
      <header>
        <h1>Taskify Authentication</h1>
      </header>
      <form className='auth-form' onSubmit={handleLogin}>
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-block' />
      </form>
    </div>
  );
};

export default AuthPage;
