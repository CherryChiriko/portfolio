import React from 'react'
import photo from '../assets/images/foto.png';
import cv from '../assets/SofiaDiGennaro_CV.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    function handleDownload() {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'SofiaDiGennaro_CV.png';
        link.click();
    }
    const navigate = useNavigate();
    return(
        <div className="flex-standard home-div">
            <img src={photo} alt="Me" 
            className="home-photo rounded"></img>
            <div className="home-description">
                <p className='soft-text'>Software Developer</p>
                <h1 className='main-title'>Sofia Di Gennaro</h1>
                <p>
                Highly motivated and dedicated professional with a strong background in theoretical physics, transitioning into programming with a focus on frontend development. Equipped with a solid foundation in scientific principles and analytical thinking, I am driven by a passion for problem-solving and creating innovative software solutions. Additionally, I possess a keen interest in foreign languages and thrive in international environments.
                </p>
                <div className="row flex-standard">
                    <button className="btn bg-dark blue-button mx-4"
                    onClick={handleDownload}>Curriculum</button>
                    <button className="btn bg-dark blue-button mx-4"
                    onClick={() => navigate('/contacts')}>Contact</button>
                </div>
            </div> 
        </div>
    )
}