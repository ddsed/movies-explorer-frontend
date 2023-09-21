import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    location.pathname === '/' ? setIsLoggedIn(false) : setIsLoggedIn(true)
  })

  return (
    <div className="page">
      <Header>
        <NavBar 
          loggedIn={isLoggedIn}
        />
      </Header>
      <Routes>
        <Route path="/signup" element={ <Register /> }/>
        <Route path="/signin" element={ <Login /> }/>
        <Route path="/" element={ <Main loggedIn={isLoggedIn} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
