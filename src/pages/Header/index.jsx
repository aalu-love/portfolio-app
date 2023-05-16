import './index.scss';

function Header() {
    return (
        <nav className='navbar-wrapper' id='home'>
            <div className='header-wrapper'>
                <ul className='link-container'>
                    <li className="list-item"><a href='#home'><ion-icon name="chevron-forward-outline"></ion-icon>Home</a></li>
                    <li className="list-item"><a href='#about'><ion-icon name="chevron-forward-outline"></ion-icon>About</a></li>
                    <li className="list-item"><a href='#project'><ion-icon name="chevron-forward-outline"></ion-icon>Projects</a></li>
                    <li className="list-item"><a href='#contact'><ion-icon name="chevron-forward-outline"></ion-icon>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;