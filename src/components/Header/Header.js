import React from 'react';

import headerLogo from '../../images/header-logo.svg';

function Header({children}) {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип" />
      {children}
    </header>
  );
}

export default Header;