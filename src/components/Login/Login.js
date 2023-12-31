import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';

import headerLogo from '../../images/header-logo.svg';


const Login = ({ loginUser }) => {

    const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

    function handleSubmit(evt) {
        evt.preventDefault();
        loginUser({
            email: enteredValues.email,
            password: enteredValues.password,
        });
    }

    return(
        <main>
            <section className="login">
                <Link to='/' className="login__home-link">
                    <img src={headerLogo} className="login__home-logo" alt="Логотип" />
                </Link>
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className="login__form-title">Good to see you!</h1>
                    
                    <label className="login__input-label">Email</label>
                    <input 
                    className="login__input" 
                    placeholder="Enter your email" 
                    value={enteredValues.email || ""} 
                    type="email" 
                    name="email" 
                    id="email-input" 
                    pattern = {PATTERN_EMAIL}
                    required 
                    onChange={handleChangeInput}
                    />
                    <span className="login__input-error">{errors.email}</span>
                    
                    <label className="login__input-label">Password</label>
                    <input 
                    className="login__input" 
                    placeholder="Enter your password" 
                    value={enteredValues.password || ""} 
                    type="password" 
                    name="password" 
                    id="password-input" 
                    minLength='2' 
                    maxLength='35' 
                    required 
                    onChange={handleChangeInput}
                    />
                    <span className="login__input-error">{errors.password}</span>
                    <button type="submit" disabled={!isFormValid ? true : false}
                    className={
                        !isFormValid
                            ? "login__button login__button_inactive"
                            : "login__button"
                    }>Sign in</button>
                </form>
                <div className='login__container'>
                    <p className='login__question'>Not registered yet?</p>
                    <Link className='login__go-to-register' to='/signup'>Sign up</Link>
                </div>
            </section> 
        </main>
    )
}

export default Login;