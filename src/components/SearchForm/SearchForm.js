import React from 'react';

import searchIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className='search'>
        <form className='search__form'>
            <div className='search__input-container'>
                <input className='search__input' placeholder='Фильм' required />
                <img src={searchIcon} className='search__icon' alt='Иконка поиска фильмов' />
            </div>
            <div className='search__checkbox-container'>
                <label className='search__checkbox'>
                    <input type="checkbox" />
                    <span className="search__checkbox-switch"></span>
                </label>
                <label className='search__label'>Короткометражки</label>
            </div>
        </form>
    </section>
  );
}

export default SearchForm;