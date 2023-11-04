// export const LessonProps = ({children}) => {

import { useState, useEffect } from "react";
import * as SC from "./LessonProps.styled";

import { First } from "../First/First";
import { Context } from "../context/AuthContext";

export const LessonProps = () => {
  return (
    <Context>
      <h1>LessonProps</h1>
      <First />
    </Context>
  );
};

//    console.log(children);
//     return <><h1>hello</h1>
//     <div>{children}</div>
//     </>
// }
// export class LessonProps extends Component {
//     state = {
//         value : 0
//     }
//     componentDidMount(nextProp, nextState) {
//         console.log(' componentDidMount');
//         console.log('nextProp', nextProp);
//         console.log(nextState);
//         console.log(this.state);

//     }
//      componentDidUpdate() {
//         console.log('componentDidUpdate');
//      }

//      handleClick =() => {
//     this.setState({value: this.state.value + 1})
//      }
//     render() {
//         console.log('render');
//         return <>
//          <button onClick= {this.handleClick}>Push</button>
//         <h1>{this.state.value}</h1>
//         </>

//     }
// }

//     const API_KEY = '29948734-f0f2c73b982a8559ced5d44b7';
//     const searchParams = new URLSearchParams({
//       key: API_KEY,
//       q: 'cat',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       per_page: 12,
//       page: 1,
//     });

//     const url = `https://pixabay.com/api/?${searchParams}`;

//  export const LessonProps = () => {
//     const [state, setState] = useState(0)

//     const [name, setName] = useState('hello')
// const [image, setImage] = useState(null)

//  useEffect(() => {
//     if(state !== 0) {
//         fetch(url).then((resp)=> resp.json()).then((resp)=>{setImage(resp)});
//     }

//  },[state])

// console.log('image',image);
// const handleClick = (e) => {

// const {innerText} = e.target
// console.log(innerText);
// if(innerText === 'increment') {
//     setState(state+1)
// }
// else {
//     setState(state-1)
// }

// }

// const handleChange = () => {
//     setName('Mango')
// }
//     return <>
//     <SC.Wrapper>{state}</SC.Wrapper>

//     <div>{name}</div>
// <SC.Button onClick={handleClick}>increment</SC.Button>
// <SC.Button onClick={handleClick}>decrement</SC.Button>

// <SC.Button onClick={handleChange}>change-text</SC.Button>

//     </>
//  }
