import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { PATTERN_EMAIL, PATTERN_NAME } from '../../utils/constants';

import headerLogo from '../../images/header-logo.svg';


const Register = ({ registerUser }) => {

    const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

    function handleSubmit(evt) {
        evt.preventDefault();
        registerUser({
            name: enteredValues.name,
            email: enteredValues.email,
            password: enteredValues.password,
        });
    }

    return(
        <main>
            <section className="register">
                <Link to='/' className='register__home-link'>
                    <img src={headerLogo} className="register__home-logo" alt="Логотип" />
                </Link>
                <form className="register__form" onSubmit={handleSubmit}>
                    <h1 className="register__form-title">Добро пожаловать!</h1>

                    <label className="register__input-label">Имя</label>
                    <input 
                    className="register__input" 
                    placeholder="Введите свое имя" 
                    value={enteredValues.name || ""}
                    pattern={PATTERN_NAME}
                    type="text" 
                    name="name" 
                    id="name-input" 
                    minLength='2' 
                    maxLength='35' 
                    required 
                    onChange={handleChangeInput}
                    />
                    <span className="form__input-error">{errors.name}</span>
                    
                    <label className="register__input-label">Email</label>
                    <input 
                    className="register__input" 
                    placeholder="Введите свой email" 
                    value={enteredValues.email || ""} 
                    pattern={PATTERN_EMAIL}
                    type="email" 
                    name="email" 
                    id="email-input" 
                    required 
                    onChange={handleChangeInput}
                    />
                    <span className="register__input-error">{errors.email}</span>
                    
                    <label className="register__input-label">Пароль</label>
                    <input 
                    className="register__input"
                    placeholder="Введите свой пароль" 
                    value={enteredValues.password || ""}
                    type="password" 
                    name="password" 
                    id="password-input" 
                    minLength='2' 
                    maxLength='35' 
                    required 
                    onChange={handleChangeInput}
                    />
                    <span className='register__input-error'>{errors.password}</span>

                    <button type="submit" disabled={!isFormValid ? true : false}
                    className={
                        !isFormValid
                            ? "register__button register__button_inactive"
                            : "register__button"
                    }>Зарегистрироваться</button>
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