import React from "react";
import './Home.css';
import profilePic from '../Images/profile1.png';

const Home = () => {
    return (
        <section id="Home" className="Home">
            <div className="Home-left">
                <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="Home-right">
                <h1>Karunakar Reddy Kalla</h1>
                <h2>Software Developer</h2>
                <p>
                    Computer Science graduate with strong skills in Java development and web technologies. 
                    Proficient in Java, SQL, JavaScript, and front-end technologies, gained through academic projects. 
                    Detail-oriented problem solver with a commitment to ongoing learning.
                </p>
                <button className="resume-button">Resume</button>
            </div>
        </section>
    );
};

export default Home;
