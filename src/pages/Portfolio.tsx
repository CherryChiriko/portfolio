import React, { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../assets/data/projectsData'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio (){
    
    function makeProject(type: string) : JSX.Element[] {
        return projectsData
        .filter(project => project.type === type)
        .map(project => <ProjectCard key={project.id} {...project} />);
    }
    const reactProjects = makeProject('React');
    const angularProjects = makeProject('Angular');
    const pythonProjects = makeProject('Python');

    const ref = useRef<HTMLDivElement>(null);
    // const scroll = (scrollOffset: number) => {
    //     if (ref.current) {
    //       ref.current.scrollLeft += scrollOffset;
    //     }
    //   };
      
    return(
        <div className='section-body'>

            <h4 className='text-bold mt-2'>Angular projects</h4>
            <div className='blue-line'></div>
            <div className='d-flex flex-row' ref={ref}>
                <div className='d-flex flex-row projects-div'>
                    {angularProjects}
                </div>
                {/* <button className='scroll-icon rounded' onClick={() => scroll(20)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button> */}
            </div>

            <h4 className='text-bold'>React projects</h4>
            <div className='blue-line'></div>
            <div className='d-flex flex-row' ref={ref}>
                <div className='d-flex flex-row projects-div'>
                    {reactProjects}
                </div>
                {/* <button className='scroll-icon rounded' onClick={() => scroll(20)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button> */}
            </div>
            
            <h4 className='text-bold mt-2'>Python projects</h4>
            <div className='blue-line'></div>
            <div className='d-flex flex-row' ref={ref}>
                <div className='d-flex flex-row projects-div'>
                    {pythonProjects}
                </div>
                {/* <button className='scroll-icon rounded' onClick={() => scroll(20)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button> */}
            </div>
        </div>
    )
}