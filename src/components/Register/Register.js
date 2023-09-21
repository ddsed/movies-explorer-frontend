import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';


function Register() {
    return(
        <section className="register">
            <Link to='/' className='register__home-link'>
                <img src={headerLogo} className="login__home-logo" alt="Логотип" />
            </Link>
            <form className="register__form">
                <p className="register__form-title">Добро пожаловать!</p>
                <label className="register__input-label">Имя</label>
                <input className="register__input" value="Даша" type="name" name="name" id="name" />
                
                <label className="register__input-label">Email</label>
                <input className="register__input" value="dsed@yandex.ru" type="email" name="email" id="email" />
                
                <label className="register__input-label">Пароль</label>
                <input className="register__input" value="******" type="password" name="password" id="password" />
                <button className="register__button" type="submit">Войти</button>
            </form>
            <div className='register__container'>
                <p className='register__question'>Уже зарегистрированы?</p>
                <Link className='register__go-to-login' to='/signin'>Войти</Link>
            </div>
        </section> 
    )
}

export default Register;