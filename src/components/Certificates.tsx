import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { ICertificate } from '../interfaces/ICertificate';

export default function Certificates (props : ICertificate) : JSX.Element{
    function handleDownload() : void {
        const link = document.createElement('a');
        link.href = props.certificate;
        link.download = `${props.name}.png`;
        link.click();
    }

    return(
        <li className='d-flex flex-row justify-content-between'>  
            <div className='col'>
                {props.name}
            </div>     
            <div className='col ms-4 soft-text'>
                {props.provider}
            </div>
            <div className='col'>
            <button className='btn blue-button li-button my-1'
            onClick={handleDownload}>
                <FontAwesomeIcon icon={faDownload}/>
            </button>
            </div>            
        </li>
        
    )
}