import './App.css';
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import {baseURL, config} from './services/index'
import axios from 'axios';
import NavBar from './components/NavBar'
import About from './components/About'
import Day from './components/Day'
import Form from './components/Form'
import Month from './components/Month'
import Marvel from './components/Marvel'
import DC from './components/DC'
import Indie from './components/Indie'
import Footer from './components/Footer'
import Links from './components/Links'
import Titles from './components/Titles'
import Home from './components/Home'
import './assets/fonts.css'

function App() {
  const [comics, setComics] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [toggle, setToggle] = useState(true)
  
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const resp = await axios.get(baseURL, config)
    setComics(resp.data.records)
    setIsLoading(false)
  }

  return (
    isLoading ?
      <div>Loading...</div> :
      <>
        <div className="App">
          <div className='pageTitle'>
          <h2 id='title'>Release the Comics!</h2>
          </div>
          <NavBar id='nav' />
          <div style={{overflow:'auto'}}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/marvel'>
            <Marvel comics={comics}/>
          </Route>
          <Route path='/dc'>
            <DC comics={comics}/>
          </Route>
          <Route path='/indie'>
            <Indie comics={comics}/>
          </Route>
          <Route path='/month'>
            <Month comics={comics}/>
          </Route>
          <Route path='/month/:Date'>
            <Day comics={comics}/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/form'>
            <Form comics={comics} setToggle={setToggle}/>
          </Route>
          <Route path='/links'>
            <Links />
          </Route>
          <Route path='/comics/:Title'>
            <Titles comics={comics} />
            </Route>
            </div>
        <Footer />
        </div>
      </>
  );
}

export default App;
