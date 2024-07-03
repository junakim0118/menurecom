import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
        <li className="navbar-item">
      <Link to="/" className="navbar-link">Home: Start from Beginning</Link>
      </li>
      
        </ul>
    </nav>
  );
};

export default Navigation;
