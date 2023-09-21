import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';

function Header({children}) {
  const location = useLocation();

  return (
      location.pathname === "/signin" || location.pathname === "/signup" ?
      (<></>)
      :
      <header className="header">
        <Link to='/' className='header__link'>
          <img src={headerLogo} className="header__logo" alt="Логотип" />
        </Link>
        {children}
      </header>
  )
}

export default Header;