import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";

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
      const token = localStorage.getItem("access_token");
      if (token) setIsAdmin(true);
    }, []);

  return (
    <div>
      <div>Footer</div>
      <Login />
      {isAdmin && <button onClick={handleLogout}>Log Out</button>}
    </div>
  )
}

export default Footer