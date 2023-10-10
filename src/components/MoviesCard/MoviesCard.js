import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card, isSaved }) {

  const location = useLocation();

  return (
    <li className="card" >
        <img className="card__image" src={card.image} alt={card.image} />
        <div className="card__info">
            <h2 className="card__name">{card.name}</h2>
            <p className="card__duration">{card.duration}</p>
        </div>
        {location.pathname === "/movies" &&
        <button className={`${isSaved ? "card__button-saved" : "card__button-to-save"}`} type="button" />
        }
        {location.pathname === "/saved-movies" && isSaved &&
        <button className="card__button-delete" type="button" />
        }
    </li>
  );
}

export default MoviesCard;