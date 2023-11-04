import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: grey;
width: 308px;
height: 240px;
position: absolute;
top: 50px;
right: 0;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;
  &:hover {
    color: red;
  }
`;