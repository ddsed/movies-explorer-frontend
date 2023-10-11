import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../images/header-logo.svg';


const Register = ({ registerUser }) => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (evt) => {
        const input = evt.target;
        setRegisterForm({
            ...registerForm,
            [input.name]: input.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        registerUser(registerForm);
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
                    <input className="register__input" placeholder="Введите свое имя" value={registerForm.name} type="text" name="name" id="name" minLength='2' maxLength='35' required onChange={handleChange}/>
                    
                    <label className="register__input-label">Email</label>
                    <input className="register__input" placeholder="Введите свой email" value={registerForm.email} type="email" name="email" id="email" required onChange={handleChange}/>
                    
                    <label className="register__input-label">Пароль</label>
                    <input className="register__input" placeholder="Введите свой пароль" value={registerForm.password} type="password" name="password" id="password" minLength='2' maxLength='35' required onChange={handleChange}/>
                    <span className='register__input-error'></span>

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