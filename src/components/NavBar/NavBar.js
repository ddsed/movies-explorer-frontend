import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(onClick) {
  return (
    <nav className="navbar">
      <NavLink to="/signup" className="navbar__link-sign-up">Регистрация</NavLink>
      <NavLink to="/signin" className="navbar__link-sign-in">Войти</NavLink>
    </nav>
  );
}

export default NavBar;