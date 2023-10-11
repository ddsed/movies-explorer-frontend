import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';


const Login = ({ loginUser }) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const input = evt.target;
        setLoginForm({
            ...loginForm,
            [input.name]: input.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        loginUser(loginForm);
    }

    return(
        <main>
            <section className="login">
                <Link to='/' className="login__home-link">
                    <img src={headerLogo} className="login__home-logo" alt="Логотип" />
                </Link>
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className="login__form-title">Рады видеть!</h1>
                    
                    <label className="login__input-label">Email</label>
                    <input className="login__input" placeholder="Введите свой email" value={loginForm.email} type="email" name="email" id="email" required onChange={handleChange}/>
                    
                    <label className="login__input-label">Пароль</label>
                    <input className="login__input" placeholder="Введите свой пароль" value={loginForm.password} type="password" name="password" id="password" minLength='2' maxLength='35' required onChange={handleChange}/>
                    <button className="login__button" type="submit">Войти</button>
                </form>
                <div className='login__container'>
                    <p className='login__question'>Ещё не зарегистрированы?</p>
                    <Link className='login__go-to-register' to='/signup'>Регистрация</Link>
                </div>
            </section> 
        </main>
    )
}

export default Login;