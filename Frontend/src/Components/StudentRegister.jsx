import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll_number: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    dob: "",
    profile_picture: null,
  });
  const navigate=useNavigate();
  const handleClick=(root)=>{
      navigate(root)
  }
  
  return (
    <div className="container">
      {/* <header className="header">
        <img src="https://i.imgur.com/mvM0lOp.png" alt="Eklavya Logo" className="logo" />
        <h1>Eklavya Public School & Junior College</h1>
      </header> */}
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
        <input type="text" name="name" className="input-field" placeholder="Name"required />
        <input type="text" name="roll_number" className="input-field" placeholder="Roll Number"  required />
        <input type="email" name="email" className="input-field" placeholder="Email"  required />
        <input type="password" name="password" className="input-field" placeholder="Password" required />
        <input type="text" name="contact" className="input-field" placeholder="Contact"/>
        <input type="text" name="address" className="input-field" placeholder="Address"/>
        <input type="date" name="dob" className="input-field"/>       
        <button type="submit" className="login-button" onClick={() => handleClick('/home')}>Register</button>
          <div className="login-footer">
            
            
              <Link to="/login" className="register-link"> Login</Link>
           
          </div>
        </div>
      </div>
    </div>
    {/* <footer className="footer">
        
        <FaYoutube className="image"/>
        <FaFacebook className="image"/>
        <FaInstagram className="image"/>
        <FaTwitter className="image"/>
        
      </footer> */}
    </div>
   
  );
};
export default StudentRegister;

<form>
        <input type="text" name="name" placeholder="Name"required />
        <input type="text" name="roll_number" placeholder="Roll Number"  required />
        <input type="email" name="email" placeholder="Email"  required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="text" name="contact" placeholder="Contact"/>
        <input type="text" name="address" placeholder="Address"/>
        <input type="date" name="dob" />       
        <button type="submit">Register</button>
      </form>