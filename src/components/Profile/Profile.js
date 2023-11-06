import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import { Link } from 'react-router-dom';
import { PATTERN_EMAIL, PATTERN_NAME } from "../../utils/constants";

function Profile({ isLoading, logOut, updateProfile }) {

  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser)
    }
  }, [currentUser, resetForm])

  function handleFormSubmit(e) {
    e.preventDefault()
    updateProfile({
      name: enteredValues.name,
      email: enteredValues.email,
    })
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastValues(true)
    } else {
      setIsLastValues(false)
    }
  }, [enteredValues])

  return (
    <>
        <main>
            <section className="profile">
                <form id="form" className="profile__form" noValidate onSubmit={handleFormSubmit}>
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <div className="profile__info">
                        <div className="profile__fields">
                            <label className="profile__text" htmlFor="name-input">Имя</label>
                            <input 
                                name="name"
                                className="profile__input"
                                id="name-input"
                                type="text"
                                minLength="2"
                                maxLength="35"
                                required
                                placeholder="Ваше имя"
                                onChange={handleChangeInput}
                                value={enteredValues.name || ""}
                                pattern={PATTERN_NAME}
                            />
                        </div>
                        <span className="profile__input-error">{errors.name}</span>
                        <div className="profile__fields">
                            <label className="profile__text" htmlFor="email-input">E-mail</label>
                            <input 
                                name="email"
                                className="profile__input"
                                id="email-input"
                                type="email"
                                required
                                placeholder="Ваша почта"
                                onChange={handleChangeInput}
                                pattern={PATTERN_EMAIL}
                                value={enteredValues.email || ""} 
                            />
                        </div>
                        <span className="profile__input-error">{errors.email}</span>
                    </div>
                    <div className="profile__links">
                    <button type="submit" disabled={!isFormValid ? true : false}
                        className={
                        !isFormValid || isLoading || isLastValues
                            ? "profile__edit profile__edit_inactive"
                            : "profile__edit"
                        }
                    >Редактировать</button>
                        <Link to="/" className="profile__exit" onClick={logOut}>Выйти из аккаунта</Link >
                    </div>
                </form>
            </section>
        </main>
    </>
  )
}

export default Profile