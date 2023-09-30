import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

const formStyle = {
  maxWidth: '300px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  fontSize: '16px',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  fontSize: '18px',
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  width: '100%',
  cursor: 'pointer',
};
export const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
    const handleSignIn = () => {
        // Perform authentication logic here...
    
        // If authentication is successful, navigate to the main page
        navigate("/");
      };
    return (
      <div style={formStyle}>
      <h2>Login</h2>
      <label style={labelStyle}>Email address:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <label style={labelStyle}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>
        <a href="!#" style={{ fontSize: '14px' }}>Forgot password?</a>
      </div>

      <button onClick={handleSignIn} style={buttonStyle}>Sign in</button>

      <div style={{ marginTop: '10px' }}>
        <p>
          Not a member? <a href="#!" style={{ color: '#007bff' }}>Register</a>
        </p>
        <p>or sign up with:</p>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ color: '#1266f1' }}>Facebook</button>
          <button style={{ color: '#1da1f2' }}>Twitter</button>
          <button style={{ color: '#ea4335' }}>Google</button>
          <button style={{ color: '#333' }}>GitHub</button>
        </div>
      </div>
    </div>
  );
  }

