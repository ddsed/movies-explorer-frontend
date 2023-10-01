import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import cardImage from '../../images/card-image.png'

function MoviesCardList({ cards}) {
  const сard = {
    name: "33 слова о дизайне",
    duration: "1ч 17м",
    image: cardImage,
  }

  return (
    <section className="cards-list">
        <ul className='cards-list__container'>
            {cards.map((card, index) => (
            <MoviesCard
            key={index}
            card={сard}
            isSaved={index === 1 || index === 5}
            />
            ))}
        </ul>
        <button className='cards-list__more-films-button'>Еще</button>
    </section>
  );
}

export default MoviesCardList;