import React, { useState } from 'react';
import { signIn, signUp } from '../services/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginScreen;