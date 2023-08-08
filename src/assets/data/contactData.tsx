import {faLocationDot, faMobileScreen, faEnvelope} 
from '@fortawesome/free-solid-svg-icons'
import { IContact } from '../../interfaces/IContact'

export const contactsData : IContact[] = [
    {
        id: 0,
        icon: faLocationDot,
        title: "Paris, France",
        info: "Willing to relocate"
    },
    {
        id: 1,        
        icon: faMobileScreen,
        title: "+39 393 8407081"
    },
    {
        id: 2,        
        icon: faEnvelope,
        title: "sofia.digennarox@gmail.com"
    },
]

