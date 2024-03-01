import React from 'react'
import { Title } from '../Common'
import Select from './Select'
import { SelectWrap, SelectSection } from './SelectStyle'

const SelectGroup = () => {
  return (
    <>
      <Title>Select</Title>
      <SelectWrap>
        <SelectSection>
          <Select/>
        </SelectSection>
        <SelectSection>
          <Select/>
        </SelectSection>
      </SelectWrap>
        
    </>
  )
}

export default SelectGroup