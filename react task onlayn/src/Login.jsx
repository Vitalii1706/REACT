import React from 'react';

// in: func
// out: JSX

const Login = props => (
  <button className="login btn" onClick={props.onLogin}>
    Login
  </button>
);

export default Login;
