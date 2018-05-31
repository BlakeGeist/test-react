import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const Footer = () => (
  <footer className="footer">
    <Nav placement="footer"/>
    <div className="footer-bar">
      ©2018 Drew's site. All Rights Reserved
    </div>
  </footer>
);

export default Footer;
