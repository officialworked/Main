import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons
import "./Category.css"; // Import CSS file

// CategoryButton component with dropdown functionality
const CategoryButton = ({ text }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderDropdownContent = () => {
    switch (text) {
      case "Chain":
        return (
          <div className="dropdown-content">
            <button>Ethereium</button>
            <button>Bitcoin</button>
            <button>Solana</button>
            <button>Immutable X</button>
            <button>Polygon</button>
          </div>
        );
      case "Type":
        return (
          <div className="dropdown-content">
            <button>Whitelist</button>
            <button>Free Mint</button>
            <button>No Rug</button>
          </div>
        );
      default:
        return (
          <div className="dropdown-content">
            <button>Upcoming</button>
            <button>Ongoing</button>
            <button>Ended</button>
          </div>
        );
    }
  };

  return (
    <div className="category-button-wrapper">
      <button className="category-button" onClick={toggleDropdown}>
        {text}
      </button>
      {dropdownVisible && renderDropdownContent()}
    </div>
  );
};

export default function SearchPanel() {
  const categories = [{ text: "Category" }, { text: "Chain" }, { text: "Type" }];

  return (
    <>
      <main className="search-panel">
        <section className="search-container">
          <div className="category-buttons">
            {categories.map((category, index) => (
              <CategoryButton key={index} text={category.text} />
            ))}
          </div>
              <div className="nav-links">
                <div className="search-input-wrapper">
                  <input type="text" placeholder="Search" className="search-input" />
                  <div className="search-d">
                  <FaSearch className="search-icon" /> {/* Use the search icon component */}
                </div>
               
            
              {/* Use the search icon component */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
