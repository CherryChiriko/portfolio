import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectCard (props : any){
    const maxTextLength : number = 150;
    const infoText : string = 
        props.info.length <= maxTextLength ? 
            props.info :
            props.info.slice(0, maxTextLength) + '...'
    return(
        <Link to={`${props.id}`} >
            <div className='project-card rounded p-3 m-3'>
                <p className="text-bold">{props.title}</p>
                <img src={props.image} alt="project" 
                className='project-photo photo-standard rounded'/>
                <div className="card-body flex-standard">
                    <p className="soft-text">{infoText}</p>
                </div>
            </div>
        </Link>
        
    )
}