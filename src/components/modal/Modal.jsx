import propTypes from 'prop-types';
import s from './modal.module.css';

const Modal = ({imgModal, handleCloseModal}) => {

  return (
    <div onClick={handleCloseModal} className={s.modalContainer}>
      <img className={s.modalImg} src={imgModal} alt="modal" />
    </div>
  );
};

Modal.propTypes = {
  imgModal: propTypes.string,
  handleCloseModal: propTypes.func,
};
export default Modal;
