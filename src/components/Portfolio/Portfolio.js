import React from 'react';
import arrow from '../../images/arrow.svg';
import photo from '../../images/photo.jpg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio-section">
        <h2 className='portfolio__section-name'>Студент</h2>

        <div className="portfolio__container">
            <div className="portfolio__container-info">
                <h3 className="portfolio__title">Даша</h3>
                <p className="portfolio__subtitle">Фронтенд-разработчик, 23 года</p>
                <p className="portfolio__text">Я закончила факультет международных экономических отношений МГИМО, на данный момент учусь в магистратуре IT University of Copenhagen по направлению Software design. Я люблю активный отдых: фрирайд на сноуборде, походы и хайкинг, а также обожаю собираться с друзьями на пинг-понг. Кодить начала недавно, но очень надеюсь, что это станет моей профессией.</p>

                <a className="portfolio__link-github" href="https://github.com/ddsed" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <img src={photo} className="portfolio__photo" alt="Фото"></img>
        </div>

        <h2 className="portfolio__links-title">Портфолио</h2>
        <ul className="portfolio__links">
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/how-to-learn" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Статичный сайт</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/russian-travel" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Адаптивный сайт</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <li>
                <a className="portfolio__link portfolio__link_none" href="https://github.com/ddsed/react-mesto-auth" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Одностраничное приложение</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>   
            </li>
        </ul>
    </section>
  );
}

export default Portfolio;