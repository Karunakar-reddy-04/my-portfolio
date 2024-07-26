import React from 'react';
import './Footer.css';
import githubIcon from '../Images/github.jpg'; // Update with correct path
import linkedinIcon from '../Images/linkedin.png'; // Update with correct path
import instagramIcon from '../Images/instagram.png'; // Update with correct path
import gmailIcon from '../Images/gmail.jpg'; 
import mobileIcon from '../Images/call.png';
const Footer = () => {
    return (
        <footer id='Contact' className="Footer-section">
            <div className="Footer-content">
                <div className="Footer-social">
                    <a href="https://github.com/yourusername" className="Footer-icon github">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" className="Footer-icon linkedin">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/yourusername" className="Footer-icon instagram">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="mailto:your-email@example.com" className="Footer-icon gmail">
                        <img src={gmailIcon} alt="Gmail" />
                    </a>
                    <a href="tel:+1234567890" className="Footer-icon mobile">
                        <img src={mobileIcon} alt="Mobile" />
                    </a>
                </div>
            </div>
            <p className="Footer-rights">All rights reserved. © Karunakar Reddy Kalla</p>
        </footer>
    );
};

export default Footer;