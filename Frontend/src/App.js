
import './App.css';
import { Routes, Route } from "react-router-dom";
import StudentInterface from './Components/StudentInterface';
import TeacherInterface from './Components/TeacherInterface';
import Login from './Components/Login';
import StudentRegister from './Components/StudentRegister';
import Home from './Components/Home'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<StudentRegister/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/stdinterface" element={<StudentInterface/>} />
        <Route path="/teachinterface" element={<TeacherInterface/>} />

      </Routes>
    </div>
  );
}

export default App;
