import React, { useState } from "react";
import './MobileNavbar.css'
import './Navbar.css'

const MobileNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`menu-dropdown ${menuActive ? "menu-active" : ""}`} onClick={toggleMenu}>
      <div className="col">
        <div className={`con ${menuActive ? "menu-active" : ""}`}>
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </div>
      <div className={`menu-content ${menuActive ? "opacity" : "hidden"}`}>
        <ul>
          <a href="#home"><li>HOME</li></a>
          <a href="#about"><li>ABOUT</li></a>
          <a href="#team"><li>OUR TEAM</li></a>
          <a href="#contact"><li>CONTACT</li></a>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;