//import { useNavigate } from 'react-router-dom';
import React from 'react';

const LogoutButton = ({ setToken }) => {
    //const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("token");
      console.log("Logged out");
      setToken(null)
      
    };
  
    return (
      <button onClick={handleLogout}>
        Log out
      </button>
    );
  };
  
  export default LogoutButton;