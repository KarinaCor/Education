import { HeaderForm } from './components/HeaderForm/HeaderForm'
import * as SC from './Header.styled'
import { Buttons } from './components/Buttons/Buttons'



export const Header =() => {
    
    return <>
    <SC.Header>
       
    <SC.Wrapper>
            <SC.A href="">ELEMENTRIX</SC.A>
        {/* <button className="navbar-button"></button> */}
      <HeaderForm/>  
      <Buttons/>
                
    </SC.Wrapper>
    </SC.Header>
    
   
   
    </>
    
    
}