import React from 'react';
import { Link } from 'react-router-dom';
import './FooterStyle.css';

const FooterComponent = () => {
  return (
    <footer className='footer-main'>
      <div className="explore">
        <h2>Explore</h2>
        <ul className='ul-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/actors">Actors</Link></li>
          <li><Link to="/celebrity">Celebrity</Link></li>
        </ul>
        <ul className='ul-list'>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/basketball">Basketball</Link></li>
          <li><Link to="/cross">Cross</Link></li>
        </ul>
      </div>

      <div className="company">
        <h2>Company</h2>
        <ul className='ul-list'>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/terms-of-use">Terms Of Use</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
        </ul>
        <ul className='ul-list'>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/subscribe">Subscribe</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
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
