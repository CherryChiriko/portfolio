import React from 'react'

import ContactInfo from '../components/ConctactInfo'

import { contactsData } from '../assets/data/contactData'
import Form from '../components/Form'
import { IContact } from '../interfaces/IContact'

export default function Contacts () : JSX.Element {
    const contacts : JSX.Element[] = 
    contactsData.map((contact : IContact) => {
        return (
        <ContactInfo key={contact.id} {...contact}/>
      )})
    return(
        <div className='flex-standard flex-column'>
            <div className='section-header'>
                <h1 className='main-title mx-5 my-0'>Contacts</h1>
            </div>
            <div className='section-body '>
                <div className="row div-contacts">
                    <div className='col-lg-4 col'>
                        {contacts}
                    </div>
                    <div className='col-lg-8 col'>
                        <h4 className='text-bold'>Contact me!</h4>
                        <div className='blue-line'></div>
                        <Form />
                    </div> 
                </div>
                <div className='mt-3'>
                    <p className='soft-text'>This contact form serves as a demonstration and does not have the capability to send messages since it is not possible to share my API key publicly.
                    <br />
                    If you wish to get in touch with me, kindly send a regular email.</p>
                </div>
                
            </div>
        </div>
    )
}