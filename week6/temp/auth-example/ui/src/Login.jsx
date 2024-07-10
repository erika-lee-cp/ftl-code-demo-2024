import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // This needs to be a full page reload to navigate to the GitHub OAuth page
    window.location.href = "http://localhost:3000/auth/github";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log in with GitHub</button>
    </div>
  );
};

export default Login;
