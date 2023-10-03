import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    return (
        location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
        (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>

            <div className="footer__container">
                <p className="footer__year">&copy;&nbsp;2023</p>
                <ul className="footer__links">
                    <li>
                        <a className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://github.com/ddsed" rel="noreferrer" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
        )
        :
        (<></>)
    );
}

export default Footer;