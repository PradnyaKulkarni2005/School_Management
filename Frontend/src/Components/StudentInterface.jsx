import React from "react";

import "./interface.css"; // Importing the CSS file

const StudentInterface = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="https://i.imgur.com/mvM0lOp.png" alt="Eklavya Logo" className="logo" />
        <h1>Eklavya Public School & Junior College</h1>
      </header>

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
        <img src="https://i.imgur.com/TF2zp1H.png" className="image" alt="YouTube" />
        <img src="https://i.imgur.com/jAZrnPA.png" className="image" alt="Facebook" />
        <img src="https://i.imgur.com/Atz2zDZ.png" className="image" alt="Instagram" />
        <img src="https://i.imgur.com/Yf1PkAS.png" className="image" alt="Twitter" />
        
      </footer>
    </div>
  );
};

export default StudentInterface;
