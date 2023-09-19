import React from 'react';
import './App.css';
import '../../index.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

function App() {

  return (
    <div className="page">
      <Header>
        <NavBar/>
      </Header>
    </div>
  );
}

export default App;
