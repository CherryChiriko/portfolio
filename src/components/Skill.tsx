import React from 'react'
import { ISkill } from '../interfaces/ISkill'

export default function Skill (props : ISkill) : JSX.Element{
    return(
        <div className=''>
            <p className='mb-1'>{props.name}</p>
            <div className="progress mb-3">
                <div className="progress-bar" role="progressbar"
                style={{width: `${props.level*10}%`}} />
            </div>
        </div>
        
    )
}