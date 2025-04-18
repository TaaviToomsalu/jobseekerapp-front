import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("seeker@test.com");
    const [password, setPassword] = useState("test1234");
  
    const handleLogin = async () => {
      try {
        const response = await axios.post("http://localhost:8081/auth/login", {
          email,
          password,
        });

        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("Log in succesful!", "Token:", response.data.token);
        window.location.reload();
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    );
  };
  
  export default Login;