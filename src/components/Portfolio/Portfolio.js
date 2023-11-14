import React from 'react';
import arrow from '../../images/arrow.svg';
import photo from '../../images/photo.jpg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio-section">
        <h2 className='portfolio__section-name'>Student</h2>

        <div className="portfolio__container">
            <div className="portfolio__container-info">
                <h3 className="portfolio__title">Dasha</h3>
                <p className="portfolio__subtitle">Frontend developer, 23 yo</p>
                <p className="portfolio__text">Currently studying at IT University of Copenhagen doing Master in Software design. I am passionate about outdoor activities, such as snowboarding, hiking and camping. Besides, I love playing ping-pong with friends. I an relatively new to coding, but already absorbed by it, thus I wish to make it my profession.</p>

                <a className="portfolio__link-github" href="https://github.com/ddsed" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <img src={photo} className="portfolio__photo" alt="Фото"></img>
        </div>

        <h2 className="portfolio__links-title">Portfolio</h2>
        <ul className="portfolio__links">
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/how-to-learn" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Landing</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/russian-travel" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Landing with adaptives</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <li>
                <a className="portfolio__link portfolio__link_none" href="https://github.com/ddsed/react-mesto-auth" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>React app</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>   
            </li>
        </ul>
    </section>
  );
}

export default Portfolio;