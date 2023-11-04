import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Section = styled.section`
width: 1280px;
padding-left: 100px;
padding-right: 100px;
`

export const Div = styled.div`
width: 1158px;
padding-right: 15px;
`

export const Div2 = styled.div`
display: flex;

`

export const Button = styled.button`
width: 274px;
height: 51px;
cursor: pointer;
background-color: #121212;
color: #fff;
float: left;
font-size: 15px;
font-weight: 500;
padding: 7px 24px 7px 25px;
position: relative;
text-transform: uppercase;
letter-spacing: 1.2px;
border-radius: 0 0;
line-height: 36px;
`
export const List = styled.ul`
width: 273px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin-right: 15px;
    background: #fff;
    border-radius: 0 0 4px 4px;
    z-index: 1;
    border: 1px solid #e4e4e4;
    border-top: 0;
`
export const Item = styled.li`
padding: 13.5px 22px;
border-bottom: 1px solid #e4e4e4;
`

export const ARef = styled.a`
color: #000000;
font-size: 15px;
text-decoration: none;
`

export const Nav = styled.nav`

align-items: center;
`

export const Ul = styled.ul`
display: flex; 
justify-content: space-between;
gap: 28px;
margin-left: 25px;
margin-top: 10px;

`

export const Li = styled.li`
    color: #424242;
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
   
    position: relative;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-decoration: none;
`

export const A = styled(NavLink)`
  color: #424242;
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
   
    position: relative;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-decoration: none;
    &.active {
    color: red;

  }
  &:hover{
    color: yellow;
  }
`

// export const ImgWrap = styled.div`
// display: flex;
// align-items: center;
// position: relative;
// width: 50px;
// height: 100px;
// background: grey;
// box-sizing: border-box;
// border-radius: 5px;
// border: 2px solid transparent;
   

// `

// export const HeroImg = styled.img`


// `



// export const LinkTo = styled(NavLink)`
//   position: relative;
//   display: inline-block;
//   text-decoration: none;
//   color: ${p => p.theme.colors.primary};
//   text-shadow: ${p => p.theme.shadows.textShadow};
//   margin-bottom: ${p => p.theme.space[3]}px;
//   font-size: ${p => p.theme.fontSizes.m}px;
//   font-weight: ${p => p.theme.fontWeights.medium};

//   &.active {
//     color: ${p => p.theme.colors.headerBcg};
//   }

//   transition: color 300ms linear;
//   :hover {
//     color: ${p => p.theme.colors.headerBcg};
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -2px;
//     right: 0;
//     width: 100%;
//     height: 2px;
//     background-color: ${p => p.theme.colors.headerBcg};
//     scale: 0;
//     transition: scale 300ms linear;
//   }
//   &:hover::after {
//     scale: 1;
//   }

//   &.active::after {
//     scale: 1;
//   }

//   & + a {
//     margin-left: ${p => p.theme.space[3]}px;
//   }
// `;
