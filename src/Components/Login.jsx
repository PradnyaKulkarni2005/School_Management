import React from "react";
import "./Login.css"; // Import external CSS file

const Login = () => {
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
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
    <footer className="footer">
        <img src="https://i.imgur.com/TF2zp1H.png" className="image" alt="YouTube" />
        <img src="https://i.imgur.com/jAZrnPA.png" className="image" alt="Facebook" />
        <img src="https://i.imgur.com/Atz2zDZ.png" className="image" alt="Instagram" />
        <img src="https://i.imgur.com/Yf1PkAS.png" className="image" alt="Twitter" />
        
      </footer>
    </div>
  );
};

export default Login;
