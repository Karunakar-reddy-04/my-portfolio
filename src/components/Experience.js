import React from 'react';
import './Experience.css';
// Import your company logos here
import shiashLogo from '../Images/working-logo.jpg'; // Update with the correct path
import anotherCompanyLogo from '../Images/working-logo1.jpg'; // Update with the correct path

const Experience = () => {
    return (
        <section id='Experience' className="Experience-section">
            <div className="Experience-container">
                {/* First Experience */}
                <div className="Experience-item">
                    <div className="Experience-content">
                        <img src={shiashLogo} alt="Shiash Info Solutions" className="Company-logo" />
                        <div className="Experience-role">
                            <h2>Software Developer - Intern</h2>
                            <h5>Jan 2022 – Aug 2022</h5>
                        </div>
                    </div>
                </div>
                
                {/* Second Experience */}
                <div className="Experience-item">
                    <div className="Experience-content">
                        <img src={anotherCompanyLogo} alt="Another Company" className="Company-logo" />
                        <div className="Experience-role">
                            <h2>Java Developer - Intern</h2>
                            <h5>Nov 2022 – Apr 2023</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
