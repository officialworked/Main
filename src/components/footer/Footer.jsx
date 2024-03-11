import React from 'react';
  import './Footer.css'; // Import the CSS file
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
         <h1 className="logo">NFA</h1>
      <p>For daily update subscribe</p>
        <form>
          <input type="email" placeholder="Email here" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer__nav">
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">NFT</h2>
            <ul className="nav__ul">
              <li><a href="#">Featured</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Ongoing</a></li>
              <li><a href="#">Ended</a></li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Submit</h2>
            <ul className="nav__ul">
              <li><a href="#">Project</a></li>
              <li><a href="#">Whitelist</a></li>
              <li><a href="#">Airdrop</a></li>
              <li><a href="#">Twitter giveaway</a></li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Services</h2>
            <ul className="nav__ul">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Promote</a></li>
              <li><a href="#">Advertisement</a></li>
              <li><a href="#">Influencers</a></li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">NFA</h2>
            <ul className="nav__ul">
              <li><a href="#">About us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and condition</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="legal">
        <p>&copy; 2024 NFT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
