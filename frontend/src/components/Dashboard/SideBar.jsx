import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SearchBar from "../Miscellaneous/SearchBar";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="sidebar">
      <h3 className="logo">LOGO</h3>
      <SearchBar />
      <div style={{marginTop: 30}}>
      <ul className="nav-links">
        <p>Recruitment</p>
        <li><a onClick={() => navigate('/dashboard/candidates')}><i className="fa-solid fa-user-plus"></i>Candidates</a></li>

        <p>Organization</p>
        <li><a onClick={() => navigate('/dashboard/employess')} ><i className="fa-solid fa-user-group"></i>Employees</a></li>
        <li><a onClick={() => navigate('/dashboard/attendance')} ><i className="fa-solid fa-signal"></i>Attendance</a></li>
        <li><a onClick={() => navigate('/dashboard/leaves')}  style={{display: 'flex', alignItems: 'center'}}><img src="/public/sparkler.png" style={{width: 22, height: 22, marginRight: 10}} />Leaves</a></li>
        
        <p>Others</p>
        <li className="logout"><a onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>Log out</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
