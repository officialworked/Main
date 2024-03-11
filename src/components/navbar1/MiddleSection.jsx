// Navbar.js
import React from 'react';
import './MiddleSection.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button className="btn btn-primary">Trending:</button>
      </div>
      <div className="middle-section">
        <h2>1.NFT name</h2>
        <h2>1.NFT name</h2>
        <h2>1.NFT name</h2>
        <h2>1.NFT name</h2>
        <h2>1.NFT name</h2>
        <h2>1.NFT name</h2>
      </div>
      <div className="navbar-right">
        <button className="btn btn-success" onClick={() => handleSignIn()}>Sign In</button> 
        <h1>/</h1>
        <button className="btn btn-danger" onClick={() => handleSignOut()}>Sign Out</button>
      </div>
    </div>
  );
}

export default Navbar;
