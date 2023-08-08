import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IInterest } from '../interfaces/IInterest'

export default function Interests (props : IInterest) : JSX.Element{
    return(
        <div className='flex-standard flex-column'>       
            <div className="mb-3">
                <FontAwesomeIcon icon={props.icon} className='interests-icon'/>
            </div>
            <p className='mb-1'>{props.name}</p>
        </div>
        
    )
}