import styled from "styled-components";

export const SelectWrap = styled.div`
    display: flex;
    gap: 20px;
    border: 1px solid #fff;
    position: relative;
    padding: 0 30px;

    `
export const SelectSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 200px;
    width: 400px;
    overflow: hidden;
    & ul {
        box-shadow: 5px 5px 15px rgba(0,0,0,.4);
        position: absolute;
        top: calc(127.5px - 30px);
        width: inherit;
        z-index: 10;
    }
    &+div {
        & ul {
            position: inherit;
        }
    }
`
export const SelectBtn = styled.button`
    position: relative;
    padding: 10px 0;
    font-size: 30px;
    width: 100%;
    border-bottom: 1px solid #fff;
    color: #fff;
    &:after {
        content: '👇🏻';
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        font-size:25px
    }
`
export const SelectedList = styled.li`
    display: ${({view})=>{
        return view ? "block" : "none";
    }};
    padding: 20px;
    color: #fff;
    text-align: center;
    background: #22222e;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: var(--primary-color);
        color: #22222e;
    }
`