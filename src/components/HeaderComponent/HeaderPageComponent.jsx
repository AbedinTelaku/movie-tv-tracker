import React, { useState, useEffect } from 'react';
import './HeaderPageStyle.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderPageComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`header-main ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="logo-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Logo"
          className="logo"
        />
      </Link>
      <div className="hamburger" onClick={handleMenuToggle}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dubbing">Dubbing</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default HeaderPageComponent;
