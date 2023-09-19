import React, { useState } from 'react';
import './dropdownButton.css';

function DropdownButton({ options, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
  };

  const handleOptionClick = (option) => {
    console.log('handleOptionClick chamado');
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedOption || title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
