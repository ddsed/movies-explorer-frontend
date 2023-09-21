import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';


function Login() {
    return(
        <section className="login">
            <Link to='/' className='login__home-link'>
                <img src={headerLogo} className="login__home-logo" alt="Логотип" />
            </Link>
            <form className="login__form">
                <p className="login__form-title">Рады видеть!</p>
                
                <label className="login__input-label">Email</label>
                <input className="login__input" value="dsed@yandex.ru" type="email" name="email" id="email" />
                
                <label className="login__input-label">Пароль</label>
                <input className="login__input" value="******" type="password" name="password" id="password" />
                <button className="login__button" type="submit">Войти</button>
            </form>
            <div className='login__container'>
                <p className='login__question'>Ещё не зарегистрированы?</p>
                <Link className='login__go-to-register' to='/signup'>Регистрация</Link>
            </div>
        </section> 
    )
}

export default Login;