import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';


function Register() {
    return(
        <main>
            <section className="register">
                <Link to='/' className='register__home-link'>
                    <img src={headerLogo} className="register__home-logo" alt="Логотип" />
                </Link>
                <form className="register__form">
                    <h1 className="register__form-title">Добро пожаловать!</h1>
                    <label className="register__input-label">Имя</label>
                    <input className="register__input" placeholder="Введите свое имя" value="Даша" type="text" name="name" id="name" minLength='2' maxLength='35' required />
                    
                    <label className="register__input-label">Email</label>
                    <input className="register__input" placeholder="Введите свой email" value="dsed@yandex.ru" type="email" name="email" id="email" required />
                    
                    <label className="register__input-label">Пароль</label>
                    <input className="register__input" placeholder="Введите свой пароль" value="******" type="password" name="password" id="password" minLength='2' maxLength='35' required />
                    <span className='register__input-error'>Что-то пошло не так...</span>

                    <button className="register__button" type="submit">Зарегистрироваться</button>
                </form>
                <div className='register__container'>
                    <p className='register__question'>Уже зарегистрированы?</p>
                    <Link className='register__go-to-login' to='/signin'>Войти</Link>
                </div>
            </section> 
        </main>
    )
}

export default Register;