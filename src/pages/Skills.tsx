import React from 'react'
import './Skills.css'
import Skill from '../components/Skill'
import { skillsData } from '../assets/data/skillsData'
import { interestsData } from '../assets/data/interestsData';
import Interests from '../components/Interests';
import { certificatesData } from '../assets/data/certificatesData';
import Certificates from '../components/Certificates';
import { ISkill } from '../interfaces/ISkill';
import { IInterest } from '../interfaces/IInterest';
import { ICertificate } from '../interfaces/ICertificate';

export default function Skills () : JSX.Element{
    function makeSkill(type: string) : JSX.Element[] {
        return skillsData
        .filter((skill : ISkill) => skill.type === type)
        .map((skill : ISkill) => <Skill key={skill.id} {...skill} />);
    }
    const frontEndSkills : JSX.Element[] = makeSkill('FE');
    const backEndSkills  : JSX.Element[] = makeSkill('BE');
    const languageSkills : JSX.Element[] = makeSkill('L');

    const interests : JSX.Element[] = 
    interestsData.map( (interest : IInterest) => (
        <Interests key={interest.id} {...interest} />
    ))

    const certificates : JSX.Element[] = 
    certificatesData.map( (certificate : ICertificate) => (
        <Certificates key={certificate.id} {...certificate} />
    ))
    return(
        <div className='flex-standard flex-column'>
            <div className='section-header'>
                <h1 className='main-title mx-5 my-0'>Skills</h1>
            </div>
            <div className='section-body'>
                <div className='row'>
                    <div className='col'>
                        <h4>Front-end skills</h4>
                        <div className='blue-line'></div>
                        {frontEndSkills}
                        <h4 className='skill-title'>Back-end skills</h4>
                        <div className='blue-line'></div>
                        {backEndSkills}
                    </div>
                    <div className='col ms-4'>
                        <h4>Language skills</h4>
                        <div className='blue-line'></div>
                        {languageSkills}
                        <h4 className='skill-title'>Interests</h4>
                        <div className='blue-line'></div>
                        <div className='d-flex flex-row interests-div'>
                            {interests}
                        </div>
                    </div>
                </div>
                <div className='row skill-title'>
                    <h4 className='text-bold'>Certificates</h4>
                    <div className='blue-line'></div>
                    <ul>
                        {certificates}
                    </ul>
                </div>
            </div>
        </div>
    )
}