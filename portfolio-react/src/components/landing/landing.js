import React from 'react';
import './landing.scss';
import Avatar from "../../images/Avatar.svg";
import LinkedInLogo from "../../images/linkedin.svg";
import GithubLogo from "../../images/github.svg";
import ResumeLogo from "../../images/resume.svg";
import EmailLogo from "../../images/email.svg";
import Resume from "../../images/resume.pdf";


const Landing = () => {
    return(
        <div className="landing landingHide">
            <div className="content">
                <div className="welcome">
                    <h1>ABHINAV BHATTA</h1>
                    <h2>I like creating elegant and fluid websites</h2>
                </div>
                <img src={Avatar} alt="avatar" className="avatar" />
                <div className="contact-icons">
                    <a href="http://www.linkedin.com/in/avnvbhatta" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href="http://www.github.com/avnvbhatta" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href={Resume} download target="_blank" rel="noopener noreferrer"><img src={ResumeLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href="mailto:avnvbhatta@gmail.com" target="_blank" rel="noopener noreferrer"><img src={EmailLogo} alt="linkedin" className="contact-icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;