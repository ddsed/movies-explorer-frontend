import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Junior frontend developer's project</h1>
        <nav className="promo__links-container">
            <Link to="#about-project-section" className="promo__link">About</Link>
            <Link to="#techs-section" className="promo__link">Tech</Link>
            <Link to="#portfolio-section" className="promo__link">Student</Link>
        </nav>
      </div>
    </section>
  );
}

export default Promo;