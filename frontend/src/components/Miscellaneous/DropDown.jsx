import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DropDown.css";

const DropDown = ({ options, selectedValue, onChange, width = "150px" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="dropdown" style={{ width }}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedValue}
        <span className="chevron">{isOpen ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className={option === selectedValue ? "active" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// PropTypes for type checking
DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Dropdown options
  selectedValue: PropTypes.string.isRequired, // Selected value
  onChange: PropTypes.func.isRequired, // Callback when value changes
  width: PropTypes.string, // Optional custom width
};

export default DropDown;
