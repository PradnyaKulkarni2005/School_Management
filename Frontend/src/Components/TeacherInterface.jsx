import React from "react";
import { FaYoutube, FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";
import "./interface.css"; // Importing the CSS file

const TeacherInterface = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="https://i.imgur.com/mvM0lOp.png" alt="Eklavya Logo" className="logo" />
        <h1>Eklavya Public School & Junior College</h1>
      </header>
    <div className="teacher-info"><p>Teacher ID :- </p></div>
      <div className="student-info">
        <p><strong>Name:</strong> ____________</p>
        <p><strong>Class:</strong> ____________</p>
        <p><strong>Roll No:</strong> ____________</p>
      </div>

      <div className="buttons">
        <div className="button">
          <img src="https://i.imgur.com/n31a5p6.png" alt="Personal Details" />
          <p>Personal Details</p>
        </div>
        <div className="button">
          <img src="https://i.imgur.com/n6IcVFx.png" alt="Academics" />
          <p>Academics</p>
        </div>
        <div className="button">
          <img src="https://i.imgur.com/vIRkpTr.png" alt="Progress" />
          <p>Progress & Improvement</p>
        </div>
        <div className="button">
          <img src="https://i.imgur.com/tGtuegu.png" alt="Fees Status" />
          <p>Fees Status</p>
        </div>
      </div>

      <footer className="footer">
        <FaYoutube className="image"/>
                        <FaFacebook className="image"/>
                        <FaInstagram className="image"/>
                        <FaTwitter className="image"/>
        
      </footer>
    </div>
  );
};

export default TeacherInterface;
