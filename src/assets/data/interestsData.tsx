import {faCat, faEarthAmericas, faUtensils} 
from '@fortawesome/free-solid-svg-icons'
import { IInterest } from '../../interfaces/IInterest'

export const interestsData : IInterest[] = [
    {
        id: 0,
        icon: faCat,
        name: "Cats"
    },
    {
        id: 1,        
        icon: faEarthAmericas,
        name: "Traveling"
    },
    {
        id: 2,        
        icon: faUtensils,
        name: "Cooking"
    },
]

