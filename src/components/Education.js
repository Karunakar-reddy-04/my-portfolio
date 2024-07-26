import React from 'react';
import './Education.css';
import gmuLogo from '../Images/gmu-logo.png'; // Update with the correct path
import vitLogo from '../Images/vit-logo.png'; // Update with the correct path

const Education = () => {
    return (
        <section id='Education' className="Education-section">
          <h1 className="Education-title">EDUCATION</h1>
            <div className="Education-container">
                <div className="Education-item">
                    <img src={gmuLogo} alt="George Mason University" className="University-logo" />
                    <div className="Education-details">
                        <h2>George Mason University</h2>
                        <h5>Fairfax - Virginia</h5>
                        <p>Aug 2022 - May 2024</p>
                        <p>Master of Science in Computer Science</p>
                        <p>GPA: 3.67</p>
                    </div>
                </div>
                <div className="Education-item">
                    <img src={vitLogo} alt="Vellore Institute of Technology" className="University-logo" />
                    <div className="Education-details">
                        <h2>Vellore Institute of Technology</h2>
                        <h5>Andhra Pradesh - India</h5>
                        <p>Jun 2018 - Apr 2022</p>
                        <p>Bachelor of Computer Science and Engineering</p>
                        <p>CGPA: 8.12</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
