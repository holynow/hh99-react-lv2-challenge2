import styled, { css } from 'styled-components'

export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`
export const ButtonStyle = styled.button`
    width: 130px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    background: ${props=>( 
        props.border === 'true' ? 'white' :
        props.border !== 'true' && props.color === 'primary' ? 'var(--primary-color)' : 'var(--secondary-color)'
        )};
    border: 3px solid ${props=>(
        props.border !== 'true' ? 'transparent' :
        props.color === 'primary' ? 'var(--primary-color)' : 'var(--secondary-color)'
        )};
    font-size: 14px;
    font-weight: 800;
    color: ${props=>( 
         props.border === 'true' && props.color !== 'primary' ? 'var(--point-secondary-color)' : 'black'
        )};
    cursor: pointer;
    ${({size})=>{
        switch(size) {
            case 'large':
                return css`
                    min-height: 60px;
                    min-width: 250px;
                `;
            case 'medium':
                return css`
                    min-height: 55px;
                    min-width: 160px;
                `
            default:
        }
    }}
    &:active {
        opacity: .8;
    }
`