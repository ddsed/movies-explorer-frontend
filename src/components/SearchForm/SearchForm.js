import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function SearchForm({ onSearchMoviesFilms, onFilterMovies, isShortFilm }) {
    const location = useLocation();
    const [isQueryError, setIsQueryError] = useState(false);
    const [query, setQuery] = useState("");

    function handleChangeInputQuery(e) {
        setQuery(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        if (query.trim().length === 0) {
          setIsQueryError(true)
        } else {
          setIsQueryError(false)
          onSearchMoviesFilms(query)
        }
    }

    useEffect(() => {
        if (location.pathname === "/movies" && localStorage.getItem("movieSearch")) {
          const localQuery = localStorage.getItem("movieSearch")
          setQuery(localQuery)
        }
    }, [location])

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleFormSubmit}>
                <div className="search__input-container">
                    <input 
                        name="query" 
                        className="search__input" 
                        id="search-input" 
                        type="text" 
                        placeholder="Movie"
                        onChange={handleChangeInputQuery}
                        value={query || ""}
                    />
                    <button className="search__icon" type="submit"></button>
                </div>
                <div className="search__checkbox-container">
                    <label className="search__checkbox">
                        <input type="checkbox" onChange={onFilterMovies} checked={isShortFilm}/>
                        <span className="search__checkbox-switch"></span>
                    </label>
                    <label className="search__label">Short movies</label>
                </div>
            </form>
            {isQueryError && (<span className="search__error">Enter a key word</span>)}
        </section>
    );
}

export default SearchForm;