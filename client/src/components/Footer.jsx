import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAdmin(false)
    navigate("/")
  };

  useEffect(() => {

    const checkAuthStatus = () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    checkAuthStatus();

    // Listen for changes in localStorage
    const storageListener = () => {
      checkAuthStatus()
    };
    window.addEventListener('storage', storageListener);

    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }); // remove [] dependency so this is ran every component re-renders 
    

  return (
    <div className="bg-light">
      {!isAdmin ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
}

export default Footer