import React from 'react';
import stroke from '../../images/stroke-landing.svg';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
        <h3 className='portfolio__section-name'>Студент</h3>
        <img src={stroke} className="portfolio__stroke portfolio__stroke_section" alt="Подчеркивание секции" />

        <div className="portfolio__container">
            <div className="portfolio__container-info">
                <h2 className="portfolio__title">Даша</h2>
                <p className="portfolio__subtitle">Фронтенд-разработчик, 23 года</p>
                <p className="portfolio__text">Я закончила факультет международных экономических отношений МГИМО, на данный момент учусь в магистратуре IT University of Copenhagen по направлению Software design. Я люблю активный отдых: фрирайд на сноуборде, походы и хайкинг, а также обожаю собираться с друзьями на пинг-понг. Кодить начала недавно, но очень надеюсь, что это станет моей профессией.</p>

                <a className="portfolio__link-github" href="https://github.com/ddsed" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <div className="portfolio__photo" alt="Фото"></div>
        </div>

        <ul className="portfolio__links">
            <p className="portfolio__links-title">Портфолио</p>
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/how-to-learn" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Статичный сайт</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <img src={stroke} className="portfolio__stroke portfolio__stroke_link" alt="Подчеркивание секции" />
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/russian-travel" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Адаптивный сайт</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>
            </li>
            <img src={stroke} className="portfolio__stroke portfolio__stroke_link" alt="Подчеркивание секции" />
            <li>
                <a className="portfolio__link" href="https://github.com/ddsed/react-mesto-auth" rel="noreferrer" target="_blank">
                    <p className='portfolio__link-text'>Одностраничное приложение</p>
                    <img src={arrow} className="portfolio__arrow" alt="Стрелка перехода по ссылке" />
                </a>   
            </li>
        </ul>
    </section>
  );
}

export default Portfolio;