import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({cards}) {
  return (
    <main className="main-movies">
      <SearchForm />
      <MoviesCardList cards={cards}/>
    </main>
  );
}

export default Movies;