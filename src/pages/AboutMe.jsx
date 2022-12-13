import React from 'react';

const AboutMe = () => {
    return (
        <div className='page-container' >
            <h2>Acerca de mí</h2>

            <div className='description-about-me' >

                <p>Soy un desarrollador Front-End apasionado por lo que hago, cada día disfruto más de los retos y aprendizajes que me presenta la tecnología.</p>
                <br />
                <p>Durante este proceso he cultivado además de mis habilidades de programación una gran adaptación hacia el trabajo en equipo.</p>
                <br />
                <p>
                En cuanto a mis habilidades técnicas, actualmente soy desarrollador Front-End. Tengo conocimientos en el manejo de HTML, CSS, JavaScript y React by the Front-end. Todo esto complementado con una gran cantidad de librerías para la comodidad del desarrollo como Bootstrap. También tengo conocimientos en desarrollo de aplicaciones de juegos con Godot.
                </p>

                <div className='education-and-experience' >

                    <div>
                        <h3>Educación</h3>
                        <div className='child-education-experience' >

                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Fundamentos del desarrollo web</h5>
                                <p>Desarrollo de habilidades web HTML, CSS y JavaScript.</p>

                            </div>


                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Desarrollo de aplicaciones web con react</h5>
                                <p>Habilidades en el desarrollo de aplicaciones web en react.</p>
                            </div>

                        </div>

                    </div>

                    <div>
                        <h3>Experiencia</h3>

                        <div className='child-education-experience' >

                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Front-end</h5>
                                <p>
                                    He desarrollado proyectos con Java Script Vanilla, HTML y CSS, utilizando también react junto con librerías como react-router, axios y redux. También desarrollando habilidades de trabajo en equipo con proyectos completados.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="skills-about-me education-and-experience">

                    <div>
                        <h3>Habilidades técnicas</h3>
                    </div>

                    <div>
                        <h3>Otras habilidades</h3>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default AboutMe;