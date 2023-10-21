import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <main>
      <section className="error-not-found">
        <h1 className="error-not-found__title">404</h1>
        <p className="error-not-found__subtitle">Страница не найдена</p>
        <Link to="/" className="error-not-found__link">Назад</Link>
      </section>
    </main>
  )
}

export default NotFound