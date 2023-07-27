import propTypes from 'prop-types';
import s from './modal.module.css';
import { Component } from 'react';

class Modal extends Component{
  handleClose = (e) =>{
    if (e.code === 'Escape') {
      this.props.handleCloseModal();
    }
  }
  componentDidMount(){
  window.addEventListener("keydown",this.handleClose)
  }
  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleClose)
  }
  render(){
    return (
      <div  className={s.modalContainer}>
        <img className={s.modalImg} src={this.props.imgModal} alt="modal" />
      </div>
    )
  }
}

export default Modal;
