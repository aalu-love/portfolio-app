import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';
import './App.scss'

function App() {
  return (
    <div className='root-wrapper'>
      <Header />
      <div className='section-wrapper'>
        <section className='home'><Home /></section>
        <section className='about'><About /></section>
        <section className='project'><Projects /></section>
        <section className='contact'><Contact /></section>
      </div>
      <div className='home-btn'>
        <a href='#home'>
          <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </a>
      </div>
    </div>
  )
}

export default App
