import propTypes from 'prop-types'
import s from './modal.module.css'

const Modal = (handleCloseModal, imgModal) => {
    return (
        <div onClick={handleCloseModal} className={s.modalContainer}> 
            <img className={s.modalImg} src={imgModal}/>
             </div>
    )
}

Modal.propTypes = {
    imgModal: propTypes.string,
    handleCloseModal: propTypes.func
}
export default Modal
