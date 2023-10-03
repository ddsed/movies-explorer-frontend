import React from 'react';
import { Link } from 'react-router-dom';


function Profile({ user }) {
    return (
        <main>
            <section className="profile">
                <form>
                    <h1 className="profile__title">Привет, {user.name}!</h1>
                    <div className="profile__info">
                        <div className="profile__fields">
                            <label className="profile__text">Имя</label>
                            <input className="profile__input" placeholder="Введите ваше имя" defaultValue={user.name} minLength='2' maxLength='35'/>
                        </div>
                        <div className="profile__fields">
                            <label className="profile__text">E-mail</label>
                            <input className="profile__input" placeholder="Введите свой email" defaultValue={user.email}/>
                        </div>
                    </div>
                </form>
                <div className="profile__links">
                    <button className="profile__edit" type="button">Редактировать</button>
                    <Link to="/" className="profile__exit">Выйти из аккаунта</Link >
                </div>
            </section>
        </main>
    )
}

export default Profile;