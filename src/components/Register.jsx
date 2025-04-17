import React, { useState } from 'react';
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("JOB_SEEKER");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8081/auth/register", {
        email,
        password,
        role,
      });
      console.log("Registered! Token:", response.data.token);
      // You could store token or redirect here
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="JOB_SEEKER">Job Seeker</option>
        <option value="EMPLOYER">Employer</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;