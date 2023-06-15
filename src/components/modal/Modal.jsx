import s from './modal.module.css'

const Modal = (props) => {
    return (
        <div className={s.modalContainer}> 
            <img className={s.modalImg} src="https://pixabay.com/get/g7d1264145034a9775c204a297481463e7a72752412c6477b3e34364a1fca087d4ca1ded5891141787d7516fbcb92c818ff7a451086684cbe6e74af1a5ba79a86_1280.jpg"/>
        </div>
    )
} 
export default Modal