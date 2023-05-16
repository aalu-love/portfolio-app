import Typewriter from 'typewriter-effect';
import Terminal from '../../components/terminal';
import './index.scss';

function Home() {
    const linkdin = 'https://www.linkedin.com/in/sanju-bodra-568a801a7/';
    const resume = 'https://drive.google.com/file/d/1z9P2s4ql79WjtIcJgY7bNtbK0F1I4ZJ3/view?usp=sharing';

    return (
        <div className="home-wrapper" id='home'>
            <h4>sanju@kali:~/home$ Hi there,</h4>
            sanju@kali:~/home$ run name.sh<h2>My name is <p className='text'><a className='myname' href={linkdin}>#SANJU BODRA</a></p></h2>
            sanju@kali:~/home$ run tech.sh <br></br><h5>I am a
                <Typewriter
                    options={{
                        strings: ['Full Satck Developer', 'Freelancer', 'Data Analyst', 'Ethical Hacker'],
                        autoStart: true,
                        loop: true,
                        cursor: '█',
                    }}
                />
            </h5>
            <Terminal />
            <div className='btn-conatiner'>
                <button className='btn btn-filled link'><a href='#contact'>#get_in_touch</a></button>
                <button className='btn' onClick={() => window.open(resume, '_blank')}>#resume</button>
            </div>
            <div className='hologram-wrapper glitch'>
                <div className="hologram">
                    <div className="hologram__content">
                        <div className="hologram__face hologram__face--front"></div>
                        <div className="hologram__face hologram__face--back"></div>
                        <div className="hologram__face hologram__face--right"></div>
                        <div className="hologram__face hologram__face--left"></div>
                        <div className="hologram__face hologram__face--top"></div>
                        <div className="hologram__face hologram__face--bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home