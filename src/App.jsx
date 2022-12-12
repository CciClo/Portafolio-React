import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SliderShow, { Slide } from './components/SliderShow'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import Configuration from './components/Configuration'

function App() {
  return (
    <div className="App">

      <Configuration />

      <SliderShow sideControls='true; outside; bgc-rgba(0,0,0,0)' controlsBelow="true; outside; bgc-transparent; brb-50%; wtb-15px; htb-15px ">
        <Slide>
          <Home />
        </Slide>

        <Slide className='hidde-next-slider' >
          <Portfolio/>
        </Slide>

        <Slide className='hidde-next-slider' >
          <AboutMe/>
        </Slide>

      </SliderShow>
      
    </div>
  )
}

export default App
