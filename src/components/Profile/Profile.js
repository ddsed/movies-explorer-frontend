import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function Profile({ logOut, updateProfile }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
      }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        updateProfile({ name, email});
    }

    return (
        <main>
            <section className="profile">
                <form onSubmit={handleSubmit}>
                    <h1 className="profile__title">{`Привет, ${name || ''}!`}</h1>
                    <div className="profile__info">
                        <div className="profile__fields">
                            <label className="profile__text">Имя</label>
                            <input className="profile__input" placeholder="Ваше имя" value={name || ''} minLength='2' maxLength='35' pattern="^[А-Яа-яA-Za-z /s -]+$" onChange={handleChangeName} />
                        </div>
                        <div className="profile__fields">
                            <label className="profile__text">E-mail</label>
                            <input className="profile__input" placeholder="Ваш email" value={email || ''} onChange={handleChangeEmail} />
                        </div>
                    </div>
                    <div className="profile__links">
                        <button className="profile__edit" type="submit">Редактировать</button>
                        <Link to="/" className="profile__exit" onClick={logOut}>Выйти из аккаунта</Link >
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Profile;