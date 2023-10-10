import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import '../../index.css';
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

function App() {

  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    location.pathname === '/' ? setIsLoggedIn(false) : setIsLoggedIn(true)
  })

  const user = {
    name: "Виталий",
    email: "pochta@yandex.ru"
  }

  const cards = Array(12).fill(null);

  return (
    <div className="page">
      <Header>
        <NavBar 
          loggedIn={isLoggedIn}
        />
      </Header>
      <Routes>
        <Route path="/signup" element={ <Register />}/>
        <Route path="/signin" element={ <Login />}/>
        <Route path="/" element={ <Main loggedIn={isLoggedIn} />}/>
        <Route path="/movies" element={ <Movies cards={cards} />}/>
        <Route path="/saved-movies" element={ <SavedMovies cards={cards} />}/>
        <Route path="/profile" element={<Profile user={user} />}/>
        <Route path="/*" element={<ErrorNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
