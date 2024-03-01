import styled from "styled-components";


export const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.6);
  z-index: 10;
`

export const ModalTypeOne = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 480px;
  min-height: 300px;
  padding: 40px 30px 90px;
  background: #fff;
  border-radius: 10px;
  z-index: 20;
  & div {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`
export const ModalTypeTwo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  padding: 60px 30px 90px;
  background: #fff;
  border-radius: 10px;
  z-index: 20;
  font-size: 18px;
  & button {
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`