

// // src/Navbar.js
// import React, { useState } from 'react';
// import "../App.css";  // Assuming you have a CSS file for styles
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const handleToggle = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <a href="/">My Website</a>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="navbar-toggle" onClick={handleToggle}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>

//         {/* Links */}
//         <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/services">Services</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>

//         {/* Login and Register Buttons */}
//         <div className="navbar-auth">
//           <Link to="/login" className="navbar-btn">Login</Link>
//           <Link to="/register" className="navbar-btn">Register</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









// src/Navbar.js
import React, { useState } from 'react';
import "../App.css"; // Assuming you have a CSS file for styles
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  // Check if the user is logged in by looking for a token in localStorage
  const token = localStorage.getItem("token");

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleLogout = () => {
    // Remove token from localStorage and redirect to login page
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Best <span>Netflix</span> Series </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        {/* Login, Register, and Logout Buttons */}
        <div className="navbar-auth">
          {token ? (
            // If the user is logged in, show the Logout button
            <button onClick={handleLogout} className="navbar-btn">
              Logout
            </button>
          ) : (
            // If the user is not logged in, show the Login and Register buttons
            <>
              <Link to="/login" className="navbar-btn">Login</Link>
              <Link to="/register" className="navbar-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
