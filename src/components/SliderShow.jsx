import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlechaIzquierda from '../assets/less-than-solid.svg';
import FlechaDerecha from '../assets/greater-than-solid.svg';

const SliderShow = ({
    children,
    sideControls = ['false', 'inside'],
    controlsBelow = ['false', 'inside'],
    transitionSpeed = 500
}) => {

    const [sliceSize, setSliceSize] = useState(0);
    const [totalSlide, setTotalSlide] = useState(false);
    const [indexSlide, setIndexSlide] = useState(0);
    const [animationSlider, setAnimationSlider] = useState('');


    sideControls = sideControls.replace('[', '').replace(']', '').replaceAll(' ', '').split(';');
    controlsBelow = controlsBelow.replace('[', '').replace(']', '').replaceAll(' ', '').split(';');

    !sideControls.includes('outside') && sideControls.push('inside');
    !controlsBelow.includes('outside') && controlsBelow.push('inside');

    const slideshow = useRef(null);

    const siguiente = () => {

        if (indexSlide === totalSlide - 1) {
            setIndexSlide(0);
            setAnimationSlider('next position=0')


            /*
            const transicion = () => {
                const ultimoElemento = slideshow.current.children[indexSlide];
                slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translateX(0)`;
                setTimeout(() => {
                }, 5)
                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);
            */


        } else if (slideshow.current?.children.length > 0) {
            setIndexSlide(indexSlide + 1);
            setAnimationSlider('next')
        }
    };


    const anterior = () => {


        if (indexSlide === 0) {
            setIndexSlide(totalSlide - 1)
            setAnimationSlider('previous position=max')

        } else if (slideshow.current.children.length > 1) {
            setIndexSlide(indexSlide - 1)
            setAnimationSlider('previous')
        }
    }

    useEffect(() => {

        slideshow.current?.children ? setTotalSlide(children.length) : setTotalSlide(1);

        setTimeout(() => {
            setSliceSize(slideshow.current?.children[0].offsetWidth);
        }, 600);
    }, []);


    const nextSlider = (prev, nex) => {
        slideshow.current.children[prev]?.classList.add('hidde-previus-slider');
        slideshow.current.children[nex]?.classList.remove('hidde-next-slider');
        slideshow.current.children[nex]?.classList.remove('hidde');
        slideshow.current.children[nex]?.classList.remove('hidde-previus-slider');

        slideshow.current.children[nex]?.classList.remove('slider-previous');
        slideshow.current.children[nex]?.classList.remove('slider-next');
        slideshow.current.children[nex]?.classList.add('slider-next');
    };

    const previusSlider = (prev, nex) => {

        slideshow.current.children[prev]?.classList.add('hidde-next-slider');
        slideshow.current.children[nex]?.classList.remove('hidde-next-slider');
        slideshow.current.children[nex]?.classList.remove('hidde');
        slideshow.current.children[nex]?.classList.remove('hidde-previus-slider');

        slideshow.current.children[nex]?.classList.remove('slider-previous');
        slideshow.current.children[nex]?.classList.remove('slider-next');
        slideshow.current.children[nex]?.classList.add('slider-previous');

    };


    useEffect(() => {

        // slideshow.current.style.transition = `${transitionSpeed}ms ease-out all`;
        // slideshow.current.style.transform = `translateX(-${sliceSize * indexSlide}px)`;

        if (animationSlider.includes('previous')) {

            if (animationSlider.includes('position=max')) {
                previusSlider(0,indexSlide);
            } else {
                previusSlider(indexSlide + 1, indexSlide )
            }

        } else if (animationSlider.includes('next')) {
            if (animationSlider.includes('position=0')) {

                nextSlider(totalSlide - 1, indexSlide)

            } else {
                nextSlider(indexSlide - 1, indexSlide)
            }
        } else {
            if (Number(animationSlider[0]) < Number(animationSlider[1])) {
                /*slideshow.current.children[Number(animationSlider[0])]?.classList.add('hidde');
                slideshow.current.children[indexSlide]?.classList.remove('hidde');
                slideshow.current.children[indexSlide]?.classList.remove('slider-previous');
                slideshow.current.children[indexSlide]?.classList.remove('slider-next');
                slideshow.current.children[indexSlide]?.classList.add('slider-next');*/
                nextSlider(Number(animationSlider[0]), indexSlide)

            } else {
                previusSlider(animationSlider[0],indexSlide)
            }
        }


    }, [indexSlide, animationSlider]);

    /*
    window.onresize = () => {
        slideshow.current.style.transition = `none`;
        setSliceSize(slideshow.current?.children[0].offsetWidth);
    };
    */




    return (
        <div>
            <MainSlideContainer style={{}} className='sliderShow' >
                <SlideContainer >
                    <OnlineSlide style={{ width: `${100}%` }} ref={slideshow} className='slideshow' >
                        {children}
                    </OnlineSlide>
                </SlideContainer>
                {sideControls.includes('true') &&
                    <SideControlsBottom className='side-controls' >

                        <Boton
                            onClick={anterior}
                            style={{
                                left: `${sideControls.includes('inside') ? '0' : '-50px'}`,
                                backgroundColor: `${sideControls.find((e) => e.slice(0, 4) == 'bgc-') ? sideControls.find((e) => e.slice(0, 4) == 'bgc-').replace('bgc-', '') : 'none'}`
                            }}
                        />
                        <Boton derecho
                            style={{
                                right: `${sideControls.includes('inside') ? '0' : '-50px'}`,
                                backgroundColor: `${sideControls.find((e) => e.slice(0, 4) == 'bgc-') ? sideControls.find((e) => e.slice(0, 4) == 'bgc-').replace('bgc-', '') : 'none'}`
                            }}
                            onClick={siguiente}
                        />

                    </SideControlsBottom>}
                {controlsBelow.includes('true') &&
                    <BottomControlContainer style={{
                        position: 'absolute',
                        // top:`${ controlsBelow.includes('top') || controlsBelow.includes('outside') ? '-10%' : '0'}`,
                        bottom: `${controlsBelow.includes('bottom') || controlsBelow.includes('outside') ? '-10%' : '0'}`,
                        backgroundColor: `${controlsBelow.find((c) => c.slice(0, 4) == 'bgc-') ? controlsBelow.find((e) => e.slice(0, 4) == 'bgc-').replace('bgc-', '') : 'transparent'}`
                    }}>
                        {controlsBelow.includes('true') &&
                            children.map((button, index) => (
                                <BottomButton
                                    key={index}
                                    onClick={() => (
                                        setAnimationSlider(`${indexSlide}${index} button`),
                                        setIndexSlide(index)
                                    )}
                                    style={{
                                        scale: `${index == indexSlide ? '1.4' : '1'}`,
                                        backgroundColor: `${controlsBelow.find((c) => c.slice(0, 5) == 'bgcb-') ? controlsBelow.find((e) => e.slice(0, 5) == 'bgcb-').replace('bgcb-', '') : 'rgba(0, 0, 0, 0.4)'}`,
                                        width: `${controlsBelow.find((c) => c.slice(0, 4) == 'wtb-') ? controlsBelow.find((e) => e.slice(0, 4) == 'wtb-').replace('wtb-', '') : '10px'}`,
                                        height: `${controlsBelow.find((c) => c.slice(0, 4) == 'htb-') ? controlsBelow.find((e) => e.slice(0, 4) == 'htb-').replace('htb-', '') : '10px'}`,
                                        transition: 'scale 0.5s',
                                        // backgroundImage:'url(https://th.bing.com/th/id/R.8483517770d2152bf96ca40bc425d26a?rik=THfo8w5TvQr8wQ&riu=http%3a%2f%2fb.rgbimg.com%2fusers%2fb%2fba%2fba1969%2f600%2fn4yMVtg.jpg&ehk=0eLGs9J3YS1mIEMwOWxLVPionPkF98G9X7Kklj9tEDo%3d&risl=&pid=ImgRaw&r=0)',
                                        backgroundSize: 'cover',
                                        boxShadow: `0 0 1000000px 1000000px ${controlsBelow.find(c => c.slice(0, 5) == 'bxsi-') ? (indexSlide == index ? controlsBelow.find(c => c.slice(0, 5) == 'bxsi-').replace('bxsi-', '') : 'transparent') : (indexSlide == index ? 'rgba(0, 0, 0, 0.377)' : 'transparent')} inset`,
                                        borderRadius: `${controlsBelow.find(c => c.slice(0, 4) == 'brb-') ? controlsBelow.find(c => c.slice(0, 4) == 'brb-').replace('brb-', '') : '0'}`,
                                    }}
                                />
                            ))

                        }
                    </BottomControlContainer>
                }
            </MainSlideContainer>


        </div>
    );
};

export default SliderShow;


const MainSlideContainer = styled.div`
	position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
	overflow: hidden;
`;

const OnlineSlide = styled.div`
    position: relative;
    height: 100%;
`

const Slide = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
	transition: .3s ease all;
	position: absolute;
    
	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
    width: 100%;
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;
	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const SideControlsBottom = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
    width: 50px;
	height: 100%;
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	${props => props.derecho ? `background-image:url(${FlechaDerecha});` : `background-image:url(${FlechaIzquierda});`}
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px;
`;


const BottomControlContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const BottomButton = styled.div`
    border: none;
    cursor: pointer;
`;



export { Slide, TextoSlide };