import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SliderShow, { Slide } from './components/SliderShow'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import Configuration from './components/Configuration'
import LoaderPage from './components/LoaderPage'

function App() {

  const [isShowLoader, setIsShowLoader] = useState(true);

  /*
  useEffect(() => {
    // window.onload = () => {
    //   // console.log( document.body.offsetHeight)
    // }
    
    document.body.onload = ( ) => {
      setIsShowLoader(false)
    }

    // setTimeout(() => {
    //   setIsShowLoader(false)
    // }, 2000)

  }, []);
  */

  window.onload = () => {
    setIsShowLoader(false);
  };

  return (
    <div className="App">
      {isShowLoader &&
        <LoaderPage />
      }
      <Configuration />

      <SliderShow sideControls='true; outside; bgc-rgba(0,0,0,0)' controlsBelow="true; outside; bgc-transparent; brb-50%; wtb-15px; htb-15px ">
        <Slide>
          <Home />
        </Slide>

        {!isShowLoader &&
          <Slide className='hidde-next-slider hidde' >
            <Portfolio />
          </Slide>
        }

        {!isShowLoader &&
          <Slide className='hidde-next-slider hidde' >
            <AboutMe />
          </Slide>
        }


      </SliderShow>

    </div>
  )
}

export default App
