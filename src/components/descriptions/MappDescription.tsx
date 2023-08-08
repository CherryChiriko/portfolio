import mapp1 from '../../assets/images/angular_projects/mapp/mapp.png'
import mappActive from '../../assets/images/angular_projects/mapp/mapp_activeclient.png'
import mappConsultant from '../../assets/images/angular_projects/mapp/mapp_consultant.png'
import mappClient from '../../assets/images/angular_projects/mapp/mapp_client.png'
import mappFilter from '../../assets/images/angular_projects/mapp/mapp_filter.png'

export default function MappDescription() : JSX.Element {
    const text1 : string =  `
    To begin, users can upload an Excel file containing client and consultant data to the application. Please note that only mock data is utilized in order to protect sensitive information from being disclosed.
    
    Once uploaded, the clients and consultants are displayed on the map. Consultants are represented by blue markers, while inactive clients are marked in red and active clients in yellow. By clicking on a marker, users can access relevant information about the clients and consultants. For clients, the activity state can be toggled on or off to indicate whether they are actively hiring.
    
    `
    const text2 : string = `Furthermore, users can save consultants to a list directly from the same window, which can later be exported. Various filters are available, including the option to toggle the display of active clients or specialists above the map. Additionally, a dedicated "Filter" window allows for more specialized searches based on relevant criteria.
    
    The application also supports adding new clients or specialists directly within the app, eliminating the need for manual data entry into the Excel file and ensuring data uniformity. All fields are designed to adhere to standard formats, minimizing the chances of human errors or misspellings.
    
    The color scheme employed in this app adheres to the standard colors of the company Alten.
    `
    return (
        <div>
            <div className='flex-standard'>
            <img src={mapp1} alt='head' className='image-description mb-3'/>
            </div>
            <p>{text1}</p>
            <div className='row d-flex justify-content-evenly'>
                <div className='col'>
                    <img src={mappConsultant} alt='active client' className='small-image mb-3'/>
                </div>
                <div className='col'>
                    <img src={mappClient} alt='active client' className='small-image mb-3'/>
                </div>
                <div className='col'>
                    <img src={mappActive} alt='active client' className='small-image mb-3'/>
                </div>
                <p>{text2}</p>
                <img src={mappFilter} alt='filter' className='large-image'/>
            </div>
            </div>
    )
}