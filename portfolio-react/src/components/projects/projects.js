import React from 'react';
import './projects.scss';
import TagWithMeLogo from "../../images/tagwithme.png";
import TwitchStitchLogo from "../../images/twitchstitch.png";
import MoodMateLogo from "../../images/moodmate.png";
import ProjectDetail from '../projectdetail/projectdetail';
import {Link} from "react-router-dom";


const Project = (props) => {
    return(
        <div className="app">
            <img src={props.projectLogo} alt="" className="appLogo"/>
            <div className="info">
                <div className="desc">
                    {props.projectName}
                </div>
                <Link className="learn" to={`/projectdetail/${props.projectName}`}>Learn More</Link>
                {/* <a className="learn" href="#" target="_blank">Learn More</a> */}
            </div>
        </div>
    )
}


const Projects = () => {
    return(
        <div className="portfolio">
            <div className="title">
                <h1>Portfolio</h1>
            </div>
            <div className="underline" ></div>        
            <div className="content">
                <Project projectLogo={TagWithMeLogo} projectName='TagWithMe'/>
                <Project projectLogo={TwitchStitchLogo} projectName='TwitchStitch'/>
                <Project projectLogo={MoodMateLogo} projectName='MoodMate'/>
            </div>
            {/* <ProjectDetail projectData={projectsData['tagWithMe']}/> */}
        </div> 
    )
}

export default Projects;