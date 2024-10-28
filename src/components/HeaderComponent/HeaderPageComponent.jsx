import React, { useEffect, useState } from 'react';
import "./HeaderPageStyle.css";

const HeaderPageComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`header-main ${isScrolled ? "scrolled" : ""}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="logo"
      />
      <nav className="nav-links">
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPageComponent;
