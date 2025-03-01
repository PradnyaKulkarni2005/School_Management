import React from 'react'
import "./interface.css"
import {  useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaUser } from "react-icons/fa";
export default function Home() {
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
     
      <div className="buttons">
      <div className="button"onClick={(handleClick)=>{navigate('/stdinterface')}}>
      <FaUserGraduate title="Student" className='icon'/>
        <p className='home'>Student</p>
      </div>
      <div className="button" onClick={(handleClick)=>{navigate('/teachinterface')}}>
      <FaChalkboardTeacher title="Teacher" className='icon'/> 
        <p className='home'>Teacher</p>
      </div>
      <div className="button">
        <FaUser title="Parent" className='icon' /> 
        <p className='home'>Parent</p>
      </div>
      </div>
      </div>
  )
}
