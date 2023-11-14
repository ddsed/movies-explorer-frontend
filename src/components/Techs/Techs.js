import React from 'react';

function Techs() {
  return (
    <section className="techs" id="techs-section">
        <h2 className="techs__section-name">Tech</h2>

        <h3 className="techs__title">7 technologies</h3>
        <p className="techs__subtitle">The following techs were mastered during the course and applied in the project.</p>

        <ul className="techs__grid-container"> 
            <li><p className="techs__grid-element">HTML</p></li>
            <li><p className="techs__grid-element">CSS</p></li>
            <li><p className="techs__grid-element">JS</p></li>
            <li><p className="techs__grid-element">React</p></li>
            <li><p className="techs__grid-element">Git</p></li>
            <li><p className="techs__grid-element">Express.js</p></li>
            <li><p className="techs__grid-element">MongoDB</p></li>
        </ul>
    </section>
  );
}

export default Techs;