import React from 'react'
import { Title } from '../Common'
import Button from '../Button/Button'
import { BtnWrap } from '../Button/ButtonStyle'

const ModalGroup = () => {
  return (
    <>
        <Title>Modal</Title>
        <BtnWrap>
            <Button func="openModal-1" text="open modal" color="primary"/>
            <Button func="openModal-2" text="open modal" border="true" size="large"/>
        </BtnWrap>
    </>
  )
}

export default ModalGroup