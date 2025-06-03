import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, { email, password });
    alert('Signup successful');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button type='submit'>Sign Up</button>
    </form>
  );
}

export default Signup;