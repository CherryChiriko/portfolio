import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IContact } from '../interfaces/IContact'

export default function ContactInfo (props : IContact) : JSX.Element{
    return(
        <>
        <span className="d-flex align-items-center p-3">
            <FontAwesomeIcon icon={props.icon} className="icon" />
            <div className="ml-auto">
                <p className="text-bold">{props.title}</p>
                <p className="soft-text">{props.info}</p>
            </div>
        </span>
        </>
    )
}