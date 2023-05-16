import Attendance from '../assets/images/attendance_management_system.png';
import Wordle from '../assets/images/wordle.png';
import SpaceFighter from '../assets/images/space_fighter.png';
import Sorting from '../assets/images/sorting.png';
import Music from '../assets/images/music.png';
import Game from '../assets/images/game.png';
const projectDetails = [
    {
        id: 1,
        title: 'Attendance Management System',
        organization: 'TCS',
        description: `The Attendance Management System is a service that provides the user to manage there attendance by 
                        collecting the user's information like location information and the depratment information. 
                        If the user is in the range of his/her department he/she will able to punch the attendance.`,
        image: Attendance,
        languages: ['ASP.NET', 'HTML', 'CSS', 'JavaScript', 'SQL Server'],
        link: 'https://attendancemanager.bsite.net/'
    },
    {
        id: 2,
        title: 'Wordle Clone',
        organization: 'Personal Project',
        description: `A popular game based on the words that we have to guess the today word of the day.`,
        image: Wordle,
        languages: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://aalu-love.github.io/Wordle/',
    },
    {
        id: 3,
        title: 'E-Learning ',
        organization: 'TCS',
        description: `The E-Learning Application provides the services to the users to learn and ask doubt and questions.
                      The application is really help in pandamics and other situations`,
        languages: ['HTML', 'CSS', 'JavaScript', 'MYSQL'],
    },
    {
        id: 4,
        title: 'Employee Management System',
        organization: 'TCS',
        description: `The Application help the employees to manage their accounts`,
        languages: ['ASP.NET', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 5,
        title: 'Space Fighter',
        organization: 'Personal Project',
        description: `A Simple JS game where user fight the alien incoming.`,
        image: SpaceFighter,
        languages: ['HTML', 'CSS', 'JavaScript', 'p5.js'],
        link: 'https://aalu-love.github.io/Space-Fighter/'
    },
    {
        id: 6,
        title: 'Sorting Visualazier',
        organization: 'Personal Project',
        description: `A web application for visualizing all sorting algorithms.`,
        image: Sorting,
        languages: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://aalu-love.github.io/Sorting-Visualizer/'
    },
    {
        id: 7,
        title: 'Music Visualizer',
        organization: 'Personal Project',
        description: `A Simple JS application to visualize music.`,
        image: Music,
        languages: ['HTML', 'CSS', 'JavaScript', 'p5.js'],
        link: 'https://aalu-love.github.io/Music-Visualizer/'
    },
    {
        id: 8,
        title: 'Web Puzzel Game',
        organization: 'Personal Project',
        image: Game,
        languages: ['nodejs', 'HTML', 'CSS', 'JavaScript'],
        link: 'https://filthy-long-johns-fish.cyclic.app/'
    },
];

export default projectDetails;