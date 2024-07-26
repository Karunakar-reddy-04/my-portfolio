import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="Header">
      {/* <div className="logo">KK</div> */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Contact">Connect</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
