import React from 'react'
import { IForm } from '../interfaces/IForm';
// import emailjs from '@emailjs/browser';

export default function Form () : JSX.Element {
    const [formData, setFormData] = React.useState<IForm>(
        {name: "", company: "", email: "", subject: "", message: ""}
    )

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) : void {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit( event: any ) : void {
        event.preventDefault();
        // emailjs.sendForm()
        // .then((result) => {
        //  // show the user a success message
        // }, (error) => {
        //  // show the user an error
        // });
    }
    return(
        <form onSubmit={handleSubmit} className='form-group'>
            <div className='row my-3 form-column'>
                <div className='col'>
                    <div className='input-group mb-3'>
                    <input type="text" placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    className='form-control bg-dark input-field'/>
                    <input type="text" placeholder="Company"
                    onChange={handleChange}
                    name="company"
                    value={formData.company}
                    className='form-control bg-dark input-field'/>
                </div>
                    <input type="text" placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className='form-control bg-dark input-field mb-3'/>

                    <input type="text" placeholder="Subject"
                    onChange={handleChange}
                    name="subject"
                    value={formData.subject}
                    className='form-control bg-dark input-field'/>
                </div> 
                <div className='col'>
                    <textarea 
                    placeholder="Message"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                    className='form-control bg-dark input-field textarea-input'
                    />
                </div>
            </div>
            
            
            
            <button className='btn bg-dark blue-button d-block'>Submit</button>
        </form>
    )
}