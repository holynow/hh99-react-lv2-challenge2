import React from 'react'
import {Dim, ModalTypeTwo} from './ModalStyle';
import { IoIosCloseCircle } from "react-icons/io";



const BasicModal = ({...props}) => {
  return (
    <>
      <Dim onClick={props.onClose}/>
      <ModalTypeTwo>
        <p>닫기 버튼 1개가 있고 외부영역을 누르면 모달이 닫혀요</p>
        <button  onClick={props.onClose}>
            <IoIosCloseCircle size="40"/>
        </button>
      </ModalTypeTwo>
    </>
  )
}

export default BasicModal