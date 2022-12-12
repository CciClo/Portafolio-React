import React from 'react';

const AboutMe = () => {
    return (
        <div className='page-container' >
            <h2>About me</h2>

            <div className='description-about-me' >

                <p>I am a Front-End developer passionate about what I do, every day I enjoy more the challenges and learning that technology presents me.</p>
                <br />
                <p>During this process I have cultivated in addition to my programming skills a great adaptation towards teamwork.</p>
                <br />
                <p>
                    As for my technical skills, I am currently a Front-End developer. I have knowledge in the management of HTML, CSS, JavaScript and React by the Front-end. All this 
                    complemented with a lot of libraries for the convenience of development such as Bootstrap. I also have knowledge in game application development with Godot.
                </p>

                <div className='education-and-experience' >

                    <div>
                        <h3>Education</h3>
                        <div className='child-education-experience' >

                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Web Development Fundamentals</h5>
                                <p>Developing HTML, CSS and JavaScript web skills.</p>

                            </div>


                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Development of web applications with react</h5>
                                <p>Skills in web app development in react.</p>
                            </div>

                        </div>

                    </div>

                    <div>
                        <h3>Experience</h3>

                        <div className='child-education-experience' >

                            <div className='date-container' >
                                <p>2022</p>
                                <span>Academlo</span>
                            </div>
                            <div className='description-education-experience' >
                                <h5>Front-end</h5>
                                <p>
                                    I have developed projects with Java Script Vanilla, HTML and CSS, also using react along with libraries such as react-router, axios 
                                    and redux. Also developing teamwork skills with completed projects.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="skills-about-me education-and-experience">

                    <div>
                        <h3>Technical Skills</h3>
                    </div>

                    <div>
                        <h3>Other Skills</h3>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default AboutMe;