import './App.css';
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import {baseURL, config} from './services/index'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Day from './components/Day'
import Form from './components/Form'
import Month from './components/Month'
import Publisher from './components/Publisher'
import Footer from './components/Footer'
import axios from 'axios';

function App() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const resp = await axios.get(baseURL, config)
    console.log(resp.data.records
  )
  }

  return (
    <div className="App">
      <h1>Release the Comics!</h1>
      <NavBar />
      <Route exact path='/'></Route>
      <Route path='/publisher/:Publisher'>
        <Publisher />
      </Route>
      <Route path='/month'>
        <Month />
      </Route>
      <Route path='/day/:Date'></Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/form'>
        <Form />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
