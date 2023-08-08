import angularImg from '../certificates/angular.png'
import htmlImg from '../certificates/responsive_web_design.png'
import feImg from '../certificates/frontend_development_libraries.png'
import reactImg from '../certificates/reactJS.png'
import jsImg from '../certificates/JS_algorithms.png'
import { ICertificate } from '../../interfaces/ICertificate'

export const certificatesData : ICertificate[] = [
    {
        id: 0,
        name: "Angular 7",
        provider: 'ALTEN Italia',
        certificate: angularImg
    },
    {
        id: 3,
        name: "ReactJS",
        provider: 'ALTEN Italia',
        certificate: reactImg
    },
    {
        id: 1,        
        name: "Responsive Web Design",
        provider: 'freecodecamp',
        certificate: htmlImg
    },
    {
        id: 4,        
        name: "JavaScript Algorithms and Data Structures",
        provider: 'freecodecamp',
        certificate: jsImg
    },
    {
        id: 2,        
        name: "Frontend Development Libraries",
        provider: 'freecodecamp',
        certificate: feImg
    },
]

