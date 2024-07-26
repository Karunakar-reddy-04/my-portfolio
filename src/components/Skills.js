import React from 'react';
import './Skills.css';

// Import your skill logos here
import htmlLogo from '../Images/html.png';
import cssLogo from '../Images/css.png';
import jsLogo from '../Images/js.png';
import bootstrapLogo from '../Images/bootstrap.jpeg';
import jqueryLogo from '../Images/jquery.png';
import reactLogo from '../Images/react.png';
import angularLogo from '../Images/angular.png';
import javaLogo from '../Images/java.png';
import springBootLogo from '../Images/spring.png';
import flaskLogo from '../Images/flask.jpg';
import mysqlLogo from '../Images/mysql.png';
import mongodbLogo from '../Images/mongodb.png';
import gitLogo from '../Images/git.png';
import githubLogo from '../Images/github.png';
import vscodeLogo from '../Images/vs.png';


const Skills = () => {
    const stages = [
        {
            stage: 'Frontend',
            skills: [
                { name: 'HTML5', logo: htmlLogo },
                { name: 'CSS', logo: cssLogo },
                { name: 'JavaScript', logo: jsLogo },
                { name: 'Bootstrap', logo: bootstrapLogo },
                { name: 'jQuery', logo: jqueryLogo },
                { name: 'React', logo: reactLogo },
                { name: 'Angular', logo: angularLogo },
            ],
        },
        {
            stage: 'Backend',
            skills: [
                { name: 'Java', logo: javaLogo },
                { name: 'Spring Boot', logo: springBootLogo },
                { name: 'Flask', logo: flaskLogo },
            ],
        },
        {
            stage: 'Databases',
            skills: [
                { name: 'MySQL', logo: mysqlLogo },
                { name: 'MongoDB', logo: mongodbLogo },
            ],
        },
        {
            stage: 'Deployment',
            skills: [
                { name: 'Visual Studio Code', logo: vscodeLogo },
                { name: 'GIT', logo: gitLogo },
                { name: 'GitHub', logo: githubLogo },
            ],
        },
    ];

    return (
        <section id='Skills' className="Skills-section">
            <div className="Vertical-line">
                {stages.map((stage, index) => (
                    <div key={stage.stage} className="Dot" style={{ top: `${index * 20}vh` }}></div>
                ))}
            </div>
            <div className="Skills-content">
                {stages.map((stage, index) => (
                    <div key={stage.stage} className="Stage">
                        <div className="Stage-content">
                            <h2 className="Stage-title">{stage.stage}</h2>
                            <div className="Skills-container">
                                {stage.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="Skill"
                                    >
                                        <img src={skill.logo} alt={skill.name} className="Skill-logo" />
                                        <div className="Skill-tooltip">{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
