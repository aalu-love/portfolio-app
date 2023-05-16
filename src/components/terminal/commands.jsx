import Typewriter from "typewriter-effect";

function Command({ command }) {
    if (command.slice(8, command.length) === '.sh') {
        const cmd = command.slice(4);
        switch (cmd) {
            case 'tech.sh':
                return (<h5>I am a
                    <Typewriter
                        options={{
                            strings: ['Full Satck Developer', 'Freelancer', 'Data Analyst', 'Ethical Hacker'],
                            autoStart: true,
                            loop: true,
                            cursor: '█',
                        }}
                    />
                </h5>
                )
            case 'name.sh':
                return <h2>My name is
                    <p className='text'>
                        <a className='myname' href='https://www.linkedin.com/in/sanju-bodra-568a801a7/'>
                            #SANJU BODRA
                        </a>
                    </p>
                </h2>;
        }
    } else {
        switch (command) {
            case 'ls':
                return 'name.sh tech.sh';
        }
    }
}

export default Command;