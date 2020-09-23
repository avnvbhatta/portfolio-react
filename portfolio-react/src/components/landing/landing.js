import React from 'react';
import './landing.scss';
import Avatar from "../../images/Avatar.svg";
import LinkedInLogo from "../../images/linkedin.svg";
import GithubLogo from "../../images/github.svg";
import ResumeLogo from "../../images/resume.svg";
import EmailLogo from "../../images/email.svg";

const Landing = () => {
    return(
        <div className="landing">
            <div className="welcome">
                <h1>ABHINAV BHATTA</h1>
                <h2>I like creating elegant and fluid websites</h2>
            </div>
            <img src={Avatar} alt="avatar" className="avatar" />
            <div className="contact-icons">
                <img src={LinkedInLogo} alt="linkedin" className="contact-icon"/>
                <img src={GithubLogo} alt="github" className="contact-icon"/>
                <img src={ResumeLogo} alt="resume" className="contact-icon"/>
                <img src={EmailLogo} alt="email" className="contact-icon"/>
            </div>
        </div>
    )
}

export default Landing;