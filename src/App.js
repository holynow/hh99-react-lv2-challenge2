import React from 'react'
import ButtonGroup from './component/Button/ButtonGroup'
import InputGroup from './component/Input/InputGroup'
import ModalGroup from './component/Modal/ModalGroup'
import SelectGroup from './component/Select/SelectGroup'
import { StyleSheetManager } from 'styled-components'

const App = () => {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'false' && prop !== 'view'}>
      <ButtonGroup />
      <InputGroup />
      <ModalGroup />
      <SelectGroup />
      </StyleSheetManager>
    </>
  )
}

export default App