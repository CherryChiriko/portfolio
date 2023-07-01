import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../../assets/data/projectsData';
// import { projectsData } from '.../assets/projectsData'

export default function ProjectInfo (){
    const { id } = useParams();                                         // Get the id from the route params
    const project = projectsData.find(project => project.id === id);    // Find the project based on id in projectsData

    if (!project) {
        // Handle the case when project is not found
        return <div>Project not found</div>; 
    }

    return (
        <div className='section-body'>
            <div className='row'>
                <div className='col'>
                    <h4 className='text-bold'>{project.title}</h4>
                    <div className='blue-line'></div>
                    <img src={project.image} alt='project'
                    className='project-img photo-standard rounded'/>
                </div>
                <div className='col'>
                    <p>{project.info}</p>
                    <Link to={project.link}>
                    <button className='btn blue-button'>Go to page</button>
                    </Link>
                </div>
            </div>
            
        </div>
             
    );
}
// return(
    //     <div className='portfolio-div flex-column'>
    //         <div className='section-header'>
    //             <h1 className='main-title mx-5 my-0'>Portfolio</h1>
    //         </div>
    //         <div className='section-body'>
    //             <h4 className='text-bold'>React projects</h4>
    //             <div className='blue-line'></div>
    //             {/* {projects} */}
    //         </div>
    //         <button onClick={redirect}>Go to page</button>
    //     </div>
    // )
// }