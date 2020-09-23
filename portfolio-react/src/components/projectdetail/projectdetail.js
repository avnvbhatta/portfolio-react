import React from 'react';
import './projectdetail.scss';
import TagWithMeLogo from "../../images/tagwithme.png";
import TwitchStitchLogo from "../../images/twitchstitch.png";
import MoodMateLogo from "../../images/moodmate.png";
import {
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const projectsData = {
    TagWithMe: {
        projectName: 'TagWithMe',
        projectLogo: TagWithMeLogo,
        projectScreenshots: [TagWithMeLogo, TagWithMeLogo, TagWithMeLogo],
        projectSummary: 'Full stack web application for interacting with users interested in social events.',
        projectScopes: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    },
    TwitchStitch: {
        projectName: 'TwitchStitch',
        projectLogo: TwitchStitchLogo,
        projectScreenshots: [TwitchStitchLogo, TwitchStitchLogo, TwitchStitchLogo],
        projectSummary: 'React app to watch multiple Twitch streams simultaneously.',
        projectScopes: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    },
    MoodMate: {
        projectName: 'MoodMate',
        projectLogo: MoodMateLogo,
        projectScreenshots: [MoodMateLogo, MoodMateLogo, MoodMateLogo],
        projectSummary: 'Full stack web application for interacting with users interested in social events.',
        projectScopes: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    }
}

const ProjectDetail = () => {
    let { projectName } = useParams();
    const projectData = projectsData[`${projectName}`]
    return ( 
        <div className="container">
            <h1>{projectData.projectName}</h1>
            <div className="underline"></div>
            <p className="summary">
                {projectData.projectSummary}
            </p>
            <div className="content">
                <div className="left">
                    <Carousel className="carousel" showThumbs={false}  infiniteLoop>
                        {projectData.projectScreenshots && projectData.projectScreenshots.map(screenshot => {
                            return (
                                <div key="asd">
                                    <img src={screenshot} />
                                </div>
                            )
                        })}
                       
                        
                    </Carousel>
                </div>
                <div className="right">
                    {/* <h2>{projectData.projectName}</h2> */}
                    
                    <h3>Scope</h3>
                    <div className="roles">
                        {projectData.projectScopes && projectData.projectScopes.map(role => {
                            return(
                            <div className="role" key={role}>{role}</div>
                            )
                        })}
                    </div>
                    <h3>Technologies</h3>
                    <div className="technologies">
                        {projectData.projectTechnologies && projectData.projectTechnologies.map(technology => {
                            return(
                                <div className="technology" key={technology}>{technology}</div>
                            )
                        })}
                    </div>
                    <h3>Features</h3>
                    <ul>
                        {projectData.projectFeatures && projectData.projectFeatures.map(feature=>{
                            return(
                            <li key={feature}>{feature}</li>
                            )
                        })}
                     </ul>
                    <div className="buttons">
                        <a className="button" href="#"  target="_blank">View Demo</a>
                        <a className="button" href="#"  target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetail;