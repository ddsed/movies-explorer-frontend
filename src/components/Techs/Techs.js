import React from 'react';
import stroke from '../../images/stroke-landing.svg';

function Techs() {
  return (
    <section className="techs">
        <h3 className="techs__section-name">Технологии</h3>
        <img src={stroke} className="techs__stroke" alt="Подчеркивание секции"/>

        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <div className="techs__grid-container"> 
            <p className="techs__grid-element">HTML</p>
            <p className="techs__grid-element">CSS</p>
            <p className="techs__grid-element">JS</p>
            <p className="techs__grid-element">React</p>
            <p className="techs__grid-element">Git</p>
            <p className="techs__grid-element">Express.js</p>
            <p className="techs__grid-element">MongoDB</p>
        </div>
    </section>
  );
}

export default Techs;