import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './Header.css';
const Header = () => (
  <header className="header">
    <div className="header-info-bar">
      <div className="header-info-bar-text">
        Call For Information or Emergencies at <a href="tel:5038757464">(503) 875 7464</a>
      </div>
    </div>
    <Nav placement="header"/>
  </header>
);

export default Header;
