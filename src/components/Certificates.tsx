import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

export default function Certificates (props : any){
    return(
        <li className='d-flex flex-row justify-content-between'>  
            <div className='col'>
                {props.name}
            </div>     
            <div className='col ms-4 soft-text'>
                {props.provider}
            </div>
            <div className='col'>
            <button className='btn blue-button li-button my-1'>
                <FontAwesomeIcon icon={faDownload}/>
            </button>
            </div>            
        </li>
        
    )
}