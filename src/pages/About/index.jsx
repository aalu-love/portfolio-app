import {
    HTML5, PYTHON, NODEJS,
    REACT, MONGODB,
    JAVASCRIPT, JAVA,
    MYSQL, GIT, FLUTTER
} from '../../assets/Programming_Icon';
import './index.scss';

function About() {
    const skills_known = [HTML5, PYTHON, NODEJS, REACT, MONGODB, JAVASCRIPT, JAVA, MYSQL, GIT, FLUTTER];
    return (
        <div className="about-wrapper" id='about'>
            <h1>{`> `}About</h1>
            <h3>Hi there,</h3>
            <p style={{ fontSize: '1.5rem' }}>
                Hello, My name is Sanju Bodra. I&apos;am a Software Engineer from Jamshedpur, Jharkhand, India.
                I love working on a variety of technologies including Web Development, Mobile App Development and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
            </p>
            <div className='technical-skill'>
                <h4>Technical Skill</h4>
                <ul>
                    {skills_known?.map(skill => (
                        <img className='skill-image' key={skill+'a'} src={skill} alt='#' />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About;
