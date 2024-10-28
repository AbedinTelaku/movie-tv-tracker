import React from 'react';
import './FooterStyle.css';

const FooterComponent = () => {
  return (
    <footer className='footer-main'>
      <div className="explore">
        <h2>Explore</h2>
        <ul className='ul-list'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Actors</li>
          <li>Celebrity</li>
        </ul>
        <ul className='ul-list'>
          <li>Movies</li>
          <li>Videos</li>
          <li>Basketball</li>
          <li>Cross</li>
        </ul>
      </div>

      <div className="company">
        <h2>Company</h2>
        <ul className='ul-list'>
          <li>Company</li>
          <li>Terms Of Use</li>
          <li>Contact Us</li>
          <li>Our Team</li>
        </ul>
        <ul className='ul-list'>
          <li>Privacy Policy</li>
          <li>Help Center</li>
          <li>Subscribe</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
        </div>

      </div>

      <div className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to get the latest updates.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <div className="copyright-section">
        <p>&copy; 2024 AT Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
