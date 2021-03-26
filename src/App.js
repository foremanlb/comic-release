import './App.css';
import { useState } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <h1>Release the Comics!</h1>
      <NavBar />
    </div>
  );
}

export default App;
