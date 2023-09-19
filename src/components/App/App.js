import React from 'react';
import './App.css';
import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';

function App() {

  return (
    <div className="page">
      <Header>
        <NavBar/>
      </Header>
      <Main/>
    </div>
  );
}

export default App;
