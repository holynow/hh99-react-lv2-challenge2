import React from 'react'
import Button from './Button';
import { BtnWrap } from './ButtonStyle';
import { Title } from '../Common';

const ButtonGroup = () => {
    
  return (
    <>
        <Title>Button</Title>
        <BtnWrap>
            <Button onClick={()=>{alert('버튼 만들었습니다.')}} text='Large Primary Button 🏈' border="true" color="primary" size="large"/>
            <Button text='Medium' color="primary" size="medium"/>
            <Button text='Small' color="primary"/>
        </BtnWrap>
        <BtnWrap>
            <Button onClick={()=>{prompt('힘드시나요?', '말로 다 할수 없죠')}} text='Large Nagative Button 🎱' border="true" size="large"/>
            <Button text='Medium' size="medium"/>
            <Button text='Small'/>
        </BtnWrap>
    </>
  )
}


export default ButtonGroup

