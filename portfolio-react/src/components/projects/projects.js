import React from 'react';
import './projects.scss';
import TagWithMeLogo from "../../images/tagwithme.png";
import TwitchStitchLogo from "../../images/twitchstitch.png";
import MoodMateLogo from "../../images/moodmate.png";
import ProjectDetail from '../projectdetail/projectdetail';

const projectsData = {
    tagWithMe: {
        projectName: 'TagWithMe',
        projectLogo: TagWithMeLogo,
        projectScreenshots: [TagWithMeLogo, TagWithMeLogo, TagWithMeLogo],
        projectSummary: 'Full stack web application for interacting with users interested in social events.',
        projectRoles: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    },
    twitchStitch: {
        projectName: 'TwitchStitch',
        projectLogo: TwitchStitchLogo,
        projectScreenshots: [TwitchStitchLogo, TwitchStitchLogo, TwitchStitchLogo],
        projectSummary: 'React app to watch multiple Twitch streams simultaneously.',
        projectRoles: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    },
    moodMate: {
        projectName: 'MoodMate',
        projectLogo: MoodMateLogo,
        projectScreenshots: [MoodMateLogo, MoodMateLogo, MoodMateLogo],
        projectSummary: 'Full stack web application for interacting with users interested in social events.',
        projectRoles: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        projectTechnologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        projectFeatures: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ]
    }
}

const Project = (props) => {
    return(
        <div className="app">
            <img src={props.projectLogo} alt="" className="appLogo"/>
            <div className="info">
                <div className="desc">
                    {props.projectName}
                </div>
                <a className="learn" href="#" target="_blank">Learn More</a>
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
                <Project projectLogo={TagWithMeLogo} projectName='TagWithme'/>
                <Project projectLogo={TwitchStitchLogo} projectName='TwitchStitch'/>
                <Project projectLogo={MoodMateLogo} projectName='MoodMate'/>
            </div>
            {/* <ProjectDetail projectData={projectsData['tagWithMe']}/> */}
        </div> 
    )
}

export default Projects;