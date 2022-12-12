import React from 'react';

const Home = () => {
    return (
        <div className='page-container home' >
            <div className='home-description' >

                <h2>Front-End Web Developer</h2>
                <h1>OSCAR TANDIOY</h1>
                <p>With knowledge in HTML, CSS, Java Script and React. I am a person who likes to constantly reinvent myself in search of achieving better performance.</p>
                <p>
                    My profile is oriented towards achievement, proactivity, problem solving and a spirit of constant learning. I have found a great passion for web development 
                    and the implementation of applications that seek to meet basic social needs.
                </p>

            </div>

            <div className='home-contacts' >

                <div>
                    <a href="https://www.linkedin.com/in/oscar-tandioy-1660b6253" target='_blank' >
                        <i className="fa-brands fa-linkedin icon-home"></i>
                    </a>
                    
                </div>

                <div>
                    <a href="https://github.com/CciClo" target='_blank'>
                        <i className="fa-brands fa-square-github icon-home"></i>
                    </a>
                    
                </div>

                <div>
                    <a href="mailto:tato.tandioy@gmail.com">
                        <i className="fa-regular fa-envelope icon-home"></i>
                    </a>
                    
                </div>
                
                <div>
                    <a href="https://docs.google.com/document/d/1hgiZOw6jsfei4IUh5wXCcQOIsBcBJ5TndNBe3xSotQ8/edit?usp=sharing" target='_blank'>
                        <i className="fa-solid fa-cloud-arrow-down icon-home"></i>
                    </a>
                    <span>Download CV</span>
                </div>    

            </div>
        </div>
    );
};

export default Home;