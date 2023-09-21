import React from 'react';

import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <Portfolio />
    </main>
  );
}

export default Main;