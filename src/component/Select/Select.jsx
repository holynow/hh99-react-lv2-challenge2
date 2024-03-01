import React, { useState, useRef, useEffect } from 'react'
import { SelectBtn, SelectedList } from './SelectStyle';

const Select = () => {
    const [selectBtn, setSelectBtn] = useState('리액트');
    const selectList = ["리액트", '자바', '스프링', '자바스크립트'];
    const [view, setView] = useState(false);
    const onSelectList = () => setView(!view)
    const selectClickHandler = (item) => {
        setSelectBtn(item)
        setView(false)
    };
   
    return (
        <>
            <SelectBtn onClick={onSelectList} onBlur={()=>setView(false)}>{selectBtn}</SelectBtn>
            <ul>
                {selectList.map((item, index) => {
                    return (
                        <SelectedList key={index} onMouseDown={() => selectClickHandler(item)} view={view}>{item}</SelectedList>
                    )
                })}
            </ul>
        </>
    )
}

export default Select