import styled from 'styled-components'


export const Form = styled.form`
justify-content: space-between;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`

export const Input = styled.input`
border: 0;
    color: #000;
    height: 30px;
    
    width: 310px;
    font-size: 12px;
    text-transform: capitalize;
   
   padding-bottom: 15px;
    letter-spacing: 1px;
    border-radius: 5px 0 0 5px;
`

export const Button = styled.button`
background-color: #121212;
    bottom: auto;
    height: 46px;
    box-sizing: border-box;
    border: none;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 0 4px 4px 0;
    vertical-align: top;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
`