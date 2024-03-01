import styled from "styled-components";

export const InputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    color: #fff;
    font-weight: 800;
    font-size: 20px;
    & input {
        width: 150px;
        height: 40px;
        margin-left:10px;
        padding: 5px 10px;
        font-size: 20px;
        line-height: 40px;
        color: #fff;
        outline: none;
        border-bottom: 2px solid #555;
        transition: all .4s ease-in-out;
        &:focus {
            width: 230px;
            border-color: var(--primary-color);
        }
    }
`