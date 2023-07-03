import React from 'react'
import { useParams } from 'react-router-dom';
import { projectsData } from '../../assets/data/projectsData';

export default function ProjectDescription (){
    const { id } = useParams();                                         // Get the id from the route params
    const project = projectsData.find(project => project.id === id);    // Find the project based on id in projectsData

    if (!project) {
        // Handle the case when project is not found
        return <div>Project not found</div>; 
    }

    return (
        <div className='section-body'>
                    <h4 className='text-bold'>{project.title}</h4>
                    <div className='blue-line'></div>
            <div>
                {project.description}
            </div>
        </div>
             
    );
}