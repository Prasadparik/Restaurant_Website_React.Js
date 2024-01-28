import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="swiggy-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Explore</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>For You</h2>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect with Us</h2>
          <ul>
            <li>
              <a href="#" className="social-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section app-download">
          <h2>Download the App</h2>
          <div className="app-links">
            <a href="#" className="app-link">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                alt="Google Play"
              />
            </a>
            <a href="#" className="app-link">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
