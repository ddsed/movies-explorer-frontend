import React from 'react';
import './App.css';
import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="page">
      <Header>
        <NavBar />
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
