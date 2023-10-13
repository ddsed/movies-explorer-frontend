import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({cards, isLoading, isSavedFilms, savedMovies, isReqError, isNotFound, handleSaveMovie, onDeleteCard,}) {
  const [shownMovies, setShownMovies] = useState(0);
  const location = useLocation();

  function shownCount() {
    const display = window.innerWidth
    if (display > 1180) {
      setShownMovies(12) 
    } else if (display > 767) {
      setShownMovies(8) 
    } else {
      setShownMovies(5) 
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
    if (display > 1180) {
      setShownMovies(shownMovies + 3)
    } else if (display > 767) {
      setShownMovies(shownMovies + 2)
    } else {
      setShownMovies(shownMovies + 2)
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
  }

  return (
    <section className="cards-list">
      {isLoading && <Preloader />}
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