import React from 'react';
import stroke from '../../images/stroke-landing.svg';

function AboutProject() {
    return (
      <section className="about-project">
        <h3 className="about-project__section-name">О проекте</h3>
        <img src={stroke} className="about-project__stroke" alt="Подчеркивание секции" />
        <div className="about-project__grid-description">
            <h3 className="about-project__text">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            
            <h3 className="about-project__text">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__grid-timeline">
            <p className="about-project__duration">1 неделя</p>
            <p className="about-project__course-name">Back-end</p>
            
            <p className="about-project__duration">4 недели</p>
            <p className="about-project__course-name">Front-end</p>
        </div>
      </section>
    );
}
  
export default AboutProject;