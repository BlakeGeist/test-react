import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
  <div className={`nav mod-${props.placement}`}>
    <div className="nav-logo">
      <a href="/#/"><img src={require('./logo.jpg')} /></a>
    </div>
    <div className="nav-menu">
      <ul className="nav-menu-list">
        <li>Home</li>
        <li>Why Choose Us?</li>
        <li>
          <div>Services</div>
          <ul className="nav-menu-list-item-list">
            <li>IT Consulting</li>
            <li>Network Security</li>
            <li>Hosted VoIP</li>
            <li>Office 365</li>
            <li>Managed IT Services</li>
            <li>Cloud Solutions</li>
            <li>Backup & Disaster Recovery</li>
            <li>Virtualization</li>
          </ul>
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
);

export default Nav;
