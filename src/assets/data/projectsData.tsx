import calcImg from '../images/react_projects/Calculator.png'
import drumImg from '../images/react_projects/drum-machine.png'
import tenzImg from '../images/react_projects/tenzies.png'
import timerImg from '../images/react_projects/timer.png'
import travelImg from '../images/react_projects/travel-journal.png'
import weatherImg from '../images/react_projects/weather.png'
import mappImg from '../images/angular_projects/mapp/mapp_intro.png'
import socialImg from '../images/angular_projects/pawbook/pawbook_intro.png'
import kwImg from '../images/python_projects/KimWen.png'
import battleshipImg from '../images/python_projects/battleship.png'
import gameOfLifeImg from '../images/python_projects/gameoflife.png'


import  MappDescription from '../../components/descriptions/MappDescription'
import { nanoid } from 'nanoid'

export const projectsData = [    
    {
        id: nanoid(),
        title: "Weather Application",
        image: weatherImg,
        type: 'React',
        link: "https://github.com/CherryChiriko/Weather",
        info: `This weather application lets you choose a city from a predetermined list and displays its current weather. With a user-friendly interface and seamless integration with a weather service API, this application provides accurate and up-to-date weather information. With just a click, you have the option to reload the weather data for a specific city, ensuring you always have the latest updates.
        To enhance the user experience, the application dynamically displays an image associated with the current weather conditions in the header. This visual representation provides a quick and intuitive way to understand the weather at a glance.    
        Behind the scenes, the Weather Application utilizes Redux, a powerful state management technology, to efficiently handle the React states. `
    },
    {
        id: nanoid(),
        title: "Calculator",
        image: calcImg,
        type: 'React',
        link: "https://github.com/CherryChiriko/Personal_projects",
        info: `This calculator utilizes regular expressions (RegEx) to carry out mathematical operations. The interface displays the current operation in yellow, while the last entered number is shown in white.
        To ensure accuracy and validity, the calculator incorporates several checks. Firstly, non-decimal numbers are verified to ensure they do not begin with zero. Additionally, it prevents invalid operator combinations, such as consecutive dots or multiple consecutive multiplications.
        One notable feature of this calculator is its implementation of formula logic. It follows the order of precedence for operators, ensuring that mathematical expressions are evaluated correctly according to standard mathematical rules.`
    },
    {
        id: nanoid(),
        title: "Drum Machine",
        image: drumImg,
        type: 'React',
        link: "https://github.com/CherryChiriko/Personal_projects",
        info: `This drum pad application simulates a virtual drum set. You can trigger drum sounds by either pressing the corresponding keys on your keyboard or clicking the buttons displayed on the screen. Each sound is accompanied by a visual representation within an aqua-colored box.
        One notable feature of this app is the ability to toggle the drum pad on and off. This allows you to control when the drum sounds can be triggered, providing flexibility for your musical experience.
        Additionally, the application provides a volume control feature through a bar. You can adjust the volume level according to your preference, allowing you to customize the sound output to suit your needs.`
    },    
    {
        id: nanoid(),
        title: "Timer",
        image: timerImg,        
        type: 'React',
        link: "https://github.com/CherryChiriko/Personal_projects",
        info: `Introducing a powerful timer application that incorporates the highly effective Pomodoro technique to boost productivity during study or work sessions. This timer is designed to help you maintain focus and increase efficiency.
        The timer follows a structured schedule, with 25-minute sessions dedicated to intense work or study, followed by a 5-minute break to recharge. This cycle is repeated to help you maintain a healthy balance between concentrated effort and rejuvenating breaks.
        To ensure you stay on track, an acoustic sound signals the end of each session, allowing you to seamlessly transition to the next phase. The timer's interface features a circle that visually depicts the progression of time as it decreases, providing a clear visual representation of the remaining time.
        Customization is key, as you have the flexibility to adjust the duration of both the study/work session and the break according to your preferences. If you wish to restart the timer, you can easily do so with a simple click.
        Additionally, the main button serves a dual purpose. If the timer is running, pressing the button will pause it, allowing you to temporarily halt the countdown. Pressing the same button again will resume the timer from where it left off.
        Notably, if you make changes to the session or break length while the timer is running, the updated values will not affect the ongoing timer. This feature ensures that your established rhythm remains intact, and your focus is not disrupted.`
    },
    {
        id: nanoid(),
        title: "Tenzies Game",
        image: tenzImg,
        type: 'React',
        link: "https://github.com/CherryChiriko/Personal_projects",
        info: `This is a dice game called 'Tenzies'. The goal of the game is to roll the dice and try to get all of them to display the same value. To aid you in achieving this, you can choose to hold (or fix) certain dice while rolling the others. The held dice are visually indicated in green.
        The objective is to accomplish the matching result in as few attempts as possible, adding an element of strategy and luck to the game. Once you successfully match all the dice to the same value, a captivating confetti animation will play, celebrating your victory.`
    },
    {
        id: nanoid(),
        title: "Travel Journal",
        image: travelImg,        
        type: 'React',
        link: "https://github.com/CherryChiriko/Personal_projects",
        info: `Travel Journal app, a simple exercise designed to study React routes.`
    },
    {
        id: nanoid(),
        title: "Mapp",
        image: mappImg,        
        type: 'Angular',
        link: "https://github.com/CherryChiriko/mapp",
        info: `This application effectively visualizes clients and consultants on a map, providing essential filtering and search capabilities. Additionally, I implemented features such as importing and exporting search results to enhance the matching process between clients and consultants.`,
        description: <MappDescription />
    },
    {
        id: nanoid(),
        title: "Pawbook",
        image: socialImg,        
        type: 'Angular',
        link: "https://github.com/CherryChiriko/social_app",
        info: `'Pawbook' is a Facebook clone, it represents a social media platform for animals.
        It provides several functionalities such as chat (maximum 3 open chats at a time), ability to post and see friends' posts, seeing the list of friends' and their profiles.`
    },
    {
        id: nanoid(),
        title: "Black Hole evaporation algorithm",
        image: kwImg,        
        type: 'Python',
        link: '',
        info: `The algorithm studies the evaporation of a black hole following the Maximum Mutual Information principle.
        The program calculates which particle from a given set is the one that optimizes the Mutual Information entropy and calculates the new status of the black hole.
        Then, the process is repeated until the black hole is either depleted or reaches an extremal state.`
    },
    {
        id: nanoid(),
        title: "Battleship",
        image: battleshipImg,        
        type: 'Python',
        link: 'https://github.com/CherryChiriko/Personal_projects',
        info: `A simple console battleship game.
        You type the coordinates and the app displays either water, a sunk ship (red cross) or a ship.
        When you sink a ship, the surrounding cells are automatically marked as water.`
    },
    {
        id: nanoid(),
        title: "Game of Life",
        image: gameOfLifeImg,        
        type: 'Python',
        link: 'https://github.com/CherryChiriko/Personal_projects',
        info: `An implementation of game of life.`
    },
]