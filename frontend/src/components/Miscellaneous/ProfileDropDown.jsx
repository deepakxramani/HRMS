import React, { useState } from "react";
import "./ProfileDropDown.css";

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-header" onClick={toggleDropdown}>
        <img
          src="/public/25549847.png" // Replace with profile avatar URL
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <span className="chevron">{isOpen ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
