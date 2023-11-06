import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { DISPLAY_BIG, DISPLAY_MEDIUM, SHOWN_MOVIES_BIG, SHOWN_MOVIES_MEDIUM, SHOWN_MOVIES_SMALL, EXTRA_MOVIES_BIG, EXTRA_MOVIES_MEDIUM } from '../../utils/constants';


function MoviesCardList({cards, isLoading, isSavedFilms, savedMovies, isReqError, isNotFound, handleSaveMovie, onDeleteCard,}) {
  const [shownMovies, setShownMovies] = useState(0);
  const location = useLocation();

  function shownCount() {
    const display = window.innerWidth
    if (display > DISPLAY_BIG) {
      setShownMovies(SHOWN_MOVIES_BIG) 
    } else if (display > DISPLAY_MEDIUM) {
      setShownMovies(SHOWN_MOVIES_MEDIUM) 
    } else {
      setShownMovies(SHOWN_MOVIES_SMALL) 
    }
  }

  useEffect(() => {
    shownCount()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCount)
    }, 500)
  })

  function showMore() {
    const display = window.innerWidth
    if (display > DISPLAY_BIG) {
      setShownMovies(shownMovies + EXTRA_MOVIES_BIG)
    } else if (display > DISPLAY_MEDIUM) {
      setShownMovies(shownMovies + EXTRA_MOVIES_MEDIUM)
    } else {
      setShownMovies(shownMovies + EXTRA_MOVIES_MEDIUM)
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
  }

  return (
    <section className="cards-list">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (<span className="cards-list__not-found-error">Ничего не найдено</span>)}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {location === "/saved-movies" ? (
            <>
              <ul className="cards-list__container">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleSaveMovie={handleSaveMovie}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards-list__button-container"></div>
            </>
          ) : (
            <>
              <ul className="cards-list__container">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    isSaved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleSaveMovie={handleSaveMovie}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards-list__button-container">
                {cards.length > shownMovies ? 
                (
                  <button className="cards-list__more-films-button" type="button" onClick={showMore}>Ещё</button>
                ) 
                : 
                ("")
                }
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default MoviesCardList;