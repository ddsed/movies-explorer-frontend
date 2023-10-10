import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import burgerMenu from '../../images/burger-menu.svg';
import burgerMenuClose from '../../images/button-close-burger.svg';
import './NavBar.css';

function NavBar({loggedIn}) {
  const location = useLocation();

  const [isBurgerMenuOpen, setIsBurgerMenu] = React.useState(false);

  function openBurgerMenu() {
    setIsBurgerMenu(true)
  }

  function closeBurgerMenu() {
    setIsBurgerMenu(false)
  }

  return (
    <nav className="navbar">
      { 
        loggedIn ?
        <>
        <div className="navbar__links-container">
          <NavLink to="/movies" className="navbar__link-movies">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navbar__link-saved-movies">Сохраненные фильмы</NavLink>
        </div>
        <NavLink to="/profile" className="navbar__link-profile">Аккаунт</NavLink>

        <aside className={`navbar__burger-menu ${isBurgerMenuOpen ? "navbar__burger-menu_opened" : ""}`}>
          <div className="navbar__burger-menu-container">
            <img src={burgerMenuClose } className="navbar__close-button" alt="Иконка закрытия бокового меню" onClick={closeBurgerMenu} />
            <div className="navbar__burger-menu-links">
                <NavLink to="/" className={`navbar__burger-menu-link ${location.pathname === "/" ? "navbar__burger-menu-link_active" : ''}`} onClick={closeBurgerMenu}>Главная</NavLink>
                <NavLink to="/movies" className={`navbar__burger-menu-link ${location.pathname === "/movies" ? "navbar__burger-menu-link_active" : ''}`} onClick={closeBurgerMenu}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={`navbar__burger-menu-link ${location.pathname === "/saved-movies" ? "navbar__burger-menu-link_active" : ''}`} onClick={closeBurgerMenu}>Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className="navbar__burger-menu-profile" onClick={closeBurgerMenu}>Аккаунт</NavLink>
          </div>
        </aside>

        <img src={burgerMenu} className="navbar__burger-menu-icon" alt="Иконка меню" onClick={openBurgerMenu}/>
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