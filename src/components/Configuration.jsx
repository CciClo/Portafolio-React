import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Configuration = () => {

    const animations = useSelector(state => state.animationSliderRedux)

    const [ isShowConfiguration, setIsShowConfiguration ] = useState(false);
    const [ isNightMode, setIsNightMode ] = useState(true);
    const [ paintBackground, setInputBackground ] = useState('')

    const Appcss = document.documentElement;

    useEffect(() => {
        Appcss.style.setProperty('--background-color-fond',paintBackground)
    },[paintBackground])

    useEffect(() => {

        Appcss.style.setProperty('--background-color-fond',isNightMode ? '#0d47a1':'rgb(220, 220, 220)')
        Appcss.style.setProperty('--main-font-color',isNightMode ? 'white':'black')
        Appcss.style.setProperty('--secundary-color-letter',isNightMode ? 'rgb(238, 238, 238)':'rgb(39, 39, 39)')
        Appcss.style.setProperty('--third-color-of-letters',isNightMode ? 'rgb(219, 219, 219)':'black')

    }, [isNightMode])


    return (
        <div className='container-configurations'>
            <i className="fa-solid fa-gear" onClick={() => setIsShowConfiguration(!isShowConfiguration)} ></i>
            {isShowConfiguration &&
                <div className='configurations' >

                    
                    
                    <label htmlFor="paint-backgroung">
                        <i className="fa-solid fa-palette"> </i>  Background color :
                    </label>
                    <input type="color" name="" id="paint-backgroung" onChange={(e) => setInputBackground(e.target.value) } />

                    <div>
                        {isNightMode ?
                            <i className="fa-solid fa-moon" onClick={ () => setIsNightMode(!isNightMode)} ></i>:
                            <i className="fa-solid fa-sun" onClick={ () => setIsNightMode(!isNightMode)} ></i>
                        }
                    </div>

                </div>
            }
        </div>
    );
};

export default Configuration;