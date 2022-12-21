import React from 'react';

const Home = () => {
    return (
        <div className='page-container home' >
            <div className='home-description' >

                <h2>Desarrollador Web <br /> Front-End</h2>
                <h1>OSCAR TANDIOY</h1>
                <p>Con conocimientos en HTML, CSS, Java Script y React. Soy una persona a la que le gusta reinventarme constantemente en busca de lograr un mejor rendimiento.</p>
                <p>
                    Mi perfil está orientado hacia el logro, la proactividad, la resolución de problemas y un espíritu de aprendizaje constante. He encontrado una gran pasión por el 
                    desarrollo web y la implementación de aplicaciones que buscan satisfacer necesidades sociales básicas.
                </p>

            </div>

            <div className='home-contacts' >

                <div>
                    <a href="https://www.linkedin.com/in/oscar-tandioy-1660b6253" target='linkedin' >
                        <i className="fa-brands fa-linkedin icon-home"></i>
                    </a>
                    
                </div>

                <div>
                    <a href="https://github.com/CciClo" target='github'>
                        <i className="fa-brands fa-square-github icon-home"></i>
                    </a>
                    
                </div>

                <div>
                    <a href="mailto:tato.tandioy@gmail.com" target='email' >
                        <i className="fa-regular fa-envelope icon-home"></i>
                    </a>
                    
                </div>
                
                <div>
                    <a href="https://docs.google.com/document/d/1hgiZOw6jsfei4IUh5wXCcQOIsBcBJ5TndNBe3xSotQ8/edit?usp=sharing" target='cv'>
                        <i className="fa-solid fa-cloud-arrow-down icon-home"></i>
                    </a>
                    <span>Download CV</span>
                </div>    

            </div>
        </div>
    );
};

export default Home;