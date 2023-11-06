import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.css';
import '../../index.css';

import apiAuth from '../../utils/AuthApi';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({ name: '', email: '' }); 
  const [isLoading, setIsLoading] = useState(false);
  
  const [savedMovies, setSavedMovies] = useState([]);

  //Token
  useEffect(() => {
    if(isLoggedIn) {
      mainApi
        .getCurrentUser()
        .then((data) => {
          setCurrentUser({ name: data.name, email: data.email });
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if(isLoggedIn) {
      mainApi
        .getCards()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse())
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

	useEffect(() => {
	const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoading(true);
      apiAuth
      .checkToken(jwt)
      .then((data) => {
        if (data) {
        setIsLoggedIn(true);
        setCurrentUser({ name: data.name, email: data.email });
        navigate(location, { replace: true });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    }
	}, []);

  //Регистрация
  function registerUser({ name, email, password }) {
    setIsLoading(true);
    apiAuth.register(name, email, password)
      .then((data) => {
        if(data) {
          setIsLoggedIn(true);
          setCurrentUser({ name: data.name, email: data.email });
          loginUser({ email, password })
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  //Вход
  function loginUser({ email, password }) {
    setIsLoading(true);
    apiAuth.login(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  //выход 
  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  //Profile
  function updateProfile(data) {
    setIsLoading(true);
    mainApi
      .editUserInfo(data)
      .then(newData => {
        setCurrentUser(newData);;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  //cards
  function handleCardSave(card) {
    mainApi
      .addNewCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete(card) {
    mainApi
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    isLoading ? <Preloader /> :
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header>
          <NavBar loggedIn={isLoggedIn} />
        </Header>
        <Routes>
          <Route path="/signup" element={ <Register registerUser={registerUser} />}/>
          <Route path="/signin" element={ <Login loginUser={loginUser}/>}/>
          <Route path="/" element={<Main loggedIn={isLoggedIn}/> }/>
          <Route path="/movies" 
            element={ <ProtectedRoute 
              element={Movies} 
              savedMovies={savedMovies}
              loggedIn={isLoggedIn}
              onDeleteCard={handleCardDelete}
              component={Movies}
              handleSaveMovie={handleCardSave} 
            />}
          />
          <Route path="/saved-movies" element={ <ProtectedRoute 
            element={SavedMovies} 
            loggedIn={isLoggedIn} 
            savedMovies={savedMovies}
            onDeleteCard={handleCardDelete}
            />}
          />
          <Route path="/profile" element={ <ProtectedRoute element={Profile} loggedIn={isLoggedIn} updateProfile={updateProfile} logOut={logOut} />}/>
          <Route path="/*" element={<ErrorNotFound />}/>
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
