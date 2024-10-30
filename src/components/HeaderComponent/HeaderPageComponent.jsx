import React, { useEffect, useState } from 'react';
import "./HeaderPageStyle.css";

const HeaderPageComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={`header-main ${isScrolled ? "scrolled" : ""}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="logo"
      />
      
      <div className="hamburger" onClick={handleMenuToggle}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>
            <i className="fas fa-search search-icon" onClick={handleSearchClick}></i>
            {isSearchOpen && (
              <div className="search-dropdown">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-bar"
                />
                <button className='fas fa-search search-icon button-search'></button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPageComponent;
