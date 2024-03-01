import React from 'react'
import Button from '../Button/Button'
import { BtnWrap } from '../Button/ButtonStyle'
import {Dim} from './ModalStyle';
import { ModalTypeOne } from './ModalStyle';

const ButtonModal = ({...props}) => {
  console.log(props);
  return (
    <>
      <Dim />
      <ModalTypeOne>
        <p>닫기와 확인 버튼 2개있고, 외부 영역을 눌러도 모달이 닫히지 않아요</p>
        <BtnWrap>
          <Button onClick={props.onClose} text="닫기"/>
          <Button text="확인" color="primary"/>
        </BtnWrap>
      </ModalTypeOne>
    </>
  )
}

export default ButtonModal