import styled from 'styled-components'

export const Button = styled.button`
width: 400px;
background-color: teal;
color: ${props => props.theme.colors.text};

`

export const Wrapper = styled.div`
border: ${props => props.theme.borders.phonebook};

`