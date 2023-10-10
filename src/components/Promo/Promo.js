import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <nav className="promo__links-container">
            <Link to="#about-project-section" className="promo__link">О проекте</Link>
            <Link to="#techs-section" className="promo__link">Технологии</Link>
            <Link to="#portfolio-section" className="promo__link">Студент</Link>
        </nav>
      </div>
    </section>
  );
}

export default Promo;