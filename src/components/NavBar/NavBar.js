import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({loggedIn}) {
  return (
    <nav className="navbar">
      { 
        loggedIn ?
        <>
        <NavLink to="/movies" className="navbar__link-movies">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navbar__link-saved-movies">Сохраненные фильмы</NavLink>
        <NavLink to="/profile" className="navbar__link-profile">Аккаунт</NavLink>
        </>
        : 
        <>
        <NavLink to="/signup" className="navbar__link-sign-up">Регистрация</NavLink>
        <NavLink to="/signin" className="navbar__link-sign-in">Войти</NavLink>
        </>
      }
    </nav>
  );
}

export default NavBar;