import React from 'react';
import './projectdetail.scss';

const ProjectDetail = (props) => {
    const projectData = props.projectData;
    return ( 
        <div className="container">
            <h1>Projects</h1>
            <div className="underline" ></div>  

            <div className="content">
                <div className="left">
                    <div className="splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                {projectData.projectScreenshots && projectData.projectScreenshots.map(screenshot => {
                                    return(
                                        <li className="splide__slide" key={projectData.projectName}>
                                            <img src={screenshot} alt=""/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h2>{projectData.projectName}</h2>
                    <p className="summary">
                        {projectData.projectSummary}
                    </p>
                    <h3>Roles</h3>
                    <div className="roles">
                        {projectData.projectRoles && projectData.projectRoles.map(role => {
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