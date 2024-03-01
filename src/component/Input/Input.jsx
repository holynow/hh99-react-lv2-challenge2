import React, { useState } from 'react'
import Button from '../Button/Button'
import { InputWrap } from './InputStyle';

const Input = ({...props}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const handleInputChange = (e) => {
        // 입력된 값에서 숫자맛 추출
        const inputValue = e.target.value.replace(/[^\d]/g, '');
        setPrice(inputValue === '' ? '' : Number(inputValue));
    };
    // 세 자리마다 콤마
    const addCommas = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  return (
    <InputWrap>
        <label htmlFor="name">제품명
            <input id='name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </label>
        <label htmlFor="price">가격
            <input id='price' type="text" value={addCommas(price)} onChange={handleInputChange}/>
        </label>
        <Button onClick={()=>{
            alert(`{ name: ${name}, price: ${price} }`)
        }} color="primary" text="저장"/>
    </InputWrap>
  )
}

export default Input