import React from 'react';

function Promo() {
  return (
    <section className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <div className='promo__button-container'>
            <button className='promo__button' type="button">О проекте</button>
            <button className='promo__button' type="button">Технологии</button>
            <button className='promo__button' type="button">Студент</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;