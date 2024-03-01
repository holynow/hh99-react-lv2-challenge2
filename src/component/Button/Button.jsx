import React, { useState } from 'react'
import { ButtonStyle } from './ButtonStyle'
import { createPortal } from 'react-dom'
import ButtonModal from '../Modal/ButtonModal'
import BasicModal from '../Modal/BasicModal'


const Button = ({...props}) => {
  const MODAL_ROOT = document.getElementById('root');
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const BtnClickHandler = ()=>{
    switch(props.func){
      case "openModal-1":
        return setFirstModalOpen(true);
      case "openModal-2":
        return setSecondModalOpen(true);
      default:
    }
  }
  const closeModal = () => {
    setFirstModalOpen(false);
    setSecondModalOpen(false);
  }
  const firstModalHandler = () =>{
    return firstModalOpen &&
      createPortal(
        <ButtonModal onClose={closeModal} />,
        MODAL_ROOT
      )
  }
  const secondModalHandler = () =>{
    return secondModalOpen &&
      createPortal(
        <BasicModal onClose={closeModal} />,
        MODAL_ROOT
      )
  }
  return (
    <>
        <ButtonStyle onClick={BtnClickHandler} {...props}>{props.text}</ButtonStyle>
        {firstModalHandler()}
        {secondModalHandler()}
        
    </>
  )
}


export default Button
