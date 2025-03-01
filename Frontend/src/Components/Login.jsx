import React from "react";
import { FaYoutube, FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";
import "./Login.css"; // Import external CSS file
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const handleClick = (route) => {
    navigate(route); 
    
  };
  return (
    <div className="container">
      <header className="header">
        <img src="https://i.imgur.com/mvM0lOp.png" alt="Eklavya Logo" className="logo" />
        <h1>Eklavya Public School & Junior College</h1>
      </header>
    <div className="logincontainer">
      <div className="login-box">
        {/* Left Side - Image */}
        <div className="image-container">
          <img
            src="https://i.imgur.com/7jnXj4g.png"
            alt="Kids Learning"
            className="login-image"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="form-container">
          <img
            src="https://i.imgur.com/mvM0lOp.png"
            alt="School Logo"
            className="logo"
          />
          <input
            type="text"
            placeholder="Username:"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password:"
            className="input-field"
          />
          <button className="login-button"  onClick={(handleClick)=>{navigate('/home')}}>Login</button>
          <div className="login-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <span>Don't have an account? 
              <Link to="/register" className="register-link"> Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
        {/* <img src="https://i.imgur.com/TF2zp1H.png" className="image" alt="YouTube" />
        <img src="https://i.imgur.com/jAZrnPA.png" className="image" alt="Facebook" />
        <img src="https://i.imgur.com/Atz2zDZ.png" className="image" alt="Instagram" />
        <img src="https://i.imgur.com/Yf1PkAS.png" className="image" alt="Twitter" /> */}
        <FaYoutube className="image"/>
        <FaFacebook className="image"/>
        <FaInstagram className="image"/>
        <FaTwitter className="image"/>
        
      </footer>
    </div>
  );
};

export default Login;
