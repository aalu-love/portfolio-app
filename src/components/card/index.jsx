import { useState } from 'react';
import Modal from '../rodal/rodal.jsx';
import './index.scss';

function Card(props) {
    const { title = '', description = '', languages = [], organization = '' } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='card'>
            <div className="conatiner">
                <div className="card-title">
                    <h2>{title}</h2>
                    <h6>{organization}</h6>
                </div>
                <div className="card-description cutoff-text">
                    <spna><p>{description}</p></spna>
                </div>
                <spna className="language-used">
                    <h5>Language Used: {languages.join(', ')}</h5>
                    <button onClick={openModal} className="btn btn-filled">OPEN</button>
                </spna>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} {...props} />
        </div>
    )
}

export default Card;