import React from 'react';

function NotFound() {

  return (
    <main>
      <section className="error-not-found">
        <h1 className="error-not-found__title">404</h1>
        <p className="error-not-found__subtitle">Страница не найдена</p>
        <a href="javascript: history.go(-1)" className="error-not-found__link">Назад</a>
      </section>
    </main>
  )
}

export default NotFound