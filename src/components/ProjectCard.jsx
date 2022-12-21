import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <li className='container' >
            <div className='front' >
                <img src={project.image} alt="image" />
                <h3>{project.title}</h3>
            </div>
            <div className='back' >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                    {
                        project.using.map(usin => (
                            <p key={usin} >{usin}</p>
                        ))
                    }
                </div>
            </div>

            <a href={project.github} target="github" >
                <div className='link-card' >
                    GitHub
                </div>
            </a>

            <a href={project.online} target="page-web" > 
                <div className='link-card' >
                    Ver la página
                    {/* See the page */}
                </div>
            </a>
            
        </li>
    );
};

export default ProjectCard;