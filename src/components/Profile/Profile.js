import React from 'react';
import { Link } from 'react-router-dom';


function Profile({ user }) {
    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {user.name}!</h1>
            <div className='profile__info'>
                <div className='profile__fields'>
                    <p className='profile__text'>Имя</p>
                    <p className='profile__data'>{user.name}</p>
                </div>
                <div className='profile__fields'>
                    <p className='profile__text'>E-mail</p>
                    <p className='profile__data'>{user.email}</p>
                </div>
            </div>
            <div className='profile__links'>
                <button className='profile__edit'>Редактировать</button>
                <Link to="/" className='profile__exit'>Выйти из аккаунта</Link >
            </div>
        </section>
    )
}

export default Profile;