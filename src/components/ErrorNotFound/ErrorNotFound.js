import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="error-not-found">
        <h1 className="error-not-found__title">404</h1>
        <p className="error-not-found__subtitle">Страница не найдена</p>
        <button className="error-not-found__link" onClick={() => navigate(-1)}>Назад</button>
      </section>
    </main>
  )
}

export default NotFound