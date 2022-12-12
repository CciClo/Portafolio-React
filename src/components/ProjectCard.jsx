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
                            <h6 key={usin} >{usin}</h6>
                        ))
                    }
                </div>
            </div>

            <a href={project.github} target="_blank" >
                <div className='link-card' >
                    GitHub
                </div>
            </a>

            <a href={project.online} target="_blank" > 
                <div className='link-card' >
                    See the page
                </div>
            </a>
            
        </li>
    );
};

export default ProjectCard;