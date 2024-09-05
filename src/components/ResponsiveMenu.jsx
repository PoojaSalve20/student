// ResponsiveMenu.js
import React, { useState } from 'react';


const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="responsive-menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">
          Home
        </li>
        <li className="menu-item">
          About
          <ul className="submenu">
            <li className="submenu-item">Team</li>
            <li className="submenu-item">Mission</li>
          </ul>
        </li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Contact</li>
      </ul>
    </nav>
  );
};

export default ResponsiveMenu;
