import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function Footer() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAdmin(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <footer className="faab-footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} FAAB • Filipino Apostolate of the Archdiocese of Boston
        </p>

        {/* Centered horizontal admin controls */}
        <div className="login-prompt" role="group" aria-label="Admin controls">
          {isAdmin ? (
            <>
              <span>Admin logged in</span>
              <button className="btn btn-primary" onClick={handleLogout} style={{ marginLeft: ".5rem" }}>
                Log out
              </button>
            </>
          ) : (
            <>
              <span>Admin?</span>
              <Link to="/login" className="btn btn-primary" style={{ marginLeft: ".5rem" }}>
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}