import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './index.scss';

function Modal(props) {
    const { image = '', title = '', languages = [], description = '', link, isOpen, closeModal } = props;
    return (
        <>
            <Rodal className="rodal-wrapper" width={500} height={500} visible={isOpen} onClose={closeModal}>
                {image && <img src={image} alt='#' />}
                <h4>{title}</h4>
                <div className='rodal-description'>{description}</div>
                <span className='language-used'>
                    <h5>Language Used: {languages.join(', ')}</h5>
                </span>
                {link && <h5 className='link'>Link: <a target="_blank" rel="noopener noreferrer" href={link || '#'}>{link}</a></h5>}
            </Rodal>
        </>
    )
}

export default Modal;