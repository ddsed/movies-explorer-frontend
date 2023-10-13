import React from 'react';
import { useLocation } from 'react-router-dom';
import { durationConverter } from "../../utils/movies"

function MoviesCard({ card, isSavedFilms, handleSaveMovie, onDeleteCard, isSaved, savedMovies }) {

  const location = useLocation();

  function onCardClick() {
    if (isSaved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0])
    } else {
      handleSaveMovie(card)
    }
  }

  function onDelete() {
    onDeleteCard(card)
  }

  return (
    <li className="card" key={card.id}>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU} />
      </a>
        <div className="card__info">
            <h2 className="card__name">{card.nameRU}</h2>
            <p className="card__duration">{durationConverter(card.duration)}</p>
        </div>
        {location.pathname === "/movies" &&
        <button className={`${isSaved ? "card__button-saved" : "card__button-to-save"}`} type="button" onClick={onCardClick}/>
        }
        {location.pathname === "/saved-movies" &&
        <button className="card__button-delete" type="button" onClick={onDelete}/>
        }
    </li>
  );
}

export default MoviesCard;