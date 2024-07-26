import React from 'react';
import './Project.css';

// Import your project images
import project1Image from '../Images/AI.png';
import project2Image from '../Images/blood.png';
import project3Image from '../Images/web.png';

const projectsData = [
    {
        title: 'Trusting Your AI Pair Programmers A Multi-Agent Validation Workflow',
        image: project1Image,
        description: (
            <>
                <p>Developed and implemented a multi-agent validation workflow aimed at enhancing trust in AI-generated code, achieving a significant 30% reduction in code review time.</p>
            </>
        ),
    },
    {
        title: 'Blood Bank Management System Web Application',
        image: project2Image,
        description: (
            <>
                <p>Designed and developed a robust Java-based system with JDBC for seamless MySQL connectivity, encompassing user authentication, donor details management, and administrative controls. Achieved a high increase in data retrieval speed.</p>
                
            </>
        ),
    },
    {
        title: 'Used Vehicles Price Predictor Web Application',
        image: project3Image,
        description: (
            <>
                <p>Engineered a web application using HTML forms for efficient vehicle data collection. Deployed a machine-learning model with Flask, resulting in a 40% enhancement in data accuracy and a 50% reduction in manual entry time.</p>
               
            </>
        ),
    },
];

const Projects = () => {
    return (
        <section id='Projects' className="Projects-section">
        <h1 className="Projects-title">PROJECTS</h1>
        <div className="Projects-container">
            {projectsData.map((project, index) => (
                <div key={index} className="Project-card">
                    <img src={project.image} alt={project.title} className="Project-image" />
                    <h2 className="Project-title">{project.title}</h2>
                    <div className="Project-description">
                        {project.description}
                    </div>
                    <button className="Project-button">Visit Page</button>
                </div>
            ))}
        </div>
    </section>
    
    );
};

export default Projects;
