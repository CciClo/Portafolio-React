import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/CciClo/assets/main/ProjectsImagesPortfolio/ProjectsList.json')
            .then(res => setProjects(res.data))
    }, [])

    return (
        <div className='page-container portfolio' >
            <h2>Portfolio</h2>
            <ul className='scroll-container' >
                {
                    projects?.map(project => (
                        <ProjectCard project={project} key={project.title} />
                    ))
                }

                <div style={{display:'flex', gap:'10px'}} >
                    <a href="https://github.com/CciClo" target='_blank'>
                        <i className="fa-brands fa-square-github icon-home"></i>
                    </a>

                    <a href="mailto:tato.tandioy@gmail.com">
                        <i className="fa-regular fa-envelope icon-home"></i>
                    </a>
                </div>


            </ul>
        </div>
    );
};

export default Portfolio;