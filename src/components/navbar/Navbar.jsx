import React from 'react';
import { FaPlusCircle, FaThLarge, FaSearch } from 'react-icons/fa'; // Import the FaThLarge icon
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        NFA
      </div>
      <div className="nav-links">
      <div className="search-input-wrapper">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="search-d">
        <FaSearch className="search-icon" /> {/* Use the search icon component */}
      </div>
      </div>
      <div className="icons">
        <FaPlusCircle className="plus-icon" />
        <button className="submit-button">
          Submit Project
        </button>
      </div>
      <FaThLarge className="th-large-icon" /> {/* Use the FaThLarge component */}
      </div>
    </nav>
  );
}

export default Navbar;
